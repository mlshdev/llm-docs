> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductviewcontroller](https://developer.apple.com/documentation/storekit/skstoreproductviewcontroller)

# SKStoreProductViewController (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

A view controller that provides a page where customers can purchase media from the App Store.

## Declaration

```swift
@MainActor class SKStoreProductViewController
```

## Mentioned In

- [Receiving ad attributions and postbacks](receiving-ad-attributions-and-postbacks.md)
- [Signing and providing ads](signing-and-providing-ads.md)

<a id="overview"></a>

## Overview

To display a store for customers to purchase media from the App Store, follow these steps:

1. Create an `SKStoreProductViewController` object and set its [delegate](skstoreproductviewcontroller/delegate.md).
2. Indicate a specific product to sell by passing its iTunes item identifier to the [loadProduct(withParameters:completionBlock:)](skstoreproductviewcontroller/loadproduct%28withparameters_completionblock_%29.md) method.
3. Present the view controller modally from another view controller in your app. Your delegate dismisses the view controller when the customer completes the purchase.

Present the `SKStoreProductViewController` object immediately when someone triggers an interaction, such as tapping a Buy button. Load the product information before presenting the view controller to ensure a seamless user experience.

This class ignores [modalPresentationStyle](../uikit/uiviewcontroller/modalpresentationstyle.md) settings, and those settings have no impact on the sheet’s presentation.

To recommend another app without displaying a full product page, and to recommend an App Clip’s corresponding app from within the App Clip, use [SKOverlay](skoverlay.md).

> **Note**

>  In a compatible iPad or iPhone app running in visionOS, this method displays a minimal sheet to enable an app purchase or to launch the App Store for more information. For an in-line experience that’s consistent across platforms, use [SKOverlay](skoverlay.md) instead.

<a id="Prevent-exceptions"></a>

### Prevent exceptions

The `SKStoreProductViewController` class doesn’t support subclassing or embedding, and must be used as-is.

> **Important**

>  If you compile with the iOS 13 SDK, attempting to instantiate a subclass of `SKStoreProductViewController` results in a runtime exception.

This class throws the following runtime exceptions:

- **SKUnsupportedClassException**: Occurs if the app attempts to instantiate a subclass of `SKStoreProductViewController`.
- **SKUnsupportedPresentationException**: Occurs if the app attempts to use an unsupported presentation mode for `SKStoreProductViewController`, such as embedding it as a subview controller or attempting to use it in a popover.

## Topics

### Setting a delegate

- [delegate](skstoreproductviewcontroller/delegate.md): The store view controller’s delegate.
- [SKStoreProductViewControllerDelegate](skstoreproductviewcontrollerdelegate.md): A protocol to call when the customer dismisses the store screen.

### Loading a new product screen

- [Offering media for sale in your app](offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [loadProduct(withParameters:completionBlock:)](skstoreproductviewcontroller/loadproduct%28withparameters_completionblock_%29.md): Loads a new product screen to display.
- [loadProduct(withParameters:impression:completionBlock:)](skstoreproductviewcontroller/loadproduct%28withparameters_impression_completionblock_%29.md)
- [loadProduct(parameters:impression:)](skstoreproductviewcontroller/loadproduct%28parameters_impression_%29.md)
- [loadProduct(parameters:impression:reengagementURL:)](skstoreproductviewcontroller/loadproduct%28parameters_impression_reengagementurl_%29.md)
- [Product Dictionary Keys](product-dictionary-keys.md): Keys for identifying products and the tokens for affiliates and campaigns.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Recommendations

- [Offering media for sale in your app](offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [SKOverlay](skoverlay.md): A class that displays an overlay you can use to recommend another app or an App Clip’s corresponding full app.

# SKStoreProductViewController (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

A view controller that provides a page where customers can purchase media from the App Store.

## Declaration

```objectivec
@interface SKStoreProductViewController : UIViewController
```

```objectivec
@interface SKStoreProductViewController : NSViewController
```

## Mentioned In

- [Receiving ad attributions and postbacks](receiving-ad-attributions-and-postbacks.md)
- [Signing and providing ads](signing-and-providing-ads.md)

<a id="overview"></a>

## Overview

To display a store for customers to purchase media from the App Store, follow these steps:

1. Create an `SKStoreProductViewController` object and set its [delegate](skstoreproductviewcontroller/delegate.md).
2. Indicate a specific product to sell by passing its iTunes item identifier to the [loadProductWithParameters:completionBlock:](skstoreproductviewcontroller/loadproduct%28withparameters_completionblock_%29.md) method.
3. Present the view controller modally from another view controller in your app. Your delegate dismisses the view controller when the customer completes the purchase.

Present the `SKStoreProductViewController` object immediately when someone triggers an interaction, such as tapping a Buy button. Load the product information before presenting the view controller to ensure a seamless user experience.

This class ignores [modalPresentationStyle](../uikit/uiviewcontroller/modalpresentationstyle.md) settings, and those settings have no impact on the sheet’s presentation.

To recommend another app without displaying a full product page, and to recommend an App Clip’s corresponding app from within the App Clip, use [SKOverlay](skoverlay.md).

> **Note**

>  In a compatible iPad or iPhone app running in visionOS, this method displays a minimal sheet to enable an app purchase or to launch the App Store for more information. For an in-line experience that’s consistent across platforms, use [SKOverlay](skoverlay.md) instead.

<a id="Prevent-exceptions"></a>

### Prevent exceptions

The `SKStoreProductViewController` class doesn’t support subclassing or embedding, and must be used as-is.

> **Important**

>  If you compile with the iOS 13 SDK, attempting to instantiate a subclass of `SKStoreProductViewController` results in a runtime exception.

This class throws the following runtime exceptions:

- **SKUnsupportedClassException**: Occurs if the app attempts to instantiate a subclass of `SKStoreProductViewController`.
- **SKUnsupportedPresentationException**: Occurs if the app attempts to use an unsupported presentation mode for `SKStoreProductViewController`, such as embedding it as a subview controller or attempting to use it in a popover.

## Topics

### Setting a delegate

- [delegate](skstoreproductviewcontroller/delegate.md): The store view controller’s delegate.
- [SKStoreProductViewControllerDelegate](skstoreproductviewcontrollerdelegate.md): A protocol to call when the customer dismisses the store screen.

### Loading a new product screen

- [Offering media for sale in your app](offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [loadProductWithParameters:completionBlock:](skstoreproductviewcontroller/loadproduct%28withparameters_completionblock_%29.md): Loads a new product screen to display.
- [loadProductWithParameters:impression:completionBlock:](skstoreproductviewcontroller/loadproduct%28withparameters_impression_completionblock_%29.md)
- [Product Dictionary Keys](product-dictionary-keys.md): Keys for identifying products and the tokens for affiliates and campaigns.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Recommendations

- [Offering media for sale in your app](offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [SKOverlay](skoverlay.md): A class that displays an overlay you can use to recommend another app or an App Clip’s corresponding full app.
