> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor.md)

# Information Extractor node <a id="information-extractor-node"></a>

Use the Information Extractor node to extract structured information from incoming data.

On this page, you'll find the node parameters for the Information Extractor node,
and links to more resources.

## Node parameters <a id="node-parameters"></a>

- **Text** defines the input text to extract information from. This is usually an expression that references a field from the input items. For example, this could be `{{ $json.chatInput }}` if the input is a chat trigger, or `{{ $json.text }}` if a previous node is Extract from PDF.
- Use **Schema Type** to choose how you want to describe the desired output data format. You can choose between:
  - **From Attribute Descriptions**: This option allows you to define the schema by specifying the list of attributes and their descriptions.
  - **Generate From JSON Example**: Input an example JSON object to automatically generate the schema. The node uses the object property types and names. It ignores the actual values. n8n treats every field as mandatory when generating schemas from JSON examples.
  - **Define using JSON Schema**: Manually input the JSON schema. Read the JSON Schema [guides and examples](https://json-schema.org/learn/miscellaneous-examples) for help creating a valid JSON schema.

## Node options <a id="node-options"></a>

- **System Prompt Template**: Use this option to change the system prompt that's used for the information extraction. n8n automatically appends format specification instructions to the prompt.

## Related resources <a id="related-resources"></a>

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
