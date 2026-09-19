> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/lowlevelmesh

# lowLevelMesh

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The low-level mesh that this mesh is built from, if any.

## Declaration

```swift
@MainActor @preconcurrency var lowLevelMesh: LowLevelMesh? { get }
```

<a id="discussion"></a>

## Discussion

If this mesh is not built from a [LowLevelMesh](../lowlevelmesh.md), it returns nil.

## See Also

### Creating a low level resource

- [init(from:)](init%28from_%29-1i7c9.md): Asynchronously creates a mesh resource from a low-level mesh.
- [init(from:)](init%28from_%29-1i7c9.md): Asynchronously creates a mesh resource from a low-level mesh.
