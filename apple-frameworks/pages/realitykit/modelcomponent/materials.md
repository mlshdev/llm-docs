> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modelcomponent/materials](https://developer.apple.com/documentation/realitykit/modelcomponent/materials)

# materials

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The materials that define the model’s visual appearance.

## Declaration

```swift
var materials: [any Material]
```

<a id="discussion"></a>

## Discussion

Each [MeshResource](../meshresource.md) requires a set of materials. An entity that has no materials renders using a magenta striped material. To determine the number of materials a mesh requires, use [expectedMaterialCount](../meshresource/expectedmaterialcount.md).
