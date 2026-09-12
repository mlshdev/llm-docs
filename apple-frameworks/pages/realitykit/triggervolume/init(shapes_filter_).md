> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/triggervolume/init(shapes:filter:)](https://developer.apple.com/documentation/realitykit/triggervolume/init(shapes:filter:))

# init(shapes:filter:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a trigger volume with the given composite shape and collision filter.

## Declaration

```swift
@MainActor @preconcurrency init(shapes: [ShapeResource], filter: CollisionFilter = .sensor)
```

## Parameters

- `shapes`: A collection of shapes which taken together define the composite shape of the trigger volume.
- `filter`: A collision filter that lets you differentiate among collision groups.

## See Also

### Creating a trigger volume

- [init()](init%28%29.md): Creates a trigger volume.
- [init(shape:filter:)](init%28shape_filter_%29.md): Creates a trigger volume with the given shape and collision filter.
