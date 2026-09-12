> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioionode](https://developer.apple.com/documentation/avfaudio/avaudioionode)

# AVAudioIONode (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that performs audio input or output in the engine.

## Declaration

```swift
class AVAudioIONode
```

<a id="overview"></a>

## Overview

When rendering to and from an audio device in macOS, [AVAudioInputNode](avaudioinputnode.md) and [AVAudioOutputNode](avaudiooutputnode.md) communicate with the system’s default input and output devices. In iOS, they communicate with the devices appropriate to the app’s [AVAudioSession](avaudiosession.md) category, configurations, and user actions, such as connecting or disconnecting external devices.

In the manual rendering mode, [AVAudioInputNode](avaudioinputnode.md) and [AVAudioOutputNode](avaudiooutputnode.md) perform the input and output in the engine in response to the client’s request.

## Topics

### Getting the I/O Latency

- [presentationLatency](avaudioionode/presentationlatency.md): The presentation or hardware latency, applicable when rendering to or from an audio device.

### Getting and Setting the Voice Processing State

- [setVoiceProcessingEnabled(\_:)](avaudioionode/setvoiceprocessingenabled%28__%29.md): Enables or disables voice processing on the I/O node.
- [isVoiceProcessingEnabled](avaudioionode/isvoiceprocessingenabled.md): A Boolean value that indicates whether voice processing is in an enabled state.

### Instance Properties

- [audioUnit](avaudioionode/audiounit-1bqu3.md): Deprecated.
- [audioUnit](avaudioionode/audiounit-1caha.md): Deprecated.

### Instance Methods

- [withAudioUnit(\_:)](avaudioionode/withaudiounit%28__%29-57kv.md): Provides scoped access to the I/O node’s AudioUnit
- [withAudioUnit(\_:)](avaudioionode/withaudiounit%28__%29-6i8ld.md): Provides scoped access to the I/O node’s AudioUnit

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

### Inherited By

- [AVAudioInputNode](avaudioinputnode.md)
- [AVAudioOutputNode](avaudiooutputnode.md)

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
- [AVAudioOutputNode](avaudiooutputnode.md): An object that connects to the system’s audio output.

# AVAudioIONode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that performs audio input or output in the engine.

## Declaration

```objectivec
@interface AVAudioIONode : AVAudioNode
```

<a id="overview"></a>

## Overview

When rendering to and from an audio device in macOS, [AVAudioInputNode](avaudioinputnode.md) and [AVAudioOutputNode](avaudiooutputnode.md) communicate with the system’s default input and output devices. In iOS, they communicate with the devices appropriate to the app’s [AVAudioSession](avaudiosession.md) category, configurations, and user actions, such as connecting or disconnecting external devices.

In the manual rendering mode, [AVAudioInputNode](avaudioinputnode.md) and [AVAudioOutputNode](avaudiooutputnode.md) perform the input and output in the engine in response to the client’s request.

## Topics

### Getting the I/O Latency

- [presentationLatency](avaudioionode/presentationlatency.md): The presentation or hardware latency, applicable when rendering to or from an audio device.

### Getting and Setting the Voice Processing State

- [setVoiceProcessingEnabled:error:](avaudioionode/setvoiceprocessingenabled%28__%29.md): Enables or disables voice processing on the I/O node.
- [voiceProcessingEnabled](avaudioionode/isvoiceprocessingenabled.md): A Boolean value that indicates whether voice processing is in an enabled state.

### Instance Properties

- [audioUnit](avaudioionode/audiounit-4xtq9.md)

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

### Inherited By

- [AVAudioInputNode](avaudioinputnode.md)
- [AVAudioOutputNode](avaudiooutputnode.md)

## See Also

### Nodes

- [AVAudioNode](avaudionode.md): An object you use for audio generation, processing, or an I/O block.
- [AVAudioInputNode](avaudioinputnode.md): An object that connects to the system’s audio input.
- [AVAudioOutputNode](avaudiooutputnode.md): An object that connects to the system’s audio output.
- [AVAudioIONodeInputBlockRealtimeSafe](avaudioionodeinputblockrealtimesafe.md)
