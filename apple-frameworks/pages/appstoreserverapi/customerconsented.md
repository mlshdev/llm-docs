> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/customerconsented](https://developer.apple.com/documentation/appstoreserverapi/customerconsented)

# customerConsented

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

A Boolean value that indicates whether the customer consented to provide consumption data to the App Store.

## Declaration

```
boolean customerConsented
```

<a id="Discussion"></a>

## Discussion

Set this field to `true` if the customer provided consent to send the App Store the consumption data related to their refund request, including all the data you provide in the [ConsumptionRequest](consumptionrequest.md) or [ConsumptionRequestV1](consumptionrequestv1.md) request body. If not, don’t respond to the `CONSUMPTION_REQUEST` notification.

## See Also

### Consumption data types

- [consumptionPercentage](consumptionpercentage.md): An integer that indicates the percentage, in milliunits, of the In-App Purchase the customer consumed.
- [deliveryStatus](deliverystatus.md): A value that indicates whether the app successfully delivered an In-App Purchase that works properly.
- [refundPreference](refundpreference.md): A value that indicates your preferred outcome for the refund request.
- [sampleContentProvided](samplecontentprovided.md): A Boolean value that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality.
