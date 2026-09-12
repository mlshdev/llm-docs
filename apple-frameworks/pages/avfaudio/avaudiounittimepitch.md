> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounittimepitch](https://developer.apple.com/documentation/avfaudio/avaudiounittimepitch)

# AVAudioUnitTimePitch (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that provides a good-quality playback rate and pitch shifting independently of each other.

## Declaration

```swift
class AVAudioUnitTimePitch
```

## Topics

### Getting and setting time pitch values

- [overlap](avaudiounittimepitch/overlap.md): The amount of overlap between segments of the input audio signal.
- [pitch](avaudiounittimepitch/pitch.md): The amount to use to pitch shift the input signal.
- [rate](avaudiounittimepitch/rate.md): The playback rate of the input signal.

## Relationships

### Inherits From

- [AVAudioUnitTimeEffect](avaudiounittimeeffect.md)

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

- [AVAudioUnitTimeEffect](avaudiounittimeeffect.md): An object that processes audio in nonreal time.
- [AVAudioUnitVarispeed](avaudiounitvarispeed.md): An object that allows control of the playback rate.

# AVAudioUnitTimePitch (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that provides a good-quality playback rate and pitch shifting independently of each other.

## Declaration

```objectivec
@interface AVAudioUnitTimePitch : AVAudioUnitTimeEffect
```

## Topics

### Getting and setting time pitch values

- [overlap](avaudiounittimepitch/overlap.md): The amount of overlap between segments of the input audio signal.
- [pitch](avaudiounittimepitch/pitch.md): The amount to use to pitch shift the input signal.
- [rate](avaudiounittimepitch/rate.md): The playback rate of the input signal.

## Relationships

### Inherits From

- [AVAudioUnitTimeEffect](avaudiounittimeeffect.md)

## See Also

### Time effects

- [AVAudioUnitTimeEffect](avaudiounittimeeffect.md): An object that processes audio in nonreal time.
- [AVAudioUnitVarispeed](avaudiounitvarispeed.md): An object that allows control of the playback rate.
