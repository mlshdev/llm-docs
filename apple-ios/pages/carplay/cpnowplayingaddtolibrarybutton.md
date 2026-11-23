> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingaddtolibrarybutton

# CPNowPlayingAddToLibraryButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for adding the current item to a collection, such as the person’s library.

## Declaration

```swift
@MainActor class CPNowPlayingAddToLibraryButton
```

<a id="overview"></a>

## Overview

Include the `CPNowPlayingAddToLibraryButton ` in your Now Playing template if your app supports adding items to playlists or other collections. The system provides the appearance of the button. Respond to button interactions by adding the item to the appropriate collection in your app.

Create the button and add it as one of the [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md) in your Now Playing template. At creation time, provide a handler you want the system to call when someone interacts with the button, and use your handler to update your app’s data structures.

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

### Now Playing buttons

- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for toggling shuffle mode on and off.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for changing the playback rate of the media.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for displaying additional playback options.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A custom Now Playing button that displays an image.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class for buttons in the Now Playing interface.

# CPNowPlayingAddToLibraryButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for adding the current item to a collection, such as the person’s library.

## Declaration

```objectivec
@interface CPNowPlayingAddToLibraryButton : CPNowPlayingButton
```

<a id="overview"></a>

## Overview

Include the `CPNowPlayingAddToLibraryButton ` in your Now Playing template if your app supports adding items to playlists or other collections. The system provides the appearance of the button. Respond to button interactions by adding the item to the appropriate collection in your app.

Create the button and add it as one of the [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md) in your Now Playing template. At creation time, provide a handler you want the system to call when someone interacts with the button, and use your handler to update your app’s data structures.

## Relationships

### Inherits From

- [CPNowPlayingButton](cpnowplayingbutton.md)

## See Also

### Now Playing buttons

- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for toggling shuffle mode on and off.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for changing the playback rate of the media.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for displaying additional playback options.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A custom Now Playing button that displays an image.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class for buttons in the Now Playing interface.
