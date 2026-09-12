> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioinputnode](https://developer.apple.com/documentation/avfaudio/avaudioinputnode)

# AVAudioInputNode (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that connects to the system’s audio input.

## Declaration

```swift
class AVAudioInputNode
```

<a id="overview"></a>

## Overview

This node connects to the system’s audio input when rendering to or from an audio device. In manual rendering mode, this node supplies input data to the engine.

This audio node has one element. The format of the input scope reflects:

- The audio hardware sample rate and channel count when it connects to hardware.
- The format of the PCM audio data that the node supplies to the engine in manual rendering mode. For more information, see [setManualRenderingInputPCMFormat(\_:inputBlock:)](avaudioinputnode/setmanualrenderinginputpcmformat%28__inputblock_%29.md)

When rendering from an audio device, the input node doesn’t support format conversion. In this case, the format of the output scope must be the same as the input and the formats for all nodes connected to the input chain.

In manual rendering mode, the format of the output scope is initially the same as the input, but you may set it to a different format, which converts the node.

> **Important**

>  This class has no methods of its own. It implements the methods that the [AVAudioMixing](avaudiomixing.md) protocol defines, as well as those of the [AVAudio3DMixing](avaudio3dmixing.md) protocol, which the [AVAudioMixing](avaudiomixing.md) protocol adopts. For more information, see [AVAudioMixing](avaudiomixing.md) and [AVAudio3DMixing](avaudio3dmixing.md).

## Topics

### Manually Giving Data to an Audio Engine

- [setManualRenderingInputPCMFormat(\_:inputBlock:)](avaudioinputnode/setmanualrenderinginputpcmformat%28__inputblock_%29.md): Supplies the data through the input node to the engine while operating in the manual rendering mode.
- [AVAudioIONodeInputBlock](avaudioionodeinputblock.md): The type that represents a block to render operation calls to get input data when in manual rendering mode.

### Getting and Setting Voice Processing Properties

- [isVoiceProcessingInputMuted](avaudioinputnode/isvoiceprocessinginputmuted.md): A Boolean that indicates whether the input of the voice processing unit is in a muted state.
- [isVoiceProcessingBypassed](avaudioinputnode/isvoiceprocessingbypassed.md): A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.
- [isVoiceProcessingAGCEnabled](avaudioinputnode/isvoiceprocessingagcenabled.md): A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.
- [voiceProcessingOtherAudioDuckingConfiguration](avaudioinputnode/voiceprocessingotheraudioduckingconfiguration.md): The ducking configuration of nonvoice audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration](avaudiovoiceprocessingotheraudioduckingconfiguration.md): The configuration of ducking non-voice audio.

### Handling Muted Speech Events

- [setMutedSpeechActivityEventListener(\_:)](avaudioinputnode/setmutedspeechactivityeventlistener%28__%29.md)
- [AVAudioVoiceProcessingSpeechActivityEvent](avaudiovoiceprocessingspeechactivityevent.md): Types of speech activity events.

## Relationships

### Inherits From

- [AVAudioIONode](avaudioionode.md)

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

### Nodes

- [AVAudioNode](avaudionode.md): An object you use for audio generation, processing, or an I/O block.
- [AVAudioOutputNode](avaudiooutputnode.md): An object that connects to the system’s audio output.
- [AVAudioIONode](avaudioionode.md): An object that performs audio input or output in the engine.

# AVAudioInputNode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that connects to the system’s audio input.

## Declaration

```objectivec
@interface AVAudioInputNode : AVAudioIONode
```

<a id="overview"></a>

## Overview

This node connects to the system’s audio input when rendering to or from an audio device. In manual rendering mode, this node supplies input data to the engine.

This audio node has one element. The format of the input scope reflects:

- The audio hardware sample rate and channel count when it connects to hardware.
- The format of the PCM audio data that the node supplies to the engine in manual rendering mode. For more information, see [setManualRenderingInputPCMFormat:inputBlock:](avaudioinputnode/setmanualrenderinginputpcmformat%28__inputblock_%29.md)

When rendering from an audio device, the input node doesn’t support format conversion. In this case, the format of the output scope must be the same as the input and the formats for all nodes connected to the input chain.

In manual rendering mode, the format of the output scope is initially the same as the input, but you may set it to a different format, which converts the node.

> **Important**

>  This class has no methods of its own. It implements the methods that the [AVAudioMixing](avaudiomixing.md) protocol defines, as well as those of the [AVAudio3DMixing](avaudio3dmixing.md) protocol, which the [AVAudioMixing](avaudiomixing.md) protocol adopts. For more information, see [AVAudioMixing](avaudiomixing.md) and [AVAudio3DMixing](avaudio3dmixing.md).

## Topics

### Manually Giving Data to an Audio Engine

- [setManualRenderingInputPCMFormat:inputBlock:](avaudioinputnode/setmanualrenderinginputpcmformat%28__inputblock_%29.md): Supplies the data through the input node to the engine while operating in the manual rendering mode.
- [AVAudioIONodeInputBlock](avaudioionodeinputblock.md): The type that represents a block to render operation calls to get input data when in manual rendering mode.

### Getting and Setting Voice Processing Properties

- [voiceProcessingInputMuted](avaudioinputnode/isvoiceprocessinginputmuted.md): A Boolean that indicates whether the input of the voice processing unit is in a muted state.
- [voiceProcessingBypassed](avaudioinputnode/isvoiceprocessingbypassed.md): A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.
- [voiceProcessingAGCEnabled](avaudioinputnode/isvoiceprocessingagcenabled.md): A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.
- [voiceProcessingOtherAudioDuckingConfiguration](avaudioinputnode/voiceprocessingotheraudioduckingconfiguration.md): The ducking configuration of nonvoice audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration](avaudiovoiceprocessingotheraudioduckingconfiguration.md): The configuration of ducking non-voice audio.

### Handling Muted Speech Events

- [setMutedSpeechActivityEventListener:](avaudioinputnode/setmutedspeechactivityeventlistener%28__%29.md)
- [AVAudioVoiceProcessingSpeechActivityEvent](avaudiovoiceprocessingspeechactivityevent.md): Types of speech activity events.

### Instance Methods

- [setRealtimeSafeManualRenderingInputPCMFormat:inputBlock:](avaudioinputnode/setrealtimesafemanualrenderinginputpcmformat_inputblock_.md)

## Relationships

### Inherits From

- [AVAudioIONode](avaudioionode.md)

### Conforms To

- [AVAudioMixing](avaudiomixing.md)

## See Also

### Nodes

- [AVAudioNode](avaudionode.md): An object you use for audio generation, processing, or an I/O block.
- [AVAudioOutputNode](avaudiooutputnode.md): An object that connects to the system’s audio output.
- [AVAudioIONode](avaudioionode.md): An object that performs audio input or output in the engine.
- [AVAudioIONodeInputBlockRealtimeSafe](avaudioionodeinputblockrealtimesafe.md)
