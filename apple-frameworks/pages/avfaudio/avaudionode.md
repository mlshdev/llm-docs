> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode](https://developer.apple.com/documentation/avfaudio/avaudionode)

# AVAudioNode (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object you use for audio generation, processing, or an I/O block.

## Declaration

```swift
class AVAudioNode
```

<a id="overview"></a>

## Overview

An [AVAudioEngine](avaudioengine.md) object contains instances of audio nodes that you attach, and this base class provides common functionality. Instances of this class don’t provide useful functionality until you attach them to an engine.

Nodes have input and output busses that serve as connection points. For example, an effect has one input bus and one output bus, and a mixer has multiple input busses and one output bus.

A bus contains a format the framework expresses in terms of sample rate and channel count. Formats must match exactly when making connections between nodes, excluding [AVAudioMixerNode](avaudiomixernode.md) and [AVAudioOutputNode](avaudiooutputnode.md).

## Topics

### Configuring an Input Format Bus

- [AVAudioNodeBus](avaudionodebus.md): The index of a bus on an audio node.
- [inputFormat(forBus:)](avaudionode/inputformat%28forbus_%29.md): Gets the input format for the bus you specify.
- [name(forInputBus:)](avaudionode/name%28forinputbus_%29.md): Gets the name of the input bus you specify.
- [numberOfInputs](avaudionode/numberofinputs.md): The number of input busses for the node.

### Creating an Output Format Bus

- [outputFormat(forBus:)](avaudionode/outputformat%28forbus_%29.md): Retrieves the output format for the bus you specify.
- [name(forOutputBus:)](avaudionode/name%28foroutputbus_%29.md): Retrieves the name of the output bus you specify.
- [numberOfOutputs](avaudionode/numberofoutputs.md): The number of output busses for the node.

### Installing and Removing an Audio Tap

- [installAudioTap(onBus:bufferSize:format:tapProvider:)](avaudionode/installaudiotap%28onbus_buffersize_format_tapprovider_%29.md): Install a tap on a bus using a sendable block
- [installTap(onBus:bufferSize:format:block:)](avaudionode/installtap%28onbus_buffersize_format_block_%29.md): Deprecated. Installs an audio tap on a bus you specify to record, monitor, and observe the output of the node.
- [removeTap(onBus:)](avaudionode/removetap%28onbus_%29.md): Removes an audio tap on a bus you specify.
- [AVAudioNodeTapBlock](avaudionodetapblock.md): The block that receives copies of the output of an audio node.

### Getting the Audio Engine for the Node

- [engine](avaudionode/engine.md): The audio engine that manages the node, if any.

### Getting the Latest Node Render Time

- [lastRenderTime](avaudionode/lastrendertime.md): The most recent render time.

### Getting Audio Node Properties

- [withAUAudioUnit(\_:)](avaudionode/withauaudiounit%28__%29.md): Provides scoped access to the node’s AUAudioUnit
- [auAudioUnit](avaudionode/auaudiounit-1gu8g.md): Deprecated. An audio unit object that wraps or underlies the implementation’s audio unit.
- [latency](avaudionode/latency.md): The processing latency of the node, in seconds.
- [outputPresentationLatency](avaudionode/outputpresentationlatency.md): The maximum render pipeline latency downstream of the node, in seconds.

### Resetting the Audio Node

- [reset()](avaudionode/reset%28%29.md): Clears a unit’s previous processing state.

### Constants

- [AVAudioNodeCompletionHandler](avaudionodecompletionhandler.md): A general callback handler for an audio node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md)
- [AVAudioIONode](avaudioionode.md)
- [AVAudioMixerNode](avaudiomixernode.md)
- [AVAudioPlayerNode](avaudioplayernode.md)
- [AVAudioSinkNode](avaudiosinknode.md)
- [AVAudioSourceNode](avaudiosourcenode.md)
- [AVAudioUnit](avaudiounit.md)

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

- [AVAudioInputNode](avaudioinputnode.md): An object that connects to the system’s audio input.
- [AVAudioOutputNode](avaudiooutputnode.md): An object that connects to the system’s audio output.
- [AVAudioIONode](avaudioionode.md): An object that performs audio input or output in the engine.

# AVAudioNode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object you use for audio generation, processing, or an I/O block.

## Declaration

```objectivec
@interface AVAudioNode : NSObject
```

<a id="overview"></a>

## Overview

An [AVAudioEngine](avaudioengine.md) object contains instances of audio nodes that you attach, and this base class provides common functionality. Instances of this class don’t provide useful functionality until you attach them to an engine.

Nodes have input and output busses that serve as connection points. For example, an effect has one input bus and one output bus, and a mixer has multiple input busses and one output bus.

A bus contains a format the framework expresses in terms of sample rate and channel count. Formats must match exactly when making connections between nodes, excluding [AVAudioMixerNode](avaudiomixernode.md) and [AVAudioOutputNode](avaudiooutputnode.md).

## Topics

### Configuring an Input Format Bus

- [AVAudioNodeBus](avaudionodebus.md): The index of a bus on an audio node.
- [inputFormatForBus:](avaudionode/inputformat%28forbus_%29.md): Gets the input format for the bus you specify.
- [nameForInputBus:](avaudionode/name%28forinputbus_%29.md): Gets the name of the input bus you specify.
- [numberOfInputs](avaudionode/numberofinputs.md): The number of input busses for the node.

### Creating an Output Format Bus

- [outputFormatForBus:](avaudionode/outputformat%28forbus_%29.md): Retrieves the output format for the bus you specify.
- [nameForOutputBus:](avaudionode/name%28foroutputbus_%29.md): Retrieves the name of the output bus you specify.
- [numberOfOutputs](avaudionode/numberofoutputs.md): The number of output busses for the node.

### Installing and Removing an Audio Tap

- [installTapOnBus:bufferSize:format:block:](avaudionode/installtap%28onbus_buffersize_format_block_%29.md): Deprecated. Installs an audio tap on a bus you specify to record, monitor, and observe the output of the node.
- [removeTapOnBus:](avaudionode/removetap%28onbus_%29.md): Removes an audio tap on a bus you specify.
- [AVAudioNodeTapBlock](avaudionodetapblock.md): The block that receives copies of the output of an audio node.

### Getting the Audio Engine for the Node

- [engine](avaudionode/engine.md): The audio engine that manages the node, if any.

### Getting the Latest Node Render Time

- [lastRenderTime](avaudionode/lastrendertime.md): The most recent render time.

### Getting Audio Node Properties

- [latency](avaudionode/latency.md): The processing latency of the node, in seconds.
- [outputPresentationLatency](avaudionode/outputpresentationlatency.md): The maximum render pipeline latency downstream of the node, in seconds.

### Resetting the Audio Node

- [reset](avaudionode/reset%28%29.md): Clears a unit’s previous processing state.

### Constants

- [AVAudioNodeCompletionHandler](avaudionodecompletionhandler.md): A general callback handler for an audio node.

### Instance Properties

- [AUAudioUnit](avaudionode/auaudiounit-1kkjr.md)

### Instance Methods

- [installTapOnBus:bufferSize:format:error:block:](avaudionode/installtaponbus_buffersize_format_error_block_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md)
- [AVAudioIONode](avaudioionode.md)
- [AVAudioMixerNode](avaudiomixernode.md)
- [AVAudioPlayerNode](avaudioplayernode.md)
- [AVAudioSinkNode](avaudiosinknode.md)
- [AVAudioSourceNode](avaudiosourcenode.md)
- [AVAudioUnit](avaudiounit.md)

## See Also

### Nodes

- [AVAudioInputNode](avaudioinputnode.md): An object that connects to the system’s audio input.
- [AVAudioOutputNode](avaudiooutputnode.md): An object that connects to the system’s audio output.
- [AVAudioIONode](avaudioionode.md): An object that performs audio input or output in the engine.
- [AVAudioIONodeInputBlockRealtimeSafe](avaudioionodeinputblockrealtimesafe.md)
