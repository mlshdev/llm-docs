> Pinned source for Runpod main: [integrations/mods.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/integrations/mods.mdx)
> Canonical documentation: https://docs.runpod.io/integrations/mods

# Running Runpod on Mods

Use Mods to interact with language models hosted on Runpod from the command line. Review configuration and usage guidance for this Runpod integration.

[Mods](https://github.com/charmbracelet/mods) is a command-line tool for interacting with language models. It integrates with Unix pipelines, letting you send command output directly to LLMs from your terminal.

## How Mods works

Mods reads standard input (or a prompt you provide as an argument), sends it to a language model, and prints the result. You can prefix the input with a prompt from the Mods arguments, and optionally format the output as Markdown. This lets you pipe command output to an LLM for analysis or transformation.

## Get started

1. Get your API key from the [Runpod Settings](https://www.console.runpod.io/user/settings) page.
2. Follow the installation instructions for [Mods](https://github.com/charmbracelet/mods) based on your system.
3. Update the `config_template.yml` file with your Runpod configuration:

   ```yml
   runpod:
     # https://docs.runpod.io/serverless/vllm/openai-compatibility
     base-url: https://api.runpod.ai/v2/${YOUR_ENDPOINT}/openai/v1
     api-key:
     api-key-env: RUNPOD_API_KEY
     models:
       # Add your model name
       openchat/openchat-3.5-1210:
         aliases: ["openchat"]
         max-input-chars: 8192
   ```

   Replace the following values:

   - `base-url`: Your specific endpoint URL.
   - `api-key-env`: Your Runpod API key.
   - `openchat/openchat-3.5-1210`: The model name you want to use.
   - `aliases: ["openchat"]`: Your preferred model alias.
   - `max-input-chars`: The maximum input characters for your model.
4. Test your setup by piping command output to Mods:

   ```sh
   ls ~/Downloads | mods --api runpod --model openchat -f "tell my fortune based on these files" | glow
   ```

   This lists files in your `~/Downloads` directory, sends them to Mods using the Runpod API and specified model, and pipes the output to `glow` for formatted display.
