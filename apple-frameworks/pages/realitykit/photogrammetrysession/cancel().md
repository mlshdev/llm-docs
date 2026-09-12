> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/cancel()](https://developer.apple.com/documentation/realitykit/photogrammetrysession/cancel())

# cancel()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Requests cancellation of any running requests.

## Declaration

```swift
func cancel()
```

<a id="discussion"></a>

## Discussion

When cancellation has completed, a `.processingCancelled` message will be output and `isProcessing` will be `false`.  Calling this method has no effect if `!isProcessing`.

> **Note**

> This call is asynchronous and it may take some time before the pipeline fully stops, resources are reclaimed, and the error is actually produced, so callers should monitor `output` for the message before making a new session.

## See Also

### Controlling object creation

- [process(requests:)](process%28requests_%29.md): Starts processing of the provided processing `requests`. Messages begin to be produced to the `output` publisher.
