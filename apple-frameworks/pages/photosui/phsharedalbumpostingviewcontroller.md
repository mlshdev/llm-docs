> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phsharedalbumpostingviewcontroller](https://developer.apple.com/documentation/photosui/phsharedalbumpostingviewcontroller)

# PHSharedAlbumPostingViewController (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
class PHSharedAlbumPostingViewController
```

<a id="overview"></a>

## Overview

This class is used to present a view for posting assets to a shared album from AppKit-based view controllers.

## Topics

### Protocols

- [PHSharedAlbumPostingViewController.Delegate](phsharedalbumpostingviewcontroller/delegate-swift.protocol.md)

### Initializers

- [init(items:defaultAlbumIdentifier:photoLibrary:)](phsharedalbumpostingviewcontroller/init%28items_defaultalbumidentifier_photolibrary_%29.md): Returns a view controller that allows the user to create a new shared album.

### Instance Properties

- [albumIdentifier](phsharedalbumpostingviewcontroller/albumidentifier.md): The identifier of the shared album that was posted to.
- [delegate](phsharedalbumpostingviewcontroller/delegate-swift.property.md): The delegate to respond to `PHSharedAlbumPostingViewController` events.

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

# PHSharedAlbumPostingViewController (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@interface PHSharedAlbumPostingViewController : UIViewController
```

```objectivec
@interface PHSharedAlbumPostingViewController : NSViewController
```

<a id="overview"></a>

## Overview

This class is used to present a view for posting assets to a shared album from AppKit-based view controllers.

## Topics

### Instance Properties

- [albumIdentifier](phsharedalbumpostingviewcontroller/albumidentifier.md): The identifier of the shared album that was posted to.
- [delegate](phsharedalbumpostingviewcontroller/delegate-swift.property.md): The delegate to respond to `PHSharedAlbumPostingViewController` events.

### Instance Methods

- [initWithItems:defaultAlbumIdentifier:photoLibrary:](https://developer.apple.com/documentation/photosui/phsharedalbumpostingviewcontroller/initwithitems:defaultalbumidentifier:photolibrary:)

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)
