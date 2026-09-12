> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/refundpreference](https://developer.apple.com/documentation/appstoreserverapi/refundpreference)

# refundPreference

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.19+

A value that indicates your preferred outcome for the refund request.

## Declaration

```
string refundPreference
```

## Possible Values

- `DECLINE`: You prefer that the App Store declines the refund.
- `GRANT_FULL`: You prefer that the App Store grants the refund in full.
- `GRANT_PRORATED`: You prefer that the App Store grants a prorated refund.

<a id="Discussion"></a>

## Discussion

Use these values in the `refundPreference` field of a [ConsumptionRequest](consumptionrequest.md).

The following constraints apply to the `GRANT_PRORATED` option:

- If the product is a consumable or non-consumable In-App Purchase or a non-renewing subscription, you may include a [consumptionPercentage](consumptionpercentage.md) value in the `ConsumptionRequest`.
- If the product is an auto-renewable subscription, don’t include a [consumptionPercentage](consumptionpercentage.md) value in the `ConsumptionRequest`. The system calculates the consumption automatically for auto-renewable subscriptions.

Your refund preference is one of a variety of factors that the App Store uses to inform its refund decisions.

## See Also

### Consumption data types

- [customerConsented](customerconsented.md): A Boolean value that indicates whether the customer consented to provide consumption data to the App Store.
- [consumptionPercentage](consumptionpercentage.md): An integer that indicates the percentage, in milliunits, of the In-App Purchase the customer consumed.
- [deliveryStatus](deliverystatus.md): A value that indicates whether the app successfully delivered an In-App Purchase that works properly.
- [sampleContentProvided](samplecontentprovided.md): A Boolean value that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality.
