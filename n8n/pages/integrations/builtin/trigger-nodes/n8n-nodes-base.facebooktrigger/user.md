> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/user.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/user.md)

# Facebook Trigger User object <a id="facebook-trigger-user-object"></a>

Use this object to receive updates when changes to a user's profile occur. Refer to [Facebook Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger) for more information on the trigger itself.

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
3. Select **User** as the **Object**.
4. **Field Names or IDs**: By default, the node will trigger on all the available events using the `*` wildcard filter. If you'd like to limit the events, use the `X` to remove the star and use the dropdown or an expression to select the updates you're interested in.
5. In **Options**, choose whether to turn on the toggle to **Include Values**. When turned on, the node includes the new values for the changes.

## Related resources <a id="related-resources"></a>

Refer to Meta's [User](https://developers.facebook.com/docs/graph-api/webhooks/reference/user/) Graph API reference for more information.
