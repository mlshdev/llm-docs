> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseavailability](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseavailability)

# InAppPurchaseAvailability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.3+

The territory availability configuration for an in-app purchase, specifying which App Store regions it’s offered in.

## Declaration

```
object InAppPurchaseAvailability
```

## Properties

- `attributes` — `InAppPurchaseAvailability.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `InAppPurchaseAvailability.Relationships`:
- `type` — `string` (required): **Allowed values:** `inAppPurchaseAvailabilities`

## Topics

### Objects

- [InAppPurchaseAvailability.Attributes](inapppurchaseavailability/attributes-data.dictionary.md): Attributes that describe an in-app purchase availability resource.
- [InAppPurchaseAvailability.Relationships](inapppurchaseavailability/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchaseAvailabilityCreateRequest](inapppurchaseavailabilitycreaterequest.md): The request body you use to create an in-app purchase availability.
- [InAppPurchaseAvailabilityResponse](inapppurchaseavailabilityresponse.md): A response containing a single territory availability configuration for an in-app purchase.
- [InAppPurchaseAvailabilityAvailableTerritoriesLinkagesResponse](inapppurchaseavailabilityavailableterritorieslinkagesresponse.md)
