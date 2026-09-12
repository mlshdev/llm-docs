> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/deliverystatus](https://developer.apple.com/documentation/appstoreserverapi/deliverystatus)

# deliveryStatus

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.19+

A value that indicates whether the app successfully delivered an In-App Purchase that works properly.

## Declaration

```
string deliveryStatus
```

## Possible Values

- `DELIVERED`: The app delivered the In-App Purchase and it’s working properly.
- `UNDELIVERED_QUALITY_ISSUE`: The app didn’t deliver the In-App Purchase due to a quality issue.
- `UNDELIVERED_WRONG_ITEM`: The app delivered the wrong item.
- `UNDELIVERED_SERVER_OUTAGE`: The app didn’t deliver the In-App Purchase due to a server outage.
- `UNDELIVERED_OTHER`: The app didn’t deliver the In-App Purchase for other reasons.

<a id="discussion"></a>

## Discussion

Use these delivery status values in the [ConsumptionRequest](consumptionrequest.md) request body.

> **Note**

> If the delivery status isn’t `DELIVERED`, set the [consumptionPercentage](consumptionpercentage.md) to `0`; otherwise, the request fails with an error.

## See Also

### Consumption data types

- [customerConsented](customerconsented.md): A Boolean value that indicates whether the customer consented to provide consumption data to the App Store.
- [consumptionPercentage](consumptionpercentage.md): An integer that indicates the percentage, in milliunits, of the In-App Purchase the customer consumed.
- [refundPreference](refundpreference.md): A value that indicates your preferred outcome for the refund request.
- [sampleContentProvided](samplecontentprovided.md): A Boolean value that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality.
