> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/attach(_:to:)](https://developer.apple.com/documentation/realitykit/entity/attach(_:to:))

# attach(\_:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Attach an entity to a target pin owned by another entity with an optional specified source pin This utility function has the same effect of adding an AttachedTransformComponent created with the same parameter to the entity you are calling upon

## Declaration

```swift
@MainActor func attach(_ source: GeometricPin? = nil, to target: GeometricPin)
```

## Parameters

- `source`: The optional source pin existed on the current entity
- `target`: The target pin existed on the target entity
