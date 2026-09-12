> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingaddtolibrarybutton](https://developer.apple.com/documentation/carplay/cpnowplayingaddtolibrarybutton)

# CPNowPlayingAddToLibraryButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for adding the current playing item to a collection.

## Declaration

```swift
@MainActor class CPNowPlayingAddToLibraryButton
```

<a id="overview"></a>

## Overview

`CPNowPlayingAddToLibraryButton` is a concrete subclass of [CPNowPlayingButton](cpnowplayingbutton.md). Use this button to allow a user to add the current playing item to a collection, such as their library. You implement this functionality in the button’s handler, or use the handler to invoke existing code that performs this function.

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

## See Also

### Managing the Template’s Buttons

- [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md): The Now Playing template’s playback control buttons.
- [updateNowPlayingButtons(\_:)](cpnowplayingtemplate/updatenowplayingbuttons%28__%29.md): Updates the playback control buttons the template displays.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class that Now Playing template buttons use.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.

# CPNowPlayingAddToLibraryButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for adding the current playing item to a collection.

## Declaration

```objectivec
@interface CPNowPlayingAddToLibraryButton : CPNowPlayingButton
```

<a id="overview"></a>

## Overview

`CPNowPlayingAddToLibraryButton` is a concrete subclass of [CPNowPlayingButton](cpnowplayingbutton.md). Use this button to allow a user to add the current playing item to a collection, such as their library. You implement this functionality in the button’s handler, or use the handler to invoke existing code that performs this function.

## Relationships

### Inherits From

- [CPNowPlayingButton](cpnowplayingbutton.md)

## See Also

### Managing the Template’s Buttons

- [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md): The Now Playing template’s playback control buttons.
- [updateNowPlayingButtons:](cpnowplayingtemplate/updatenowplayingbuttons%28__%29.md): Updates the playback control buttons the template displays.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class that Now Playing template buttons use.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.
