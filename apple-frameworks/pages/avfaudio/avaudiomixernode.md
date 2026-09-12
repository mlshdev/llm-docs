> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiomixernode](https://developer.apple.com/documentation/avfaudio/avaudiomixernode)

# AVAudioMixerNode (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that takes any number of inputs and converts them into a single output.

## Declaration

```swift
class AVAudioMixerNode
```

<a id="overview"></a>

## Overview

The mixer accepts input at any sample rate and efficiently combines sample rate conversions. It also accepts any channel count and correctly upmixes or downmixes to the output channel count.

## Topics

### Creating a Mixer Node

- [init()](avaudiomixernode/init%28%29.md): Creates an audio mixer node.

### Getting and Setting the Mixer Volume

- [outputVolume](avaudiomixernode/outputvolume.md): The mixer’s output volume.

### Getting an Input Bus

- [nextAvailableInputBus](avaudiomixernode/nextavailableinputbus.md): An audio bus that isn’t in a connected state.

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

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

## See Also

### Mixing

- [AVAudioMixing](avaudiomixing.md): A collection of properties that are applicable to the input bus of a mixer node.

# AVAudioMixerNode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that takes any number of inputs and converts them into a single output.

## Declaration

```objectivec
@interface AVAudioMixerNode : AVAudioNode
```

<a id="overview"></a>

## Overview

The mixer accepts input at any sample rate and efficiently combines sample rate conversions. It also accepts any channel count and correctly upmixes or downmixes to the output channel count.

## Topics

### Creating a Mixer Node

- [init](avaudiomixernode/init%28%29.md): Creates an audio mixer node.

### Getting and Setting the Mixer Volume

- [outputVolume](avaudiomixernode/outputvolume.md): The mixer’s output volume.

### Getting an Input Bus

- [nextAvailableInputBus](avaudiomixernode/nextavailableinputbus.md): An audio bus that isn’t in a connected state.

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

### Conforms To

- [AVAudioMixing](avaudiomixing.md)

## See Also

### Mixing

- [AVAudioMixing](avaudiomixing.md): A collection of properties that are applicable to the input bus of a mixer node.
