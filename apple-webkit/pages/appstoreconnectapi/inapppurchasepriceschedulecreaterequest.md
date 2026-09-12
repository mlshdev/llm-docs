> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchasepriceschedulecreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasepriceschedulecreaterequest)

# InAppPurchasePriceScheduleCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The request body you use to create an in-app purchase price schedule.

## Declaration

```
object InAppPurchasePriceScheduleCreateRequest
```

## Properties

- `data` — `InAppPurchasePriceScheduleCreateRequest.Data` (required):
- `included` — `[*]`: **Allowed types:** `InAppPurchasePriceInlineCreate`, `TerritoryInlineCreate`

## Mentioned In

- [App Store Connect API 3.2 release notes](app-store-connect-api-3-2-release-notes.md)

## Topics

### Objects

- [InAppPurchasePriceScheduleCreateRequest.Data](inapppurchasepriceschedulecreaterequest/data-data.dictionary.md): The request body you use to create an in-app purchase price schedule.

## See Also

### Objects

- [InAppPurchasePriceSchedule](inapppurchasepriceschedule.md): A time-based pricing schedule for an in-app purchase, managing base prices and planned price changes.
- [InAppPurchasePriceScheduleResponse](inapppurchasepricescheduleresponse.md): A response containing a single pricing schedule for an in-app purchase.
- [InAppPurchasePricesResponse](inapppurchasepricesresponse.md): A response containing a list of configured prices for an in-app purchase.
- [InAppPurchasePriceScheduleAutomaticPricesLinkagesResponse](inapppurchasepricescheduleautomaticpriceslinkagesresponse.md)
- [InAppPurchasePriceScheduleBaseTerritoryLinkageResponse](inapppurchasepriceschedulebaseterritorylinkageresponse.md)
- [InAppPurchasePriceScheduleManualPricesLinkagesResponse](inapppurchasepriceschedulemanualpriceslinkagesresponse.md)
