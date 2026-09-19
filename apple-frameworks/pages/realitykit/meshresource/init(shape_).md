> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/init(shape:)

# init(shape:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Generates a MeshResource from a ShapeResource.

## Declaration

```swift
@MainActor @preconcurrency convenience init(shape resource: ShapeResource)
```

## Parameters

- `resource`: The ShapeResource which will be used for generating the mesh.
