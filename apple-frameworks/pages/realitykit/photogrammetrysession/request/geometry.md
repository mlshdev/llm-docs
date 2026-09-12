> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/request/geometry](https://developer.apple.com/documentation/realitykit/photogrammetrysession/request/geometry)

# PhotogrammetrySession.Request.Geometry

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that holds a bounding box and transformation data for a request.

## Declaration

```swift
struct Geometry
```

## Topics

### Creating a geometry instance

- [init(bounds:transform:)](geometry/init%28bounds_transform_%29.md): Creates an instance with an optional bounding box and transform.

### Accessing geometry data

- [bounds](geometry/bounds.md): The bounding box for the created entity.
- [transform](geometry/transform.md): A transform applied to the created entity.

### Initializers

- [init(orientedBounds:transform:)](geometry/init%28orientedbounds_transform_%29.md): Creates an instance from an oriented bounding box and transform.

### Instance Properties

- [orientedBounds](geometry/orientedbounds.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
