> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/outputs-swift.property](https://developer.apple.com/documentation/realitykit/photogrammetrysession/outputs-swift.property)

# outputs

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Returns the outputs message stream which can be asynchronously iterated on.

## Declaration

```swift
var outputs: PhotogrammetrySession.Outputs { get }
```

## Mentioned In

- [Creating 3D objects from photographs](../creating-3d-objects-from-photographs.md)

## See Also

### Monitoring the session

- [activeRequests](activerequests.md): The session’s active request objects.
- [isProcessing](isprocessing.md): The session is actively processing requests.
- [PhotogrammetrySession.Output](output.md): Status updates on the object-creation process.
