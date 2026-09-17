> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasepricescheduleresponse

# InAppPurchasePriceScheduleResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A response containing a single pricing schedule for an in-app purchase.

## Declaration

```
object InAppPurchasePriceScheduleResponse
```

## Properties

- `data` — `InAppPurchasePriceSchedule` (required):
- `included` — `[*]`: **Allowed types:** `InAppPurchasePrice`, `Territory`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [InAppPurchasePriceSchedule](inapppurchasepriceschedule.md): A time-based pricing schedule for an in-app purchase, managing base prices and planned price changes.
- [InAppPurchasePriceScheduleCreateRequest](inapppurchasepriceschedulecreaterequest.md): The request body you use to create an in-app purchase price schedule.
- [InAppPurchasePricesResponse](inapppurchasepricesresponse.md): A response containing a list of configured prices for an in-app purchase.
- [InAppPurchasePriceScheduleAutomaticPricesLinkagesResponse](inapppurchasepricescheduleautomaticpriceslinkagesresponse.md)
- [InAppPurchasePriceScheduleBaseTerritoryLinkageResponse](inapppurchasepriceschedulebaseterritorylinkageresponse.md)
- [InAppPurchasePriceScheduleManualPricesLinkagesResponse](inapppurchasepriceschedulemanualpriceslinkagesresponse.md)
