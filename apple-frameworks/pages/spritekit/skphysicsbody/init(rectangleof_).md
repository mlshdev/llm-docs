> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/init(rectangleof:)](https://developer.apple.com/documentation/spritekit/skphysicsbody/init(rectangleof:))

# init(rectangleOf:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a rectangular physics body centered on the owning node’s origin.

## Declaration

```swift
init(rectangleOf s: CGSize)
```

## Parameters

- `s`: The size of the rectangle.

<a id="return-value"></a>

## Return Value

A new volume-based physics body.

## See Also

### Creating a Body from a Shape

- [init(circleOfRadius:)](init%28circleofradius_%29.md): Creates a circular physics body centered on the owning node’s origin.
- [init(circleOfRadius:center:)](init%28circleofradius_center_%29.md): Creates a circular physics body centered on an arbitrary point.
- [init(rectangleOf:center:)](init%28rectangleof_center_%29.md): Creates a rectangular physics body centered on an arbitrary point.
- [init(polygonFrom:)](init%28polygonfrom_%29.md): Creates a polygonal physics body.

# bodyWithRectangleOfSize: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a rectangular physics body centered on the owning node’s origin.

## Declaration

```objectivec
+ (SKPhysicsBody *) bodyWithRectangleOfSize:(CGSize) s;
```

## Parameters

- `s`: The size of the rectangle.

<a id="return-value"></a>

## Return Value

A new volume-based physics body.

## See Also

### Creating a Body from a Shape

- [bodyWithCircleOfRadius:](init%28circleofradius_%29.md): Creates a circular physics body centered on the owning node’s origin.
- [bodyWithCircleOfRadius:center:](init%28circleofradius_center_%29.md): Creates a circular physics body centered on an arbitrary point.
- [bodyWithRectangleOfSize:center:](init%28rectangleof_center_%29.md): Creates a rectangular physics body centered on an arbitrary point.
- [bodyWithPolygonFromPath:](init%28polygonfrom_%29.md): Creates a polygonal physics body.
