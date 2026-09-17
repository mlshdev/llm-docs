> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseavailabilityresponse

# InAppPurchaseAvailabilityResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.3+

A response containing a single territory availability configuration for an in-app purchase.

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

- [InAppPurchaseAvailability](inapppurchaseavailability.md): The territory availability configuration for an in-app purchase, specifying which App Store regions it’s offered in.
- [InAppPurchaseAvailabilityCreateRequest](inapppurchaseavailabilitycreaterequest.md): The request body you use to create an in-app purchase availability.
- [InAppPurchaseAvailabilityAvailableTerritoriesLinkagesResponse](inapppurchaseavailabilityavailableterritorieslinkagesresponse.md)
