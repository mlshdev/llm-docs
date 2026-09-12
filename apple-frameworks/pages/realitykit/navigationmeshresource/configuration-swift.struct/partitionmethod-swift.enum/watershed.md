> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/configuration-swift.struct/partitionmethod-swift.enum/watershed](https://developer.apple.com/documentation/realitykit/navigationmeshresource/configuration-swift.struct/partitionmethod-swift.enum/watershed)

# NavigationMeshResource.Configuration.PartitionMethod.watershed

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The default method. Watershed is usually the slowest but creates the best-looking meshes.

## Declaration

```swift
case watershed
```

## See Also

### Choosing a partition method

- [NavigationMeshResource.Configuration.PartitionMethod.monotone](monotone.md): The fastest method. On large, empty areas it tends to create long, thin polygons, so it is not ideal for generating the mesh offline or with large open regions in the geometry.
- [NavigationMeshResource.Configuration.PartitionMethod.layer](layer.md): A fast method, but slower than Monotone. It can create poor-looking meshes when used on large open regions, similar to Monotone, but will still generally create better-looking meshes than Monotone.
