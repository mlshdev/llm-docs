> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/webhookdelivery/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/webhookdelivery/attributes-data.dictionary)

# WebhookDelivery.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

Attributes that describe a webhook delivery resource.

## Declaration

```
object WebhookDelivery.Attributes
```

## Properties

- `createdDate` — `date-time`:
- `deliveryState` — `string`: **Allowed values:** `SUCCEEDED`, `FAILED`, `PENDING`
- `errorMessage` — `string`:
- `redelivery` — `boolean`:
- `request` — `WebhookDelivery.Attributes.Request`:
- `response` — `WebhookDelivery.Attributes.Response`:
- `sentDate` — `date-time`:

## Topics

### Dictionaries

- [WebhookDelivery.Attributes.Request](attributes-data.dictionary/request-data.dictionary.md): The HTTP request details of a webhook delivery attempt, including headers and body.
- [WebhookDelivery.Attributes.Response](attributes-data.dictionary/response-data.dictionary.md): The HTTP response received from the webhook endpoint during a delivery attempt.
