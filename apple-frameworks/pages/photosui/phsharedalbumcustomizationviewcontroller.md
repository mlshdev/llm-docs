> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phsharedalbumcustomizationviewcontroller](https://developer.apple.com/documentation/photosui/phsharedalbumcustomizationviewcontroller)

# PHSharedAlbumCustomizationViewController (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
class PHSharedAlbumCustomizationViewController
```

<a id="overview"></a>

## Overview

This class is used to present the shared album customization view from AppKit-based view controllers.

Only the system photo library is supported, so `albumIdentifier` must be for an album in the system photo library. If `albumIdentifier` is from a different library, showing a customization sheet will fail.

## Topics

### Protocols

- [PHSharedAlbumCustomizationViewController.Delegate](phsharedalbumcustomizationviewcontroller/delegate-swift.protocol.md)

### Initializers

- [init(albumIdentifier:photoLibrary:)](phsharedalbumcustomizationviewcontroller/init%28albumidentifier_photolibrary_%29.md)

### Instance Properties

- [albumIdentifier](phsharedalbumcustomizationviewcontroller/albumidentifier.md): The identifier of the shared album to be customized.
- [delegate](phsharedalbumcustomizationviewcontroller/delegate-swift.property.md): The delegate to respond to `PHSharedAlbumCustomizationViewController` events.

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

# PHSharedAlbumCustomizationViewController (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@interface PHSharedAlbumCustomizationViewController : UIViewController
```

```objectivec
@interface PHSharedAlbumCustomizationViewController : NSViewController
```

<a id="overview"></a>

## Overview

This class is used to present the shared album customization view from AppKit-based view controllers.

Only the system photo library is supported, so `albumIdentifier` must be for an album in the system photo library. If `albumIdentifier` is from a different library, showing a customization sheet will fail.

## Topics

### Instance Properties

- [albumIdentifier](phsharedalbumcustomizationviewcontroller/albumidentifier.md): The identifier of the shared album to be customized.
- [delegate](phsharedalbumcustomizationviewcontroller/delegate-swift.property.md): The delegate to respond to `PHSharedAlbumCustomizationViewController` events.

### Instance Methods

- [initWithAlbumIdentifier:photoLibrary:](phsharedalbumcustomizationviewcontroller/init%28albumidentifier_photolibrary_%29.md)

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)
