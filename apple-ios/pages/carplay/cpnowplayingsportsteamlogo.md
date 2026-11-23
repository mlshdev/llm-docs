> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteamlogo

# CPNowPlayingSportsTeamLogo (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A type that manages logo information for a sports team.

## Declaration

```swift
@MainActor class CPNowPlayingSportsTeamLogo
```

<a id="overview"></a>

## Overview

A `CPNowPlayingSportsTeamLogo` object manages the identifying content for a team. Specify a team’s logo using an image or an abbreviation of the team’s name. For example, an American football team might display an image with the team’s helmet design. CarPlay displays logo information prominently for each team in the Now Playing interface.

Create two `CPNowPlayingSportsTeamLogo` objects during the creation of sports event-related information for the Now Playing interface. Use the logo objects you create to initialize the [CPNowPlayingSportsTeam](cpnowplayingsportsteam.md) objects you use to specify the team information.

## Topics

### Creating a team logo

- [init(teamLogo:)](cpnowplayingsportsteamlogo/init%28teamlogo_%29.md): Creates a logo object using a team-specific image.
- [init(teamInitials:)](cpnowplayingsportsteamlogo/init%28teaminitials_%29.md): Creates a logo object using the team’s initials or the official abbreviation of the team name.
- [init(coder:)](cpnowplayingsportsteamlogo/init%28coder_%29.md)

### Getting the logo content

- [logo](cpnowplayingsportsteamlogo/logo.md): The image with the team’s logo.
- [initials](cpnowplayingsportsteamlogo/initials.md): The team’s initials or official team-name abbreviation.

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
- [CPNowPlayingSportsEventStatus](cpnowplayingsportseventstatus.md): A type that manages match-focused information, including the event clock.
- [CPNowPlayingSportsClock](cpnowplayingsportsclock.md): A type that specifies the elapsed or remaining time in a match and the state of the clock.

# CPNowPlayingSportsTeamLogo (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A type that manages logo information for a sports team.

## Declaration

```objectivec
@interface CPNowPlayingSportsTeamLogo : NSObject
```

<a id="overview"></a>

## Overview

A `CPNowPlayingSportsTeamLogo` object manages the identifying content for a team. Specify a team’s logo using an image or an abbreviation of the team’s name. For example, an American football team might display an image with the team’s helmet design. CarPlay displays logo information prominently for each team in the Now Playing interface.

Create two `CPNowPlayingSportsTeamLogo` objects during the creation of sports event-related information for the Now Playing interface. Use the logo objects you create to initialize the [CPNowPlayingSportsTeam](cpnowplayingsportsteam.md) objects you use to specify the team information.

## Topics

### Creating a team logo

- [initWithTeamLogo:](cpnowplayingsportsteamlogo/init%28teamlogo_%29.md): Creates a logo object using a team-specific image.
- [initWithTeamInitials:](cpnowplayingsportsteamlogo/init%28teaminitials_%29.md): Creates a logo object using the team’s initials or the official abbreviation of the team name.

### Getting the logo content

- [logo](cpnowplayingsportsteamlogo/logo.md): The image with the team’s logo.
- [initials](cpnowplayingsportsteamlogo/initials.md): The team’s initials or official team-name abbreviation.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Sports mode content

- [CPNowPlayingSportsTeam](cpnowplayingsportsteam.md): A type that specifies team-specific details, including the name, standings, and current score in the match.
- [CPNowPlayingSportsEventStatus](cpnowplayingsportseventstatus.md): A type that manages match-focused information, including the event clock.
- [CPNowPlayingSportsClock](cpnowplayingsportsclock.md): A type that specifies the elapsed or remaining time in a match and the state of the clock.
