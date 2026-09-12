> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransformable3dfloat](https://developer.apple.com/documentation/spatial/projectivetransformable3dfloat)

# ProjectiveTransformable3DFloat

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
protocol ProjectiveTransformable3DFloat : ProjectiveTransformable3D
```

## Topics

### Instance Methods

- [applying(\_:)](projectivetransformable3dfloat/applying%28__%29.md): Returns a transformed copy of the value

## Relationships

### Inherits From

- [ProjectiveTransformable3D](projectivetransformable3d.md)

### Conforming Types

- [Point3DFloat](point3dfloat.md)
- [Pose3DFloat](pose3dfloat.md)
- [Ray3DFloat](ray3dfloat.md)
- [Rect3DFloat](rect3dfloat.md)
- [Rotation3DFloat](rotation3dfloat.md)
- [Vector3DFloat](vector3dfloat.md)

## See Also

### Converting between coordinate spaces

- [CoordinateSpace3D](coordinatespace3d.md): A type that represents a coordinate space which you can use to convert values to and from other coordinate spaces.
- [CoordinateSpace3DFloat](coordinatespace3dfloat.md)
- [CoordinateSpaceValue3D](coordinatespacevalue3d.md): An opaque value which can be resolved to a concrete value in a `CoordinateSpace3D`
- [ProjectiveTransformable3D](projectivetransformable3d.md)
- [WorldReferenceCoordinateSpace](worldreferencecoordinatespace.md): A coordinate space that represents a world reference point.
