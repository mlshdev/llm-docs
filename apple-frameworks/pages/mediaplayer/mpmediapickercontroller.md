> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediapickercontroller](https://developer.apple.com/documentation/mediaplayer/mpmediapickercontroller)

# MPMediaPickerController (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

A specialized view controller that provides a graphical interface for selecting media items.

## Declaration

```swift
class MPMediaPickerController
```

<a id="overview"></a>

## Overview

An [MPMediaPickerController](mpmediapickercontroller.md) object, or media item picker, is a specialized view controller that you employ to provide a graphical interface for selecting media items. To display a media item picker, present it modally on an existing view controller. Presenting an [MPMediaPickerController](mpmediapickercontroller.md) in non-modal mode; for example, pushing a [MPMediaPickerController](mpmediapickercontroller.md) onto an existing [UINavigationController](../uikit/uinavigationcontroller.md) stack causes your app to crash. [MPMediaItem](mpmediaitem.md) describes media items.

To respond to user selections and to dismiss a media item picker, use the [MPMediaPickerControllerDelegate](mpmediapickercontrollerdelegate.md) protocol.

> **Notes**

>  The [MPMediaPickerController](mpmediapickercontroller.md) class supports portrait mode only. This class doesn’t support subclassing, and don’t modify the view hierarchy, which is private. In a compatible iPad or iPhone app in visionOS, presenting this picker displays an alert notifying the person that picking media items isn’t supported.

## Topics

### Initializing a media item picker

- [init(mediaTypes:)](mpmediapickercontroller/init%28mediatypes_%29.md): Initializes a media item picker for specified media types.

### Responding to media item picker selections

- [delegate](mpmediapickercontroller/delegate.md): The delegate for a media item picker.
- [MPMediaPickerControllerDelegate](mpmediapickercontrollerdelegate.md): The protocol you implement so that a media item picker can respond to a user making media item selections.

### Using a media item picker

- [allowsPickingMultipleItems](mpmediapickercontroller/allowspickingmultipleitems.md): A Boolean value specifying the default selection behavior for a media item picker.
- [showsCloudItems](mpmediapickercontroller/showsclouditems.md): A Boolean value specifying whether to display iCloud Media Library items for a media picker.
- [mediaTypes](mpmediapickercontroller/mediatypes.md): The media types that media item picker presents.
- [prompt](mpmediapickercontroller/prompt.md): A prompt, for the user, that appears above the navigation bar buttons.
- [showsItemsWithProtectedAssets](mpmediapickercontroller/showsitemswithprotectedassets.md): A Boolean value that specifies whether the media item picker displays protected assets.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
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

### Media player user interface

- [Displaying a media picker from your app](displaying-a-media-picker-from-your-app.md): Let users choose the music they want to play by displaying a media picker interface from within your app.
- [MPVolumeView](mpvolumeview.md): A slider control for setting the system audio output volume, and a button for choosing the audio output route.

# MPMediaPickerController (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

A specialized view controller that provides a graphical interface for selecting media items.

## Declaration

```objectivec
@interface MPMediaPickerController : UIViewController
```

<a id="overview"></a>

## Overview

An [MPMediaPickerController](mpmediapickercontroller.md) object, or media item picker, is a specialized view controller that you employ to provide a graphical interface for selecting media items. To display a media item picker, present it modally on an existing view controller. Presenting an [MPMediaPickerController](mpmediapickercontroller.md) in non-modal mode; for example, pushing a [MPMediaPickerController](mpmediapickercontroller.md) onto an existing [UINavigationController](../uikit/uinavigationcontroller.md) stack causes your app to crash. [MPMediaItem](mpmediaitem.md) describes media items.

To respond to user selections and to dismiss a media item picker, use the [MPMediaPickerControllerDelegate](mpmediapickercontrollerdelegate.md) protocol.

> **Notes**

>  The [MPMediaPickerController](mpmediapickercontroller.md) class supports portrait mode only. This class doesn’t support subclassing, and don’t modify the view hierarchy, which is private. In a compatible iPad or iPhone app in visionOS, presenting this picker displays an alert notifying the person that picking media items isn’t supported.

## Topics

### Initializing a media item picker

- [init](mpmediapickercontroller-init.md): Initializes a media item picker for all media types.
- [initWithMediaTypes:](mpmediapickercontroller/init%28mediatypes_%29.md): Initializes a media item picker for specified media types.

### Responding to media item picker selections

- [delegate](mpmediapickercontroller/delegate.md): The delegate for a media item picker.
- [MPMediaPickerControllerDelegate](mpmediapickercontrollerdelegate.md): The protocol you implement so that a media item picker can respond to a user making media item selections.

### Using a media item picker

- [allowsPickingMultipleItems](mpmediapickercontroller/allowspickingmultipleitems.md): A Boolean value specifying the default selection behavior for a media item picker.
- [showsCloudItems](mpmediapickercontroller/showsclouditems.md): A Boolean value specifying whether to display iCloud Media Library items for a media picker.
- [mediaTypes](mpmediapickercontroller/mediatypes.md): The media types that media item picker presents.
- [prompt](mpmediapickercontroller/prompt.md): A prompt, for the user, that appears above the navigation bar buttons.
- [showsItemsWithProtectedAssets](mpmediapickercontroller/showsitemswithprotectedassets.md): A Boolean value that specifies whether the media item picker displays protected assets.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Media player user interface

- [Displaying a media picker from your app](displaying-a-media-picker-from-your-app.md): Let users choose the music they want to play by displaying a media picker interface from within your app.
- [MPVolumeView](mpvolumeview.md): A slider control for setting the system audio output volume, and a button for choosing the audio output route.
