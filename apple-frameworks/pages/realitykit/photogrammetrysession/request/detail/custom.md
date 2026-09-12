> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/request/detail/custom](https://developer.apple.com/documentation/realitykit/photogrammetrysession/request/detail/custom)

# PhotogrammetrySession.Request.Detail.custom

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

A custom quality for the model, with specifics defined by the photogrammetry session.

## Declaration

```swift
case custom
```

<a id="discussion"></a>

## Discussion

If you select `.custom`, you can define unique detail parameters by configuring the session with a [PhotogrammetrySession.Configuration.CustomDetailSpecification](../../configuration-swift.struct/customdetailspecification-swift.struct.md) instance in a [customDetailSpecification](../../configuration-swift.struct/customdetailspecification-swift.property.md). The configuration lets you precisely control the model’s detail level, processing efficiency, and output file size by adjusting properties such as [maximumPolygonCount](../../configuration-swift.struct/customdetailspecification-swift.struct/maximumpolygoncount.md), [textureFormat](../../configuration-swift.struct/customdetailspecification-swift.struct/textureformat-swift.property.md), and more.

> **Note**

> [customDetailSpecification](../../configuration-swift.struct/customdetailspecification-swift.property.md) will be applied to every [PhotogrammetrySession.Request](../../request.md) that specifies a `.custom` detail in this session.  It has no effect on the other levels.
