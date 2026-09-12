> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/webhookcreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/webhookcreaterequest/data-data.dictionary/attributes-data.dictionary)

# WebhookCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

Attributes that describe a webhook create request resource.

## Declaration

```
object WebhookCreateRequest.Data.Attributes
```

## Properties

- `enabled` — `boolean` (required):
- `eventTypes` — `[WebhookEventType]` (required):
- `name` — `string` (required):
- `secret` — `string` (required): An arbitrary string. Alternative marketplaces use this secret string to verify incoming requests from Apple about changes to apps. For more information about webhook-style validation, see Github’s Validating webhook deliveries. For more information about implementing Hash-based Message Authentication Code (HMAC) security in your notifications webhook, see the “Set up notification authentication” section of [Configuring and parsing App Store Connect API webhook notifications](../../configuring-webhook-notifications.md).
- `url` — `uri` (required): The endpoint URL for your server.

## Mentioned In

- [Configuring and parsing App Store Connect API webhook notifications](../../configuring-webhook-notifications.md)
