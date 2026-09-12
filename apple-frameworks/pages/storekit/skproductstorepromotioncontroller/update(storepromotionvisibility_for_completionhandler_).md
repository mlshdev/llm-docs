> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductstorepromotioncontroller/update(storepromotionvisibility:for:completionhandler:)](https://developer.apple.com/documentation/storekit/skproductstorepromotioncontroller/update(storepromotionvisibility:for:completionhandler:))

# update(storePromotionVisibility:for:completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

Updates the visibility of the product on the App Store, per device.

> Use Product.PromotionInfo.updateProductVisibility(\_:for:).

## Declaration

```swift
func update(storePromotionVisibility promotionVisibility: SKProductStorePromotionVisibility, for product: SKProduct, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func update(promotionVisibility: SKProductStorePromotionVisibility, for product: SKProduct) async throws
```

<a id="Discussion"></a>

## Discussion

An in-app purchase product’s default visibility setting is set up in App Store Connect.  You can override the default setting, or return it to the default set in App Store Connect using the values in [SKProductStorePromotionVisibility](../skproductstorepromotionvisibility.md).

Visibility settings apply per device.

## See Also

### Managing promoted product visibility

- [fetchStorePromotionVisibility(for:completionHandler:)](fetchstorepromotionvisibility%28for_completionhandler_%29.md): Deprecated. Reads the visibility setting of a promoted product in the App Store for this device.
- [SKProductStorePromotionVisibility](../skproductstorepromotionvisibility.md): Deprecated. The visibility settings that determine if an in-app purchase is visible on a device.

# updateStorePromotionVisibility:forProduct:completionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

Updates the visibility of the product on the App Store, per device.

> Use Product.PromotionInfo.updateProductVisibility(\_:for:).

## Declaration

```objectivec
- (void) updateStorePromotionVisibility:(SKProductStorePromotionVisibility) promotionVisibility forProduct:(SKProduct *) product completionHandler:(void (^)(NSError *error)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

An in-app purchase product’s default visibility setting is set up in App Store Connect.  You can override the default setting, or return it to the default set in App Store Connect using the values in [SKProductStorePromotionVisibility](../skproductstorepromotionvisibility.md).

Visibility settings apply per device.

## See Also

### Managing promoted product visibility

- [fetchStorePromotionVisibilityForProduct:completionHandler:](fetchstorepromotionvisibility%28for_completionhandler_%29.md): Deprecated. Reads the visibility setting of a promoted product in the App Store for this device.
- [SKProductStorePromotionVisibility](../skproductstorepromotionvisibility.md): Deprecated. The visibility settings that determine if an in-app purchase is visible on a device.
