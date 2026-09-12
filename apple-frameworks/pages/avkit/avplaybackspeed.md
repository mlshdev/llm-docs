> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackspeed](https://developer.apple.com/documentation/avkit/avplaybackspeed)

# AVPlaybackSpeed (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a user-selectable playback speed in a playback user interface.

## Declaration

```swift
class AVPlaybackSpeed
```

## Topics

### Retrieving Default Speeds

- [systemDefaultSpeeds](avplaybackspeed/systemdefaultspeeds.md): A list of playback speeds the system uses by default.

### Creating a Playback Speed

- [init(rate:localizedName:)](avplaybackspeed/init%28rate_localizedname_%29.md): Creates a playback speed with a rate and localized name.

### Inspecting Speed Details

- [rate](avplaybackspeed/rate.md): The playback rate to use when you select this speed.
- [localizedName](avplaybackspeed/localizedname.md): A localized name for a speed that’s suitable for display in a user interface.
- [localizedNumericName](avplaybackspeed/localizednumericname.md): A localized numeric name for a speed that’s suitable for display in a user interface.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the playback speed

- [speeds](avplayerview/speeds.md): A list of user-selectable playback speeds to show in the playback speed control.
- [selectedSpeed](avplayerview/selectedspeed.md): The currently selected playback speed.
- [selectSpeed(\_:)](avplayerview/selectspeed%28__%29.md): Selects a specified playback speed.

# AVPlaybackSpeed (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a user-selectable playback speed in a playback user interface.

## Declaration

```objectivec
@interface AVPlaybackSpeed : NSObject
```

## Topics

### Retrieving Default Speeds

- [systemDefaultSpeeds](avplaybackspeed/systemdefaultspeeds.md): A list of playback speeds the system uses by default.

### Creating a Playback Speed

- [initWithRate:localizedName:](avplaybackspeed/init%28rate_localizedname_%29.md): Creates a playback speed with a rate and localized name.

### Inspecting Speed Details

- [rate](avplaybackspeed/rate.md): The playback rate to use when you select this speed.
- [localizedName](avplaybackspeed/localizedname.md): A localized name for a speed that’s suitable for display in a user interface.
- [localizedNumericName](avplaybackspeed/localizednumericname.md): A localized numeric name for a speed that’s suitable for display in a user interface.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring the playback speed

- [speeds](avplayerview/speeds.md): A list of user-selectable playback speeds to show in the playback speed control.
- [selectedSpeed](avplayerview/selectedspeed.md): The currently selected playback speed.
- [selectSpeed:](avplayerview/selectspeed%28__%29.md): Selects a specified playback speed.
