> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/collisioncomponent/init(shapes:mode:filter:)

# init(shapes:mode:filter:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a collision component with the given collision shape, mode, and filter parameters.

## Declaration

```swift
init(shapes: [ShapeResource], mode: CollisionComponent.Mode = .default, filter: CollisionFilter = .default)
```

## Parameters

- `shapes`: The collection of shapes that collectively define the outer dimensions of the associated entity for the purposes of collision detection.
- `mode`: The mode of the collision component.
- `filter`: A filter that limits the other entities with which the entity can collide.
