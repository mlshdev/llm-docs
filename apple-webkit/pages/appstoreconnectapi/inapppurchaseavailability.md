> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseavailability

# InAppPurchaseAvailability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.3+

The territory availability configuration for an In-App Purchase, specifying which App Store regions it’s offered in.

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

- [InAppPurchaseAvailability.Attributes](inapppurchaseavailability/attributes-data.dictionary.md): Attributes that describe an In-App Purchase availability resource.
- [InAppPurchaseAvailability.Relationships](inapppurchaseavailability/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchaseAvailabilityCreateRequest](inapppurchaseavailabilitycreaterequest.md): The request body you use to create an In-App Purchase availability.
- [InAppPurchaseAvailabilityResponse](inapppurchaseavailabilityresponse.md): A response containing a single territory availability configuration for an In-App Purchase.
- [InAppPurchaseAvailabilityAvailableTerritoriesLinkagesResponse](inapppurchaseavailabilityavailableterritorieslinkagesresponse.md)
