> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/shapeextrusionoptions/boundaryresolution

# boundaryResolution

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Resolution of the shape.

## Declaration

```swift
var boundaryResolution: MeshResource.ShapeExtrusionOptions.CurveStrokeResolution
```

<a id="discussion"></a>

## Discussion

The default value is [MeshResource.ShapeExtrusionOptions.CurveStrokeResolution.uniformSegmentsPerSpan(segmentCount:)](curvestrokeresolution/uniformsegmentsperspan%28segmentcount_%29.md) with a segment count of 6.
