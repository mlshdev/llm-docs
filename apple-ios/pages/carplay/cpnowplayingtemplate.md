> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplate

# CPNowPlayingTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A shared system template that shows the currently selected audio content and offers controls to manage playback.

## Declaration

```swift
@MainActor class CPNowPlayingTemplate
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

Apps that play audio or video content update the `CPNowPlayingTemplate` to reflect their current and queued content. When visible, the default template layout shows information about the currently playing item and offers controls for someone to start and stop playback, play the next queued item, and manage other playback-related features. If your app manages sports content, you can change the layout to show team and score information for a live or prerecorded sporting event.

Access the shared `CPNowPlayingTemplate` from the [shared](cpnowplayingtemplate/shared.md) property and configure it when your CarPlay app launches. You can push the Now Playing template onto your app’s navigation stack, but the system also displays it in other situations. For example, the Now Playing app shows the interface from the app responsible for the most recently played content. Configuring the template at launch time ensures it’s available when the system needs it. The actual configuration of the template depends on the features you support. If you support the Album Artist or Up Next buttons, call the [add(\_:)](cpnowplayingtemplate/add%28__%29.md) method to register an observer to respond to interactions with those buttons.

To provide the Now Playing interface with information about the media you’re playing, play your media using the types of the [Media Player](https://developer.apple.com/documentation/mediaplayer) and [AVKit](https://developer.apple.com/documentation/avkit) frameworks. Each framework has its own form of Now Playing support, which CarPlay uses to populate the template. For example, a type like [MPMusicPlayerController](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller) manages a queue of songs to play, and communicates the current and next song directly to the Now Playing interface. CarPlay also starts and stops playback and performs other media-related tasks using the framework types.

When designing your interface hierarchy, you typically don’t push other templates on top of the Now Playing interface. However, if you support the Up Next button, you can push a list template with the queued items on top of the `CPNowPlayingTemplate` type. Don’t push other types of templates.

> **Note**

> Audio, video, communication, and public safety apps can display the Now Playing template. You can’t use this template from other types of apps.

## Topics

### Managing the shared template

- [shared](cpnowplayingtemplate/shared.md): The shared Now Playing template for you to configure and display.

### Configuring the interface

- [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md): The type that determines the layout of the Now Playing interface.
- [isUpNextButtonEnabled](cpnowplayingtemplate/isupnextbuttonenabled.md): A Boolean value that indicates whether the Now Playing interface displays the Up Next button.
- [upNextTitle](cpnowplayingtemplate/upnexttitle.md): The text to display in the Up Next button.
- [isAlbumArtistButtonEnabled](cpnowplayingtemplate/isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist information is a tappable button.
- [allowsMiniPlayer](cpnowplayingtemplate/allowsminiplayer.md): A Boolean value that indicates whether the app supports the mini-player interface.

### Adding app-specific controls

- [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md): Additional app-specific playback controls to display in the lower region of the Now Playing interface.
- [updateNowPlayingButtons(\_:)](cpnowplayingtemplate/updatenowplayingbuttons%28__%29.md): Updates the app-specific playback controls that appear in the lower region of the Now Playing interface.

### Adding and removing observers

- [add(\_:)](cpnowplayingtemplate/add%28__%29.md): Registers an observer to handle events related to the Now Playing interface.
- [remove(\_:)](cpnowplayingtemplate/remove%28__%29.md): Unregisters an observer and stops it from receiving events related to the Now Playing interface.

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

### Interface templates

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.

# CPNowPlayingTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A shared system template that shows the currently selected audio content and offers controls to manage playback.

## Declaration

```objectivec
@interface CPNowPlayingTemplate : CPTemplate
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

Apps that play audio or video content update the `CPNowPlayingTemplate` to reflect their current and queued content. When visible, the default template layout shows information about the currently playing item and offers controls for someone to start and stop playback, play the next queued item, and manage other playback-related features. If your app manages sports content, you can change the layout to show team and score information for a live or prerecorded sporting event.

Access the shared `CPNowPlayingTemplate` from the [sharedTemplate](cpnowplayingtemplate/shared.md) property and configure it when your CarPlay app launches. You can push the Now Playing template onto your app’s navigation stack, but the system also displays it in other situations. For example, the Now Playing app shows the interface from the app responsible for the most recently played content. Configuring the template at launch time ensures it’s available when the system needs it. The actual configuration of the template depends on the features you support. If you support the Album Artist or Up Next buttons, call the [addObserver:](cpnowplayingtemplate/add%28__%29.md) method to register an observer to respond to interactions with those buttons.

To provide the Now Playing interface with information about the media you’re playing, play your media using the types of the [Media Player](https://developer.apple.com/documentation/mediaplayer) and [AVKit](https://developer.apple.com/documentation/avkit) frameworks. Each framework has its own form of Now Playing support, which CarPlay uses to populate the template. For example, a type like [MPMusicPlayerController](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller) manages a queue of songs to play, and communicates the current and next song directly to the Now Playing interface. CarPlay also starts and stops playback and performs other media-related tasks using the framework types.

When designing your interface hierarchy, you typically don’t push other templates on top of the Now Playing interface. However, if you support the Up Next button, you can push a list template with the queued items on top of the `CPNowPlayingTemplate` type. Don’t push other types of templates.

> **Note**

> Audio, video, communication, and public safety apps can display the Now Playing template. You can’t use this template from other types of apps.

## Topics

### Managing the shared template

- [sharedTemplate](cpnowplayingtemplate/shared.md): The shared Now Playing template for you to configure and display.

### Configuring the interface

- [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md): The type that determines the layout of the Now Playing interface.
- [upNextButtonEnabled](cpnowplayingtemplate/isupnextbuttonenabled.md): A Boolean value that indicates whether the Now Playing interface displays the Up Next button.
- [upNextTitle](cpnowplayingtemplate/upnexttitle.md): The text to display in the Up Next button.
- [albumArtistButtonEnabled](cpnowplayingtemplate/isalbumartistbuttonenabled.md): A Boolean value that indicates whether the album and artist information is a tappable button.
- [allowsMiniPlayer](cpnowplayingtemplate/allowsminiplayer.md): A Boolean value that indicates whether the app supports the mini-player interface.

### Adding app-specific controls

- [nowPlayingButtons](cpnowplayingtemplate/nowplayingbuttons.md): Additional app-specific playback controls to display in the lower region of the Now Playing interface.
- [updateNowPlayingButtons:](cpnowplayingtemplate/updatenowplayingbuttons%28__%29.md): Updates the app-specific playback controls that appear in the lower region of the Now Playing interface.

### Adding and removing observers

- [addObserver:](cpnowplayingtemplate/add%28__%29.md): Registers an observer to handle events related to the Now Playing interface.
- [removeObserver:](cpnowplayingtemplate/remove%28__%29.md): Unregisters an observer and stops it from receiving events related to the Now Playing interface.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

## See Also

### Interface templates

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.
