> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingimagebutton

# CPNowPlayingImageButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A custom Now Playing button that displays an image.

## Declaration

```swift
@MainActor class CPNowPlayingImageButton
```

<a id="overview"></a>

## Overview

Use a `CPNowPlayingImageButton` object to add custom actions to the Now Playing interface. This button type displays the image you provide and calls your handler in response to interactions. The system displays your image with a tint color, so specify images with a single color for the best results.

Create the button and add it as one of the [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md) in your Now Playing template. Create this type of button only for custom actions, and don’t use it to replicate the behavior of system-provided types like [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md) or [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md).

## Topics

### Creating the button

- [init(image:handler:)](cpnowplayingimagebutton/init%28image_handler_%29.md): Creates a button with the specified image and handler.
- [CPNowPlayingButtonMaximumImageSize](cpnowplayingbuttonmaximumimagesize.md): The dimensions for images in custom buttons.

### Getting the button’s image

- [image](cpnowplayingimagebutton/image.md): The image to display for the button.

## Relationships

### Inherits From

- [CPNowPlayingButton](cpnowplayingbutton.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Now Playing buttons

- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for toggling shuffle mode on and off.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for changing the playback rate of the media.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current item to a collection, such as the person’s library.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for displaying additional playback options.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class for buttons in the Now Playing interface.

# CPNowPlayingImageButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A custom Now Playing button that displays an image.

## Declaration

```objectivec
@interface CPNowPlayingImageButton : CPNowPlayingButton
```

<a id="overview"></a>

## Overview

Use a `CPNowPlayingImageButton` object to add custom actions to the Now Playing interface. This button type displays the image you provide and calls your handler in response to interactions. The system displays your image with a tint color, so specify images with a single color for the best results.

Create the button and add it as one of the [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md) in your Now Playing template. Create this type of button only for custom actions, and don’t use it to replicate the behavior of system-provided types like [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md) or [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md).

## Topics

### Creating the button

- [initWithImage:handler:](cpnowplayingimagebutton/init%28image_handler_%29.md): Creates a button with the specified image and handler.
- [CPNowPlayingButtonMaximumImageSize](cpnowplayingbuttonmaximumimagesize.md): The dimensions for images in custom buttons.

### Getting the button’s image

- [image](cpnowplayingimagebutton/image.md): The image to display for the button.

## Relationships

### Inherits From

- [CPNowPlayingButton](cpnowplayingbutton.md)

## See Also

### Now Playing buttons

- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for toggling shuffle mode on and off.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for changing the playback rate of the media.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current item to a collection, such as the person’s library.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for displaying additional playback options.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class for buttons in the Now Playing interface.
