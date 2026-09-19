> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/expectedmaterialcount

# expectedMaterialCount

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The number of material entries required to render the mesh resource.

## Declaration

```swift
@MainActor @preconcurrency var expectedMaterialCount: Int { get }
```

<a id="discussion"></a>

## Discussion

Use this value to determine the number of [Material](../material.md) instances to provide in the [materials](../modelcomponent/materials.md) array. When a mesh has multiple submeshes, each submesh references a material by index.

## See Also

### Configuring the resource

- [replace(with:)](replace%28with_%29-g0kn.md): Replace the contents of this mesh resource.
- [replace(with:)](replace%28with_%29-g0kn.md): Replace the contents of this mesh resource.
- [replaceAsync(with:)](replaceasync%28with_%29.md): Deprecated. Replace the contents of this mesh resource asynchronously.
