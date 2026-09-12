> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/refundrequesterror/failed](https://developer.apple.com/documentation/storekit/transaction/refundrequesterror/failed)

# Transaction.RefundRequestError.failed

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The refund request submission failed.

## Declaration

```swift
case failed
```

<a id="Discussion"></a>

## Discussion

A refund request submission can fail for many reasons, such as having an invalid transaction identifier, or if the App Store can’t process the request for some other reason.

## See Also

### Error Enumeration

- [Transaction.RefundRequestError.duplicateRequest](duplicaterequest.md): The App Store has already received a refund request for this in-app purchase.
