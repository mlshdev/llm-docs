> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplate](https://developer.apple.com/documentation/carplay/cpnowplayingtemplate)

# CPNowPlayingTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A shared system template that displays Now Playing information.

## Declaration

```swift
@MainActor class CPNowPlayingTemplate
```

<a id="overview"></a>

## Overview

The Now Playing template displays information from [MPNowPlayingInfoCenter](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfocenter) and [MPNowPlayingSession](https://developer.apple.com/documentation/mediaplayer/mpnowplayingsession). Instead of instantiating your own Now Playing template, CarPlay provides a shared instance that you configure. The template displays a series of playback control buttons, as well as information about the current album and artist, and what’s coming up next.

When enabling your Now Playing template’s Album-Artist and Up Next buttons, you must create an object that implements the [CPNowPlayingTemplateObserver](cpnowplayingtemplateobserver.md) protocol and register it as an observer by calling the template’s [add(\_:)](cpnowplayingtemplate/add%28__%29.md) method.

To display the Now Playing template, call your interface controller’s [pushTemplate(\_:animated:completion:)](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method to push it onto your navigation hierarchy. You can’t display the Now Playing template modally.

When CarPlay presents Now Playing information for your app, it uses the shared instance of this template.

> **Note**

>  `CPNowPlayingTemplate` is only available in apps with the audio entitlement.

## Topics

### Managing the Shared Template

- [shared](cpnowplayingtemplate/shared.md): The Now Playing template the system provides.

### Managing the Template’s Buttons

- [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md): The Now Playing template’s playback control buttons.
- [updateNowPlayingButtons(\_:)](cpnowplayingtemplate/updatenowplayingbuttons%28__%29.md): Updates the playback control buttons the template displays.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class that Now Playing template buttons use.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.

### Managing Albums, Artists, and Up Next

- [isAlbumArtistButtonEnabled](cpnowplayingtemplate/isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist string is a button.
- [isUpNextButtonEnabled](cpnowplayingtemplate/isupnextbuttonenabled.md): A Boolean value that manages the display of the Up Next button.
- [upNextTitle](cpnowplayingtemplate/upnexttitle.md): The title for the Up Next button.

### Observing Now Playing Events

- [add(\_:)](cpnowplayingtemplate/add%28__%29.md): Registers an observer that receives Now Playing template events.
- [remove(\_:)](cpnowplayingtemplate/remove%28__%29.md): Removes an observer from receiving Now Playing template events.
- [CPNowPlayingTemplateObserver](cpnowplayingtemplateobserver.md): The methods for responding to the user interacting with the Now Playing template.

### Instance Properties

- [allowsMiniPlayer](cpnowplayingtemplate/allowsminiplayer.md): A Boolean value indicating whether the mini player is allowed to appear.
- [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md): The currently-active now playing mode. See @c CPNowPlayingMode.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

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

### Audio

- [Integrating CarPlay with Your Music App](integrating-carplay-with-your-music-app.md): Configure your music app to work with CarPlay by displaying a custom UI.

# CPNowPlayingTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A shared system template that displays Now Playing information.

## Declaration

```objectivec
@interface CPNowPlayingTemplate : CPTemplate
```

<a id="overview"></a>

## Overview

The Now Playing template displays information from [MPNowPlayingInfoCenter](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfocenter) and [MPNowPlayingSession](https://developer.apple.com/documentation/mediaplayer/mpnowplayingsession). Instead of instantiating your own Now Playing template, CarPlay provides a shared instance that you configure. The template displays a series of playback control buttons, as well as information about the current album and artist, and what’s coming up next.

When enabling your Now Playing template’s Album-Artist and Up Next buttons, you must create an object that implements the [CPNowPlayingTemplateObserver](cpnowplayingtemplateobserver.md) protocol and register it as an observer by calling the template’s [addObserver:](cpnowplayingtemplate/add%28__%29.md) method.

To display the Now Playing template, call your interface controller’s [pushTemplate:animated:completion:](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method to push it onto your navigation hierarchy. You can’t display the Now Playing template modally.

When CarPlay presents Now Playing information for your app, it uses the shared instance of this template.

> **Note**

>  `CPNowPlayingTemplate` is only available in apps with the audio entitlement.

## Topics

### Managing the Shared Template

- [sharedTemplate](cpnowplayingtemplate/shared.md): The Now Playing template the system provides.

### Managing the Template’s Buttons

- [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md): The Now Playing template’s playback control buttons.
- [updateNowPlayingButtons:](cpnowplayingtemplate/updatenowplayingbuttons%28__%29.md): Updates the playback control buttons the template displays.
- [CPNowPlayingButton](cpnowplayingbutton.md): The abstract base class that Now Playing template buttons use.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A button that displays an image.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current playing item to a collection.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for presenting more options to the user.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for cycling through the available playback rates.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for cycling through the available shuffle modes.

### Managing Albums, Artists, and Up Next

- [albumArtistButtonEnabled](cpnowplayingtemplate/isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist string is a button.
- [upNextButtonEnabled](cpnowplayingtemplate/isupnextbuttonenabled.md): A Boolean value that manages the display of the Up Next button.
- [upNextTitle](cpnowplayingtemplate/upnexttitle.md): The title for the Up Next button.

### Observing Now Playing Events

- [addObserver:](cpnowplayingtemplate/add%28__%29.md): Registers an observer that receives Now Playing template events.
- [removeObserver:](cpnowplayingtemplate/remove%28__%29.md): Removes an observer from receiving Now Playing template events.
- [CPNowPlayingTemplateObserver](cpnowplayingtemplateobserver.md): The methods for responding to the user interacting with the Now Playing template.

### Instance Properties

- [allowsMiniPlayer](cpnowplayingtemplate/allowsminiplayer.md): A Boolean value indicating whether the mini player is allowed to appear.
- [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md): The currently-active now playing mode. See @c CPNowPlayingMode.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

## See Also

### Audio

- [Integrating CarPlay with Your Music App](integrating-carplay-with-your-music-app.md): Configure your music app to work with CarPlay by displaying a custom UI.
