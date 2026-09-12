> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/init(edgeloopfrom:)-8sqfy](https://developer.apple.com/documentation/spritekit/skphysicsbody/init(edgeloopfrom:)-8sqfy)

# init(edgeLoopFrom:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an edge loop from a rectangle.

## Declaration

```swift
init(edgeLoopFrom rect: CGRect)
```

## Parameters

- `rect`: The rectangle that defines the edges. The rectangle is specified relative to the owning node’s origin.

<a id="return-value"></a>

## Return Value

A new edge-based physics body.

## Mentioned In

- [Shaping a Physics Body to Match a Node’s Graphics](../shaping-a-physics-body-to-match-a-node-s-graphics.md)

<a id="Discussion"></a>

## Discussion

An edge has no volume or mass and is always treated as if the [isDynamic](isdynamic.md) property is equal to [false](https://developer.apple.com/documentation/swift/false). Edges may only collide with volume-based physics bodies.

## See Also

### Creating an Edge-Based Physics Body

- [Creating an Edge Loop Around a Scene](../creating-an-edge-loop-around-a-scene.md): Border your scene with an obstacle that physics bodies cannot penetrate.
- [init(edgeFrom:to:)](init%28edgefrom_to_%29.md): Creates an edge between two points.
- [init(edgeLoopFrom:)](init%28edgeloopfrom_%29-5grxu.md): Creates an edge loop from a path.
- [init(edgeChainFrom:)](init%28edgechainfrom_%29.md): Creates an edge chain from a path.

# bodyWithEdgeLoopFromRect: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an edge loop from a rectangle.

## Declaration

```objectivec
+ (SKPhysicsBody *) bodyWithEdgeLoopFromRect:(CGRect) rect;
```

## Parameters

- `rect`: The rectangle that defines the edges. The rectangle is specified relative to the owning node’s origin.

<a id="return-value"></a>

## Return Value

A new edge-based physics body.

## Mentioned In

- [Shaping a Physics Body to Match a Node’s Graphics](../shaping-a-physics-body-to-match-a-node-s-graphics.md)

<a id="Discussion"></a>

## Discussion

An edge has no volume or mass and is always treated as if the [dynamic](isdynamic.md) property is equal to [false](https://developer.apple.com/documentation/swift/false). Edges may only collide with volume-based physics bodies.

## See Also

### Creating an Edge-Based Physics Body

- [Creating an Edge Loop Around a Scene](../creating-an-edge-loop-around-a-scene.md): Border your scene with an obstacle that physics bodies cannot penetrate.
- [bodyWithEdgeFromPoint:toPoint:](init%28edgefrom_to_%29.md): Creates an edge between two points.
- [bodyWithEdgeLoopFromPath:](init%28edgeloopfrom_%29-5grxu.md): Creates an edge loop from a path.
- [bodyWithEdgeChainFromPath:](init%28edgechainfrom_%29.md): Creates an edge chain from a path.
