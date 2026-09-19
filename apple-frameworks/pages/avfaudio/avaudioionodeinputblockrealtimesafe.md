> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioionodeinputblockrealtimesafe

# AVAudioIONodeInputBlockRealtimeSafe

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
typedef const struct AudioBufferList *(^)(unsigned int) __attribute__((nonblocking)) AVAudioIONodeInputBlockRealtimeSafe;
```

<a id="discussion"></a>

## Discussion

Identical to AVAudioIONodeInputBlock, with the addition of a realtime-safety guarantee. When the engine is configured to operate in `AVAudioEngineManualRenderingModeRealtime`, use of this block is preferred.

## See Also

### Nodes

- [AVAudioNode](avaudionode.md): An object you use for audio generation, processing, or an I/O block.
- [AVAudioInputNode](avaudioinputnode.md): An object that connects to the system’s audio input.
- [AVAudioOutputNode](avaudiooutputnode.md): An object that connects to the system’s audio output.
- [AVAudioIONode](avaudioionode.md): An object that performs audio input or output in the engine.
