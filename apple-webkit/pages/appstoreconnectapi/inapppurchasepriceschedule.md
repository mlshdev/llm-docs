> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchasepriceschedule](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchasepriceschedule)

# InAppPurchasePriceSchedule

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A time-based pricing schedule for an in-app purchase, managing base prices and planned price changes.

## Declaration

```
object InAppPurchasePriceSchedule
```

## Properties

- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `InAppPurchasePriceSchedule.Relationships`:
- `type` — `string` (required): **Allowed values:** `inAppPurchasePriceSchedules`

## Topics

### Objects

- [InAppPurchasePriceSchedule.Relationships](inapppurchasepriceschedule/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchasePriceScheduleCreateRequest](inapppurchasepriceschedulecreaterequest.md): The request body you use to create an in-app purchase price schedule.
- [InAppPurchasePriceScheduleResponse](inapppurchasepricescheduleresponse.md): A response containing a single pricing schedule for an in-app purchase.
- [InAppPurchasePricesResponse](inapppurchasepricesresponse.md): A response containing a list of configured prices for an in-app purchase.
- [InAppPurchasePriceScheduleAutomaticPricesLinkagesResponse](inapppurchasepricescheduleautomaticpriceslinkagesresponse.md)
- [InAppPurchasePriceScheduleBaseTerritoryLinkageResponse](inapppurchasepriceschedulebaseterritorylinkageresponse.md)
- [InAppPurchasePriceScheduleManualPricesLinkagesResponse](inapppurchasepriceschedulemanualpriceslinkagesresponse.md)
