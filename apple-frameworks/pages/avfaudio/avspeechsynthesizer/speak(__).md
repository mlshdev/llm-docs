> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/speak(_:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/speak(_:))

# speak(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Adds the utterance you specify to the speech synthesizer’s queue.

## Declaration

```swift
func speak(_ utterance: AVSpeechUtterance)
```

## Parameters

- `utterance`: An [AVSpeechUtterance](../avspeechutterance.md) instance that contains text to speak.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  Attempting to enqueue the same utterance more than once throws an exception.

## See Also

### Controlling speech

- [continueSpeaking()](continuespeaking%28%29.md): Resumes speech from its paused point.
- [pauseSpeaking(at:)](pausespeaking%28at_%29.md): Pauses speech at the boundary you specify.
- [stopSpeaking(at:)](stopspeaking%28at_%29.md): Stops speech at the boundary you specify.
- [AVSpeechBoundary](../avspeechboundary.md): Specifies when to pause or stop speech.

# speakUtterance: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Adds the utterance you specify to the speech synthesizer’s queue.

## Declaration

```objectivec
- (void) speakUtterance:(AVSpeechUtterance *) utterance;
```

## Parameters

- `utterance`: An [AVSpeechUtterance](../avspeechutterance.md) instance that contains text to speak.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  Attempting to enqueue the same utterance more than once throws an exception.

## See Also

### Controlling speech

- [continueSpeaking](continuespeaking%28%29.md): Resumes speech from its paused point.
- [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md): Pauses speech at the boundary you specify.
- [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md): Stops speech at the boundary you specify.
- [AVSpeechBoundary](../avspeechboundary.md): Specifies when to pause or stop speech.
