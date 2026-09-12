> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/replace(with:)-g0kn](https://developer.apple.com/documentation/realitykit/meshresource/replace(with:)-g0kn)

# replace(with:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Replace the contents of this mesh resource.

## Declaration

```swift
@MainActor @preconcurrency func replace(with content: MeshResource.Contents) throws
```

<a id="discussion"></a>

## Discussion

> **Note**

> The contents of the modified mesh resource will not be synced between network clients.

## See Also

### Configuring the resource

- [expectedMaterialCount](expectedmaterialcount.md): The number of material entries required to render the mesh resource.
- [replaceAsync(with:)](replaceasync%28with_%29.md): Deprecated. Replace the contents of this mesh resource asynchronously.
