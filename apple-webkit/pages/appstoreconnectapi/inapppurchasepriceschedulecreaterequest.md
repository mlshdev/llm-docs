> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasepriceschedulecreaterequest

# InAppPurchasePriceScheduleCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The request body you use to create an In-App Purchase price schedule.

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

- [InAppPurchasePriceScheduleCreateRequest.Data](inapppurchasepriceschedulecreaterequest/data-data.dictionary.md): The request body you use to create an In-App Purchase price schedule.

## See Also

### Objects

- [InAppPurchasePriceSchedule](inapppurchasepriceschedule.md): A time-based pricing schedule for an In-App Purchase, managing base prices and planned price changes.
- [InAppPurchasePriceScheduleResponse](inapppurchasepricescheduleresponse.md): A response containing a single pricing schedule for an In-App Purchase.
- [InAppPurchasePricesResponse](inapppurchasepricesresponse.md): A response containing a list of configured prices for an In-App Purchase.
- [InAppPurchasePriceScheduleAutomaticPricesLinkagesResponse](inapppurchasepricescheduleautomaticpriceslinkagesresponse.md)
- [InAppPurchasePriceScheduleBaseTerritoryLinkageResponse](inapppurchasepriceschedulebaseterritorylinkageresponse.md)
- [InAppPurchasePriceScheduleManualPricesLinkagesResponse](inapppurchasepriceschedulemanualpriceslinkagesresponse.md)
