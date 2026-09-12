> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptioncreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/subscriptioncreaterequest/data-data.dictionary/attributes-data.dictionary)

# SubscriptionCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Attributes that describe a subscription create request resource.

## Declaration

```
object SubscriptionCreateRequest.Data.Attributes
```

## Properties

- `familySharable` — `boolean`:
- `name` — `string` (required):
- `productId` — `string` (required):
- `reviewNote` — `string`:
- `subscriptionPeriod` — `string`: **Allowed values:** `ONE_WEEK`, `ONE_MONTH`, `TWO_MONTHS`, `THREE_MONTHS`, `SIX_MONTHS`, `ONE_YEAR`
- `groupLevel` — `integer`:

## Mentioned In

- [Managing auto-renewable subscriptions](../../managing-auto-renewable-subscriptions.md)

## See Also

### Objects

- [SubscriptionCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
