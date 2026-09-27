> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseavailabilityresponse

# InAppPurchaseAvailabilityResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.3+

A response containing a single territory availability configuration for an In-App Purchase.

## Declaration

```
object InAppPurchaseAvailabilityResponse
```

## Properties

- `data` — `InAppPurchaseAvailability` (required):
- `included` — `[Territory]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [InAppPurchaseAvailability](inapppurchaseavailability.md): The territory availability configuration for an In-App Purchase, specifying which App Store regions it’s offered in.
- [InAppPurchaseAvailabilityCreateRequest](inapppurchaseavailabilitycreaterequest.md): The request body you use to create an In-App Purchase availability.
- [InAppPurchaseAvailabilityAvailableTerritoriesLinkagesResponse](inapppurchaseavailabilityavailableterritorieslinkagesresponse.md)
