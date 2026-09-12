> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductstorepromotionvisibility](https://developer.apple.com/documentation/storekit/skproductstorepromotionvisibility)

# SKProductStorePromotionVisibility (Swift)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

The visibility settings that determine if an in-app purchase is visible on a device.

> Use Product.PromotionInfo.Visibility.

## Declaration

```swift
@frozen enum SKProductStorePromotionVisibility
```

## Topics

### Enumeration cases

- [SKProductStorePromotionVisibility.default](skproductstorepromotionvisibility/default.md): Deprecated. Indicates product visibility is the same as the default value set in App Store Connect.
- [SKProductStorePromotionVisibility.hide](skproductstorepromotionvisibility/hide.md): Deprecated. Indicates product is hidden.
- [SKProductStorePromotionVisibility.show](skproductstorepromotionvisibility/show.md): Deprecated. Indicates product is shown.

### Initializers

- [init(rawValue:)](skproductstorepromotionvisibility/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing promoted product visibility

- [fetchStorePromotionVisibility(for:completionHandler:)](skproductstorepromotioncontroller/fetchstorepromotionvisibility%28for_completionhandler_%29.md): Deprecated. Reads the visibility setting of a promoted product in the App Store for this device.
- [update(storePromotionVisibility:for:completionHandler:)](skproductstorepromotioncontroller/update%28storepromotionvisibility_for_completionhandler_%29.md): Deprecated. Updates the visibility of the product on the App Store, per device.

# SKProductStorePromotionVisibility (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

The visibility settings that determine if an in-app purchase is visible on a device.

> Use Product.PromotionInfo.Visibility.

## Declaration

```objectivec
enum SKProductStorePromotionVisibility : NSInteger;
```

## Topics

### Enumeration cases

- [SKProductStorePromotionVisibilityDefault](skproductstorepromotionvisibility/default.md): Deprecated. Indicates product visibility is the same as the default value set in App Store Connect.
- [SKProductStorePromotionVisibilityHide](skproductstorepromotionvisibility/hide.md): Deprecated. Indicates product is hidden.
- [SKProductStorePromotionVisibilityShow](skproductstorepromotionvisibility/show.md): Deprecated. Indicates product is shown.

## See Also

### Managing promoted product visibility

- [fetchStorePromotionVisibilityForProduct:completionHandler:](skproductstorepromotioncontroller/fetchstorepromotionvisibility%28for_completionhandler_%29.md): Deprecated. Reads the visibility setting of a promoted product in the App Store for this device.
- [updateStorePromotionVisibility:forProduct:completionHandler:](skproductstorepromotioncontroller/update%28storepromotionvisibility_for_completionhandler_%29.md): Deprecated. Updates the visibility of the product on the App Store, per device.
