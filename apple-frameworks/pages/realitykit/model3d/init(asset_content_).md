> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/model3d/init(asset:content:)

# init(asset:content:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

## Declaration

```swift
nonisolated init<Model>(asset: Model3DAsset, @ViewBuilder content: @escaping (ResolvedModel3D) -> Model) where Content == Model3DPlaceholderContent<Model, EmptyView>, Model : View
```
