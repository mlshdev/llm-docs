> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/model3d/init(asset:content:)](https://developer.apple.com/documentation/realitykit/model3d/init(asset:content:))

# init(asset:content:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

## Declaration

```swift
nonisolated init<Model>(asset: Model3DAsset, @ViewBuilder content: @escaping (ResolvedModel3D) -> Model) where Content == Model3DPlaceholderContent<Model, EmptyView>, Model : View
```
