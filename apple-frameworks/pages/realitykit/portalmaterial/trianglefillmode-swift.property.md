> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/portalmaterial/trianglefillmode-swift.property

# triangleFillMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The object that controls how RealityKit draws triangles.

## Declaration

```swift
var triangleFillMode: PortalMaterial.TriangleFillMode { get set }
```

<a id="discussion"></a>

## Discussion

A value of [MaterialParameterTypes.TriangleFillMode.fill](../materialparametertypes/trianglefillmode/fill.md) causes RealityKit to draw triangles normally, while a value of  [MaterialParameterTypes.TriangleFillMode.lines](../materialparametertypes/trianglefillmode/lines.md) turns on wireframe rendering.
