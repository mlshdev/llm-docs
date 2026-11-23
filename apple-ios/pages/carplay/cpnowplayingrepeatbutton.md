> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingrepeatbutton

# CPNowPlayingRepeatButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for cycling through the available repeat modes.

## Declaration

```swift
@MainActor class CPNowPlayingRepeatButton
```

<a id="overview"></a>

## Overview

Include the `CPNowPlayingRepeatButton ` in your Now Playing template if your app supports repeating one or more tracks in the queue. The system provides the appearance of the button and automatically updates the appearance in response to interactions. You use the button to update your app’s behavior when someone changes the repeat mode.

Create the button and add it as one of the [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md) in your Now Playing template. At creation time, provide a handler you want the system to call when someone interacts with the button, and use your handler to update the repeat mode for your app’s playback queue.

> **Note**

> CarPlay uses the shared [MPRemoteCommandCenter](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter) object to observe changes to repeat mode and update the button’s appearance. If your app supports the command center object, provide the same behavior in your button’s handler as you provide for the [MPChangeRepeatModeCommand](https://developer.apple.com/documentation/mediaplayer/mpchangerepeatmodecommand) type.

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
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for changing the playback rate of the media.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current item to a collection, such as the person’s library.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for displaying additional playback options.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A custom Now Playing button that displays an image.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class for buttons in the Now Playing interface.

# CPNowPlayingRepeatButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for cycling through the available repeat modes.

## Declaration

```objectivec
@interface CPNowPlayingRepeatButton : CPNowPlayingButton
```

<a id="overview"></a>

## Overview

Include the `CPNowPlayingRepeatButton ` in your Now Playing template if your app supports repeating one or more tracks in the queue. The system provides the appearance of the button and automatically updates the appearance in response to interactions. You use the button to update your app’s behavior when someone changes the repeat mode.

Create the button and add it as one of the [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md) in your Now Playing template. At creation time, provide a handler you want the system to call when someone interacts with the button, and use your handler to update the repeat mode for your app’s playback queue.

> **Note**

> CarPlay uses the shared [MPRemoteCommandCenter](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter) object to observe changes to repeat mode and update the button’s appearance. If your app supports the command center object, provide the same behavior in your button’s handler as you provide for the [MPChangeRepeatModeCommand](https://developer.apple.com/documentation/mediaplayer/mpchangerepeatmodecommand) type.

## Relationships

### Inherits From

- [CPNowPlayingButton](cpnowplayingbutton.md)

## See Also

### Now Playing buttons

- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for toggling shuffle mode on and off.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for changing the playback rate of the media.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current item to a collection, such as the person’s library.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for displaying additional playback options.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A custom Now Playing button that displays an image.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class for buttons in the Now Playing interface.
