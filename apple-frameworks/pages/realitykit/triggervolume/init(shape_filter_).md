> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/triggervolume/init(shape:filter:)](https://developer.apple.com/documentation/realitykit/triggervolume/init(shape:filter:))

# init(shape:filter:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a trigger volume with the given shape and collision filter.

## Declaration

```swift
@MainActor @preconcurrency convenience init(shape: ShapeResource, filter: CollisionFilter = .sensor)
```

## Parameters

- `shape`: The shape of the trigger volume.
- `filter`: A collision filter that lets you differentiate among collision groups.

## See Also

### Creating a trigger volume

- [init()](init%28%29.md): Creates a trigger volume.
- [init(shapes:filter:)](init%28shapes_filter_%29.md): Creates a trigger volume with the given composite shape and collision filter.
