> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/README.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/README.md)

# Facebook Trigger node <a id="facebook-trigger-node"></a>

[Facebook](https://www.facebook.com/) is a social networking site to connect and share with family and friends online.

Use the Facebook Trigger node to trigger a workflow when events occur in Facebook.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/facebookapp).

> **Info**
> **Examples and templates**
>
> For usage examples and templates to help you get started, refer to n8n's [Facebook Trigger integrations](https://n8n.io/integrations/facebook-trigger/) page.

## Objects <a id="objects"></a>

- [**Ad Account**](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/ad-account): Get updates for certain ads changes.

- [**Application**](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/application): Get updates sent to the application.

- [**Certificate Transparency**](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/certificate-transparency): Get updates when new security certificates are generated for your subscribed domains, including new certificates and potential phishing attempts.

- Activity and events in a [**Group**](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/group)

- [**Instagram**](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/instagram): Get updates when someone comments on the Media objects of your app users; @mentions your app users; or when Stories of your app users expire.

- [**Link**](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/link): Get updates about the links for rich previews by an external provider

- [**Page**](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/page) updates

- [**Permissions**](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/permissions): Updates when granting or revoking permissions

- [**User**](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/user) profile updates

- [**WhatsApp Business Account**](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/whatsapp)<br>

  > **Info**
  > **Use WhatsApp Trigger**
  >
  > n8n recommends using the [WhatsApp Trigger node](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger) with the [WhatsApp credentials](https://docs.n8n.io/integrations/builtin/credentials/whatsapp) instead of the Facebook Trigger node for these events. The WhatsApp Trigger node has more events to listen to.

- [**Workplace Security**](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/workplace-security)

For each **Object**, use the **Field Names or IDs** dropdown to select more details on what data to receive. Refer to the linked pages for more details.

## Related resources <a id="related-resources"></a>

View [example workflows and related content](https://n8n.io/integrations/facebook-trigger/) on n8n's website.

Refer to Meta's [Graph API documentation](https://developers.facebook.com/docs/graph-api/webhooks/reference) for details about their API.
