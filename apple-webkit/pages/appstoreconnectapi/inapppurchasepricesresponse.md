> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasepricesresponse

# InAppPurchasePricesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A response containing a list of configured prices for an In-App Purchase.

## Declaration

```
object InAppPurchasePricesResponse
```

## Properties

- `data` — `[InAppPurchasePrice]` (required):
- `included` — `[*]`: **Allowed types:** `InAppPurchasePricePoint`, `Territory`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [InAppPurchasePriceSchedule](inapppurchasepriceschedule.md): A time-based pricing schedule for an In-App Purchase, managing base prices and planned price changes.
- [InAppPurchasePriceScheduleCreateRequest](inapppurchasepriceschedulecreaterequest.md): The request body you use to create an In-App Purchase price schedule.
- [InAppPurchasePriceScheduleResponse](inapppurchasepricescheduleresponse.md): A response containing a single pricing schedule for an In-App Purchase.
- [InAppPurchasePriceScheduleAutomaticPricesLinkagesResponse](inapppurchasepricescheduleautomaticpriceslinkagesresponse.md)
- [InAppPurchasePriceScheduleBaseTerritoryLinkageResponse](inapppurchasepriceschedulebaseterritorylinkageresponse.md)
- [InAppPurchasePriceScheduleManualPricesLinkagesResponse](inapppurchasepriceschedulemanualpriceslinkagesresponse.md)
