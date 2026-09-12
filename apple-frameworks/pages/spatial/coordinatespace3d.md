> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/coordinatespace3d](https://developer.apple.com/documentation/spatial/coordinatespace3d)

# CoordinateSpace3D

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A type that represents a coordinate space which you can use to convert values to and from other coordinate spaces.

## Declaration

```swift
protocol CoordinateSpace3D
```

## Topics

### Associated Types

- [AncestorCoordinateSpace](coordinatespace3d/ancestorcoordinatespace.md)

### Instance Properties

- [ancestorSpace](coordinatespace3d/ancestorspace.md): An ancestor coordinate space.

### Instance Methods

- [ancestorFromSpaceTransform()](coordinatespace3d/ancestorfromspacetransform%28%29.md): This space’s transform relative to its ancestor.
- [convert(value:from:)](coordinatespace3d/convert%28value_from_%29-3zi9f.md): Converts a value from a source coordinate space to this one.
- [convert(value:from:)](coordinatespace3d/convert%28value_from_%29-7og5p.md): Converts a value from a source coordinate space to this one.
- [convert(value:to:)](coordinatespace3d/convert%28value_to_%29-2i668.md): Converts a value from this coordinate space to another.
- [convert(value:to:)](coordinatespace3d/convert%28value_to_%29-u2a0.md): Converts a value from this coordinate space to another.
- [transform(from:)](coordinatespace3d/transform%28from_%29.md): Returns a transform of this coordinate space from the target coordinate space.
- [transformSpace(\_:)](coordinatespace3d/transformspace%28__%29.md): Returns a modified version of the coordinate space.

### Type Properties

- [worldReference](coordinatespace3d/worldreference.md): Conforms when `Self` is `WorldReferenceCoordinateSpace`. A coordinate space that represents the world root for all other coordinate spaces.

## Relationships

### Inherited By

- [CoordinateSpace3DFloat](coordinatespace3dfloat.md)

### Conforming Types

- [WorldReferenceCoordinateSpace](worldreferencecoordinatespace.md)

## See Also

### Converting between coordinate spaces

- [CoordinateSpace3DFloat](coordinatespace3dfloat.md)
- [CoordinateSpaceValue3D](coordinatespacevalue3d.md): An opaque value which can be resolved to a concrete value in a `CoordinateSpace3D`
- [ProjectiveTransformable3D](projectivetransformable3d.md)
- [ProjectiveTransformable3DFloat](projectivetransformable3dfloat.md)
- [WorldReferenceCoordinateSpace](worldreferencecoordinatespace.md): A coordinate space that represents a world reference point.
