> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductstorepromotioncontroller/fetchstorepromotionorder(completionhandler:)](https://developer.apple.com/documentation/storekit/skproductstorepromotioncontroller/fetchstorepromotionorder(completionhandler:))

# fetchStorePromotionOrder(completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

Reads the product order override that determines the promoted product order on this device.

> Use Product.PromotionInfo.currentOrder.

## Declaration

```swift
func fetchStorePromotionOrder(completionHandler: (@Sendable ([SKProduct], (any Error)?) -> Void)? = nil)
```

```swift
func promotionOrder() async throws -> [SKProduct]
```

## Mentioned In

- [Promoting In-App Purchases](../promoting-in-app-purchases.md)

<a id="Discussion"></a>

## Discussion

This function returns an array of promoted products whose order is overridden on the given device.

If all the products appear in the default order, this method returns an empty array.

## See Also

### Managing promoted product order

- [update(storePromotionOrder:completionHandler:)](update%28storepromotionorder_completionhandler_%29.md): Deprecated. Overrides the promoted product order on this device.

# fetchStorePromotionOrderWithCompletionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

Reads the product order override that determines the promoted product order on this device.

> Use Product.PromotionInfo.currentOrder.

## Declaration

```objectivec
- (void) fetchStorePromotionOrderWithCompletionHandler:(void (^)(NSArray<SKProduct *> *promotionOrder, NSError *error)) completionHandler;
```

## Mentioned In

- [Promoting In-App Purchases](../promoting-in-app-purchases.md)

<a id="Discussion"></a>

## Discussion

This function returns an array of promoted products whose order is overridden on the given device.

If all the products appear in the default order, this method returns an empty array.

## See Also

### Managing promoted product order

- [updateStorePromotionOrder:completionHandler:](update%28storepromotionorder_completionhandler_%29.md): Deprecated. Overrides the promoted product order on this device.
