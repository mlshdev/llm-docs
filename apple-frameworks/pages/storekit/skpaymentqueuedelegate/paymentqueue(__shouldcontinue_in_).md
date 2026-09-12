> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueuedelegate/paymentqueue(_:shouldcontinue:in:)](https://developer.apple.com/documentation/storekit/skpaymentqueuedelegate/paymentqueue(_:shouldcontinue:in:))

# paymentQueue(\_:shouldContinue:in:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Asks the delegate whether to continue the transaction if the device’s App Store storefront changes during a transaction.

> Pass Product.PurchaseOption.onStorefrontChange(shouldContinuePurchase:) to product.purchase(options:).

## Declaration

```swift
optional func paymentQueue(_ paymentQueue: SKPaymentQueue, shouldContinue transaction: SKPaymentTransaction, in newStorefront: SKStorefront) -> Bool
```

<a id="Discussion"></a>

## Discussion

StoreKit calls this delegate method if the storefront changes while processing a transaction.

- Return `true` if you wish to continue the transaction within the updated storefront.
- Return `false` to stop the transaction. The transaction will fail with the error [SKError.Code.storeProductNotAvailable](../skerror/code/storeproductnotavailable.md). In this case, consider displaying a message to the user indicating that the product isn’t available in the current storefront.

If the delegate isn’t implemented, [paymentQueue(\_:shouldContinue:in:)](paymentqueue%28__shouldcontinue_in_%29.md) defaults to `true`.

This call times out after approximately one second, defaulting to `false` and causing the transaction to fail. The delegate should return as quickly as possible. Don’t perform any networking calls in this method. Your app should cache product availability information locally before starting a transaction.

See [SKStorefront](../skstorefront.md) for more information.

# paymentQueue:shouldContinueTransaction:inStorefront: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Asks the delegate whether to continue the transaction if the device’s App Store storefront changes during a transaction.

> Pass Product.PurchaseOption.onStorefrontChange(shouldContinuePurchase:) to product.purchase(options:).

## Declaration

```objectivec
- (BOOL) paymentQueue:(SKPaymentQueue *) paymentQueue shouldContinueTransaction:(SKPaymentTransaction *) transaction inStorefront:(SKStorefront *) newStorefront;
```

<a id="Discussion"></a>

## Discussion

StoreKit calls this delegate method if the storefront changes while processing a transaction.

- Return `true` if you wish to continue the transaction within the updated storefront.
- Return `false` to stop the transaction. The transaction will fail with the error [SKErrorStoreProductNotAvailable](../skerror/code/storeproductnotavailable.md). In this case, consider displaying a message to the user indicating that the product isn’t available in the current storefront.

If the delegate isn’t implemented, [paymentQueue:shouldContinueTransaction:inStorefront:](paymentqueue%28__shouldcontinue_in_%29.md) defaults to `true`.

This call times out after approximately one second, defaulting to `false` and causing the transaction to fail. The delegate should return as quickly as possible. Don’t perform any networking calls in this method. Your app should cache product availability information locally before starting a transaction.

See [SKStorefront](../skstorefront.md) for more information.
