> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductstorepromotioncontroller](https://developer.apple.com/documentation/storekit/skproductstorepromotioncontroller)

# SKProductStorePromotionController (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

A product promotion controller for customizing the order and visibility of In-App Purchases per device.

> Use Product.PromotionInfo.

## Declaration

```swift
class SKProductStorePromotionController
```

## Mentioned In

- [Promoting In-App Purchases](promoting-in-app-purchases.md)

<a id="overview"></a>

## Overview

For information about promoting In-App Purchases, see [Promoting In-App Purchases](promoting-in-app-purchases.md).

> **Note**

>  [SKProductStorePromotionController](skproductstorepromotioncontroller.md) and promoted In-App Purchases aren’t available to compatible iPad and iPhone apps running in visionOS.

## Topics

### Managing promoted product order

- [fetchStorePromotionOrder(completionHandler:)](skproductstorepromotioncontroller/fetchstorepromotionorder%28completionhandler_%29.md): Deprecated. Reads the product order override that determines the promoted product order on this device.
- [update(storePromotionOrder:completionHandler:)](skproductstorepromotioncontroller/update%28storepromotionorder_completionhandler_%29.md): Deprecated. Overrides the promoted product order on this device.

### Managing promoted product visibility

- [fetchStorePromotionVisibility(for:completionHandler:)](skproductstorepromotioncontroller/fetchstorepromotionvisibility%28for_completionhandler_%29.md): Deprecated. Reads the visibility setting of a promoted product in the App Store for this device.
- [update(storePromotionVisibility:for:completionHandler:)](skproductstorepromotioncontroller/update%28storepromotionvisibility_for_completionhandler_%29.md): Deprecated. Updates the visibility of the product on the App Store, per device.
- [SKProductStorePromotionVisibility](skproductstorepromotionvisibility.md): Deprecated. The visibility settings that determine if an in-app purchase is visible on a device.

### Getting the controller

- [default()](skproductstorepromotioncontroller/default%28%29.md): Deprecated. Returns the default product store promotion controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Promotions

- [Promoting In-App Purchases](promoting-in-app-purchases.md): Show promoted In-App Purchases on your product page and handle purchases that customers initiate on the App Store.
- [Testing promoted In-App Purchases](testing-promoted-in-app-purchases.md): Test your In-App Purchases before making your app available in the App Store.

# SKProductStorePromotionController (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0)

A product promotion controller for customizing the order and visibility of In-App Purchases per device.

> Use Product.PromotionInfo.

## Declaration

```objectivec
@interface SKProductStorePromotionController : NSObject
```

## Mentioned In

- [Promoting In-App Purchases](promoting-in-app-purchases.md)

<a id="overview"></a>

## Overview

For information about promoting In-App Purchases, see [Promoting In-App Purchases](promoting-in-app-purchases.md).

> **Note**

>  [SKProductStorePromotionController](skproductstorepromotioncontroller.md) and promoted In-App Purchases aren’t available to compatible iPad and iPhone apps running in visionOS.

## Topics

### Managing promoted product order

- [fetchStorePromotionOrderWithCompletionHandler:](skproductstorepromotioncontroller/fetchstorepromotionorder%28completionhandler_%29.md): Deprecated. Reads the product order override that determines the promoted product order on this device.
- [updateStorePromotionOrder:completionHandler:](skproductstorepromotioncontroller/update%28storepromotionorder_completionhandler_%29.md): Deprecated. Overrides the promoted product order on this device.

### Managing promoted product visibility

- [fetchStorePromotionVisibilityForProduct:completionHandler:](skproductstorepromotioncontroller/fetchstorepromotionvisibility%28for_completionhandler_%29.md): Deprecated. Reads the visibility setting of a promoted product in the App Store for this device.
- [updateStorePromotionVisibility:forProduct:completionHandler:](skproductstorepromotioncontroller/update%28storepromotionvisibility_for_completionhandler_%29.md): Deprecated. Updates the visibility of the product on the App Store, per device.
- [SKProductStorePromotionVisibility](skproductstorepromotionvisibility.md): Deprecated. The visibility settings that determine if an in-app purchase is visible on a device.

### Getting the controller

- [defaultController](skproductstorepromotioncontroller/default%28%29.md): Deprecated. Returns the default product store promotion controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Promotions

- [Promoting In-App Purchases](promoting-in-app-purchases.md): Show promoted In-App Purchases on your product page and handle purchases that customers initiate on the App Store.
- [Testing promoted In-App Purchases](testing-promoted-in-app-purchases.md): Test your In-App Purchases before making your app available in the App Store.
