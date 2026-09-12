> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosinknodereceiverblock](https://developer.apple.com/documentation/avfaudio/avaudiosinknodereceiverblock)

# AVAudioSinkNodeReceiverBlock (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A block that receives audio data from an audio sink node.

## Declaration

```swift
typealias AVAudioSinkNodeReceiverBlock = (UnsafePointer<AudioTimeStamp>, AVAudioFrameCount, UnsafePointer<AudioBufferList>) -> OSStatus
```

## Parameters

- `timestamp`: The time the input data renders.
- `frameCount`: The number of sample frames of input the engine provides.
- `inputData`: The input audio data.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code. When an error occurs, consider the audio data invalid.

## See Also

### Creating an Audio Sink Node

- [init(receiverBlock:)](avaudiosinknode/init%28receiverblock_%29.md): Creates an audio sink node with a block that receives audio data.

# AVAudioSinkNodeReceiverBlock (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A block that receives audio data from an audio sink node.

## Declaration

```objectivec
typedef int (^)(const struct AudioTimeStamp *, unsigned int, const struct AudioBufferList *) AVAudioSinkNodeReceiverBlock;
```

## Parameters

- `timestamp`: The time the input data renders.
- `frameCount`: The number of sample frames of input the engine provides.
- `inputData`: The input audio data.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code. When an error occurs, consider the audio data invalid.

## See Also

### Creating an Audio Sink Node

- [initWithReceiverBlock:](avaudiosinknode/init%28receiverblock_%29.md): Creates an audio sink node with a block that receives audio data.
