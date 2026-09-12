> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseresult/success(_:)](https://developer.apple.com/documentation/storekit/product/purchaseresult/success(_:))

# Product.PurchaseResult.success(\_:)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The purchase succeeded and results in a transaction.

## Declaration

```swift
case success(VerificationResult<Transaction>)
```

## Mentioned In

- [Testing Ask to Buy in Xcode](../../testing-ask-to-buy-in-xcode.md)

## See Also

### Getting the Purchase Results

- [Product.PurchaseResult.userCancelled](usercancelled.md): The user canceled the purchase.
- [Product.PurchaseResult.pending](pending.md): The purchase is pending, and requires action from the customer.
