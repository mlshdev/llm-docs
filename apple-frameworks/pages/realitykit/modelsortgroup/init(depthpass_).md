> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/modelsortgroup/init(depthpass:)

# init(depthPass:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates a model sort group with an optional depth pass.

## Declaration

```swift
init(depthPass: ModelSortGroup.DepthPass? = nil)
```

## Parameters

- `depthPass`: A depth pass instance that tells the group how to draw the model entity’s color relative to its depth.
