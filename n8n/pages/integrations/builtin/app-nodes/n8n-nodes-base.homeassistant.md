> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.homeassistant.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/app-nodes/n8n-nodes-base.homeassistant.md)

# Home Assistant node <a id="home-assistant-node"></a>

Use the Home Assistant node to automate work in Home Assistant, and integrate Home Assistant with other applications. n8n has built-in support for a wide range of Home Assistant features, including getting, creating, and checking camera proxies, configurations, logs, services, and templates.

On this page, you'll find a list of operations the Home Assistant node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Home Assistant credentials](https://docs.n8n.io/integrations/builtin/credentials/homeassistant) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Camera Proxy
  - Get the camera screenshot
- Config
  - Get the configuration
  - Check the configuration
- Event
  - Create an event
  - Get all events
- Log
  - Get a log for a specific entity
  - Get all logs
- Service
  - Call a service within a specific domain
  - Get all services
- State
  - Create a new record, or update the current one if it already exists (upsert)
  - Get a state for a specific entity
  - Get all states
- Template
  - Create a template

## Templates and examples <a id="templates-and-examples"></a>

[Browse Home Assistant node documentation integration templates](https://n8n.io/integrations/home-assistant) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Home Assistant's documentation](https://developers.home-assistant.io/docs/api/rest/) for more information about the service.
