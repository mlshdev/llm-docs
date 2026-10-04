> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/marketplacewebhooksresponse

# MarketplaceWebhooksResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+ (deprecated in 4.0.1)

A response containing a list of webhook endpoints for an alternative marketplace.

> This object is deprecated.

## Declaration

```
object MarketplaceWebhooksResponse
```

## Properties

- `data` — `[MarketplaceWebhook]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

<a id="Discussion"></a>

## Discussion

Use this object with [Read Marketplace Webhook Information](get-v1-marketplacewebhooks.md).

## See Also

### Objects

- [MarketplaceWebhook](marketplacewebhook.md): Deprecated. A webhook endpoint that receives event notifications from an alternative marketplace, such as app availability changes.
- [MarketplaceWebhookCreateRequest](marketplacewebhookcreaterequest.md): Deprecated. The request body you use to create a marketplace webhook url.
- [MarketplaceWebhookResponse](marketplacewebhookresponse.md): Deprecated. A response containing a single marketplace webhook endpoint configuration.
- [MarketplaceWebhookUpdateRequest](marketplacewebhookupdaterequest.md): Deprecated. The request body you use to update a marketplace webhook url.
