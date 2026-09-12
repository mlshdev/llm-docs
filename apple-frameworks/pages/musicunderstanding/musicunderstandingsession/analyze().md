> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/musicunderstandingsession/analyze()](https://developer.apple.com/documentation/musicunderstanding/musicunderstandingsession/analyze())

# analyze()

**Framework:** Music Understanding  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Performs all available analyses on the session’s audio source.

## Declaration

```swift
@discardableResult func analyze() async throws -> MusicUnderstandingSession.SessionResult
```

<a id="return-value"></a>

## Return Value

The aggregated session result containing all analyses.

<a id="Discussion"></a>

## Discussion

> **Throws**

>  If analysis is already running on this session.

> **Note**

>  This method can only be called once per session instance. Create a new session to run additional analyses.

Example usage:

```swift
let session = MusicUnderstandingSession(audioProvider: provider)
let result = try await session.analyze()
```

## See Also

### Performing an analysis

- [analyze(for:)](analyze%28for_%29.md): Performs the specified analyses on the session’s audio source.
