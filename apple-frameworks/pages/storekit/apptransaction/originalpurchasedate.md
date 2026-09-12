> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/originalpurchasedate](https://developer.apple.com/documentation/storekit/apptransaction/originalpurchasedate)

# originalPurchaseDate

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The date the customer originally purchased the app from the App Store.

## Declaration

```swift
let originalPurchaseDate: Date
```

<a id="Discussion"></a>

## Discussion

The original purchase date remains the same, even if the customer deletes and reinstalls the app.

In the sandbox testing environment, the original purchase date is always 2013-08-01 12 AM PDT, which is 1375340400000 milliseconds in UNIX epoch time.

## See Also

### Getting purchase dates

- [preorderDate](preorderdate.md): The date the customer placed an order for the app before it’s available in the App Store.
