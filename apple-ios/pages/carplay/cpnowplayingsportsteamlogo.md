> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingsportsteamlogo](https://developer.apple.com/documentation/carplay/cpnowplayingsportsteamlogo)

# CPNowPlayingSportsTeamLogo (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A logo image or, if no image is available, an abbreviation or initialism for this team.

## Declaration

```swift
@MainActor class CPNowPlayingSportsTeamLogo
```

## Topics

### Initializers

- [init(coder:)](cpnowplayingsportsteamlogo/init%28coder_%29.md)
- [init(teamInitials:)](cpnowplayingsportsteamlogo/init%28teaminitials_%29.md): If no team logo image is available, initialize a team logo with an abbreviation or initialism for this team.
- [init(teamLogo:)](cpnowplayingsportsteamlogo/init%28teamlogo_%29.md): Initialize a team logo with an image representation of this team. Provide an image no larger than 350x350; larger images will be resized down.

### Instance Properties

- [initials](cpnowplayingsportsteamlogo/initials.md): An abbreviation or initialism for this team, used only if no logo image is available for this team.
- [logo](cpnowplayingsportsteamlogo/logo.md): A team logo image for this team.

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

# CPNowPlayingSportsTeamLogo (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A logo image or, if no image is available, an abbreviation or initialism for this team.

## Declaration

```objectivec
@interface CPNowPlayingSportsTeamLogo : NSObject
```

## Topics

### Instance Properties

- [initials](cpnowplayingsportsteamlogo/initials.md): An abbreviation or initialism for this team, used only if no logo image is available for this team.
- [logo](cpnowplayingsportsteamlogo/logo.md): A team logo image for this team.

### Instance Methods

- [initWithTeamInitials:](cpnowplayingsportsteamlogo/init%28teaminitials_%29.md): If no team logo image is available, initialize a team logo with an abbreviation or initialism for this team.
- [initWithTeamLogo:](cpnowplayingsportsteamlogo/init%28teamlogo_%29.md): Initialize a team logo with an image representation of this team. Provide an image no larger than 350x350; larger images will be resized down.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
