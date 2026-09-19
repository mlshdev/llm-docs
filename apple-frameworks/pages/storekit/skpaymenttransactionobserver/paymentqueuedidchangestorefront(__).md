> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver/paymentqueuedidchangestorefront(_:)

# paymentQueueDidChangeStorefront(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells the observer that the storefront for the payment queue has changed.

> Use Storefront.updates.

## Declaration

```swift
optional func paymentQueueDidChangeStorefront(_ queue: SKPaymentQueue)
```

<a id="Discussion"></a>

## Discussion

See [SKStorefront](../skstorefront.md) for more information.

# paymentQueueDidChangeStorefront: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Tells the observer that the storefront for the payment queue has changed.

> Use Storefront.updates.

## Declaration

```objectivec
- (void) paymentQueueDidChangeStorefront:(SKPaymentQueue *) queue;
```

<a id="Discussion"></a>

## Discussion

See [SKStorefront](../skstorefront.md) for more information.
