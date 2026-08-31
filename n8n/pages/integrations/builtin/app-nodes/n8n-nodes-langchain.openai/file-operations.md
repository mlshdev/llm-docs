> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/file-operations.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/file-operations.md)

# OpenAI File operations <a id="openai-file-operations"></a>

Use this operation to create, delete, list, message, or update a file in OpenAI. Refer to [OpenAI](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai) for more information on the OpenAI node itself.

## Delete a File <a id="delete-a-file"></a>

Use this operation to delete a file from the server.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](https://docs.n8n.io/integrations/builtin/credentials/openai).
- **Resource**: Select **File**.
- **Operation**: Select **Delete a File**.
- **File**: Enter the ID of the file to use for this operation or select the file name from the dropdown.

Refer to [Delete file | OpenAI](https://platform.openai.com/docs/api-reference/files/delete) documentation for more information.

## List Files <a id="list-files"></a>

Use this operation to list files that belong to the user's organization.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](https://docs.n8n.io/integrations/builtin/credentials/openai).
- **Resource**: Select **File**.
- **Operation**: Select **List Files**.

### Options <a id="options"></a>

- **Purpose**: Use this to only return files with the given purpose. Use **Assistants** to return only files related to Assistants and Message operations. Use **Fine-Tune** for files related to [Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning).

Refer to [List files | OpenAI](https://platform.openai.com/docs/api-reference/files/list) documentation for more information.

## Upload a File <a id="upload-a-file"></a>

Use this operation to upload a file. This can be used across various operations.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](https://docs.n8n.io/integrations/builtin/credentials/openai).
- **Resource**: Select **File**.
- **Operation**: Select **Upload a File**.
- **Input Data Field Name**: Defaults to `data`. Enter the name of the binary property which contains the file. The size of individual files can be a maximum of 512 MB or 2 million tokens for Assistants.

### Options <a id="options"></a>

- **Purpose**: Enter the intended purpose of the uploaded file. Use **Assistants** for files associated with Assistants and Message operations. Use **Fine-Tune** for [Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning).

Refer to [Upload file | OpenAI](https://platform.openai.com/docs/api-reference/files/create) documentation for more information.

## Common issues <a id="common-issues"></a>

For common errors or issues and suggested resolution steps, refer to [Common Issues](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/common-issues).
