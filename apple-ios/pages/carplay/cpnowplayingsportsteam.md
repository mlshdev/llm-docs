> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingsportsteam](https://developer.apple.com/documentation/carplay/cpnowplayingsportsteam)

# CPNowPlayingSportsTeam (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A representation of a sports team for the now playing screen, in sports that have exactly two teams.

## Declaration

```swift
@MainActor class CPNowPlayingSportsTeam
```

## Topics

### Initializers

- [init(coder:)](cpnowplayingsportsteam/init%28coder_%29.md)
- [init(name:logo:teamStandings:eventScore:possessionIndicator:favorite:)](cpnowplayingsportsteam/init%28name_logo_teamstandings_eventscore_possessionindicator_favorite_%29.md): Initialize a sports team for display on the now playing screen.

### Instance Properties

- [eventScore](cpnowplayingsportsteam/eventscore.md): The numeric score string for this team in the current event. Depending on the size of the car screen, a maximum of 3 to 5 characters may be displayed.
- [isFavorite](cpnowplayingsportsteam/isfavorite.md): If true, the team is marked with a star to indicate it has been saved as a user favorite.
- [logo](cpnowplayingsportsteam/logo.md): The team logo or, if no logo is available, the initials/abbreviation for this team. See @c CPNowPlayingSportsTeamLogo.
- [name](cpnowplayingsportsteam/name.md): A localized, user-visible name for this sports team.
- [possessionIndicator](cpnowplayingsportsteam/possessionindicator.md): An optional indicator used to indicate possession by this team. Only one team should have possession at a given time.
- [teamStandings](cpnowplayingsportsteam/teamstandings.md): An optional additional label displayed near the team name. This could be a win-loss ratio string, team standings, or other statistics relevant to this team. Depending on the size of the car screen, a maximum of 15-20 characters may be displayed.

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

# CPNowPlayingSportsTeam (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A representation of a sports team for the now playing screen, in sports that have exactly two teams.

## Declaration

```objectivec
@interface CPNowPlayingSportsTeam : NSObject
```

## Topics

### Instance Properties

- [eventScore](cpnowplayingsportsteam/eventscore.md): The numeric score string for this team in the current event. Depending on the size of the car screen, a maximum of 3 to 5 characters may be displayed.
- [favorite](cpnowplayingsportsteam/isfavorite.md): If true, the team is marked with a star to indicate it has been saved as a user favorite.
- [logo](cpnowplayingsportsteam/logo.md): The team logo or, if no logo is available, the initials/abbreviation for this team. See @c CPNowPlayingSportsTeamLogo.
- [name](cpnowplayingsportsteam/name.md): A localized, user-visible name for this sports team.
- [possessionIndicator](cpnowplayingsportsteam/possessionindicator.md): An optional indicator used to indicate possession by this team. Only one team should have possession at a given time.
- [teamStandings](cpnowplayingsportsteam/teamstandings.md): An optional additional label displayed near the team name. This could be a win-loss ratio string, team standings, or other statistics relevant to this team. Depending on the size of the car screen, a maximum of 15-20 characters may be displayed.

### Instance Methods

- [initWithName:logo:teamStandings:eventScore:possessionIndicator:favorite:](cpnowplayingsportsteam/init%28name_logo_teamstandings_eventscore_possessionindicator_favorite_%29.md): Initialize a sports team for display on the now playing screen.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
