> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/resume()

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
