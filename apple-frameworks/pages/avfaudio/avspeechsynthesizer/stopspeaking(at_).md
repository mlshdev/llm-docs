> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/stopspeaking(at:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/stopspeaking(at:))

# stopSpeaking(at:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Stops speech at the boundary you specify.

## Declaration

```swift
func stopSpeaking(at boundary: AVSpeechBoundary) -> Bool
```

## Parameters

- `boundary`: An enumeration that describes whether to stop speech immediately or only after the synthesizer finishes speaking the current word.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if speech stops; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Unlike pausing a speech synthesizer, which can resume after a pause, stopping the synthesizer immediately cancels speech and removes all unspoken utterances from the synthesizer’s queue.

## See Also

### Controlling speech

- [speak(\_:)](speak%28__%29.md): Adds the utterance you specify to the speech synthesizer’s queue.
- [continueSpeaking()](continuespeaking%28%29.md): Resumes speech from its paused point.
- [pauseSpeaking(at:)](pausespeaking%28at_%29.md): Pauses speech at the boundary you specify.
- [AVSpeechBoundary](../avspeechboundary.md): Specifies when to pause or stop speech.

# stopSpeakingAtBoundary: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Stops speech at the boundary you specify.

## Declaration

```objectivec
- (BOOL) stopSpeakingAtBoundary:(AVSpeechBoundary) boundary;
```

## Parameters

- `boundary`: An enumeration that describes whether to stop speech immediately or only after the synthesizer finishes speaking the current word.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if speech stops; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Unlike pausing a speech synthesizer, which can resume after a pause, stopping the synthesizer immediately cancels speech and removes all unspoken utterances from the synthesizer’s queue.

## See Also

### Controlling speech

- [speakUtterance:](speak%28__%29.md): Adds the utterance you specify to the speech synthesizer’s queue.
- [continueSpeaking](continuespeaking%28%29.md): Resumes speech from its paused point.
- [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md): Pauses speech at the boundary you specify.
- [AVSpeechBoundary](../avspeechboundary.md): Specifies when to pause or stop speech.
