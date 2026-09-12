> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosourcenode](https://developer.apple.com/documentation/avfaudio/avaudiosourcenode)

# AVAudioSourceNode (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that supplies audio data.

## Declaration

```swift
class AVAudioSourceNode
```

<a id="overview"></a>

## Overview

The `AVAudioSourceNode` class allows for supplying audio data for rendering through [AVAudioSourceNodeRenderBlock](avaudiosourcenoderenderblock.md). It’s a convenient method for delievering audio data instead of setting the input callback on an audio unit with `kAudioUnitProperty_SetRenderCallback`.

## Topics

### Creating an Audio Source Node

- [AVAudioSourceNodeRenderBlock](avaudiosourcenoderenderblock.md): A block that supplies audio data to an audio source node.
- [init(renderBlock:)](avaudiosourcenode/init%28renderblock_%29.md): Creates an audio source node with a block that supplies audio data.
- [init(format:renderBlock:)](avaudiosourcenode/init%28format_renderblock_%29.md): Creates an audio source node with the audio format and a block that supplies audio data.

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

### Rendering

- [Building a signal generator](building-a-signal-generator.md): Generate audio signals using an audio source node and a custom render callback.
- [Performing offline audio processing](performing-offline-audio-processing.md): Add offline audio processing features to your app by enabling offline manual rendering mode.
- [AVAudioSinkNode](avaudiosinknode.md): An object that receives audio data.

# AVAudioSourceNode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that supplies audio data.

## Declaration

```objectivec
@interface AVAudioSourceNode : AVAudioNode
```

<a id="overview"></a>

## Overview

The `AVAudioSourceNode` class allows for supplying audio data for rendering through [AVAudioSourceNodeRenderBlock](avaudiosourcenoderenderblock.md). It’s a convenient method for delievering audio data instead of setting the input callback on an audio unit with `kAudioUnitProperty_SetRenderCallback`.

## Topics

### Creating an Audio Source Node

- [AVAudioSourceNodeRenderBlock](avaudiosourcenoderenderblock.md): A block that supplies audio data to an audio source node.
- [initWithRenderBlock:](avaudiosourcenode/init%28renderblock_%29.md): Creates an audio source node with a block that supplies audio data.
- [initWithFormat:renderBlock:](avaudiosourcenode/init%28format_renderblock_%29.md): Creates an audio source node with the audio format and a block that supplies audio data.

### Instance Methods

- [initWithFormat:realtimeSafeRenderBlock:](avaudiosourcenode/initwithformat_realtimesaferenderblock_.md)
- [initWithRealtimeSafeRenderBlock:](avaudiosourcenode/initwithrealtimesaferenderblock_.md)

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

### Conforms To

- [AVAudioMixing](avaudiomixing.md)

## See Also

### Rendering

- [Building a signal generator](building-a-signal-generator.md): Generate audio signals using an audio source node and a custom render callback.
- [Performing offline audio processing](performing-offline-audio-processing.md): Add offline audio processing features to your app by enabling offline manual rendering mode.
- [AVAudioSourceNodeRenderBlockRealtimeSafe](avaudiosourcenoderenderblockrealtimesafe.md)
- [AVAudioSinkNode](avaudiosinknode.md): An object that receives audio data.
- [AVAudioSinkNodeReceiverBlockRealtimeSafe](avaudiosinknodereceiverblockrealtimesafe.md)
