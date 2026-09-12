> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioinputnode/setrealtimesafemanualrenderinginputpcmformat:inputblock:](https://developer.apple.com/documentation/avfaudio/avaudioinputnode/setrealtimesafemanualrenderinginputpcmformat:inputblock:)

# setRealtimeSafeManualRenderingInputPCMFormat:inputBlock:

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (BOOL) setRealtimeSafeManualRenderingInputPCMFormat:(AVAudioFormat *) format inputBlock:(AVAudioIONodeInputBlockRealtimeSafe) block;
```

<a id="discussion"></a>

## Discussion

Identical to setManualRenderingInputPCMFormat:inputBlock:, but requires a realtime-safe input block.
