> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/init(from:)

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
