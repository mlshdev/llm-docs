> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingbox](https://developer.apple.com/documentation/realitykit/boundingbox)

# BoundingBox

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An axis-aligned bounding box (AABB).

## Declaration

```swift
@frozen struct BoundingBox
```

## Topics

### Creating a bounding box

- [init()](boundingbox/init%28%29.md): Creates an empty bounding box.
- [init(min:max:)](boundingbox/init%28min_max_%29.md): Creates a bounding box with the given settings.

### Getting an empty box

- [empty](boundingbox/empty.md): An empty bounding box.

### Getting the box characteristics

- [max](boundingbox/max.md): The position of the maximum corner of the box.
- [min](boundingbox/min.md): The position of the minimum corner of the box.
- [center](boundingbox/center.md): The center of the bounding box.
- [extents](boundingbox/extents.md): The extents of the bounding box.
- [boundingRadius](boundingbox/boundingradius.md): The radius of a bounding sphere that encompasses the bounding box.

### Expanding boxes

- [union(\_:)](boundingbox/union%28__%29-1y8hw.md): Creates a bounding box containing the current bounds and the specified bounds.
- [formUnion(\_:)](boundingbox/formunion%28__%29-5iy03.md): Expands the bounding box to contain the specified bounds.
- [union(\_:)](boundingbox/union%28__%29-g4th.md): Creates a bounding box containing the current bounds and the specified point.
- [formUnion(\_:)](boundingbox/formunion%28__%29-6itj9.md): Expands the bounding box to contain the specified point.

### Checking for overlap

- [contains(\_:)](boundingbox/contains%28__%29-5ux4h.md): Checks whether the bounding box contains the specified bounds.
- [contains(\_:)](boundingbox/contains%28__%29-92ap6.md): Checks whether the bounding box contains the specified point.
- [intersects(\_:)](boundingbox/intersects%28__%29.md): Checks whether the bounding box intersects the specified bounds.

### Checking for separation

- [distanceSquared(toPoint:)](boundingbox/distancesquared%28topoint_%29.md): Calculates the distance from a point to the bounding box.

### Transforming a bounding box

- [transform(by:)](boundingbox/transform%28by_%29.md): Transforms the bounding box.
- [transformed(by:)](boundingbox/transformed%28by_%29.md): Transforms the bounding box and finds the bounds of the result.

### Operators

- [==(\_:\_:)](boundingbox/==%28____%29.md): Indicates whether two bounding boxes are equal.

### Initializers

- [init(\_:)](boundingbox/init%28__%29.md)

### Instance Properties

- [isEmpty](boundingbox/isempty.md): A Boolean that indicates whether the bounding box is empty.

### Instance Methods

- [contains(\_:)](boundingbox/contains%28__%29.md): Checks whether the bounding box contains the specified bounds.
- [formUnion(\_:)](boundingbox/formunion%28__%29.md): Expands the bounding box to contain the specified bounds.
- [hash(into:)](boundingbox/hash%28into_%29.md): Hashes the essential components of the bounding box by feeding them into the given hash function.
- [union(\_:)](boundingbox/union%28__%29.md): Creates a bounding box containing the current bounds and the specified bounds.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Bounding box retrieval

- [OrientedBoundingBox](orientedboundingbox.md): Representation for an oriented bounding box. Uses a combination of an axis-aligned bounding box and a rotation vector around the centroid of the said axis-aligned bounding box to represent an oriented bounding box.
