> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/musicunderstandingsession/loudnessresults](https://developer.apple.com/documentation/musicunderstanding/musicunderstandingsession/loudnessresults)

# loudnessResults

**Framework:** Music Understanding  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An async sequence that yields loudness analysis results as they become available.

## Declaration

```swift
nonisolated var loudnessResults: some Sendable & AsyncSequence<LoudnessResult, any Error> { get }
```

<a id="Discussion"></a>

## Discussion

The sequence ends when the caller receives a `nil` result. You can use the loudness results to update meters real-time in your app. Then use `MusicUnderstanding/SessionResult/` to display peak loudness at the end.

## See Also

### Getting analysis results

- [MusicUnderstandingSession.SessionResult](sessionresult.md): The aggregated results for all analysis types that a music understanding session performs.
- [MusicUnderstandingSession.RangedValue](rangedvalue.md): A structure that pairs a value over a time range.
- [MusicUnderstandingSession.TimedValue](timedvalue.md): A structure that pairs a value with a time.
