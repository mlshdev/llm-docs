> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/init(polygonfrom:)](https://developer.apple.com/documentation/spritekit/skphysicsbody/init(polygonfrom:))

# init(polygonFrom:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a polygonal physics body.

## Declaration

```swift
init(polygonFrom path: CGPath)
```

## Parameters

- `path`: A convex polygonal path with counterclockwise winding and no self intersections. The points are specified relative to the owning node’s origin.

<a id="return-value"></a>

## Return Value

A new volume-based physics body.

## Mentioned In

- [Shaping a Physics Body to Match a Node’s Graphics](../shaping-a-physics-body-to-match-a-node-s-graphics.md)

## See Also

### Creating a Body from a Shape

- [init(circleOfRadius:)](init%28circleofradius_%29.md): Creates a circular physics body centered on the owning node’s origin.
- [init(circleOfRadius:center:)](init%28circleofradius_center_%29.md): Creates a circular physics body centered on an arbitrary point.
- [init(rectangleOf:)](init%28rectangleof_%29.md): Creates a rectangular physics body centered on the owning node’s origin.
- [init(rectangleOf:center:)](init%28rectangleof_center_%29.md): Creates a rectangular physics body centered on an arbitrary point.

# bodyWithPolygonFromPath: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a polygonal physics body.

## Declaration

```objectivec
+ (SKPhysicsBody *) bodyWithPolygonFromPath:(CGPathRef) path;
```

## Parameters

- `path`: A convex polygonal path with counterclockwise winding and no self intersections. The points are specified relative to the owning node’s origin.

<a id="return-value"></a>

## Return Value

A new volume-based physics body.

## Mentioned In

- [Shaping a Physics Body to Match a Node’s Graphics](../shaping-a-physics-body-to-match-a-node-s-graphics.md)

## See Also

### Creating a Body from a Shape

- [bodyWithCircleOfRadius:](init%28circleofradius_%29.md): Creates a circular physics body centered on the owning node’s origin.
- [bodyWithCircleOfRadius:center:](init%28circleofradius_center_%29.md): Creates a circular physics body centered on an arbitrary point.
- [bodyWithRectangleOfSize:](init%28rectangleof_%29.md): Creates a rectangular physics body centered on the owning node’s origin.
- [bodyWithRectangleOfSize:center:](init%28rectangleof_center_%29.md): Creates a rectangular physics body centered on an arbitrary point.
