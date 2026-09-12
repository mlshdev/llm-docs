> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpolygonobstacle/vertexcount](https://developer.apple.com/documentation/gameplaykit/gkpolygonobstacle/vertexcount)

# vertexCount (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of vertices that define the polygon-shaped area of the obstacle.

## Declaration

```swift
var vertexCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Obstacles are immutable objects; to change the shape of an obstacle, remove it and create a new obstacle with a new list of vertices. Use this property along with the [vertex(at:)](vertex%28at_%29.md) method to inspect an existing obstacle—for example, to draw a debugging overlay representing the obstacle in your game.

## See Also

### Inspecting Vertices

- [vertex(at:)](vertex%28at_%29.md): Returns the point coordinates of the specified vertex.

# vertexCount (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of vertices that define the polygon-shaped area of the obstacle.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger vertexCount;
```

<a id="Discussion"></a>

## Discussion

Obstacles are immutable objects; to change the shape of an obstacle, remove it and create a new obstacle with a new list of vertices. Use this property along with the [vertexAtIndex:](vertex%28at_%29.md) method to inspect an existing obstacle—for example, to draw a debugging overlay representing the obstacle in your game.

## See Also

### Inspecting Vertices

- [vertexAtIndex:](vertex%28at_%29.md): Returns the point coordinates of the specified vertex.
