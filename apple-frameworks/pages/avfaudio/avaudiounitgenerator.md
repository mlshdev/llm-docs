> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitgenerator](https://developer.apple.com/documentation/avfaudio/avaudiounitgenerator)

# AVAudioUnitGenerator (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that generates audio output.

## Declaration

```swift
class AVAudioUnitGenerator
```

<a id="overview"></a>

## Overview

A generator represents an [AudioUnit](../audiotoolbox/audiounit.md) of type `kAudioUnitType_Generator` or `kAudioUnitType_RemoteGenerator`. A generator has no audio input, but produces audio output. An example is a tone generator.

## Topics

### Creating an audio unit generator

- [init(audioComponentDescription:)](avaudiounitgenerator/init%28audiocomponentdescription_%29.md): Creates a generator audio unit with the specified description.

### Getting and setting the bypass status

- [bypass](avaudiounitgenerator/bypass.md): The bypass state of the audio unit.

## Relationships

### Inherits From

- [AVAudioUnit](avaudiounit.md)

### Conforms To

- [AVAudio3DMixing](avaudio3dmixing.md)
- [AVAudioMixing](avaudiomixing.md)
- [AVAudioStereoMixing](avaudiostereomixing.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVAudioUnitGenerator (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that generates audio output.

## Declaration

```objectivec
@interface AVAudioUnitGenerator : AVAudioUnit
```

<a id="overview"></a>

## Overview

A generator represents an [AudioUnit](../audiotoolbox/audiounit.md) of type `kAudioUnitType_Generator` or `kAudioUnitType_RemoteGenerator`. A generator has no audio input, but produces audio output. An example is a tone generator.

## Topics

### Creating an audio unit generator

- [initWithAudioComponentDescription:](avaudiounitgenerator/init%28audiocomponentdescription_%29.md): Creates a generator audio unit with the specified description.

### Getting and setting the bypass status

- [bypass](avaudiounitgenerator/bypass.md): The bypass state of the audio unit.

## Relationships

### Inherits From

- [AVAudioUnit](avaudiounit.md)

### Conforms To

- [AVAudioMixing](avaudiomixing.md)
