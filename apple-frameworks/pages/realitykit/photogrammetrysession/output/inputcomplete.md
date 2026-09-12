> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/output/inputcomplete](https://developer.apple.com/documentation/realitykit/photogrammetrysession/output/inputcomplete)

# PhotogrammetrySession.Output.inputComplete

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The data ingestion portion of the process is complete.

## Declaration

```swift
case inputComplete
```

<a id="discussion"></a>

## Discussion

Once the session sends this messagae, processing on the actual requests begins. It only sends this on the first `process()` call after which the data from the original processing is reused.

## See Also

### Monitoring session status

- [PhotogrammetrySession.Output.processingComplete](processingcomplete.md): The session completed a request successfully.
- [PhotogrammetrySession.Output.processingCancelled](processingcancelled.md): All pending requests are canceled.
