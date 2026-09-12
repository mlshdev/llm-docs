> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingmodesports](https://developer.apple.com/documentation/carplay/cpnowplayingmodesports)

# CPNowPlayingModeSports (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The sports mode represents a layout for now playing suited to live-streaming or recorded playback of a sporting event that features exactly two teams.

## Declaration

```swift
@MainActor class CPNowPlayingModeSports
```

## Topics

### Initializers

- [init(leftTeam:rightTeam:eventStatus:backgroundArtwork:)](cpnowplayingmodesports/init%28leftteam_rightteam_eventstatus_backgroundartwork_%29.md): Initialize a sports mode for display on the CarPlay now playing screen.

### Instance Properties

- [backgroundArtwork](cpnowplayingmodesports/backgroundartwork.md): A large colorful image for the background of the now playing screen. A gradient or crossfade image works best, especially when it includes the primary colors of each team. Provide an image no larger than 500x500.
- [eventStatus](cpnowplayingmodesports/eventstatus.md): A representation of the current event status. See
- [leftTeam](cpnowplayingmodesports/leftteam.md): The sports team that should appear on the left side of the now playing screen. This is commonly (but not always) the AWAY or VISITING team. This team will be on the left in all layouts; it does not flip to the right side when in a right-to-left language or a right-hand-drive vehicle.
- [rightTeam](cpnowplayingmodesports/rightteam.md): The sports team that should appear on the right side of the now playing screen. This is commonly (but not always) the HOME team. This team will be on the right in all layouts; it does not flip to the left side when in a right-to-left language or a right-hand-drive vehicle.

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

# CPNowPlayingModeSports (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The sports mode represents a layout for now playing suited to live-streaming or recorded playback of a sporting event that features exactly two teams.

## Declaration

```objectivec
@interface CPNowPlayingModeSports : CPNowPlayingMode
```

## Topics

### Instance Properties

- [backgroundArtwork](cpnowplayingmodesports/backgroundartwork.md): A large colorful image for the background of the now playing screen. A gradient or crossfade image works best, especially when it includes the primary colors of each team. Provide an image no larger than 500x500.
- [eventStatus](cpnowplayingmodesports/eventstatus.md): A representation of the current event status. See
- [leftTeam](cpnowplayingmodesports/leftteam.md): The sports team that should appear on the left side of the now playing screen. This is commonly (but not always) the AWAY or VISITING team. This team will be on the left in all layouts; it does not flip to the right side when in a right-to-left language or a right-hand-drive vehicle.
- [rightTeam](cpnowplayingmodesports/rightteam.md): The sports team that should appear on the right side of the now playing screen. This is commonly (but not always) the HOME team. This team will be on the right in all layouts; it does not flip to the left side when in a right-to-left language or a right-hand-drive vehicle.

### Instance Methods

- [initWithLeftTeam:rightTeam:eventStatus:backgroundArtwork:](cpnowplayingmodesports/init%28leftteam_rightteam_eventstatus_backgroundartwork_%29.md): Initialize a sports mode for display on the CarPlay now playing screen.

## Relationships

### Inherits From

- [CPNowPlayingMode](cpnowplayingmode.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
