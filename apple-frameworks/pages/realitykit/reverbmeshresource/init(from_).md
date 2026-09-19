> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/reverbmeshresource/init(from:)

# init(from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a reverb mesh resource from a mesh resource.

## Declaration

```swift
@MainActor convenience init(from mesh: MeshResource) throws
```

## Parameters

- `mesh`: The mesh resource to convert into a reverb mesh.

<a id="discussion"></a>

## Discussion

Use this initializer to convert visual or physics geometry you already have into acoustic geometry, without duplicating the data:

```swift
let reverbMesh = try ReverbMeshResource(from: myVisualMesh)
```
