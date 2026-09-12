> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/refundrequesterror/duplicaterequest](https://developer.apple.com/documentation/storekit/transaction/refundrequesterror/duplicaterequest)

# Transaction.RefundRequestError.duplicateRequest

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The App Store has already received a refund request for this in-app purchase.

## Declaration

```swift
case duplicateRequest
```

<a id="Discussion"></a>

## Discussion

StoreKit returns this error if the App Store has previously received a refund request for this transaction and the refund decision is still pending, has been previously denied, or has been previously approved.

Consider checking the transaction’s [revocationDate](../revocationdate.md) or [revocationReason](../revocationreason-swift.property.md) before calling [beginRefundRequest(for:in:)](../beginrefundrequest%28for_in_%29-65tph.md) to identify whether the App Store has already refunded the transaction.

## See Also

### Error Enumeration

- [Transaction.RefundRequestError.failed](failed.md): The refund request submission failed.
