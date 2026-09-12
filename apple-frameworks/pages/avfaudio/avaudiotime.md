> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiotime](https://developer.apple.com/documentation/avfaudio/avaudiotime)

# AVAudioTime (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object you use to represent a moment in time.

## Declaration

```swift
class AVAudioTime
```

<a id="overview"></a>

## Overview

The `AVAudioTime` object represents a single moment in time in two ways:

- As host time, using the system’s basic clock with `mach_absolute_time()`
- As audio samples at a particular sample rate

A single `AVAudioTime` instance contains either or both representations, meaning it might represent only a sample time, a host time, or both.

Instances of this class are immutable.

## Topics

### Creating an Audio Time Instance

- [init(audioTimeStamp:sampleRate:)](avaudiotime/init%28audiotimestamp_samplerate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [init(hostTime:)](avaudiotime/init%28hosttime_%29.md): Creates an audio time object with the specified host time.
- [init(hostTime:sampleTime:atRate:)](avaudiotime/init%28hosttime_sampletime_atrate_%29.md): Creates an audio time object with the specified host time, sample time, and sample rate.
- [init(sampleTime:atRate:)](avaudiotime/init%28sampletime_atrate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [extrapolateTime(fromAnchor:)](avaudiotime/extrapolatetime%28fromanchor_%29.md): Creates an audio time object by converting between host time and sample time.

### Manipulating Host Time

- [hostTime](avaudiotime/hosttime.md): The host time.
- [isHostTimeValid](avaudiotime/ishosttimevalid.md): A Boolean value that indicates whether the host time value is valid.
- [hostTime(forSeconds:)](avaudiotime/hosttime%28forseconds_%29.md): Converts seconds to host time.
- [seconds(forHostTime:)](avaudiotime/seconds%28forhosttime_%29.md): Converts host time to seconds.

### Getting Sample Rate Information

- [sampleRate](avaudiotime/samplerate.md): The sampling rate that the sample time property expresses.
- [sampleTime](avaudiotime/sampletime.md): The time as a number of audio samples that the current audio device tracks.
- [isSampleTimeValid](avaudiotime/issampletimevalid.md): A Boolean value that indicates whether the sample time and sample rate properties are in a valid state.

### Getting the Core Audio Time Stamp

- [audioTimeStamp](avaudiotime/audiotimestamp.md): The time as an audio timestamp.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting data types

- [AVAudioBuffer](avaudiobuffer.md): An object that represents a buffer of audio data with a format.
- [AVAudioPCMBuffer](avaudiopcmbuffer.md): An object that represents an audio buffer you use with PCM audio formats.
- [AVReadOnlyAudioPCMBuffer](avreadonlyaudiopcmbuffer.md): A read-only, Sendable audio buffer for safe concurrent access.
- [AVAudioFile](avaudiofile.md): An object that represents an audio file that the system can open for reading or writing.
- [Audio settings](audio-settings.md): Configure audio processing settings using standard key and value constants.

# AVAudioTime (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object you use to represent a moment in time.

## Declaration

```objectivec
@interface AVAudioTime : NSObject
```

<a id="overview"></a>

## Overview

The `AVAudioTime` object represents a single moment in time in two ways:

- As host time, using the system’s basic clock with `mach_absolute_time()`
- As audio samples at a particular sample rate

A single `AVAudioTime` instance contains either or both representations, meaning it might represent only a sample time, a host time, or both.

Instances of this class are immutable.

## Topics

### Creating an Audio Time Instance

- [initWithAudioTimeStamp:sampleRate:](avaudiotime/init%28audiotimestamp_samplerate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [initWithHostTime:](avaudiotime/init%28hosttime_%29.md): Creates an audio time object with the specified host time.
- [initWithHostTime:sampleTime:atRate:](avaudiotime/init%28hosttime_sampletime_atrate_%29.md): Creates an audio time object with the specified host time, sample time, and sample rate.
- [initWithSampleTime:atRate:](avaudiotime/init%28sampletime_atrate_%29.md): Creates an audio time object with the specified timestamp and sample rate.
- [timeWithAudioTimeStamp:sampleRate:](avaudiotime/timewithaudiotimestamp_samplerate_.md): Creates an audio time object with the specified timestamp and sample rate.
- [timeWithHostTime:sampleTime:atRate:](avaudiotime/timewithhosttime_sampletime_atrate_.md): Creates an audio time object with the specified host time, sample time, and sample rate.
- [timeWithSampleTime:atRate:](avaudiotime/timewithsampletime_atrate_.md): Creates an audio time object with the specified sample time and sample rate.
- [timeWithHostTime:](avaudiotime/timewithhosttime_.md): Creates an audio time object with the specified host time.
- [extrapolateTimeFromAnchor:](avaudiotime/extrapolatetime%28fromanchor_%29.md): Creates an audio time object by converting between host time and sample time.

### Manipulating Host Time

- [hostTime](avaudiotime/hosttime.md): The host time.
- [hostTimeValid](avaudiotime/ishosttimevalid.md): A Boolean value that indicates whether the host time value is valid.
- [hostTimeForSeconds:](avaudiotime/hosttime%28forseconds_%29.md): Converts seconds to host time.
- [secondsForHostTime:](avaudiotime/seconds%28forhosttime_%29.md): Converts host time to seconds.

### Getting Sample Rate Information

- [sampleRate](avaudiotime/samplerate.md): The sampling rate that the sample time property expresses.
- [sampleTime](avaudiotime/sampletime.md): The time as a number of audio samples that the current audio device tracks.
- [sampleTimeValid](avaudiotime/issampletimevalid.md): A Boolean value that indicates whether the sample time and sample rate properties are in a valid state.

### Getting the Core Audio Time Stamp

- [audioTimeStamp](avaudiotime/audiotimestamp.md): The time as an audio timestamp.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Supporting data types

- [AVAudioBuffer](avaudiobuffer.md): An object that represents a buffer of audio data with a format.
- [AVAudioPCMBuffer](avaudiopcmbuffer.md): An object that represents an audio buffer you use with PCM audio formats.
- [AVAudioFile](avaudiofile.md): An object that represents an audio file that the system can open for reading or writing.
- [Audio settings](audio-settings.md): Configure audio processing settings using standard key and value constants.
