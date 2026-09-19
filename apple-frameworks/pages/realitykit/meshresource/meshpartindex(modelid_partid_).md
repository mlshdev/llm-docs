> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/meshpartindex(modelid:partid:)

# meshPartIndex(modelID:partID:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Get the mesh part index for a given model and part identifier.

## Declaration

```swift
@MainActor @preconcurrency func meshPartIndex(modelID: String, partID: String) -> Int?
```

<a id="discussion"></a>

## Discussion

You can use this to resolve string names to part indices for use in [MeshInstancesComponent](../meshinstancescomponent.md).
