> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tossablerepresentation/cube(height:in:restitution:)](https://developer.apple.com/documentation/tabletopkit/tossablerepresentation/cube(height:in:restitution:))

# cube(height:in:restitution:)

**Framework:** TabletopKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Creates a cube that the player tosses during gameplay.

## Declaration

```swift
static func cube(height: Float, in unit: UnitLength = .meters, restitution: Float? = nil) -> TossableRepresentation
```

## Parameters

- `height`: The height of the cube.
- `unit`: The unit of measurement for the height.
- `restitution`: The coefficient of restitution, in the range \[0, 1\].

<a id="discussion"></a>

## Discussion

The vertices for the simulated cube are oriented with faces axis aligned. In this orientation, the height (h) is measured from face to opposing face, and the vertices have the following coordinates, which all lie on a circumscribed sphere of radius r = h/2 ⋅ sqrt(3): { ±1, ±1, ±1 } ⋅ h/2 = { ±sqrt(3)/3, ±sqrt(3)/3, ±sqrt(3)/3 } ⋅ r

Higher restitution values indicate materials that conserve kinetic energy during collisions, causing objects to bounce off each other elastically. Lower values suggest materials that absorb kinetic energy, resulting in less bounce and more energy loss upon impact.

## See Also

### Creating geometric shapes

- [decahedron(height:in:restitution:)](decahedron%28height_in_restitution_%29.md): Creates a decahedron, a symmetrical, ten-faced polyhedron with kite-shaped faces, that the player tosses during gameplay.
- [dodecahedron(height:in:restitution:)](dodecahedron%28height_in_restitution_%29.md): Creates a regular dodecahedron, a shape with 12 pentagonal faces, that the player tosses during gameplay.
- [icosahedron(height:in:restitution:)](icosahedron%28height_in_restitution_%29.md): Creates a regular icosahedron, a shape with 20 triangular faces, that the player tosses during gameplay.
- [octahedron(height:in:restitution:)](octahedron%28height_in_restitution_%29.md): Creates a regular octahedron, a shape with 8 triangular faces, that the player tosses during gameplay.
- [sphere(radius:in:restitution:)](sphere%28radius_in_restitution_%29.md): Creates a sphere with the specified radius that the player tosses during gameplay.
- [tetrahedron(height:in:restitution:)](tetrahedron%28height_in_restitution_%29.md): Creates a regular tetrahedron, a pyramid with four triangular faces, that the player tosses during gameplay.
