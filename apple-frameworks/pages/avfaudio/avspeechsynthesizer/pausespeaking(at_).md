> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/pausespeaking(at:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/pausespeaking(at:))

# pauseSpeaking(at:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Pauses speech at the boundary you specify.

## Declaration

```swift
func pauseSpeaking(at boundary: AVSpeechBoundary) -> Bool
```

## Parameters

- `boundary`: An enumeration that describes whether to pause speech immediately or only after the synthesizer finishes speaking the current word.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if speech pauses; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The `boundary` parameter also affects how the speech synthesizer resumes speaking text after a pause and call to [continueSpeaking()](continuespeaking%28%29.md). If the boundary is [AVSpeechBoundary.immediate](../avspeechboundary/immediate.md), speech resumes from the exact point where it pauses, even if that point occurs in the middle of speaking a word. If the boundary is [AVSpeechBoundary.word](../avspeechboundary/word.md), speech resumes from the word that follows the last spoken word where it pauses.

## See Also

### Controlling speech

- [speak(\_:)](speak%28__%29.md): Adds the utterance you specify to the speech synthesizer’s queue.
- [continueSpeaking()](continuespeaking%28%29.md): Resumes speech from its paused point.
- [stopSpeaking(at:)](stopspeaking%28at_%29.md): Stops speech at the boundary you specify.
- [AVSpeechBoundary](../avspeechboundary.md): Specifies when to pause or stop speech.

# pauseSpeakingAtBoundary: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Pauses speech at the boundary you specify.

## Declaration

```objectivec
- (BOOL) pauseSpeakingAtBoundary:(AVSpeechBoundary) boundary;
```

## Parameters

- `boundary`: An enumeration that describes whether to pause speech immediately or only after the synthesizer finishes speaking the current word.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if speech pauses; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The `boundary` parameter also affects how the speech synthesizer resumes speaking text after a pause and call to [continueSpeaking](continuespeaking%28%29.md). If the boundary is [AVSpeechBoundaryImmediate](../avspeechboundary/immediate.md), speech resumes from the exact point where it pauses, even if that point occurs in the middle of speaking a word. If the boundary is [AVSpeechBoundaryWord](../avspeechboundary/word.md), speech resumes from the word that follows the last spoken word where it pauses.

## See Also

### Controlling speech

- [speakUtterance:](speak%28__%29.md): Adds the utterance you specify to the speech synthesizer’s queue.
- [continueSpeaking](continuespeaking%28%29.md): Resumes speech from its paused point.
- [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md): Stops speech at the boundary you specify.
- [AVSpeechBoundary](../avspeechboundary.md): Specifies when to pause or stop speech.
