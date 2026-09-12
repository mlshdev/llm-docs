> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/marketplacewebhook](https://developer.apple.com/documentation/appstoreconnectapi/marketplacewebhook)

# MarketplaceWebhook

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

A webhook endpoint that receives event notifications from an alternative marketplace, such as app availability changes.

## Declaration

```
object MarketplaceWebhook
```

## Properties

- `attributes` — `MarketplaceWebhook.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `marketplaceWebhooks`

## Topics

### Objects

- [MarketplaceWebhook.Attributes](marketplacewebhook/attributes-data.dictionary.md): Deprecated. The attribute that describes the url where you receive notifications.

## See Also

### Objects

- [MarketplaceWebhookCreateRequest](marketplacewebhookcreaterequest.md): Deprecated. The request body you use to create a marketplace webhook url.
- [MarketplaceWebhookResponse](marketplacewebhookresponse.md): Deprecated. A response containing a single marketplace webhook endpoint configuration.
- [MarketplaceWebhooksResponse](marketplacewebhooksresponse.md): Deprecated. A response containing a list of webhook endpoints for an alternative marketplace.
- [MarketplaceWebhookUpdateRequest](marketplacewebhookupdaterequest.md): Deprecated. The request body you use to update a marketplace webhook url.
