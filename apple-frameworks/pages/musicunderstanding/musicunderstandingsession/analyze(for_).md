> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/musicunderstandingsession/analyze(for:)](https://developer.apple.com/documentation/musicunderstanding/musicunderstandingsession/analyze(for:))

# analyze(for:)

**Framework:** Music Understanding  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Performs the specified analyses on the session’s audio source.

## Declaration

```swift
@discardableResult func analyze(for analysisTypes: Set<AnalysisType>) async throws -> MusicUnderstandingSession.SessionResult
```

## Parameters

- `analysisTypes`: A `Set` of `AnalysisType` values specifying which analyses to perform.

<a id="return-value"></a>

## Return Value

The aggregated session result containing all requested analyses.

<a id="Discussion"></a>

## Discussion

> **Throws**

>  If the analysis types set is empty, or if analysis is already running on this session.

> **Note**

>  Call this method only once per session instance. Create a new session to run additional analyses.

Example usage:

```swift
let session = MusicUnderstandingSession(audioProvider: provider)
let result = try await session.analyze(for: [.rhythm, .pace, .loudness])
```

## See Also

### Performing an analysis

- [analyze()](analyze%28%29.md): Performs all available analyses on the session’s audio source.
