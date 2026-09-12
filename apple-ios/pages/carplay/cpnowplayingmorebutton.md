> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingmorebutton](https://developer.apple.com/documentation/carplay/cpnowplayingmorebutton)

# CPNowPlayingMoreButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for presenting more options to the user.

## Declaration

```swift
@MainActor class CPNowPlayingMoreButton
```

<a id="overview"></a>

## Overview

`CPNowPlayingMoreButton` is a concrete subclass of [CPNowPlayingButton](cpnowplayingbutton.md). Use this button to present a [CPListTemplate](cplisttemplate.md), [CPAlertTemplate](cpalerttemplate.md), or another contextual interface for the currently playing item. For example, if the item is a podcast, use the button’s handler to present a template that displays the episode’s show notes.

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
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.

# CPNowPlayingMoreButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for presenting more options to the user.

## Declaration

```objectivec
@interface CPNowPlayingMoreButton : CPNowPlayingButton
```

<a id="overview"></a>

## Overview

`CPNowPlayingMoreButton` is a concrete subclass of [CPNowPlayingButton](cpnowplayingbutton.md). Use this button to present a [CPListTemplate](cplisttemplate.md), [CPAlertTemplate](cpalerttemplate.md), or another contextual interface for the currently playing item. For example, if the item is a podcast, use the button’s handler to present a template that displays the episode’s show notes.

## Relationships

### Inherits From

- [CPNowPlayingButton](cpnowplayingbutton.md)

## See Also

### Managing the Template’s Buttons

- [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md): The Now Playing template’s playback control buttons.
- [updateNowPlayingButtons:](cpnowplayingtemplate/updatenowplayingbuttons%28__%29.md): Updates the playback control buttons the template displays.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class that Now Playing template buttons use.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.
