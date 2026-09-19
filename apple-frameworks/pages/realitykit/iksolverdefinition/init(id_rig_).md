> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/iksolverdefinition/init(id:rig:)

# init(id:rig:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a solver definition for with a unique solver identifier and a rig.

## Declaration

```swift
init(id: IKSolverDefinition.ID, rig: IKRig)
```

## Parameters

- `id`: The identifier the solver instance is using. Use a unique value for each ID in the resource.
- `rig`: The solver rig.
