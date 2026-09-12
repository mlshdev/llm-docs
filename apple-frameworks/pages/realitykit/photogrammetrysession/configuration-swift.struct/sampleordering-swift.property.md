> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/configuration-swift.struct/sampleordering-swift.property](https://developer.apple.com/documentation/realitykit/photogrammetrysession/configuration-swift.struct/sampleordering-swift.property)

# sampleOrdering

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The order of the image samples.

## Declaration

```swift
var sampleOrdering: PhotogrammetrySession.Configuration.SampleOrdering
```

<a id="discussion"></a>

## Discussion

By default, RealityKit assumes that image samples aren’t in any particular order. If you’re providing the images in order, with adjacent images next to each other, specifying [PhotogrammetrySession.Configuration.SampleOrdering.sequential](sampleordering-swift.enum/sequential.md) for this value may result in better performance.

This setting has no impact on the quality of the produced object.

## See Also

### Configuring sample ordering

- [PhotogrammetrySession.Configuration.SampleOrdering](sampleordering-swift.enum.md): The ordering of samples.
