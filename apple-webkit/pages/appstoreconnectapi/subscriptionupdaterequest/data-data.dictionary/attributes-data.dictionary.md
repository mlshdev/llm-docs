> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
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

## See Also

### Objects

- [SubscriptionUpdateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
