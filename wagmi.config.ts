import { defineConfig } from "@wagmi/cli";
import { hardhat } from "@wagmi/cli/plugins";
import { react } from "@wagmi/cli/plugins";
import { resolve } from "path";

export default defineConfig({
    out: "./utils/generated.ts",
  plugins: [
    hardhat({
        project: "./"
    }),
    react(),
  ],
});