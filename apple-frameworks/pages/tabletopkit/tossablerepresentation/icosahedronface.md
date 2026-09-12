> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tossablerepresentation/icosahedronface](https://developer.apple.com/documentation/tabletopkit/tossablerepresentation/icosahedronface)

# TossableRepresentation.IcosahedronFace

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

One of the faces of an icosahedron

## Declaration

```swift
enum IcosahedronFace
```

## Topics

### Faces

- [TossableRepresentation.IcosahedronFace.a](icosahedronface/a.md)
- [TossableRepresentation.IcosahedronFace.b](icosahedronface/b.md)
- [TossableRepresentation.IcosahedronFace.c](icosahedronface/c.md)
- [TossableRepresentation.IcosahedronFace.d](icosahedronface/d.md)
- [TossableRepresentation.IcosahedronFace.e](icosahedronface/e.md)
- [TossableRepresentation.IcosahedronFace.f](icosahedronface/f.md)
- [TossableRepresentation.IcosahedronFace.g](icosahedronface/g.md)
- [TossableRepresentation.IcosahedronFace.h](icosahedronface/h.md)
- [TossableRepresentation.IcosahedronFace.i](icosahedronface/i.md)
- [TossableRepresentation.IcosahedronFace.j](icosahedronface/j.md)
- [TossableRepresentation.IcosahedronFace.k](icosahedronface/k.md)
- [TossableRepresentation.IcosahedronFace.l](icosahedronface/l.md)
- [TossableRepresentation.IcosahedronFace.m](icosahedronface/m.md)
- [TossableRepresentation.IcosahedronFace.n](icosahedronface/n.md)
- [TossableRepresentation.IcosahedronFace.o](icosahedronface/o.md)
- [TossableRepresentation.IcosahedronFace.p](icosahedronface/p.md)
- [TossableRepresentation.IcosahedronFace.q](icosahedronface/q.md)
- [TossableRepresentation.IcosahedronFace.r](icosahedronface/r.md)
- [TossableRepresentation.IcosahedronFace.s](icosahedronface/s.md)
- [TossableRepresentation.IcosahedronFace.t](icosahedronface/t.md)

### Creating a face

- [init(restingOrientation:)](icosahedronface/init%28restingorientation_%29.md): Constructs the face in contact with the table when the equipment has the given resting orientation. If the resting orientation is an unexpected rotation, constructs the face corresponding to the closest expected orientation.

### Getting the resting orientation

- [restingOrientation](icosahedronface/restingorientation.md): Provides the resting orientation for when this face is in contact with the table.

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
- [TossableRepresentation.OctahedronFace](octahedronface.md): One of the faces of an octahedron
- [TossableRepresentation.TetrahedronFace](tetrahedronface.md): One of the faces of a tetrahedron
