> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstaclegraph/bufferradius](https://developer.apple.com/documentation/gameplaykit/gkobstaclegraph/bufferradius)

# bufferRadius (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The distance from obstacle edges that should also be considered impassable.

## Declaration

```swift
var bufferRadius: Float { get }
```

<a id="Discussion"></a>

## Discussion

You set this property when creating a graph with the [init(obstacles:bufferRadius:)](init%28obstacles_bufferradius_%29.md) initializer. Use the `bufferRadius` initializer parameter to take the size of potential travelers into account when determining navigability. After initialization, you can use this property to examine the buffer radius the graph was created with—for example, to draw a debugging overlay in your game UI that indicates passable and impassable areas.

## See Also

### Working with Nodes

- [connectUsingObstacles(node:)](connectusingobstacles%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.
- [connectUsingObstacles(node:ignoring:)](connectusingobstacles%28node_ignoring_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the area occupied by the specified obstacles.
- [connectUsingObstacles(node:ignoringBufferRadiusOf:)](connectusingobstacles%28node_ignoringbufferradiusof_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the buffer regions around the specified obstacles.

# bufferRadius (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The distance from obstacle edges that should also be considered impassable.

## Declaration

```objectivec
@property (nonatomic, readonly) float bufferRadius;
```

<a id="Discussion"></a>

## Discussion

You set this property when creating a graph with the [initWithObstacles:bufferRadius:](init%28obstacles_bufferradius_%29.md) initializer. Use the `bufferRadius` initializer parameter to take the size of potential travelers into account when determining navigability. After initialization, you can use this property to examine the buffer radius the graph was created with—for example, to draw a debugging overlay in your game UI that indicates passable and impassable areas.

## See Also

### Working with Nodes

- [connectNodeUsingObstacles:](connectusingobstacles%28node_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors without creating connections that pass through obstacles or their buffer regions.
- [connectNodeUsingObstacles:ignoringObstacles:](connectusingobstacles%28node_ignoring_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the area occupied by the specified obstacles.
- [connectNodeUsingObstacles:ignoringBufferRadiusOfObstacles:](connectusingobstacles%28node_ignoringbufferradiusof_%29.md): Adds the specified node to the graph, connecting it to its nearest neighbors while ignoring the buffer regions around the specified obstacles.
