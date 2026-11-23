> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportseventstatus

# CPNowPlayingSportsEventStatus (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A type that manages match-focused information, including the event clock.

## Declaration

```swift
@MainActor class CPNowPlayingSportsEventStatus
```

<a id="overview"></a>

## Overview

A `CPNowPlayingSportsEventStatus` object contains information that isn’t tied to a particular team. You specify this content using a combination of text and images, so it can be anything that’s relevant for the sport. For example, a baseball game might display the inning information, the bases that have runners, the number of outs, and the number of balls and strikes for the current batter. CarPlay displays this information in the center area of the Now Playing interface between the team details.

Create a `CPNowPlayingSportsEventStatus` object during the creation of match-related content for the Now Playing interface. Use the object you create to initialize the [CPNowPlayingModeSports](cpnowplayingmodesports.md) objects you assign to the [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md) property of the shared [CPNowPlayingTemplate](cpnowplayingtemplate.md) object. During the course of the event, update the information in this object as needed to reflect changes. For example, update the inning information in a baseball match, or update the clock information when the play clock pauses and resumes.

## Topics

### Creating a sports mode type

- [init(eventStatusText:eventStatusImage:eventClock:)](cpnowplayingsportseventstatus/init%28eventstatustext_eventstatusimage_eventclock_%29.md): Creates an event status object from information you provide.
- [init(coder:)](cpnowplayingsportseventstatus/init%28coder_%29.md)

### Getting the event status

- [eventStatusText](cpnowplayingsportseventstatus/eventstatustext.md): One to three strings you use to convey event-related details in the Now Playing interface.
- [eventStatusImage](cpnowplayingsportseventstatus/eventstatusimage.md): An image you use to convey event-related details in the Now Playing interface.
- [eventClock](cpnowplayingsportseventstatus/eventclock.md): The clock information you provided for the event.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

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

### Sports mode content

- [CPNowPlayingSportsTeam](cpnowplayingsportsteam.md): A type that specifies team-specific details, including the name, standings, and current score in the match.
- [CPNowPlayingSportsTeamLogo](cpnowplayingsportsteamlogo.md): A type that manages logo information for a sports team.
- [CPNowPlayingSportsClock](cpnowplayingsportsclock.md): A type that specifies the elapsed or remaining time in a match and the state of the clock.

# CPNowPlayingSportsEventStatus (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A type that manages match-focused information, including the event clock.

## Declaration

```objectivec
@interface CPNowPlayingSportsEventStatus : NSObject
```

<a id="overview"></a>

## Overview

A `CPNowPlayingSportsEventStatus` object contains information that isn’t tied to a particular team. You specify this content using a combination of text and images, so it can be anything that’s relevant for the sport. For example, a baseball game might display the inning information, the bases that have runners, the number of outs, and the number of balls and strikes for the current batter. CarPlay displays this information in the center area of the Now Playing interface between the team details.

Create a `CPNowPlayingSportsEventStatus` object during the creation of match-related content for the Now Playing interface. Use the object you create to initialize the [CPNowPlayingModeSports](cpnowplayingmodesports.md) objects you assign to the [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md) property of the shared [CPNowPlayingTemplate](cpnowplayingtemplate.md) object. During the course of the event, update the information in this object as needed to reflect changes. For example, update the inning information in a baseball match, or update the clock information when the play clock pauses and resumes.

## Topics

### Creating a sports mode type

- [initWithEventStatusText:eventStatusImage:eventClock:](cpnowplayingsportseventstatus/init%28eventstatustext_eventstatusimage_eventclock_%29.md): Creates an event status object from information you provide.

### Getting the event status

- [eventStatusText](cpnowplayingsportseventstatus/eventstatustext.md): One to three strings you use to convey event-related details in the Now Playing interface.
- [eventStatusImage](cpnowplayingsportseventstatus/eventstatusimage.md): An image you use to convey event-related details in the Now Playing interface.
- [eventClock](cpnowplayingsportseventstatus/eventclock.md): The clock information you provided for the event.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Sports mode content

- [CPNowPlayingSportsTeam](cpnowplayingsportsteam.md): A type that specifies team-specific details, including the name, standings, and current score in the match.
- [CPNowPlayingSportsTeamLogo](cpnowplayingsportsteamlogo.md): A type that manages logo information for a sports team.
- [CPNowPlayingSportsClock](cpnowplayingsportsclock.md): A type that specifies the elapsed or remaining time in a match and the state of the clock.
