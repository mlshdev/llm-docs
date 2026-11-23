> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingmodesports

# CPNowPlayingModeSports (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A mode that manages the sporting event details to display in the Now Playing interface.

## Declaration

```swift
@MainActor class CPNowPlayingModeSports
```

<a id="overview"></a>

## Overview

The `CPNowPlayingModeSports` type reconfigures the Now Playing interface to display information from a sporting event. This type is for apps that want to show information about the sporting event while they play event-related audio. When you apply this mode to your app’s [CPNowPlayingTemplate](cpnowplayingtemplate.md) object, the Now Playing interface displays match information you specify instead of information about the current audio track. For example, while your app plays audio for a football match, the interface displays the team names and logos, the current score, and the elapsed or remaining time.

At the start of a sporting event, create an instance of this type and configure it with the team information and other event details. To display the information, assign your `CPNowPlayingModeSports` object to the [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md) property of your app’s [CPNowPlayingTemplate](cpnowplayingtemplate.md) object. As the event progresses, update the team and event information to reflect changes to the score or match state. For example, update the game clock information when gameplay pauses or resumes. When the match ends, restore the [default](cpnowplayingmode/default.md) mode to the [CPNowPlayingTemplate](cpnowplayingtemplate.md) object to return the interface to its standard configuration.

Play audio or video for a match using the [Media Player](https://developer.apple.com/documentation/mediaplayer) or [AVKit](https://developer.apple.com/documentation/avkit) framework. Each framework has its own form of Now Playing support, which CarPlay uses to manage interactions with the controls of the Now Playing interface.

## Topics

### Creating a sports mode type

- [init(leftTeam:rightTeam:eventStatus:backgroundArtwork:)](cpnowplayingmodesports/init%28leftteam_rightteam_eventstatus_backgroundartwork_%29.md): Creates an object with information about a sporting event and the teams playing.

### Getting the event details

- [leftTeam](cpnowplayingmodesports/leftteam.md): Team-specific details to display on the left side of the Now Playing interface.
- [rightTeam](cpnowplayingmodesports/rightteam.md): Details for the team that appears on the right side of the display.
- [eventStatus](cpnowplayingmodesports/eventstatus.md): Match details to display in the center of the Now Playing interface.
- [backgroundArtwork](cpnowplayingmodesports/backgroundartwork.md): The image to display behind the match information.

## Relationships

### Inherits From

- [CPNowPlayingMode](cpnowplayingmode.md)

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

### Interface modes

- [CPNowPlayingMode](cpnowplayingmode.md): A type that defines the appearance and layout of the Now Playing interface.

# CPNowPlayingModeSports (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A mode that manages the sporting event details to display in the Now Playing interface.

## Declaration

```objectivec
@interface CPNowPlayingModeSports : CPNowPlayingMode
```

<a id="overview"></a>

## Overview

The `CPNowPlayingModeSports` type reconfigures the Now Playing interface to display information from a sporting event. This type is for apps that want to show information about the sporting event while they play event-related audio. When you apply this mode to your app’s [CPNowPlayingTemplate](cpnowplayingtemplate.md) object, the Now Playing interface displays match information you specify instead of information about the current audio track. For example, while your app plays audio for a football match, the interface displays the team names and logos, the current score, and the elapsed or remaining time.

At the start of a sporting event, create an instance of this type and configure it with the team information and other event details. To display the information, assign your `CPNowPlayingModeSports` object to the [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md) property of your app’s [CPNowPlayingTemplate](cpnowplayingtemplate.md) object. As the event progresses, update the team and event information to reflect changes to the score or match state. For example, update the game clock information when gameplay pauses or resumes. When the match ends, restore the [defaultNowPlayingMode](cpnowplayingmode/default.md) mode to the [CPNowPlayingTemplate](cpnowplayingtemplate.md) object to return the interface to its standard configuration.

Play audio or video for a match using the [Media Player](https://developer.apple.com/documentation/mediaplayer) or [AVKit](https://developer.apple.com/documentation/avkit) framework. Each framework has its own form of Now Playing support, which CarPlay uses to manage interactions with the controls of the Now Playing interface.

## Topics

### Creating a sports mode type

- [initWithLeftTeam:rightTeam:eventStatus:backgroundArtwork:](cpnowplayingmodesports/init%28leftteam_rightteam_eventstatus_backgroundartwork_%29.md): Creates an object with information about a sporting event and the teams playing.

### Getting the event details

- [leftTeam](cpnowplayingmodesports/leftteam.md): Team-specific details to display on the left side of the Now Playing interface.
- [rightTeam](cpnowplayingmodesports/rightteam.md): Details for the team that appears on the right side of the display.
- [eventStatus](cpnowplayingmodesports/eventstatus.md): Match details to display in the center of the Now Playing interface.
- [backgroundArtwork](cpnowplayingmodesports/backgroundartwork.md): The image to display behind the match information.

## Relationships

### Inherits From

- [CPNowPlayingMode](cpnowplayingmode.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Interface modes

- [CPNowPlayingMode](cpnowplayingmode.md): A type that defines the appearance and layout of the Now Playing interface.
