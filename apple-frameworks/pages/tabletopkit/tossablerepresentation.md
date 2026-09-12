> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tossablerepresentation](https://developer.apple.com/documentation/tabletopkit/tossablerepresentation)

# TossableRepresentation

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object that represents geometric shapes that the player can throw during gameplay, such as dice.

## Declaration

```swift
struct TossableRepresentation
```

## Topics

### Creating geometric shapes

- [cube(height:in:restitution:)](tossablerepresentation/cube%28height_in_restitution_%29.md): Creates a cube that the player tosses during gameplay.
- [decahedron(height:in:restitution:)](tossablerepresentation/decahedron%28height_in_restitution_%29.md): Creates a decahedron, a symmetrical, ten-faced polyhedron with kite-shaped faces, that the player tosses during gameplay.
- [dodecahedron(height:in:restitution:)](tossablerepresentation/dodecahedron%28height_in_restitution_%29.md): Creates a regular dodecahedron, a shape with 12 pentagonal faces, that the player tosses during gameplay.
- [icosahedron(height:in:restitution:)](tossablerepresentation/icosahedron%28height_in_restitution_%29.md): Creates a regular icosahedron, a shape with 20 triangular faces, that the player tosses during gameplay.
- [octahedron(height:in:restitution:)](tossablerepresentation/octahedron%28height_in_restitution_%29.md): Creates a regular octahedron, a shape with 8 triangular faces, that the player tosses during gameplay.
- [sphere(radius:in:restitution:)](tossablerepresentation/sphere%28radius_in_restitution_%29.md): Creates a sphere with the specified radius that the player tosses during gameplay.
- [tetrahedron(height:in:restitution:)](tossablerepresentation/tetrahedron%28height_in_restitution_%29.md): Creates a regular tetrahedron, a pyramid with four triangular faces, that the player tosses during gameplay.

### Getting the face

- [face(for:)](tossablerepresentation/face%28for_%29.md): For the shape corresponding to this tossable representation, constructs the face in contact with the table when the equipment has the given resting orientation.
- [TossableRepresentation.TossableFace](tossablerepresentation/tossableface.md): A protocol that represents a face of a tossable shape.
- [TossableRepresentation.SphereFace](tossablerepresentation/sphereface.md): An object that represents an infinitely small area on the surface of a sphere (effectively a point).
- [TossableRepresentation.CubeFace](tossablerepresentation/cubeface.md): One of the faces of a cube
- [TossableRepresentation.DecahedronFace](tossablerepresentation/decahedronface.md): One of the faces of an decahedron
- [TossableRepresentation.DodecahedronFace](tossablerepresentation/dodecahedronface.md): One of the faces of an dodecahedron
- [TossableRepresentation.IcosahedronFace](tossablerepresentation/icosahedronface.md): One of the faces of an icosahedron
- [TossableRepresentation.OctahedronFace](tossablerepresentation/octahedronface.md): One of the faces of an octahedron
- [TossableRepresentation.TetrahedronFace](tossablerepresentation/tetrahedronface.md): One of the faces of a tetrahedron

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interactions

- [Simulating dice rolls as a component for your game](simulating-dice-rolls-as-a-component-for-your-game.md): Create a physically realistic dice game by adding interactive rolling and scoring.
- [TabletopInteraction](tabletopinteraction.md): A protocol for objects that manage the entire flow of players interacting with equipment.
- [TableSnapshot](tablesnapshot.md): A snapshot of the current state of the table.
- [TableVisualState](tablevisualstate.md): A structure that represents the appearance of an object on the table.
- [TableCursor](tablecursor.md): A cursor conveys information about one equipment that is currently being controlled by an interaction.
- [TableCursorIdentifier](tablecursoridentifier.md): A unique identifier for cursors.
