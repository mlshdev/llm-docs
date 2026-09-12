> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/activerequests](https://developer.apple.com/documentation/realitykit/photogrammetrysession/activerequests)

# activeRequests

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The session’s active request objects.

## Declaration

```swift
var activeRequests: [PhotogrammetrySession.Request] { get }
```

<a id="discussion"></a>

## Discussion

This property provides read-only access to the requests that the session actively processes.

## See Also

### Monitoring the session

- [isProcessing](isprocessing.md): The session is actively processing requests.
- [outputs](outputs-swift.property.md): Returns the outputs message stream which can be asynchronously iterated on.
- [PhotogrammetrySession.Output](output.md): Status updates on the object-creation process.
