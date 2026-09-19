> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosinknode/initwithrealtimesafereceiverblock:

# initWithRealtimeSafeReceiverBlock:

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (instancetype) initWithRealtimeSafeReceiverBlock:(AVAudioSinkNodeReceiverBlockRealtimeSafe) block;
```

<a id="discussion"></a>

## Discussion

Identical to initWithReceiverBlock:, but requires a realtime-safe block and is the preferred initializer.
