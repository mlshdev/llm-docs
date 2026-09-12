> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/output/invalidsample(id:reason:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/output/invalidsample(id:reason:))

# PhotogrammetrySession.Output.invalidSample(id:reason:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A provided sample was invalid.

## Declaration

```swift
case invalidSample(id: Int, reason: String)
```

## Parameters

- `id`: The sample ID.
- `reason`: The reason the sample is invalid.

## See Also

### Monitoring data ingestion

- [PhotogrammetrySession.Output.automaticDownsampling](automaticdownsampling.md): The session reduced the image size because of memory constraints.
- [PhotogrammetrySession.Output.skippedSample(id:)](skippedsample%28id_%29.md): The type of element used for Object Capture updates. The [PhotogrammetrySample](../../photogrammetrysample.md) with the [id](../../photogrammetrysample/id.md) indicated was not able to be used for reconstruction.
