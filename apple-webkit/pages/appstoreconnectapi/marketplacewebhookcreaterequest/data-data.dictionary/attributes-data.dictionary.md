> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/marketplacewebhookcreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/marketplacewebhookcreaterequest/data-data.dictionary/attributes-data.dictionary)

# MarketplaceWebhookCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

The attributes you set that describe the marketplace webhook used to create a new resource.

## Declaration

```
object MarketplaceWebhookCreateRequest.Data.Attributes
```

## Properties

- `endpointUrl` — `uri` (required):
- `secret` — `string` (required): An arbitrary string. Alternative marketplaces use this secret string to verify the incoming requests from Apple about changes to apps. For more information about webhook-style validation, see [Github’s Validating webhook deliveries](https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries#about-validating-webhook-deliveries).

  For more information about implementing Hash-based Message Authentication Code (HMAC) security in your notifications webhook, see [Processing alternative app marketplace notifications](https://developer.apple.com/documentation/marketplacekit/processing-alternative-marketplace-notifications).
