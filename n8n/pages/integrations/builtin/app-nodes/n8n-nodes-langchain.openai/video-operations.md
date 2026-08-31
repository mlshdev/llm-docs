> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/video-operations.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/video-operations.md)

# OpenAI Video operations <a id="openai-video-operations"></a>

Use this operation to generate a video in OpenAI. Refer to [OpenAI](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai) for more information on the OpenAI node itself.

## Generate Video <a id="generate-video"></a>

Use this operation to generate a video from a text prompt.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](https://docs.n8n.io/integrations/builtin/credentials/openai).
- **Resource**: Select **Video**.
- **Operation**: Select **Generate Video**.
- **Model**: Select the model you want to use to generate a video. Currently supports `sora-2` and `sora-2-pro`.
- **Prompt**: The prompt to generate a video from.
- **Seconds**: Clip duration in seconds (up to 25).
- **Size**: Output resolution formatted as width x height. 1024x1792 and 1792x1024 are only supported by Sora 2 Pro.

### Options <a id="options"></a>

- **Reference**: Optional image reference that guides generation. Has to be passed in as a binary item.
- **Wait Timeout**: Time to wait for the video to be generated in seconds. Defaults to 300.
- **Output Field Name**: The name of the output field to put the binary file data in. Defaults to `data`.

Refer to [Video Generation | OpenAI](https://platform.openai.com/docs/guides/video-generation) for more information.
