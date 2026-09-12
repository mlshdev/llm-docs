> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkscene/graphs](https://developer.apple.com/documentation/gameplaykit/gkscene/graphs)

# graphs (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The list of pathfinding graph objects managed by the scene.

## Declaration

```swift
var graphs: [String : GKGraph] { get }
```

<a id="Discussion"></a>

## Discussion

When you define pathfinding graphs in the Xcode SpriteKit scene editor, Xcode automatically adds them to this array.

## See Also

### Managing Pathfinding Graphs

- [removeGraph(\_:)](removegraph%28__%29.md): Removes a pathfinding graph from the list of graphs managed by the scene.

# graphs (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The list of pathfinding graph objects managed by the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,GKGraph *> * graphs;
```

<a id="Discussion"></a>

## Discussion

When you define pathfinding graphs in the Xcode SpriteKit scene editor, Xcode automatically adds them to this array.

## See Also

### Managing Pathfinding Graphs

- [removeGraph:](removegraph%28__%29.md): Removes a pathfinding graph from the list of graphs managed by the scene.
