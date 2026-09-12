> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/init(circleofradius:center:)](https://developer.apple.com/documentation/spritekit/skphysicsbody/init(circleofradius:center:))

# init(circleOfRadius:center:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a circular physics body centered on an arbitrary point.

## Declaration

```swift
init(circleOfRadius r: CGFloat, center: CGPoint)
```

## Parameters

- `r`: The radius of the circle.
- `center`: The origin of the circle in the owning node’s coordinate system.

<a id="return-value"></a>

## Return Value

A new volume-based physics body.

## See Also

### Creating a Body from a Shape

- [init(circleOfRadius:)](init%28circleofradius_%29.md): Creates a circular physics body centered on the owning node’s origin.
- [init(rectangleOf:)](init%28rectangleof_%29.md): Creates a rectangular physics body centered on the owning node’s origin.
- [init(rectangleOf:center:)](init%28rectangleof_center_%29.md): Creates a rectangular physics body centered on an arbitrary point.
- [init(polygonFrom:)](init%28polygonfrom_%29.md): Creates a polygonal physics body.

# bodyWithCircleOfRadius:center: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a circular physics body centered on an arbitrary point.

## Declaration

```objectivec
+ (SKPhysicsBody *) bodyWithCircleOfRadius:(CGFloat) r center:(CGPoint) center;
```

## Parameters

- `r`: The radius of the circle.
- `center`: The origin of the circle in the owning node’s coordinate system.

<a id="return-value"></a>

## Return Value

A new volume-based physics body.

## See Also

### Creating a Body from a Shape

- [bodyWithCircleOfRadius:](init%28circleofradius_%29.md): Creates a circular physics body centered on the owning node’s origin.
- [bodyWithRectangleOfSize:](init%28rectangleof_%29.md): Creates a rectangular physics body centered on the owning node’s origin.
- [bodyWithRectangleOfSize:center:](init%28rectangleof_center_%29.md): Creates a rectangular physics body centered on an arbitrary point.
- [bodyWithPolygonFromPath:](init%28polygonfrom_%29.md): Creates a polygonal physics body.
