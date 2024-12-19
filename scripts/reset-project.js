#!/usr/bin/env node

/**
 * Este script é usado para redefinir o projeto para um estado em branco.
 * Ele move os diretórios /app, /components, /hooks, /scripts e /constants para /app-example e cria um novo diretório /app com um arquivo index.tsx e _layout.tsx.
 * Você pode remover o script `reset-project` do package.json e excluir este arquivo com segurança após executá-lo.
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const oldDirs = ["app", "components", "hooks", "constants", "scripts"];
const newDir = "app-example";
const newAppDir = "app";
const newDirPath = path.join(root, newDir);

const indexContent = `import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
`;

const layoutContent = `import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
`;

const moveDirectories = async () => {
  try {
    // Crie o diretório app-example
    await fs.promises.mkdir(newDirPath, { recursive: true });
    console.log(`📁 /${newDir} directory created.`);

    // Mover diretórios antigos para o novo diretório app-example
    for (const dir of oldDirs) {
      const oldDirPath = path.join(root, dir);
      const newDirPath = path.join(root, newDir, dir);
      if (fs.existsSync(oldDirPath)) {
        await fs.promises.rename(oldDirPath, newDirPath);
        console.log(`➡️ /${dir} moved to /${newDir}/${dir}.`);
      } else {
        console.log(`➡️ /${dir} does not exist, skipping.`);
      }
    }

    // Criar novo diretório /app
    const newAppDirPath = path.join(root, newAppDir);
    await fs.promises.mkdir(newAppDirPath, { recursive: true });
    console.log("\n📁 New /app directory created.");

    // Criar index.tsx
    const indexPath = path.join(newAppDirPath, "index.tsx");
    await fs.promises.writeFile(indexPath, indexContent);
    console.log("📄 app/index.tsx created.");

    // Criar _layout.tsx
    const layoutPath = path.join(newAppDirPath, "_layout.tsx");
    await fs.promises.writeFile(layoutPath, layoutContent);
    console.log("📄 app/_layout.tsx created.");

    console.log("\n✅ Project reset complete. Next steps:");
    console.log(
      "1. Run `npx expo start` to start a development server.\n2. Edit app/index.tsx to edit the main screen.\n3. Delete the /app-example directory when you're done referencing it."
    );
  } catch (error) {
    console.error(`Error during script execution: ${error}`);
  }
};

moveDirectories();
