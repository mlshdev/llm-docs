> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sftranscriptionsegment/duration](https://developer.apple.com/documentation/speech/sftranscriptionsegment/duration)

# duration (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The number of seconds it took for the user to speak the utterance represented by the segment.

## Declaration

```swift
var duration: TimeInterval { get }
```

<a id="discussion"></a>

## Discussion

The [duration](duration.md) contains the number of seconds it took for the user to speak the one or more words (utterance) represented by the segment. For example, the [SFSpeechRecognizer](../sfspeechrecognizer.md) sets [duration](duration.md) to `0.6` if the user took `0.6` seconds to say `“time”` in the transcription of `“What time is it?"`.

## See Also

### Getting audio timing information

- [timestamp](timestamp.md): The start time of the segment in the processed audio stream.

# duration (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The number of seconds it took for the user to speak the utterance represented by the segment.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval duration;
```

<a id="discussion"></a>

## Discussion

The [duration](duration.md) contains the number of seconds it took for the user to speak the one or more words (utterance) represented by the segment. For example, the [SFSpeechRecognizer](../sfspeechrecognizer.md) sets [duration](duration.md) to `0.6` if the user took `0.6` seconds to say `“time”` in the transcription of `“What time is it?"`.

## See Also

### Getting audio timing information

- [timestamp](timestamp.md): The start time of the segment in the processed audio stream.
