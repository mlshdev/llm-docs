> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial/trianglefillmode-swift.property](https://developer.apple.com/documentation/realitykit/shadergraphmaterial/trianglefillmode-swift.property)

# triangleFillMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The object that controls how RealityKit draws triangles.

## Declaration

```swift
var triangleFillMode: ShaderGraphMaterial.TriangleFillMode { get set }
```

<a id="discussion"></a>

## Discussion

A value of [MaterialParameterTypes.TriangleFillMode.fill](../materialparametertypes/trianglefillmode/fill.md) causes RealityKit to draw triangles normally, while a value of  [MaterialParameterTypes.TriangleFillMode.lines](../materialparametertypes/trianglefillmode/lines.md) turns on wireframe rendering.
