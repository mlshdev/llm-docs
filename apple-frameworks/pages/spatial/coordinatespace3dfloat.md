> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/coordinatespace3dfloat](https://developer.apple.com/documentation/spatial/coordinatespace3dfloat)

# CoordinateSpace3DFloat

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
protocol CoordinateSpace3DFloat : CoordinateSpace3D where Self.AncestorCoordinateSpace : CoordinateSpace3DFloat
```

## Topics

### Instance Methods

- [ancestorFromSpaceTransformFloat()](coordinatespace3dfloat/ancestorfromspacetransformfloat%28%29.md)
- [convert(value:from:)](coordinatespace3dfloat/convert%28value_from_%29.md): Converts a value from a source coordinate space to this one.
- [convert(value:to:)](coordinatespace3dfloat/convert%28value_to_%29.md): Converts a value from this coordinate space to another.
- [transformSpace(\_:)](coordinatespace3dfloat/transformspace%28__%29.md): Returns a modified version of the coordinate space.

## Relationships

### Inherits From

- [CoordinateSpace3D](coordinatespace3d.md)

### Conforming Types

- [WorldReferenceCoordinateSpace](worldreferencecoordinatespace.md)

## See Also

### Converting between coordinate spaces

- [CoordinateSpace3D](coordinatespace3d.md): A type that represents a coordinate space which you can use to convert values to and from other coordinate spaces.
- [CoordinateSpaceValue3D](coordinatespacevalue3d.md): An opaque value which can be resolved to a concrete value in a `CoordinateSpace3D`
- [ProjectiveTransformable3D](projectivetransformable3d.md)
- [ProjectiveTransformable3DFloat](projectivetransformable3dfloat.md)
- [WorldReferenceCoordinateSpace](worldreferencecoordinatespace.md): A coordinate space that represents a world reference point.
