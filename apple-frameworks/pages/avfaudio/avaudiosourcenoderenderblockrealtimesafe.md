> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosourcenoderenderblockrealtimesafe](https://developer.apple.com/documentation/avfaudio/avaudiosourcenoderenderblockrealtimesafe)

# AVAudioSourceNodeRenderBlockRealtimeSafe

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
typedef int (^)(_Bool *, const struct AudioTimeStamp *, unsigned int, struct AudioBufferList *) __attribute__((nonblocking)) AVAudioSourceNodeRenderBlockRealtimeSafe;
```

<a id="discussion"></a>

## Discussion

Identical to AVAudioSourceNodeRenderBlock, with the addition of a realtime-safety guarantee.

## See Also

### Rendering

- [Building a signal generator](building-a-signal-generator.md): Generate audio signals using an audio source node and a custom render callback.
- [Performing offline audio processing](performing-offline-audio-processing.md): Add offline audio processing features to your app by enabling offline manual rendering mode.
- [AVAudioSourceNode](avaudiosourcenode.md): An object that supplies audio data.
- [AVAudioSinkNode](avaudiosinknode.md): An object that receives audio data.
- [AVAudioSinkNodeReceiverBlockRealtimeSafe](avaudiosinknodereceiverblockrealtimesafe.md)
