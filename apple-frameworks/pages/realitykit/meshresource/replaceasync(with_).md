> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/replaceasync(with:)

# replaceAsync(with:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Replace the contents of this mesh resource asynchronously.

## Declaration

```swift
@MainActor @preconcurrency func replaceAsync(with content: MeshResource.Contents) -> LoadRequest<MeshResource>
```

<a id="discussion"></a>

## Discussion

> **Note**

> The contents of the modified mesh resource will not be synced between network clients.

## See Also

### Configuring the resource

- [expectedMaterialCount](expectedmaterialcount.md): The number of material entries required to render the mesh resource.
- [replace(with:)](replace%28with_%29-g0kn.md): Replace the contents of this mesh resource.
- [replace(with:)](replace%28with_%29-g0kn.md): Replace the contents of this mesh resource.
