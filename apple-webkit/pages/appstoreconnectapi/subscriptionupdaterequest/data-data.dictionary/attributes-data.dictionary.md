> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/subscriptionupdaterequest/data-data.dictionary/attributes-data.dictionary

# SubscriptionUpdateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Attributes that describe a subscription update request resource.

## Declaration

```
object SubscriptionUpdateRequest.Data.Attributes
```

## Properties

- `familySharable` — `boolean`:
- `name` — `string`:
- `reviewNote` — `string`:
- `subscriptionPeriod` — `string`: **Allowed values:** `ONE_WEEK`, `ONE_MONTH`, `TWO_MONTHS`, `THREE_MONTHS`, `SIX_MONTHS`, `ONE_YEAR`
- `groupLevel` — `integer`:
- `marketSettings` — `[string]`: The markets in which the subscription is available for multi-seat purchase.
  **Allowed values:** `APPLE_SCHOOL`, `APP_STORE`, `APPLE_BUSINESS`
- `multiSeatStatus` — `string`: The status that indicates whether the subscription supports multiple seats for organizations. Turning on Family Sharing for the subscription automatically sets this value to DISABLED.
  **Allowed values:** `ENABLED`, `DISABLED`

## See Also

### Objects

- [SubscriptionUpdateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
