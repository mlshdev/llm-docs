> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/process(requests:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/process(requests:))

# process(requests:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Starts processing of the provided processing `requests`.  Messages begin to be produced to the `output` publisher.

## Declaration

```swift
func process(requests: [PhotogrammetrySession.Request]) throws
```

## Mentioned In

- [Creating 3D objects from photographs](../creating-3d-objects-from-photographs.md)

<a id="discussion"></a>

## Discussion

On the first `process()`call the data in the input source will be ingested entirely and `inputComplete` produced on the `output` stream before any request processing progress will begin. Before `inputComplete`, warnings about samples will be published, if any.

> **Throws**

> If `isProcessing` another batch still, the session is invalid (an Error was produced on `output` or if one of the requests is invalid.

## See Also

### Controlling object creation

- [cancel()](cancel%28%29.md): Requests cancellation of any running requests.
