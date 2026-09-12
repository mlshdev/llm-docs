> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phsharedalbumcreationviewcontroller](https://developer.apple.com/documentation/photosui/phsharedalbumcreationviewcontroller)

# PHSharedAlbumCreationViewController (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
class PHSharedAlbumCreationViewController
```

<a id="overview"></a>

## Overview

This class is used to present the shared album creation view from AppKit-based view controllers.

## Topics

### Protocols

- [PHSharedAlbumCreationViewController.Delegate](phsharedalbumcreationviewcontroller/delegate-swift.protocol.md)

### Initializers

- [init(configuration:)](phsharedalbumcreationviewcontroller/init%28configuration_%29.md): Returns a view controller that allows the user to create a new shared album.

### Instance Properties

- [creationResult](phsharedalbumcreationviewcontroller/creationresult.md): Upon successful album creation, `creationResult` will be non-nil and provide information about the just-created shared album.
- [delegate](phsharedalbumcreationviewcontroller/delegate-swift.property.md): The delegate to respond to `PHSharedAlbumCreationViewController` events.

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

# PHSharedAlbumCreationViewController (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@interface PHSharedAlbumCreationViewController : UIViewController
```

```objectivec
@interface PHSharedAlbumCreationViewController : NSViewController
```

<a id="overview"></a>

## Overview

This class is used to present the shared album creation view from AppKit-based view controllers.

## Topics

### Instance Properties

- [creationResult](phsharedalbumcreationviewcontroller/creationresult.md): Upon successful album creation, `creationResult` will be non-nil and provide information about the just-created shared album.
- [delegate](phsharedalbumcreationviewcontroller/delegate-swift.property.md): The delegate to respond to `PHSharedAlbumCreationViewController` events.

### Instance Methods

- [initWithConfiguration:](https://developer.apple.com/documentation/photosui/phsharedalbumcreationviewcontroller/initwithconfiguration:)

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)
