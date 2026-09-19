> Pinned source for Runpod main: [public-endpoints/ai-coding-tools.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/public-endpoints/ai-coding-tools.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/ai-coding-tools

# Connect AI coding tools with Public Endpoints

Configure AI coding tools like OpenCode, Cursor, and Cline with Runpod Public Endpoints. Review setup and request guidance for Runpod Public Endpoints.

Runpod's [Public Endpoints](https://docs.runpod.io/public-endpoints/overview) provide OpenAI-compatible APIs that are compatible with most AI coding assistants. This page shows you how to configure OpenCode, Cursor, and Cline to use Runpod's Public Endpoints as a model provider.

## Requirements

Before you start, you'll need:

- A [Runpod account](https://docs.runpod.io/accounts-billing/manage-accounts) with an [API key](https://docs.runpod.io/get-started/api-keys), and at least $5 in Runpod credits.
- One or more of the following AI coding tools installed on your local machine:
  - [OpenCode](https://opencode.ai/): Terminal-based AI coding assistant.
  - [Cursor](https://cursor.com/): AI-powered code editor.
  - [Cline](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev): VS Code extension for AI-assisted coding.

## Available endpoints

Runpod provides two Public Endpoints that can be used to power AI coding tools:

| Model                                                                       | Base URL                                           | Model ID              | Context window |
| --------------------------------------------------------------------------- | -------------------------------------------------- | --------------------- | -------------- |
| [GPT OSS 120B](https://docs.runpod.io/public-endpoints/models/gpt-oss-120b) | `https://api.runpod.ai/v2/gpt-oss-120b/openai/v1`  | `openai/gpt-oss-120b` | 131,072 tokens |
| [Qwen3 32B AWQ](https://docs.runpod.io/public-endpoints/models/qwen3-32b)   | `https://api.runpod.ai/v2/qwen3-32b-awq/openai/v1` | `Qwen/Qwen3-32B-AWQ`  | 32,768 tokens  |

Both endpoints follow the OpenAI API specification, so they work with any tool that supports custom OpenAI-compatible providers.

> **Tip**
>
> Many AI coding tools can be configured to use any [OpenAI-compatible](https://docs.runpod.io/serverless/vllm/openai-compatibility) model API. You can build your own OpenAI-compatible endpoint with [Runpod Serverless](https://docs.runpod.io/serverless/overview).

## Configure OpenCode

OpenCode supports multiple provider configurations, so you can set up both Runpod endpoints and switch between them.

1. OpenCode looks for its config at `~/.config/opencode/opencode.json`. Run this command to create the directory (if it doesn't exist) and generate the config file:

   ```json
   mkdir -p ~/.config/opencode && cat << 'EOF' > ~/.config/opencode/opencode.json
   {
     "$schema": "https://opencode.ai/config.json",
     "provider": {
       "runpod-gpt": {
         "npm": "@ai-sdk/openai-compatible",
         "name": "Runpod GPT OSS 120B",
         "options": {
           "baseURL": "https://api.runpod.ai/v2/gpt-oss-120b/openai/v1",
           "apiKey": "{env:RUNPOD_API_KEY}"
         },
         "models": {
           "gpt-oss-120b": {
             "id": "openai/gpt-oss-120b",
             "name": "GPT OSS 120B (Runpod)",
             "limit": { "context": 131072, "output": 4096 }
           }
         }
       },
       "runpod-qwen": {
         "npm": "@ai-sdk/openai-compatible",
         "name": "Runpod Qwen3",
         "options": {
           "baseURL": "https://api.runpod.ai/v2/qwen3-32b-awq/openai/v1",
           "apiKey": "{env:RUNPOD_API_KEY}"
         },
         "models": {
           "qwen3-32b": {
             "id": "Qwen/Qwen3-32B-AWQ",
             "name": "Qwen3 32B AWQ (Runpod)",
             "limit": { "context": 32768, "output": 4096 }
           }
         }
       }
     }
   }
   EOF
   ```
2. The `{env:RUNPOD_API_KEY}` syntax in the config file tells OpenCode to read your [API key](https://docs.runpod.io/get-started/api-keys) from the `RUNPOD_API_KEY` environment variable.

   Run this command to set the environment variable, replacing `rpa_YOUR_API_KEY` with your actual API key:

   ```bash
   export RUNPOD_API_KEY="rpa_YOUR_API_KEY"
   ```

   > **Tip**
   >
   > This only sets the environment variable for your current shell session. You can add the export command to your shell profile (`~/.bashrc`, `~/.zshrc`, etc.) so you don't need to set the environment variable every time you open a new shell.
3. Run this command to check that the configuration is working:

   ```bash
   opencode models
   ```

   You should see output similar to this:

   ```text highlight={7-8}
   opencode/big-pickle
   opencode/glm-4.7-free
   opencode/gpt-5-nano
   opencode/kimi-k2.5-free
   opencode/minimax-m2.1-free
   opencode/trinity-large-preview-free
   runpod-gpt/gpt-oss-120b
   runpod-qwen/qwen3-32b
   ```

   After confirming that the Runpod endpoints are listed, you can start OpenCode and try out the Runpod endpoints.

   ```bash
   opencode
   ```

   Press Ctrl + p to open the command palette and select **Switch model** to select a Runpod endpoint.

   ![](https://raw.githubusercontent.com/runpod/docs/56a86f70b4ea8b225c0e5e2231e42a4925931686/images/ai-coding-opencode-command-palette.png)

## Configure Cursor

Cursor supports a single global OpenAI-compatible endpoint override, so you can only use one Runpod endpoint at a time.

> **Warning**
>
> The Qwen3 32B AWQ endpoint is not compatible with Cursor.

1. Launch Cursor and press Shift + Cmd + J (macOS) or Shift + Ctrl + J (Windows/Linux) to open Settings.
2. Go to **Cursor Settings > Models** and expand the **API Keys** section.

   ![](https://raw.githubusercontent.com/runpod/docs/56a86f70b4ea8b225c0e5e2231e42a4925931686/images/ai-coding-cursor-settings.png)
3. Find the **OpenAI API Key** field. Enable it, then enter your Runpod API key (`rpa_...`).
4. Enable **Override OpenAI Base URL** and enter:

   ```text
   https://api.runpod.ai/v2/gpt-oss-120b/openai/v1
   ```
5. Scroll up and click **View All Models** to see the list of available models.

   Click **Add Custom Model** and enter the model ID exactly as shown (case-sensitive):

   ```text
   openai/gpt-oss-120b
   ```
6. Select `openai/gpt-oss-120b` from the model list when using Cursor's AI features.

## Configure Cline

Cline is a VS Code extension with its own settings panel. Unlike Cursor, Cline supports multiple provider profiles, so you can configure both Runpod endpoints and switch between them.

1. Click the Cline icon in the sidebar to open the Cline panel, then click the gear icon to open Settings.
2. Set **API Provider** to **OpenAI Compatible**.
3. Fill in the following fields:

   | Setting  | Value                                             |
   | -------- | ------------------------------------------------- |
   | Base URL | `https://api.runpod.ai/v2/gpt-oss-120b/openai/v1` |
   | API Key  | `rpa_YOUR_API_KEY`                                |
   | Model ID | `openai/gpt-oss-120b`                             |

   ![](https://raw.githubusercontent.com/runpod/docs/56a86f70b4ea8b225c0e5e2231e42a4925931686/images/ai-coding-cline-settings.png)
4. Click **Save** to apply your settings.

To use Qwen3 instead, use these values:

| Setting  | Value                                              |
| -------- | -------------------------------------------------- |
| Base URL | `https://api.runpod.ai/v2/qwen3-32b-awq/openai/v1` |
| Model ID | `Qwen/Qwen3-32B-AWQ`                               |
