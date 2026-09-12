> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseoffercode/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseoffercode/attributes-data.dictionary)

# InAppPurchaseOfferCode.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.2+

Attributes that describe an in-app purchase offer code resource.

## Declaration

```
object InAppPurchaseOfferCode.Attributes
```

## Properties

- `active` — `boolean`:
- `customerEligibilities` — `[string]`: **Allowed values:** `NON_SPENDER`, `ACTIVE_SPENDER`, `CHURNED_SPENDER`
- `name` — `string`:
- `productionCodeCount` — `integer`:
- `sandboxCodeCount` — `integer`:

## See Also

### Dictionaries

- [InAppPurchaseOfferCode.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
