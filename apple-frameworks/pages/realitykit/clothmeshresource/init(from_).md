> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothmeshresource/init(from:)

# init(from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a cloth mesh resource from a rendering mesh resource.

## Declaration

```swift
@MainActor convenience init(from mesh: MeshResource) throws
```

<a id="discussion"></a>

## Discussion

Generates a cloth mesh from a rendering mesh without remeshing. No remeshing is performed. In other words, the resulting [ClothMeshResource](../clothmeshresource.md) will match exactly the original [MeshResource](../meshresource.md).

- from: The [MeshResource](../meshresource.md) to generate a [ClothMeshResource](../clothmeshresource.md) from.
