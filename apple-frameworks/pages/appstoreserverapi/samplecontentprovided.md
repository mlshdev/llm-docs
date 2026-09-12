> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/samplecontentprovided](https://developer.apple.com/documentation/appstoreserverapi/samplecontentprovided)

# sampleContentProvided

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

A Boolean value that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality.

## Declaration

```
boolean sampleContentProvided
```

<a id="Discussion"></a>

## Discussion

Set this value to `true` if you provided any of the following prior to the customer’s purchase:

- A free sample or free trial of the purchased content
- Information about the content and how it works, such as expected game play

Set this value to `false` otherwise.

## See Also

### Consumption data types

- [customerConsented](customerconsented.md): A Boolean value that indicates whether the customer consented to provide consumption data to the App Store.
- [consumptionPercentage](consumptionpercentage.md): An integer that indicates the percentage, in milliunits, of the In-App Purchase the customer consumed.
- [deliveryStatus](deliverystatus.md): A value that indicates whether the app successfully delivered an In-App Purchase that works properly.
- [refundPreference](refundpreference.md): A value that indicates your preferred outcome for the refund request.
