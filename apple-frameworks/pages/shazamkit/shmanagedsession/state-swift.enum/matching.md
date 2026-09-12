> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmanagedsession/state-swift.enum/matching](https://developer.apple.com/documentation/shazamkit/shmanagedsession/state-swift.enum/matching)

# SHManagedSession.State.matching

**Framework:** ShazamKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The session is recording and making at least one match attempt.

## Declaration

```swift
case matching
```

<a id="Discussion"></a>

## Discussion

When a session is in this state, the framework ignores calls to [prepare()](../prepare%28%29.md).

## See Also

### Getting session states

- [SHManagedSession.State.idle](idle.md): The session isn’t recording or making a match attempt.
- [SHManagedSession.State.prerecording](prerecording.md): The session has the resources it needs for matching and is prerecording.
