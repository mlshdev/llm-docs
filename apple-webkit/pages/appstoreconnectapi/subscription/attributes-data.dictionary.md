> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/subscription/attributes-data.dictionary

# Subscription.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Attributes that describe a subscription resource.

## Declaration

```
object Subscription.Attributes
```

## Properties

- `familySharable` — `boolean`:
- `name` — `string`:
- `productId` — `string`:
- `reviewNote` — `string`:
- `state` — `string`: **Allowed values:** `MISSING_METADATA`, `READY_TO_SUBMIT`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `DEVELOPER_ACTION_NEEDED`, `PENDING_BINARY_APPROVAL`, `APPROVED`, `DEVELOPER_REMOVED_FROM_SALE`, `REMOVED_FROM_SALE`, `REJECTED`
- `subscriptionPeriod` — `string`: **Allowed values:** `ONE_WEEK`, `ONE_MONTH`, `TWO_MONTHS`, `THREE_MONTHS`, `SIX_MONTHS`, `ONE_YEAR`
- `groupLevel` — `integer`:
- `marketSettings` — `[string]`: The markets in which the subscription is available for multi-seat purchase.
  **Allowed values:** `APPLE_SCHOOL`, `APP_STORE`, `APPLE_BUSINESS`
- `multiSeatStatus` — `string`: The status that indicates whether the subscription supports multiple seats for organizations. Turning on Family Sharing for the subscription automatically sets this value to DISABLED.
  **Allowed values:** `ENABLED`, `DISABLED`

## See Also

### Objects

- [Subscription.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
