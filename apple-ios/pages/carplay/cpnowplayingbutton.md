> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingbutton](https://developer.apple.com/documentation/carplay/cpnowplayingbutton)

# CPNowPlayingButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The abstract base class that Now Playing template buttons use.

## Declaration

```swift
@MainActor class CPNowPlayingButton
```

<a id="overview"></a>

## Overview

`CPNowPlayingButton` is an abstract base class for defining buttons that the Now Playing template displays. It provides the common functionality that’s present in all buttons available to the template.

You don’t use this class directly, or create your own subclasses. Instead, you must use one of the concrete subclasses that the framework provides, such as [CPNowPlayingImageButton](cpnowplayingimagebutton.md) or [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md).

## Topics

### Creating a Button

- [init(handler:)](cpnowplayingbutton/init%28handler_%29.md): Creates a Now Playing button that invokes a handler.

### Managing the Button State

- [isEnabled](cpnowplayingbutton/isenabled.md): A Boolean value that indicates whether the button is in an enabled state.
- [isSelected](cpnowplayingbutton/isselected.md): A Boolean value that indicates whether the button is in a selected state.

### Initializers

- [init(coder:)](cpnowplayingbutton/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md)
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md)
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md)
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md)
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md)
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md)

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

## See Also

### Managing the Template’s Buttons

- [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md): The Now Playing template’s playback control buttons.
- [updateNowPlayingButtons(\_:)](cpnowplayingtemplate/updatenowplayingbuttons%28__%29.md): Updates the playback control buttons the template displays.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.

# CPNowPlayingButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The abstract base class that Now Playing template buttons use.

## Declaration

```objectivec
@interface CPNowPlayingButton : NSObject
```

<a id="overview"></a>

## Overview

`CPNowPlayingButton` is an abstract base class for defining buttons that the Now Playing template displays. It provides the common functionality that’s present in all buttons available to the template.

You don’t use this class directly, or create your own subclasses. Instead, you must use one of the concrete subclasses that the framework provides, such as [CPNowPlayingImageButton](cpnowplayingimagebutton.md) or [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md).

## Topics

### Creating a Button

- [initWithHandler:](cpnowplayingbutton/init%28handler_%29.md): Creates a Now Playing button that invokes a handler.

### Managing the Button State

- [enabled](cpnowplayingbutton/isenabled.md): A Boolean value that indicates whether the button is in an enabled state.
- [selected](cpnowplayingbutton/isselected.md): A Boolean value that indicates whether the button is in a selected state.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md)
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md)
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md)
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md)
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md)
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Managing the Template’s Buttons

- [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md): The Now Playing template’s playback control buttons.
- [updateNowPlayingButtons:](cpnowplayingtemplate/updatenowplayingbuttons%28__%29.md): Updates the playback control buttons the template displays.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.
