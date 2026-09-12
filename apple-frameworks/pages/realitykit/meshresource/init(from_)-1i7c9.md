> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/init(from:)-1i7c9](https://developer.apple.com/documentation/realitykit/meshresource/init(from:)-1i7c9)

# init(from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Asynchronously creates a mesh resource from a low-level mesh.

## Declaration

```swift
@MainActor @preconcurrency convenience init(from mesh: LowLevelMesh) async throws
```

## Parameters

- `mesh`: The vertex data that defines the mesh.

## See Also

### Creating a mesh resource

- [generate(from:)](generate%28from_%29-4aahn.md): Create a mesh resource from contents.
- [generate(from:)](generate%28from_%29-4aahn.md): Create a mesh resource from contents.
- [init(shape:)](init%28shape_%29-3rtda.md): Generates a MeshResource from a ShapeResource.
- [init(shape:)](init%28shape_%29-3rtda.md): Generates a MeshResource from a ShapeResource.
- [generateAsync(from:)](generateasync%28from_%29-1n2vv.md): Deprecated. Create a mesh resource from contents asynchronously.
- [generateAsync(from:)](generateasync%28from_%29-1n2vv.md): Deprecated. Create a mesh resource from contents asynchronously.
