> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/storefront](https://developer.apple.com/documentation/storekit/skpaymentqueue/storefront)

# storefront (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The App Store storefront of the device.

> Use Storefront.current.

## Declaration

```swift
var storefront: SKStorefront? { get }
```

<a id="Discussion"></a>

## Discussion

The storefront information tells you the device’s App Store region. You can use this information to display products that your app makes available in specific regions. You maintain your own list of product identifiers and the storefronts in which you make them available.

If the storefront changes during a transaction, StoreKit notifies your app by calling the [paymentQueueDidChangeStorefront(\_:)](../skpaymenttransactionobserver/paymentqueuedidchangestorefront%28__%29.md) method of the [SKPaymentTransactionObserver](../skpaymenttransactionobserver.md) protocol. Implement [paymentQueue(\_:shouldContinue:in:)](../skpaymentqueuedelegate/paymentqueue%28__shouldcontinue_in_%29.md) to indicate whether the transaction should continue with the new storefront.

> **Important**

>  [storefront](storefront.md) is a synchronous API that may take significant time to return. Don’t use [storefront](storefront.md) in a time-sensitive thread, such as during app launch. To get asynchronous behavior, dispatch it to a separate queue, or use the asynchronous [current](../storefront/current.md) property of [Storefront](../storefront.md) instead.

# storefront (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The App Store storefront of the device.

> Use Storefront.current.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SKStorefront * storefront;
```

```objectivec
@property (atomic, readonly, nullable) SKStorefront * storefront;
```

<a id="Discussion"></a>

## Discussion

The storefront information tells you the device’s App Store region. You can use this information to display products that your app makes available in specific regions. You maintain your own list of product identifiers and the storefronts in which you make them available.

If the storefront changes during a transaction, StoreKit notifies your app by calling the [paymentQueueDidChangeStorefront:](../skpaymenttransactionobserver/paymentqueuedidchangestorefront%28__%29.md) method of the [SKPaymentTransactionObserver](../skpaymenttransactionobserver.md) protocol. Implement [paymentQueue:shouldContinueTransaction:inStorefront:](../skpaymentqueuedelegate/paymentqueue%28__shouldcontinue_in_%29.md) to indicate whether the transaction should continue with the new storefront.

> **Important**

>  [storefront](storefront.md) is a synchronous API that may take significant time to return. Don’t use [storefront](storefront.md) in a time-sensitive thread, such as during app launch. To get asynchronous behavior, dispatch it to a separate queue, or use the asynchronous [current](../storefront/current.md) property of [Storefront](../storefront.md) instead.
