> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpolygonobstacle/vertex(at:)](https://developer.apple.com/documentation/gameplaykit/gkpolygonobstacle/vertex(at:))

# vertex(at:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the point coordinates of the specified vertex.

## Declaration

```swift
func vertex(at index: Int) -> vector_float2
```

## Parameters

- `index`: An index to the obstacle’s list of vertices, between zero and the value of the [vertexCount](vertexcount.md) property.

<a id="return-value"></a>

## Return Value

The point coordinates of the specified vertex.

<a id="Discussion"></a>

## Discussion

Obstacles are immutable objects; to change the shape of an obstacle, remove it and create a new obstacle with a new list of vertices. Use this method along with the [vertexCount](vertexcount.md) property to inspect an existing obstacle—for example, to draw a debugging overlay representing the obstacle in your game.

The coordinate space you define obstacles in, whether used for pathfinding or with agents, is entirely arbitrary. However, it is often convenient to define pathfinding graphs and agent simulations in a coordinate space similar to the one your game uses for display—for example, in a SpriteKit game, define obstacles in the point coordinate system of your scene.

## See Also

### Inspecting Vertices

- [vertexCount](vertexcount.md): The number of vertices that define the polygon-shaped area of the obstacle.

# vertexAtIndex: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the point coordinates of the specified vertex.

## Declaration

```objectivec
- (vector_float2) vertexAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: An index to the obstacle’s list of vertices, between zero and the value of the [vertexCount](vertexcount.md) property.

<a id="return-value"></a>

## Return Value

The point coordinates of the specified vertex.

<a id="Discussion"></a>

## Discussion

Obstacles are immutable objects; to change the shape of an obstacle, remove it and create a new obstacle with a new list of vertices. Use this method along with the [vertexCount](vertexcount.md) property to inspect an existing obstacle—for example, to draw a debugging overlay representing the obstacle in your game.

The coordinate space you define obstacles in, whether used for pathfinding or with agents, is entirely arbitrary. However, it is often convenient to define pathfinding graphs and agent simulations in a coordinate space similar to the one your game uses for display—for example, in a SpriteKit game, define obstacles in the point coordinate system of your scene.

## See Also

### Inspecting Vertices

- [vertexCount](vertexcount.md): The number of vertices that define the polygon-shaped area of the obstacle.
