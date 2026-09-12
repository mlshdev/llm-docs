> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/output/processingcomplete](https://developer.apple.com/documentation/realitykit/photogrammetrysession/output/processingcomplete)

# PhotogrammetrySession.Output.processingComplete

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The session completed a request successfully.

## Declaration

```swift
case processingComplete
```

## Parameters

- `Request`: The request in progress.
- `Result`: The result of the Object Capture session.

## See Also

### Monitoring session status

- [PhotogrammetrySession.Output.inputComplete](inputcomplete.md): The data ingestion portion of the process is complete.
- [PhotogrammetrySession.Output.processingCancelled](processingcancelled.md): All pending requests are canceled.
