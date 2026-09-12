> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscription/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/subscription/attributes-data.dictionary)

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

## See Also

### Objects

- [Subscription.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
