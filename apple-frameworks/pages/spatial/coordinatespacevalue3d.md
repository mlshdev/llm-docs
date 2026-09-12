> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/coordinatespacevalue3d](https://developer.apple.com/documentation/spatial/coordinatespacevalue3d)

# CoordinateSpaceValue3D

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An opaque value which can be resolved to a concrete value in a `CoordinateSpace3D`

## Declaration

```swift
protocol CoordinateSpaceValue3D<Value>
```

## Topics

### Associated Types

- [Value](coordinatespacevalue3d/value.md)

### Instance Methods

- [resolve(in:)](coordinatespacevalue3d/resolve%28in_%29.md): Resolves the associated value in the given coordinate space.

## See Also

### Converting between coordinate spaces

- [CoordinateSpace3D](coordinatespace3d.md): A type that represents a coordinate space which you can use to convert values to and from other coordinate spaces.
- [CoordinateSpace3DFloat](coordinatespace3dfloat.md)
- [ProjectiveTransformable3D](projectivetransformable3d.md)
- [ProjectiveTransformable3DFloat](projectivetransformable3dfloat.md)
- [WorldReferenceCoordinateSpace](worldreferencecoordinatespace.md): A coordinate space that represents a world reference point.
