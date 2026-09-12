> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/output/automaticdownsampling](https://developer.apple.com/documentation/realitykit/photogrammetrysession/output/automaticdownsampling)

# PhotogrammetrySession.Output.automaticDownsampling

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The session reduced the image size because of memory constraints.

## Declaration

```swift
case automaticDownsampling
```

<a id="discussion"></a>

## Discussion

If [PhotogrammetrySession](../../photogrammetrysession.md) encounters serious resource constraints during the object-creation process, it attempts to reduce memory usage by creating scaled-down copies of the sample images, and publishes this message.

## See Also

### Monitoring data ingestion

- [PhotogrammetrySession.Output.invalidSample(id:reason:)](invalidsample%28id_reason_%29.md): A provided sample was invalid.
- [PhotogrammetrySession.Output.skippedSample(id:)](skippedsample%28id_%29.md): The type of element used for Object Capture updates. The [PhotogrammetrySample](../../photogrammetrysample.md) with the [id](../../photogrammetrysample/id.md) indicated was not able to be used for reconstruction.
