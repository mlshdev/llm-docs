> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosourcenoderenderblock](https://developer.apple.com/documentation/avfaudio/avaudiosourcenoderenderblock)

# AVAudioSourceNodeRenderBlock (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A block that supplies audio data to an audio source node.

## Declaration

```swift
typealias AVAudioSourceNodeRenderBlock = (UnsafeMutablePointer<ObjCBool>, UnsafePointer<AudioTimeStamp>, AVAudioFrameCount, UnsafeMutablePointer<AudioBufferList>) -> OSStatus
```

## Parameters

- `isSilence`: The Boolean value that indicates whether the buffer contains only silence.
- `timestamp`: The HAL time the audio data renders.
- `frameCount`: The number of sample frames of audio data the engine requests.
- `outputData`: The output data.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code. When returning an error, consider the audio data invalid.

## See Also

### Creating an Audio Source Node

- [init(renderBlock:)](avaudiosourcenode/init%28renderblock_%29.md): Creates an audio source node with a block that supplies audio data.
- [init(format:renderBlock:)](avaudiosourcenode/init%28format_renderblock_%29.md): Creates an audio source node with the audio format and a block that supplies audio data.

# AVAudioSourceNodeRenderBlock (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A block that supplies audio data to an audio source node.

## Declaration

```objectivec
typedef int (^)(_Bool *, const struct AudioTimeStamp *, unsigned int, struct AudioBufferList *) AVAudioSourceNodeRenderBlock;
```

## Parameters

- `isSilence`: The Boolean value that indicates whether the buffer contains only silence.
- `timestamp`: The HAL time the audio data renders.
- `frameCount`: The number of sample frames of audio data the engine requests.
- `outputData`: The output data.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code. When returning an error, consider the audio data invalid.

## See Also

### Creating an Audio Source Node

- [initWithRenderBlock:](avaudiosourcenode/init%28renderblock_%29.md): Creates an audio source node with a block that supplies audio data.
- [initWithFormat:renderBlock:](avaudiosourcenode/init%28format_renderblock_%29.md): Creates an audio source node with the audio format and a block that supplies audio data.
