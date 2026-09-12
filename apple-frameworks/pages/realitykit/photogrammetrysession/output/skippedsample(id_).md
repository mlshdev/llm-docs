> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/output/skippedsample(id:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/output/skippedsample(id:))

# PhotogrammetrySession.Output.skippedSample(id:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The type of element used for Object Capture updates. The [PhotogrammetrySample](../../photogrammetrysample.md) with the [id](../../photogrammetrysample/id.md) indicated was not able to be used for reconstruction.

## Declaration

```swift
case skippedSample(id: Int)
```

## See Also

### Monitoring data ingestion

- [PhotogrammetrySession.Output.invalidSample(id:reason:)](invalidsample%28id_reason_%29.md): A provided sample was invalid.
- [PhotogrammetrySession.Output.automaticDownsampling](automaticdownsampling.md): The session reduced the image size because of memory constraints.
