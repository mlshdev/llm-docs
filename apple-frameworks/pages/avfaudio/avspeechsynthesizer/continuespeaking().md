> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/continuespeaking()](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/continuespeaking())

# continueSpeaking() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resumes speech from its paused point.

## Declaration

```swift
func continueSpeaking() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if speech resumes; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method only has an effect if the speech synthesizer is in a paused state.

## See Also

### Controlling speech

- [speak(\_:)](speak%28__%29.md): Adds the utterance you specify to the speech synthesizer’s queue.
- [pauseSpeaking(at:)](pausespeaking%28at_%29.md): Pauses speech at the boundary you specify.
- [stopSpeaking(at:)](stopspeaking%28at_%29.md): Stops speech at the boundary you specify.
- [AVSpeechBoundary](../avspeechboundary.md): Specifies when to pause or stop speech.

# continueSpeaking (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resumes speech from its paused point.

## Declaration

```objectivec
- (BOOL) continueSpeaking;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if speech resumes; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method only has an effect if the speech synthesizer is in a paused state.

## See Also

### Controlling speech

- [speakUtterance:](speak%28__%29.md): Adds the utterance you specify to the speech synthesizer’s queue.
- [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md): Pauses speech at the boundary you specify.
- [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md): Stops speech at the boundary you specify.
- [AVSpeechBoundary](../avspeechboundary.md): Specifies when to pause or stop speech.
