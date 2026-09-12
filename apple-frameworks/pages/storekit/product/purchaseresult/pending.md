> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseresult/pending](https://developer.apple.com/documentation/storekit/product/purchaseresult/pending)

# Product.PurchaseResult.pending

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The purchase is pending, and requires action from the customer.

## Declaration

```swift
case pending
```

## Mentioned In

- [Testing Ask to Buy in Xcode](../../testing-ask-to-buy-in-xcode.md)

<a id="Discussion"></a>

## Discussion

If a pending purchase succeeds, StoreKit delivers the resulting [Transaction](../../transaction.md) in the transaction [updates](../../transaction/updates.md).

## See Also

### Getting the Purchase Results

- [Product.PurchaseResult.success(\_:)](success%28__%29.md): The purchase succeeded and results in a transaction.
- [Product.PurchaseResult.userCancelled](usercancelled.md): The user canceled the purchase.
