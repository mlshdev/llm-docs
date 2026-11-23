> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteam

# CPNowPlayingSportsTeam (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A type that specifies team-specific details, including the name, standings, and current score in the match.

## Declaration

```swift
@MainActor class CPNowPlayingSportsTeam
```

<a id="overview"></a>

## Overview

A `CPNowPlayingSportsTeam` object manages the details for one of the opponents in a match. This type stores team-specific information, such as the team’s name, logo artwork, their standings, and whether it’s a person’s favorite team. This type also stores the current score for the team, which you update each time the team scores. CarPlay displays team information prominently in the Now Playing interface on the left or ride side of the display.

At the start of a match, create two `CPNowPlayingSportsTeam` objects and fill them with information about the opposing teams. To display the team information in the Now Playing interface, create a [CPNowPlayingModeSports](cpnowplayingmodesports.md) object, initialize it with the teams you created, and assign it to the [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md) property of the shared [CPNowPlayingTemplate](cpnowplayingtemplate.md) object. When the score changes during the match, recreate the team objects with the new score values and update the object in the [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md) property.

## Topics

### Creating a sports team object

- [init(name:logo:teamStandings:eventScore:possessionIndicator:favorite:)](cpnowplayingsportsteam/init%28name_logo_teamstandings_eventscore_possessionindicator_favorite_%29.md): Creates an object using a team’s name, logo, and other information.
- [init(coder:)](cpnowplayingsportsteam/init%28coder_%29.md)

### Getting the team information

- [name](cpnowplayingsportsteam/name.md): The localized name of the team.
- [logo](cpnowplayingsportsteam/logo.md): The logo information for the team.
- [isFavorite](cpnowplayingsportsteam/isfavorite.md): A Boolean value that indicates whether the team is one of the person’s favorites.
- [teamStandings](cpnowplayingsportsteam/teamstandings.md): Team-specific information to display with the team’s name and logo.

### Getting match-related details

- [eventScore](cpnowplayingsportsteam/eventscore.md): The number of points or current score for the team.
- [possessionIndicator](cpnowplayingsportsteam/possessionindicator.md): An optional image to display next to the team in possession of the ball.

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

- [CPNowPlayingSportsTeamLogo](cpnowplayingsportsteamlogo.md): A type that manages logo information for a sports team.
- [CPNowPlayingSportsEventStatus](cpnowplayingsportseventstatus.md): A type that manages match-focused information, including the event clock.
- [CPNowPlayingSportsClock](cpnowplayingsportsclock.md): A type that specifies the elapsed or remaining time in a match and the state of the clock.

# CPNowPlayingSportsTeam (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A type that specifies team-specific details, including the name, standings, and current score in the match.

## Declaration

```objectivec
@interface CPNowPlayingSportsTeam : NSObject
```

<a id="overview"></a>

## Overview

A `CPNowPlayingSportsTeam` object manages the details for one of the opponents in a match. This type stores team-specific information, such as the team’s name, logo artwork, their standings, and whether it’s a person’s favorite team. This type also stores the current score for the team, which you update each time the team scores. CarPlay displays team information prominently in the Now Playing interface on the left or ride side of the display.

At the start of a match, create two `CPNowPlayingSportsTeam` objects and fill them with information about the opposing teams. To display the team information in the Now Playing interface, create a [CPNowPlayingModeSports](cpnowplayingmodesports.md) object, initialize it with the teams you created, and assign it to the [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md) property of the shared [CPNowPlayingTemplate](cpnowplayingtemplate.md) object. When the score changes during the match, recreate the team objects with the new score values and update the object in the [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md) property.

## Topics

### Creating a sports team object

- [initWithName:logo:teamStandings:eventScore:possessionIndicator:favorite:](cpnowplayingsportsteam/init%28name_logo_teamstandings_eventscore_possessionindicator_favorite_%29.md): Creates an object using a team’s name, logo, and other information.

### Getting the team information

- [name](cpnowplayingsportsteam/name.md): The localized name of the team.
- [logo](cpnowplayingsportsteam/logo.md): The logo information for the team.
- [favorite](cpnowplayingsportsteam/isfavorite.md): A Boolean value that indicates whether the team is one of the person’s favorites.
- [teamStandings](cpnowplayingsportsteam/teamstandings.md): Team-specific information to display with the team’s name and logo.

### Getting match-related details

- [eventScore](cpnowplayingsportsteam/eventscore.md): The number of points or current score for the team.
- [possessionIndicator](cpnowplayingsportsteam/possessionindicator.md): An optional image to display next to the team in possession of the ball.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Sports mode content

- [CPNowPlayingSportsTeamLogo](cpnowplayingsportsteamlogo.md): A type that manages logo information for a sports team.
- [CPNowPlayingSportsEventStatus](cpnowplayingsportseventstatus.md): A type that manages match-focused information, including the event clock.
- [CPNowPlayingSportsClock](cpnowplayingsportsclock.md): A type that specifies the elapsed or remaining time in a match and the state of the clock.
