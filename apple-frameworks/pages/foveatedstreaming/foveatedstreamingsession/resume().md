> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/resume()](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/resume())

# resume()

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 26.4+

Resumes a previously paused session.

## Declaration

```swift
@MainActor final func resume() async throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> A [FoveatedStreamingSession.DisconnectReason](disconnectreason.md) error if a disconnection occurs.  Or, a [CancellationError](https://developer.apple.com/documentation/swift/cancellationerror) if the task is cancelled.

When this function returns successfully without throwing an error the foveated streaming session’s [status](status-swift.property.md) will equal [FoveatedStreamingSession.Status.connected](status-swift.enum/connected.md).
