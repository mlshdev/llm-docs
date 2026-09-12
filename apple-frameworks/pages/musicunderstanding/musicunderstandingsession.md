> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/musicunderstandingsession](https://developer.apple.com/documentation/musicunderstanding/musicunderstandingsession)

# MusicUnderstandingSession

**Framework:** Music Understanding  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An object that performs music analysis on an audio source and provides the results.

## Declaration

```swift
actor MusicUnderstandingSession
```

## Topics

### Creating a session

- [init(audioProvider:)](musicunderstandingsession/init%28audioprovider_%29.md): Creates a music understanding session that accepts streaming audio buffers.
- [init(asset:)](musicunderstandingsession/init%28asset_%29.md): Creates a music understanding session from an audio asset.

### Performing an analysis

- [analyze()](musicunderstandingsession/analyze%28%29.md): Performs all available analyses on the session’s audio source.
- [analyze(for:)](musicunderstandingsession/analyze%28for_%29.md): Performs the specified analyses on the session’s audio source.

### Getting analysis results

- [MusicUnderstandingSession.SessionResult](musicunderstandingsession/sessionresult.md): The aggregated results for all analysis types that a music understanding session performs.
- [loudnessResults](musicunderstandingsession/loudnessresults.md): An async sequence that yields loudness analysis results as they become available.
- [MusicUnderstandingSession.RangedValue](musicunderstandingsession/rangedvalue.md): A structure that pairs a value over a time range.
- [MusicUnderstandingSession.TimedValue](musicunderstandingsession/timedvalue.md): A structure that pairs a value with a time.

### Cancelling a session

- [cancel()](musicunderstandingsession/cancel%28%29.md): Cancels any ongoing analysis.

## Relationships

### Conforms To

- [Actor](https://developer.apple.com/documentation/swift/actor)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
