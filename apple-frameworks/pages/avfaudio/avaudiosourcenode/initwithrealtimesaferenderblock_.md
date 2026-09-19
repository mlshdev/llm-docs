> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosourcenode/initwithrealtimesaferenderblock:

# initWithRealtimeSafeRenderBlock:

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (instancetype) initWithRealtimeSafeRenderBlock:(AVAudioSourceNodeRenderBlockRealtimeSafe) block;
```

<a id="discussion"></a>

## Discussion

Identical to initWithRenderBlock:, but requires a realtime-safe block. When the the engine is configured for realtime use (rendering to a device, or using `AVAudioEngineManualRenderingModeRealtime`) this initializer is preferred.
