> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tossablerepresentation/tetrahedronface](https://developer.apple.com/documentation/tabletopkit/tossablerepresentation/tetrahedronface)

# TossableRepresentation.TetrahedronFace

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

One of the faces of a tetrahedron

## Declaration

```swift
enum TetrahedronFace
```

## Topics

### Faces

- [TossableRepresentation.TetrahedronFace.a](tetrahedronface/a.md)
- [TossableRepresentation.TetrahedronFace.b](tetrahedronface/b.md)
- [TossableRepresentation.TetrahedronFace.c](tetrahedronface/c.md)
- [TossableRepresentation.TetrahedronFace.d](tetrahedronface/d.md)

### Creating a face

- [init(restingOrientation:)](tetrahedronface/init%28restingorientation_%29.md): Constructs the face in contact with the table when the equipment has the given resting orientation. If the resting orientation is an unexpected rotation, constructs the face corresponding to the closest expected orientation.

### Getting the resting orientation

- [restingOrientation](tetrahedronface/restingorientation.md): Provides the resting orientation for when this face is in contact with the table.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TossableRepresentation.TossableFace](tossableface.md)

## See Also

### Getting the face

- [face(for:)](face%28for_%29.md): For the shape corresponding to this tossable representation, constructs the face in contact with the table when the equipment has the given resting orientation.
- [TossableRepresentation.TossableFace](tossableface.md): A protocol that represents a face of a tossable shape.
- [TossableRepresentation.SphereFace](sphereface.md): An object that represents an infinitely small area on the surface of a sphere (effectively a point).
- [TossableRepresentation.CubeFace](cubeface.md): One of the faces of a cube
- [TossableRepresentation.DecahedronFace](decahedronface.md): One of the faces of an decahedron
- [TossableRepresentation.DodecahedronFace](dodecahedronface.md): One of the faces of an dodecahedron
- [TossableRepresentation.IcosahedronFace](icosahedronface.md): One of the faces of an icosahedron
- [TossableRepresentation.OctahedronFace](octahedronface.md): One of the faces of an octahedron
