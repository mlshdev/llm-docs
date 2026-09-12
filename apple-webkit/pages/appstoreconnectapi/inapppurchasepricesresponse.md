> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchasepricesresponse](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasepricesresponse)

# InAppPurchasePricesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A response containing a list of configured prices for an in-app purchase.

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

- [InAppPurchasePriceSchedule](inapppurchasepriceschedule.md): A time-based pricing schedule for an in-app purchase, managing base prices and planned price changes.
- [InAppPurchasePriceScheduleCreateRequest](inapppurchasepriceschedulecreaterequest.md): The request body you use to create an in-app purchase price schedule.
- [InAppPurchasePriceScheduleResponse](inapppurchasepricescheduleresponse.md): A response containing a single pricing schedule for an in-app purchase.
- [InAppPurchasePriceScheduleAutomaticPricesLinkagesResponse](inapppurchasepricescheduleautomaticpriceslinkagesresponse.md)
- [InAppPurchasePriceScheduleBaseTerritoryLinkageResponse](inapppurchasepriceschedulebaseterritorylinkageresponse.md)
- [InAppPurchasePriceScheduleManualPricesLinkagesResponse](inapppurchasepriceschedulemanualpriceslinkagesresponse.md)
