> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tossablerepresentation/dodecahedronface](https://developer.apple.com/documentation/tabletopkit/tossablerepresentation/dodecahedronface)

# TossableRepresentation.DodecahedronFace

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

One of the faces of an dodecahedron

## Declaration

```swift
enum DodecahedronFace
```

## Topics

### Faces

- [TossableRepresentation.DodecahedronFace.a](dodecahedronface/a.md)
- [TossableRepresentation.DodecahedronFace.b](dodecahedronface/b.md)
- [TossableRepresentation.DodecahedronFace.c](dodecahedronface/c.md)
- [TossableRepresentation.DodecahedronFace.d](dodecahedronface/d.md)
- [TossableRepresentation.DodecahedronFace.e](dodecahedronface/e.md)
- [TossableRepresentation.DodecahedronFace.f](dodecahedronface/f.md)
- [TossableRepresentation.DodecahedronFace.g](dodecahedronface/g.md)
- [TossableRepresentation.DodecahedronFace.h](dodecahedronface/h.md)
- [TossableRepresentation.DodecahedronFace.i](dodecahedronface/i.md)
- [TossableRepresentation.DodecahedronFace.j](dodecahedronface/j.md)
- [TossableRepresentation.DodecahedronFace.k](dodecahedronface/k.md)
- [TossableRepresentation.DodecahedronFace.l](dodecahedronface/l.md)

### Creating a face

- [init(restingOrientation:)](dodecahedronface/init%28restingorientation_%29.md): Constructs the face in contact with the table when the equipment has the given resting orientation. If the resting orientation is an unexpected rotation, constructs the face corresponding to the closest expected orientation.

### Getting the resting orientation

- [restingOrientation](dodecahedronface/restingorientation.md): Provides the resting orientation for when this face is in contact with the table.

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
- [TossableRepresentation.IcosahedronFace](icosahedronface.md): One of the faces of an icosahedron
- [TossableRepresentation.OctahedronFace](octahedronface.md): One of the faces of an octahedron
- [TossableRepresentation.TetrahedronFace](tetrahedronface.md): One of the faces of a tetrahedron
