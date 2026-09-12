> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sftranscriptionsegment/timestamp](https://developer.apple.com/documentation/speech/sftranscriptionsegment/timestamp)

# timestamp (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The start time of the segment in the processed audio stream.

## Declaration

```swift
var timestamp: TimeInterval { get }
```

<a id="discussion"></a>

## Discussion

The [timestamp](timestamp.md) is the number of seconds between the beginning of the audio content and when the user spoke the word represented by the segment. For example, if the user said the word “time” one second into the transcription “What time is it”, the timestamp would be equal to `1.0`.

## See Also

### Getting audio timing information

- [duration](duration.md): The number of seconds it took for the user to speak the utterance represented by the segment.

# timestamp (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The start time of the segment in the processed audio stream.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timestamp;
```

<a id="discussion"></a>

## Discussion

The [timestamp](timestamp.md) is the number of seconds between the beginning of the audio content and when the user spoke the word represented by the segment. For example, if the user said the word “time” one second into the transcription “What time is it”, the timestamp would be equal to `1.0`.

## See Also

### Getting audio timing information

- [duration](duration.md): The number of seconds it took for the user to speak the utterance represented by the segment.
