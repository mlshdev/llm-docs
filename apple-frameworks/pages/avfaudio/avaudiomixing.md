> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiomixing](https://developer.apple.com/documentation/avfaudio/avaudiomixing)

# AVAudioMixing (Swift)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of properties that are applicable to the input bus of a mixer node.

## Declaration

```swift
protocol AVAudioMixing : AVAudio3DMixing, AVAudioStereoMixing
```

<a id="overview"></a>

## Overview

Nodes that conform to the `AVAudioMixing` protocol can talk to a mixer node downstream. This is specific to the classes [AVAudioMixerNode](avaudiomixernode.md) and [AVAudioEnvironmentNode](avaudioenvironmentnode.md). Effect nodes can’t talk to their downstream mixer.

When connecting a source node, the properties that this protocol defines apply to the respective input bus of the mixer.

You can change the state of properties before connecting a source node to the mixer. The system caches your changes and applies them upon connection. It caches the properties again after disconnection.

Source nodes maintain mixing settings when switching between different mixers. For example, an [AVAudioPlayerNode](avaudioplayernode.md), in a gaming scenario, can set up 3D mixing settings and then move from one environment to another.

> **Important**

>  Several classes adopt the `AVAudioMixing` protocol. The protocol itself conforms to [AVAudio3DMixing](avaudio3dmixing.md) and [AVAudioStereoMixing](avaudiostereomixing.md). Classes that conform to `AVAudioMixing` also conform to those protocols.

## Topics

### Defining Mixing Properties

- [AVAudioStereoMixing](avaudiostereomixing.md): A protocol that defines stereo mixing properties a mixer uses.
- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.

### Getting and Setting the Destination

- [AVAudioMixingDestination](avaudiomixingdestination.md): An object that represents a connection to a mixer node from a node that conforms to the audio mixing protocol.
- [destination(forMixer:bus:)](avaudiomixing/destination%28formixer_bus_%29.md): Gets the audio mixing destination object that corresponds to the specified mixer node and input bus.

### Getting and Setting the Bus Volume

- [volume](avaudiomixing/volume.md): The bus’s input volume.

## Relationships

### Inherits From

- [AVAudio3DMixing](avaudio3dmixing.md)
- [AVAudioStereoMixing](avaudiostereomixing.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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

### Mixing

- [AVAudioMixerNode](avaudiomixernode.md): An object that takes any number of inputs and converts them into a single output.

# AVAudioMixing (Objective-C)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of properties that are applicable to the input bus of a mixer node.

## Declaration

```objectivec
@protocol AVAudioMixing <AVAudioStereoMixing, AVAudio3DMixing>
```

<a id="overview"></a>

## Overview

Nodes that conform to the `AVAudioMixing` protocol can talk to a mixer node downstream. This is specific to the classes [AVAudioMixerNode](avaudiomixernode.md) and [AVAudioEnvironmentNode](avaudioenvironmentnode.md). Effect nodes can’t talk to their downstream mixer.

When connecting a source node, the properties that this protocol defines apply to the respective input bus of the mixer.

You can change the state of properties before connecting a source node to the mixer. The system caches your changes and applies them upon connection. It caches the properties again after disconnection.

Source nodes maintain mixing settings when switching between different mixers. For example, an [AVAudioPlayerNode](avaudioplayernode.md), in a gaming scenario, can set up 3D mixing settings and then move from one environment to another.

> **Important**

>  Several classes adopt the `AVAudioMixing` protocol. The protocol itself conforms to [AVAudio3DMixing](avaudio3dmixing.md) and [AVAudioStereoMixing](avaudiostereomixing.md). Classes that conform to `AVAudioMixing` also conform to those protocols.

## Topics

### Defining Mixing Properties

- [AVAudioStereoMixing](avaudiostereomixing.md): A protocol that defines stereo mixing properties a mixer uses.
- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.

### Getting and Setting the Destination

- [AVAudioMixingDestination](avaudiomixingdestination.md): An object that represents a connection to a mixer node from a node that conforms to the audio mixing protocol.
- [destinationForMixer:bus:](avaudiomixing/destination%28formixer_bus_%29.md): Gets the audio mixing destination object that corresponds to the specified mixer node and input bus.

### Getting and Setting the Bus Volume

- [volume](avaudiomixing/volume.md): The bus’s input volume.

## Relationships

### Inherits From

- [AVAudio3DMixing](avaudio3dmixing.md)
- [AVAudioStereoMixing](avaudiostereomixing.md)

### Conforming Types

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md)
- [AVAudioInputNode](avaudioinputnode.md)
- [AVAudioMixerNode](avaudiomixernode.md)
- [AVAudioMixingDestination](avaudiomixingdestination.md)
- [AVAudioPlayerNode](avaudioplayernode.md)
- [AVAudioSourceNode](avaudiosourcenode.md)
- [AVAudioUnitGenerator](avaudiounitgenerator.md)
- [AVAudioUnitMIDIInstrument](avaudiounitmidiinstrument.md)

## See Also

### Mixing

- [AVAudioMixerNode](avaudiomixernode.md): An object that takes any number of inputs and converts them into a single output.
