> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay](https://developer.apple.com/documentation/storekit/skoverlay)

# SKOverlay (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A class that displays an overlay you can use to recommend another app or an App Clip’s corresponding full app.

## Declaration

```swift
class SKOverlay
```

## Mentioned In

- [Receiving ad attributions and postbacks](receiving-ad-attributions-and-postbacks.md)
- [Signing and providing ads](signing-and-providing-ads.md)

<a id="overview"></a>

## Overview

By displaying an overlay, you can recommend another app to users and enable them to download it immediately. To recommend media that’s not an app, or to display a product page within your app, use [SKStoreProductViewController](skstoreproductviewcontroller.md).

> **Important**

>  If you display an overlay in your App Clip, you may only recommend the App Clip’s corresponding full app and need to initialize the overlay with an [SKOverlay.AppClipConfiguration](skoverlay/appclipconfiguration.md) object. For more information, see [Recommending your app to App Clip users](https://developer.apple.com/documentation/appclip/recommending-your-app-to-app-clip-users).

If you’re using SwiftUI, make use of the `appStoreOverlay(isPresented:configuration:)` modifier. For example usage, see [Fruta: Building a feature-rich app with SwiftUI](https://developer.apple.com/documentation/appclip/fruta-building-a-feature-rich-app-with-swiftui).

To display an App Store overlay in an app that uses [UIKit](../uikit.md):

1. Create an [SKOverlay.AppConfiguration](skoverlay/appconfiguration.md) with the iTunes identifier of the app you want to recommend.
2. Initialize `SKOverlay` with the configuration object.
3. Present the overlay.

The following code displays an overlay at the bottom of the visible scene:

```swift
func displayOverlay() {
    guard let scene = view.window?.windowScene else { return }

    let config = SKOverlay.AppConfiguration(appIdentifier: "The iTunes identifier of another app.", position: .bottom)
    let overlay = SKOverlay(configuration: config)
    overlay.present(in: scene)
}
```

To respond to the overlay’s appearance, dismissal, or failure to load, set the [delegate](skoverlay/delegate.md) and implement the methods defined in [SKOverlayDelegate](skoverlaydelegate.md).

> **Note**

>  App extensions can’t display an overlay.

## Topics

### Creating an overlay

- [init(configuration:)](skoverlay/init%28configuration_%29.md): Creates an overlay you use to recommend another app on the App Store.
- [configuration](skoverlay/configuration-swift.property.md): An overlay’s attributes; for example, its position on the screen.
- [SKOverlay.AppConfiguration](skoverlay/appconfiguration.md): An object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [SKOverlay.AppClipConfiguration](skoverlay/appclipconfiguration.md): An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.
- [SKOverlay.Configuration](skoverlay/configuration-swift.class.md): The abstract superclass for all classes that represent an overlay’s attributes.

### Presenting an overlay

- [present(in:)](skoverlay/present%28in_%29.md): Presents an overlay in a window scene.

### Dismissing an overlay

- [dismiss(in:)](skoverlay/dismiss%28in_%29.md): Dismisses an App Store overlay.

### Setting a delegate

- [delegate](skoverlay/delegate.md): The overlay’s delegate.
- [SKOverlayDelegate](skoverlaydelegate.md): Methods for responding to the overlay’s appearance, dismissal, or failure to load.

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

### Recommendations

- [Offering media for sale in your app](offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [SKStoreProductViewController](skstoreproductviewcontroller.md): A view controller that provides a page where customers can purchase media from the App Store.

# SKOverlay (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A class that displays an overlay you can use to recommend another app or an App Clip’s corresponding full app.

## Declaration

```objectivec
@interface SKOverlay : NSObject
```

## Mentioned In

- [Receiving ad attributions and postbacks](receiving-ad-attributions-and-postbacks.md)
- [Signing and providing ads](signing-and-providing-ads.md)

<a id="overview"></a>

## Overview

By displaying an overlay, you can recommend another app to users and enable them to download it immediately. To recommend media that’s not an app, or to display a product page within your app, use [SKStoreProductViewController](skstoreproductviewcontroller.md).

> **Important**

>  If you display an overlay in your App Clip, you may only recommend the App Clip’s corresponding full app and need to initialize the overlay with an [SKOverlayAppClipConfiguration](skoverlay/appclipconfiguration.md) object. For more information, see [Recommending your app to App Clip users](https://developer.apple.com/documentation/appclip/recommending-your-app-to-app-clip-users).

If you’re using SwiftUI, make use of the `appStoreOverlay(isPresented:configuration:)` modifier. For example usage, see [Fruta: Building a feature-rich app with SwiftUI](https://developer.apple.com/documentation/appclip/fruta-building-a-feature-rich-app-with-swiftui).

To display an App Store overlay in an app that uses [UIKit](../uikit.md):

1. Create an [SKOverlayAppConfiguration](skoverlay/appconfiguration.md) with the iTunes identifier of the app you want to recommend.
2. Initialize `SKOverlay` with the configuration object.
3. Present the overlay.

The following code displays an overlay at the bottom of the visible scene:

```swift
func displayOverlay() {
    guard let scene = view.window?.windowScene else { return }

    let config = SKOverlay.AppConfiguration(appIdentifier: "The iTunes identifier of another app.", position: .bottom)
    let overlay = SKOverlay(configuration: config)
    overlay.present(in: scene)
}
```

To respond to the overlay’s appearance, dismissal, or failure to load, set the [delegate](skoverlay/delegate.md) and implement the methods defined in [SKOverlayDelegate](skoverlaydelegate.md).

> **Note**

>  App extensions can’t display an overlay.

## Topics

### Creating an overlay

- [initWithConfiguration:](skoverlay/init%28configuration_%29.md): Creates an overlay you use to recommend another app on the App Store.
- [configuration](skoverlay/configuration-swift.property.md): An overlay’s attributes; for example, its position on the screen.
- [SKOverlayAppConfiguration](skoverlay/appconfiguration.md): An object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [SKOverlayAppClipConfiguration](skoverlay/appclipconfiguration.md): An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.
- [SKOverlayConfiguration](skoverlay/configuration-swift.class.md): The abstract superclass for all classes that represent an overlay’s attributes.

### Presenting an overlay

- [presentInScene:](skoverlay/present%28in_%29.md): Presents an overlay in a window scene.

### Dismissing an overlay

- [dismissOverlayInScene:](skoverlay/dismiss%28in_%29.md): Dismisses an App Store overlay.

### Setting a delegate

- [delegate](skoverlay/delegate.md): The overlay’s delegate.
- [SKOverlayDelegate](skoverlaydelegate.md): Methods for responding to the overlay’s appearance, dismissal, or failure to load.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Recommendations

- [Offering media for sale in your app](offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [SKStoreProductViewController](skstoreproductviewcontroller.md): A view controller that provides a page where customers can purchase media from the App Store.
