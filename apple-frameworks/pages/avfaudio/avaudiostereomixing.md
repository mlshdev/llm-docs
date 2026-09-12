> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiostereomixing](https://developer.apple.com/documentation/avfaudio/avaudiostereomixing)

# AVAudioStereoMixing (Swift)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines stereo mixing properties a mixer uses.

## Declaration

```swift
protocol AVAudioStereoMixing : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

> **Important**

>  The [AVAudioMixing](avaudiomixing.md) protocol adopts this protocol. As a result, many classes also inherit this protocol by adopting `AVAudioMixing`.

## Topics

### Getting and Setting the Stereo Panning

- [pan](avaudiostereomixing/pan.md): The bus’s stereo pan.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [AVAudioMixing](avaudiomixing.md)

### Conforming Types

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md)
- [AVAudioInputNode](avaudioinputnode.md)
- [AVAudioMixerNode](avaudiomixernode.md)
- [AVAudioMixingDestination](avaudiomixingdestination.md)
- [AVAudioPlayerNode](avaudioplayernode.md)
- [AVAudioSourceNode](avaudiosourcenode.md)
- [AVAudioUnitGenerator](avaudiounitgenerator.md)
- [AVAudioUnitMIDIInstrument](avaudiounitmidiinstrument.md)
- [AVAudioUnitSampler](avaudiounitsampler.md)

## See Also

### Defining Mixing Properties

- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.

# AVAudioStereoMixing (Objective-C)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines stereo mixing properties a mixer uses.

## Declaration

```objectivec
@protocol AVAudioStereoMixing <NSObject>
```

<a id="overview"></a>

## Overview

> **Important**

>  The [AVAudioMixing](avaudiomixing.md) protocol adopts this protocol. As a result, many classes also inherit this protocol by adopting `AVAudioMixing`.

## Topics

### Getting and Setting the Stereo Panning

- [pan](avaudiostereomixing/pan.md): The bus’s stereo pan.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [AVAudioMixing](avaudiomixing.md)

## See Also

### Defining Mixing Properties

- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.
