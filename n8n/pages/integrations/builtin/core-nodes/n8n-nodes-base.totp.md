> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.totp.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/core-nodes/n8n-nodes-base.totp.md)

# TOTP <a id="totp"></a>

The TOTP node provides a way to generate a TOTP (time-based one-time password).

> **Info**
> **Credentials**
>
> Refer to [TOTP credentials](https://docs.n8n.io/integrations/builtin/credentials/totp) for guidance on setting up authentication.

## Node parameters <a id="node-parameters"></a>

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

Configure this node with these parameters.

### Credential to connect with <a id="credential-to-connect-with"></a>

Select or create a [TOTP credential](https://docs.n8n.io/integrations/builtin/credentials/totp) for the node to use.

### Operation <a id="operation"></a>

**Generate Secret** is the only operation currently supported.

## Node options <a id="node-options"></a>

Use these **Options** to further configure the node.

### Algorithm <a id="algorithm"></a>

Select the HMAC hashing algorithm to use. Default is SHA1.

### Digits <a id="digits"></a>

Enter the number of digits in the generated code. Default is `6`.

### Period <a id="period"></a>

Enter how many seconds the TOTP is valid for. Default is `30`.

## Templates and examples <a id="templates-and-examples"></a>

[Browse TOTP integration templates](https://n8n.io/integrations/totp) or [search all templates](https://n8n.io/workflows/)
