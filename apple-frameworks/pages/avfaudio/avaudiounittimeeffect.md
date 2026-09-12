> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounittimeeffect](https://developer.apple.com/documentation/avfaudio/avaudiounittimeeffect)

# AVAudioUnitTimeEffect (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that processes audio in nonreal time.

## Declaration

```swift
class AVAudioUnitTimeEffect
```

<a id="overview"></a>

## Overview

A time effect audio unit represents an [AVAudioUnit](avaudiounit.md) with a type `kAudioUnitType_FormatConverter` (`aufc)`. These effects don’t process audio in real time. The [AVAudioUnitVarispeed](avaudiounitvarispeed.md) class is an example of a time effect unit.

## Topics

### Creating a time effect

- [init(audioComponentDescription:)](avaudiounittimeeffect/init%28audiocomponentdescription_%29.md): Creates a time effect audio unit with the specified description.

### Getting and setting the time effect

- [bypass](avaudiounittimeeffect/bypass.md): The bypass state of the audio unit.

## Relationships

### Inherits From

- [AVAudioUnit](avaudiounit.md)

### Inherited By

- [AVAudioUnitTimePitch](avaudiounittimepitch.md)
- [AVAudioUnitVarispeed](avaudiounitvarispeed.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Time effects

- [AVAudioUnitTimePitch](avaudiounittimepitch.md): An object that provides a good-quality playback rate and pitch shifting independently of each other.
- [AVAudioUnitVarispeed](avaudiounitvarispeed.md): An object that allows control of the playback rate.

# AVAudioUnitTimeEffect (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that processes audio in nonreal time.

## Declaration

```objectivec
@interface AVAudioUnitTimeEffect : AVAudioUnit
```

<a id="overview"></a>

## Overview

A time effect audio unit represents an [AVAudioUnit](avaudiounit.md) with a type `kAudioUnitType_FormatConverter` (`aufc)`. These effects don’t process audio in real time. The [AVAudioUnitVarispeed](avaudiounitvarispeed.md) class is an example of a time effect unit.

## Topics

### Creating a time effect

- [initWithAudioComponentDescription:](avaudiounittimeeffect/init%28audiocomponentdescription_%29.md): Creates a time effect audio unit with the specified description.

### Getting and setting the time effect

- [bypass](avaudiounittimeeffect/bypass.md): The bypass state of the audio unit.

## Relationships

### Inherits From

- [AVAudioUnit](avaudiounit.md)

### Inherited By

- [AVAudioUnitTimePitch](avaudiounittimepitch.md)
- [AVAudioUnitVarispeed](avaudiounitvarispeed.md)

## See Also

### Time effects

- [AVAudioUnitTimePitch](avaudiounittimepitch.md): An object that provides a good-quality playback rate and pitch shifting independently of each other.
- [AVAudioUnitVarispeed](avaudiounitvarispeed.md): An object that allows control of the playback rate.
