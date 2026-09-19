> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosourcenode/initwithformat:realtimesaferenderblock:

# initWithFormat:realtimeSafeRenderBlock:

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (instancetype) initWithFormat:(AVAudioFormat *) format realtimeSafeRenderBlock:(AVAudioSourceNodeRenderBlockRealtimeSafe) block;
```

<a id="discussion"></a>

## Discussion

Identical to initWithFormat:renderBlock:, but requires a realtime-safe block. When the the engine is configured for realtime use (rendering to a device, or using `AVAudioEngineManualRenderingModeRealtime`) this initializer is preferred.
