> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewsceneactivationconfiguration](https://developer.apple.com/documentation/quicklook/qlpreviewsceneactivationconfiguration)

# QLPreviewSceneActivationConfiguration (Swift)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A scene configuration to preview items at the specified URLs.

## Declaration

```swift
class QLPreviewSceneActivationConfiguration
```

<a id="overview"></a>

## Overview

This class provides the configuration for a prominent scene presentation of a preview, either from a swipe gesture or a menu action. The user can detach the prominent Quick Look window and display it independently.

To provide a preview from a swipe gesture, use an instance of this class with [UIWindowScene.ActivationInteraction](../uikit/uiwindowscene/activationinteraction.md). To provide a preview from a menu action, use an instance of this class with [UIWindowScene.ActivationAction](../uikit/uiwindowscene/activationaction.md).

## Topics

### Creating a preview scene activation configuration

- [init(itemsAt:options:)](qlpreviewsceneactivationconfiguration/init%28itemsat_options_%29.md): Creates a preview scene configuration.

### Configuring a preview scene activation

- [QLPreviewSceneActivationConfiguration.Options](qlpreviewsceneactivationconfiguration/options.md): A class that represents the configuration for a preview scene activation.

### Initializers

- [init(itemsAtURLs:options:)](qlpreviewsceneactivationconfiguration/init%28itemsaturls_options_%29.md)

## Relationships

### Inherits From

- [UIWindowScene.ActivationConfiguration](../uikit/uiwindowscene/activationconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Previews

- [QLPreviewController](qlpreviewcontroller.md): A specialized view controller for previewing an item.
- [QLPreviewItem](https://developer.apple.com/documentation/quicklookui/qlpreviewitem): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [Previews or thumbnail images for macOS 10.14 or earlier](previews-or-thumbnail-images-for-macos-10-14-or-earlier.md): Create thumbnail images or previews of common files and custom file types in earlier versions of macOS.

# QLPreviewSceneActivationConfiguration (Objective-C)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A scene configuration to preview items at the specified URLs.

## Declaration

```objectivec
@interface QLPreviewSceneActivationConfiguration : UIWindowSceneActivationConfiguration
```

<a id="overview"></a>

## Overview

This class provides the configuration for a prominent scene presentation of a preview, either from a swipe gesture or a menu action. The user can detach the prominent Quick Look window and display it independently.

To provide a preview from a swipe gesture, use an instance of this class with [UIWindowSceneActivationInteraction](../uikit/uiwindowscene/activationinteraction.md). To provide a preview from a menu action, use an instance of this class with [UIWindowSceneActivationAction](../uikit/uiwindowscene/activationaction.md).

## Topics

### Creating a preview scene activation configuration

- [initWithItemsAtURLs:options:](qlpreviewsceneactivationconfiguration/init%28itemsat_options_%29.md): Creates a preview scene configuration.

### Configuring a preview scene activation

- [QLPreviewSceneOptions](qlpreviewsceneactivationconfiguration/options.md): A class that represents the configuration for a preview scene activation.

## Relationships

### Inherits From

- [UIWindowSceneActivationConfiguration](../uikit/uiwindowscene/activationconfiguration.md)

## See Also

### Previews

- [QLPreviewController](qlpreviewcontroller.md): A specialized view controller for previewing an item.
- [QLPreviewItem](https://developer.apple.com/documentation/quicklookui/qlpreviewitem): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [Previews or thumbnail images for macOS 10.14 or earlier](previews-or-thumbnail-images-for-macos-10-14-or-earlier.md): Create thumbnail images or previews of common files and custom file types in earlier versions of macOS.
