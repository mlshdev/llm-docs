> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/link.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/link.md)

# Facebook Trigger Link object <a id="facebook-trigger-link-object"></a>

Use this object to receive updates about links for rich previews by an external provider. Refer to [Facebook Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger) for more information on the trigger itself.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/facebookapp).

> **Info**
> **Examples and templates**
>
> For usage examples and templates to help you get started, refer to n8n's [Facebook Trigger integrations](https://n8n.io/integrations/facebook-trigger/) page.

## Trigger configuration <a id="trigger-configuration"></a>

To configure the trigger with this Object:

1. Select the **Credential to connect with**. Select an existing or create a new [Facebook App credential](https://docs.n8n.io/integrations/builtin/credentials/facebookapp).
2. Enter the **APP ID** of the app connected to your credential. Refer to the [Facebook App credential](https://docs.n8n.io/integrations/builtin/credentials/facebookapp) documentation for more information.
3. Select **Link** as the **Object**.
4. **Field Names or IDs**: By default, the node will trigger on all the available events using the `*` wildcard filter. If you'd like to limit the events, use the `X` to remove the star and use the dropdown or an expression to select the updates you're interested in.
5. In **Options**, turn on the toggle to **Include Values**. This Object type fails without the option enabled.

## Related resources <a id="related-resources"></a>

Refer to Meta's [Links](https://developers.facebook.com/docs/workplace/reference/webhooks/#links) Workplace API reference for more information.
