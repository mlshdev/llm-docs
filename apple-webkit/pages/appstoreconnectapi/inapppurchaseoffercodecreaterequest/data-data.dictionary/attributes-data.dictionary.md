> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseoffercodecreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseoffercodecreaterequest/data-data.dictionary/attributes-data.dictionary)

# InAppPurchaseOfferCodeCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.2+

The request body you use to create an in-app purchase offer code create request.

## Declaration

```
object InAppPurchaseOfferCodeCreateRequest.Data.Attributes
```

## Properties

- `customerEligibilities` — `[string]` (required): **Allowed values:** `NON_SPENDER`, `ACTIVE_SPENDER`, `CHURNED_SPENDER`
- `name` — `string` (required):

## See Also

### Dictionaries

- [InAppPurchaseOfferCodeCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
