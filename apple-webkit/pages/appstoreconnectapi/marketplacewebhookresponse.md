> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/marketplacewebhookresponse](https://developer.apple.com/documentation/appstoreconnectapi/marketplacewebhookresponse)

# MarketplaceWebhookResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

A response containing a single marketplace webhook endpoint configuration.

## Declaration

```
object MarketplaceWebhookResponse
```

## Properties

- `data` — `MarketplaceWebhook` (required):
- `links` — `DocumentLinks` (required):

<a id="Discussion"></a>

## Discussion

Use this object with [Add a Marketplace Webhook Configuration](post-v1-marketplacewebhooks.md).

## See Also

### Objects

- [MarketplaceWebhook](marketplacewebhook.md): Deprecated. A webhook endpoint that receives event notifications from an alternative marketplace, such as app availability changes.
- [MarketplaceWebhookCreateRequest](marketplacewebhookcreaterequest.md): Deprecated. The request body you use to create a marketplace webhook url.
- [MarketplaceWebhooksResponse](marketplacewebhooksresponse.md): Deprecated. A response containing a list of webhook endpoints for an alternative marketplace.
- [MarketplaceWebhookUpdateRequest](marketplacewebhookupdaterequest.md): Deprecated. The request body you use to update a marketplace webhook url.
