> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/init(edgeloopfrom:)-5grxu](https://developer.apple.com/documentation/spritekit/skphysicsbody/init(edgeloopfrom:)-5grxu)

# init(edgeLoopFrom:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an edge loop from a path.

## Declaration

```swift
init(edgeLoopFrom path: CGPath)
```

## Parameters

- `path`: A Core Graphics path. The points are specified relative to the owning node’s origin. The path must not intersect itself.

<a id="return-value"></a>

## Return Value

A new edge-based physics body.

## Mentioned In

- [Shaping a Physics Body to Match a Node’s Graphics](../shaping-a-physics-body-to-match-a-node-s-graphics.md)

<a id="Discussion"></a>

## Discussion

If the path is not already closed, a loop is automatically created by joining the last point to the first.

An edge has no volume or mass and is always treated as if the [isDynamic](isdynamic.md) property is equal to [false](https://developer.apple.com/documentation/swift/false). Edges may only collide with volume-based physics bodies.

## See Also

### Creating an Edge-Based Physics Body

- [Creating an Edge Loop Around a Scene](../creating-an-edge-loop-around-a-scene.md): Border your scene with an obstacle that physics bodies cannot penetrate.
- [init(edgeLoopFrom:)](init%28edgeloopfrom_%29-8sqfy.md): Creates an edge loop from a rectangle.
- [init(edgeFrom:to:)](init%28edgefrom_to_%29.md): Creates an edge between two points.
- [init(edgeChainFrom:)](init%28edgechainfrom_%29.md): Creates an edge chain from a path.

# bodyWithEdgeLoopFromPath: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an edge loop from a path.

## Declaration

```objectivec
+ (SKPhysicsBody *) bodyWithEdgeLoopFromPath:(CGPathRef) path;
```

## Parameters

- `path`: A Core Graphics path. The points are specified relative to the owning node’s origin. The path must not intersect itself.

<a id="return-value"></a>

## Return Value

A new edge-based physics body.

## Mentioned In

- [Shaping a Physics Body to Match a Node’s Graphics](../shaping-a-physics-body-to-match-a-node-s-graphics.md)

<a id="Discussion"></a>

## Discussion

If the path is not already closed, a loop is automatically created by joining the last point to the first.

An edge has no volume or mass and is always treated as if the [dynamic](isdynamic.md) property is equal to [false](https://developer.apple.com/documentation/swift/false). Edges may only collide with volume-based physics bodies.

## See Also

### Creating an Edge-Based Physics Body

- [Creating an Edge Loop Around a Scene](../creating-an-edge-loop-around-a-scene.md): Border your scene with an obstacle that physics bodies cannot penetrate.
- [bodyWithEdgeLoopFromRect:](init%28edgeloopfrom_%29-8sqfy.md): Creates an edge loop from a rectangle.
- [bodyWithEdgeFromPoint:toPoint:](init%28edgefrom_to_%29.md): Creates an edge between two points.
- [bodyWithEdgeChainFromPath:](init%28edgechainfrom_%29.md): Creates an edge chain from a path.
