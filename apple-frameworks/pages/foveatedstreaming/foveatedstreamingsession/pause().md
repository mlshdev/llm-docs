> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/pause()](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/pause())

# pause()

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 26.4+

Pauses a session without ending it.

## Declaration

```swift
@MainActor final func pause() async throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> A [FoveatedStreamingSession.DisconnectReason](disconnectreason.md) error if a disconnection occurs.  Or, a [CancellationError](https://developer.apple.com/documentation/swift/cancellationerror) if the task is cancelled.

When this function returns successfully without throwing an error the foveated streaming session’s [status](status-swift.property.md) will equal [FoveatedStreamingSession.Status.paused](status-swift.enum/paused.md).

You can resume the session by calling [resume()](resume%28%29.md).
