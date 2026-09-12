> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductstorepromotioncontroller/update(storepromotionorder:completionhandler:)](https://developer.apple.com/documentation/storekit/skproductstorepromotioncontroller/update(storepromotionorder:completionhandler:))

# update(storePromotionOrder:completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

Overrides the promoted product order on this device.

> Use Product.PromotionInfo.updateProductOrder(byID:).

## Declaration

```swift
func update(storePromotionOrder promotionOrder: [SKProduct], completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func update(promotionOrder: [SKProduct]) async throws
```

## Mentioned In

- [Promoting In-App Purchases](../promoting-in-app-purchases.md)

<a id="Discussion"></a>

## Discussion

The default order of promoted in-app purchase products is set in App Store Connect. You can override this order per device. For example, you can promote an in-app purchase product that unlocks a specific level in your game when a user reaches the level immediately before the specified level.

To override the default product order, put the product information for the subset of products you want to reorder into an array, in the order you want them to appear in. Pass the array to the [update(storePromotionOrder:completionHandler:)](update%28storepromotionorder_completionhandler_%29.md) method. The products in the array are shown at the beginning of the list, followed by the remaining in-app purchase products, which are listed in the same relative order that you set in App Store Connect.

To cancel order overrides, send an empty product array to the [update(storePromotionOrder:completionHandler:)](update%28storepromotionorder_completionhandler_%29.md) method.  The in-app purchase products will be displayed in the default order.

## See Also

### Managing promoted product order

- [fetchStorePromotionOrder(completionHandler:)](fetchstorepromotionorder%28completionhandler_%29.md): Deprecated. Reads the product order override that determines the promoted product order on this device.

# updateStorePromotionOrder:completionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

Overrides the promoted product order on this device.

> Use Product.PromotionInfo.updateProductOrder(byID:).

## Declaration

```objectivec
- (void) updateStorePromotionOrder:(NSArray<SKProduct *> *) promotionOrder completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Mentioned In

- [Promoting In-App Purchases](../promoting-in-app-purchases.md)

<a id="Discussion"></a>

## Discussion

The default order of promoted in-app purchase products is set in App Store Connect. You can override this order per device. For example, you can promote an in-app purchase product that unlocks a specific level in your game when a user reaches the level immediately before the specified level.

To override the default product order, put the product information for the subset of products you want to reorder into an array, in the order you want them to appear in. Pass the array to the [updateStorePromotionOrder:completionHandler:](update%28storepromotionorder_completionhandler_%29.md) method. The products in the array are shown at the beginning of the list, followed by the remaining in-app purchase products, which are listed in the same relative order that you set in App Store Connect.

To cancel order overrides, send an empty product array to the [updateStorePromotionOrder:completionHandler:](update%28storepromotionorder_completionhandler_%29.md) method.  The in-app purchase products will be displayed in the default order.

## See Also

### Managing promoted product order

- [fetchStorePromotionOrderWithCompletionHandler:](fetchstorepromotionorder%28completionhandler_%29.md): Deprecated. Reads the product order override that determines the promoted product order on this device.
