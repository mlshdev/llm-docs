> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/preorderdate](https://developer.apple.com/documentation/storekit/apptransaction/preorderdate)

# preorderDate

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The date the customer placed an order for the app before it’s available in the App Store.

## Declaration

```swift
let preorderDate: Date?
```

<a id="Discussion"></a>

## Discussion

This date is present if your app is available for preorder and the customer places an order before your app is available in the App Store. When your app becomes available, the App Store fulfills the customer’s order. The [preorderDate](preorderdate.md) remains the same.

Use this date to recognize customers who place preorders.

For more infomation about preorders, see [Offering Your Apps for Pre-Order](https://developer.apple.com/app-store/pre-orders/).

## See Also

### Getting purchase dates

- [originalPurchaseDate](originalpurchasedate.md): The date the customer originally purchased the app from the App Store.
