> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiooutputnode](https://developer.apple.com/documentation/avfaudio/avaudiooutputnode)

# AVAudioOutputNode (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that connects to the system’s audio output.

## Declaration

```swift
class AVAudioOutputNode
```

<a id="overview"></a>

## Overview

This node connects to the system’s audio output when rendering to or from an audio device. This node performs output in response to client’s requests when the engine is in manual rendering mode.

This audio node has one element. The format of the output scope reflects:

- The audio hardware sample rate and channel count when it connects to the hardware.
- The engine’s manual rendering mode output format (see [manualRenderingFormat](avaudioengine/manualrenderingformat.md)).

The format of the input scope is initially the same as that of the output, but you may set it to a different format, in which case the audio node converts.

> **Important**

>  This class has no methods of its own. It overrides methods that its base classes define.

## Topics

### Configuring the Spatial Audio experience

- [intendedSpatialExperience](avaudiooutputnode/intendedspatialexperience-3ts59.md): The intended spatial experience for this output node.

## Relationships

### Inherits From

- [AVAudioIONode](avaudioionode.md)

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

### Nodes

- [AVAudioNode](avaudionode.md): An object you use for audio generation, processing, or an I/O block.
- [AVAudioInputNode](avaudioinputnode.md): An object that connects to the system’s audio input.
- [AVAudioIONode](avaudioionode.md): An object that performs audio input or output in the engine.

# AVAudioOutputNode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that connects to the system’s audio output.

## Declaration

```objectivec
@interface AVAudioOutputNode : AVAudioIONode
```

<a id="overview"></a>

## Overview

This node connects to the system’s audio output when rendering to or from an audio device. This node performs output in response to client’s requests when the engine is in manual rendering mode.

This audio node has one element. The format of the output scope reflects:

- The audio hardware sample rate and channel count when it connects to the hardware.
- The engine’s manual rendering mode output format (see [manualRenderingFormat](avaudioengine/manualrenderingformat.md)).

The format of the input scope is initially the same as that of the output, but you may set it to a different format, in which case the audio node converts.

> **Important**

>  This class has no methods of its own. It overrides methods that its base classes define.

## Topics

### Configuring the Spatial Audio experience

- [intendedSpatialExperience](avaudiooutputnode/intendedspatialexperience-3uznq.md): The intended spatial experience for this output node.

## Relationships

### Inherits From

- [AVAudioIONode](avaudioionode.md)

## See Also

### Nodes

- [AVAudioNode](avaudionode.md): An object you use for audio generation, processing, or an I/O block.
- [AVAudioInputNode](avaudioinputnode.md): An object that connects to the system’s audio input.
- [AVAudioIONode](avaudioionode.md): An object that performs audio input or output in the engine.
- [AVAudioIONodeInputBlockRealtimeSafe](avaudioionodeinputblockrealtimesafe.md)
