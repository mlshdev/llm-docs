> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosinknode](https://developer.apple.com/documentation/avfaudio/avaudiosinknode)

# AVAudioSinkNode (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that receives audio data.

## Declaration

```swift
class AVAudioSinkNode
```

<a id="overview"></a>

## Overview

You use an `AVAudioSinkNode` to receive audio data through [AVAudioSinkNodeReceiverBlock](avaudiosinknodereceiverblock.md). You only use it in the input chain.

An audio sink node doesn’t support format conversion. When connecting, use the output format of the input for the format for the connection. The format should match the hardware input sample rate.

The voice processing I/O unit is an exception to the above because it supports sample rate conversion. The input scope format (hardware format) and output scope format (client format) of the input node can differ in that case.

An audio sink node doesn’t support manual rendering mode, and doesn’t have an output bus, so you can’t install a tap on it.

## Topics

### Creating an Audio Sink Node

- [AVAudioSinkNodeReceiverBlock](avaudiosinknodereceiverblock.md): A block that receives audio data from an audio sink node.
- [init(receiverBlock:)](avaudiosinknode/init%28receiverblock_%29.md): Creates an audio sink node with a block that receives audio data.

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

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

### Rendering

- [Building a signal generator](building-a-signal-generator.md): Generate audio signals using an audio source node and a custom render callback.
- [Performing offline audio processing](performing-offline-audio-processing.md): Add offline audio processing features to your app by enabling offline manual rendering mode.
- [AVAudioSourceNode](avaudiosourcenode.md): An object that supplies audio data.

# AVAudioSinkNode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that receives audio data.

## Declaration

```objectivec
@interface AVAudioSinkNode : AVAudioNode
```

<a id="overview"></a>

## Overview

You use an `AVAudioSinkNode` to receive audio data through [AVAudioSinkNodeReceiverBlock](avaudiosinknodereceiverblock.md). You only use it in the input chain.

An audio sink node doesn’t support format conversion. When connecting, use the output format of the input for the format for the connection. The format should match the hardware input sample rate.

The voice processing I/O unit is an exception to the above because it supports sample rate conversion. The input scope format (hardware format) and output scope format (client format) of the input node can differ in that case.

An audio sink node doesn’t support manual rendering mode, and doesn’t have an output bus, so you can’t install a tap on it.

## Topics

### Creating an Audio Sink Node

- [AVAudioSinkNodeReceiverBlock](avaudiosinknodereceiverblock.md): A block that receives audio data from an audio sink node.
- [initWithReceiverBlock:](avaudiosinknode/init%28receiverblock_%29.md): Creates an audio sink node with a block that receives audio data.

### Instance Methods

- [initWithRealtimeSafeReceiverBlock:](avaudiosinknode/initwithrealtimesafereceiverblock_.md)

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

## See Also

### Rendering

- [Building a signal generator](building-a-signal-generator.md): Generate audio signals using an audio source node and a custom render callback.
- [Performing offline audio processing](performing-offline-audio-processing.md): Add offline audio processing features to your app by enabling offline manual rendering mode.
- [AVAudioSourceNode](avaudiosourcenode.md): An object that supplies audio data.
- [AVAudioSourceNodeRenderBlockRealtimeSafe](avaudiosourcenoderenderblockrealtimesafe.md)
- [AVAudioSinkNodeReceiverBlockRealtimeSafe](avaudiosinknodereceiverblockrealtimesafe.md)
