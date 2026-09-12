> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductstorepromotioncontroller/fetchstorepromotionvisibility(for:completionhandler:)](https://developer.apple.com/documentation/storekit/skproductstorepromotioncontroller/fetchstorepromotionvisibility(for:completionhandler:))

# fetchStorePromotionVisibility(for:completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

Reads the visibility setting of a promoted product in the App Store for this device.

> Get visibility from Product.PromotionInfo.currentOrder.

## Declaration

```swift
func fetchStorePromotionVisibility(for product: SKProduct, completionHandler: (@Sendable (SKProductStorePromotionVisibility, (any Error)?) -> Void)? = nil)
```

```swift
func promotionVisibility(for product: SKProduct) async throws -> SKProductStorePromotionVisibility
```

## Mentioned In

- [Promoting In-App Purchases](../promoting-in-app-purchases.md)

<a id="Discussion"></a>

## Discussion

The default visibility for a promoted product is set in App Store Connect. Call [fetchStorePromotionVisibility(for:completionHandler:)](fetchstorepromotionvisibility%28for_completionhandler_%29.md) to determine if a product’s visibility is set to the default value or if it has been overridden to be hidden or shown.

## See Also

### Managing promoted product visibility

- [update(storePromotionVisibility:for:completionHandler:)](update%28storepromotionvisibility_for_completionhandler_%29.md): Deprecated. Updates the visibility of the product on the App Store, per device.
- [SKProductStorePromotionVisibility](../skproductstorepromotionvisibility.md): Deprecated. The visibility settings that determine if an in-app purchase is visible on a device.

# fetchStorePromotionVisibilityForProduct:completionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

Reads the visibility setting of a promoted product in the App Store for this device.

> Get visibility from Product.PromotionInfo.currentOrder.

## Declaration

```objectivec
- (void) fetchStorePromotionVisibilityForProduct:(SKProduct *) product completionHandler:(void (^)(SKProductStorePromotionVisibility storePromotionVisibility, NSError *error)) completionHandler;
```

## Mentioned In

- [Promoting In-App Purchases](../promoting-in-app-purchases.md)

<a id="Discussion"></a>

## Discussion

The default visibility for a promoted product is set in App Store Connect. Call [fetchStorePromotionVisibilityForProduct:completionHandler:](fetchstorepromotionvisibility%28for_completionhandler_%29.md) to determine if a product’s visibility is set to the default value or if it has been overridden to be hidden or shown.

## See Also

### Managing promoted product visibility

- [updateStorePromotionVisibility:forProduct:completionHandler:](update%28storepromotionvisibility_for_completionhandler_%29.md): Deprecated. Updates the visibility of the product on the App Store, per device.
- [SKProductStorePromotionVisibility](../skproductstorepromotionvisibility.md): Deprecated. The visibility settings that determine if an in-app purchase is visible on a device.
