> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sftranscriptionsegment/confidence](https://developer.apple.com/documentation/speech/sftranscriptionsegment/confidence)

# confidence (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The level of confidence the speech recognizer has in its recognition of the speech transcribed for the segment.

## Declaration

```swift
var confidence: Float { get }
```

<a id="discussion"></a>

## Discussion

This property reflects the overall confidence in the recognition of the entire phrase. The value is `0` if there was no recognition, and it is closer to `1` when there is a high certainty that a transcription matches the user’s speech exactly. For example, a confidence value of `0.94` represents a very high confidence level, and is more likely to be correct than a transcription with a confidence value of `0.72`.

# confidence (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The level of confidence the speech recognizer has in its recognition of the speech transcribed for the segment.

## Declaration

```objectivec
@property (nonatomic, readonly) float confidence;
```

<a id="discussion"></a>

## Discussion

This property reflects the overall confidence in the recognition of the entire phrase. The value is `0` if there was no recognition, and it is closer to `1` when there is a high certainty that a transcription matches the user’s speech exactly. For example, a confidence value of `0.94` represents a very high confidence level, and is more likely to be correct than a transcription with a confidence value of `0.72`.
