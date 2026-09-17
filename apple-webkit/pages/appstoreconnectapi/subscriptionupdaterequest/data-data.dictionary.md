> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/subscriptionupdaterequest/data-data.dictionary

# SubscriptionUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The request body you use to update a subscription update request.

## Declaration

```
object SubscriptionUpdateRequest.Data
```

## Properties

- `attributes` — `SubscriptionUpdateRequest.Data.Attributes`:
- `id` — `string` (required):
- `relationships` — `SubscriptionUpdateRequest.Data.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptions`

## Topics

### Objects

- [SubscriptionUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that describe a subscription update request resource.
- [SubscriptionUpdateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
