> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/move(to:relativeto:)](https://developer.apple.com/documentation/realitykit/hastransform/move(to:relativeto:))

# move(to:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Moves an entity instantly to a new location given by a transform.

## Declaration

```swift
@MainActor @preconcurrency func move(to transform: Transform, relativeTo referenceEntity: Entity?)
```

## Parameters

- `transform`: A [Transform](../transform.md) instance that indicates the new location.
- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.
