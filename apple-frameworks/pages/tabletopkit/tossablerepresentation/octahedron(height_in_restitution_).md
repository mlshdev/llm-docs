> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tossablerepresentation/octahedron(height:in:restitution:)](https://developer.apple.com/documentation/tabletopkit/tossablerepresentation/octahedron(height:in:restitution:))

# octahedron(height:in:restitution:)

**Framework:** TabletopKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Creates a regular octahedron, a shape with 8 triangular faces, that the player tosses during gameplay.

## Declaration

```swift
static func octahedron(height: Float, in unit: UnitLength = .meters, restitution: Float? = nil) -> TossableRepresentation
```

## Parameters

- `height`: The height of the octahedron.
- `unit`: The unit of measurement for the height.
- `restitution`: The coefficient of restitution, in the range \[0, 1\].

<a id="discussion"></a>

## Discussion

The vertices for the simulated octahedron are oriented with one face toward +y with one vertex of that top face oriented toward -z. In this orientation, the height (h) is measured from face to opposing face, and the vertices have the following coordinates, which all lie on a circumscribed sphere of radius r = h/2 ⋅ sqrt(3): ±Y face: ±{          0, +1, -sqrt(2)   } ⋅ h/2, ±{ -sqrt(6)/2, +1, +sqrt(2)/2 } ⋅ h/2, ±{ +sqrt(6)/2, +1, +sqrt(2)/2 } ⋅ h/2

Higher restitution values indicate materials that conserve kinetic energy during collisions, causing objects to bounce off each other elastically. Lower values suggest materials that absorb kinetic energy, resulting in less bounce and more energy loss upon impact.

## See Also

### Creating geometric shapes

- [cube(height:in:restitution:)](cube%28height_in_restitution_%29.md): Creates a cube that the player tosses during gameplay.
- [decahedron(height:in:restitution:)](decahedron%28height_in_restitution_%29.md): Creates a decahedron, a symmetrical, ten-faced polyhedron with kite-shaped faces, that the player tosses during gameplay.
- [dodecahedron(height:in:restitution:)](dodecahedron%28height_in_restitution_%29.md): Creates a regular dodecahedron, a shape with 12 pentagonal faces, that the player tosses during gameplay.
- [icosahedron(height:in:restitution:)](icosahedron%28height_in_restitution_%29.md): Creates a regular icosahedron, a shape with 20 triangular faces, that the player tosses during gameplay.
- [sphere(radius:in:restitution:)](sphere%28radius_in_restitution_%29.md): Creates a sphere with the specified radius that the player tosses during gameplay.
- [tetrahedron(height:in:restitution:)](tetrahedron%28height_in_restitution_%29.md): Creates a regular tetrahedron, a pyramid with four triangular faces, that the player tosses during gameplay.
