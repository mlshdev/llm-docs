> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingimagebutton](https://developer.apple.com/documentation/carplay/cpnowplayingimagebutton)

# CPNowPlayingImageButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that displays an image.

## Declaration

```swift
@MainActor class CPNowPlayingImageButton
```

<a id="overview"></a>

## Overview

`CPNowPlayingImageButton` is a concrete subclass of [CPNowPlayingButton](cpnowplayingbutton.md). Use this class when you want to display a button that contains an image.

In iOS 17 and later, CarPlay retints the custom now playing image buttons your app provides; you need to provide images  as monocolor assets.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

To properly size your image, use the display scale of the vehicle’s primary screen—see your interface controller’s [carTraitCollection](cpinterfacecontroller/cartraitcollection.md) property—and make sure it is no larger than [CPNowPlayingButtonMaximumImageSize](cpnowplayingbuttonmaximumimagesize.md).

## Topics

### Creating a Button

- [init(image:handler:)](cpnowplayingimagebutton/init%28image_handler_%29.md): Creates a Now Playing button that displays a custom image and invokes a handler.
- [CPNowPlayingButtonMaximumImageSize](cpnowplayingbuttonmaximumimagesize.md): The maximum size CarPlay supports for a button’s image.

### Getting the Button’s Image

- [image](cpnowplayingimagebutton/image.md): The image that the button displays.

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

### Managing the Template’s Buttons

- [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md): The Now Playing template’s playback control buttons.
- [updateNowPlayingButtons(\_:)](cpnowplayingtemplate/updatenowplayingbuttons%28__%29.md): Updates the playback control buttons the template displays.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class that Now Playing template buttons use.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.

# CPNowPlayingImageButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that displays an image.

## Declaration

```objectivec
@interface CPNowPlayingImageButton : CPNowPlayingButton
```

<a id="overview"></a>

## Overview

`CPNowPlayingImageButton` is a concrete subclass of [CPNowPlayingButton](cpnowplayingbutton.md). Use this class when you want to display a button that contains an image.

In iOS 17 and later, CarPlay retints the custom now playing image buttons your app provides; you need to provide images  as monocolor assets.

CarPlay doesn’t support animated images. If you provide an animated image, CarPlay uses only the first image in the animation sequence.

To properly size your image, use the display scale of the vehicle’s primary screen—see your interface controller’s [carTraitCollection](cpinterfacecontroller/cartraitcollection.md) property—and make sure it is no larger than [CPNowPlayingButtonMaximumImageSize](cpnowplayingbuttonmaximumimagesize.md).

## Topics

### Creating a Button

- [initWithImage:handler:](cpnowplayingimagebutton/init%28image_handler_%29.md): Creates a Now Playing button that displays a custom image and invokes a handler.
- [CPNowPlayingButtonMaximumImageSize](cpnowplayingbuttonmaximumimagesize.md): The maximum size CarPlay supports for a button’s image.

### Getting the Button’s Image

- [image](cpnowplayingimagebutton/image.md): The image that the button displays.

## Relationships

### Inherits From

- [CPNowPlayingButton](cpnowplayingbutton.md)

## See Also

### Managing the Template’s Buttons

- [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md): The Now Playing template’s playback control buttons.
- [updateNowPlayingButtons:](cpnowplayingtemplate/updatenowplayingbuttons%28__%29.md): Updates the playback control buttons the template displays.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class that Now Playing template buttons use.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.
