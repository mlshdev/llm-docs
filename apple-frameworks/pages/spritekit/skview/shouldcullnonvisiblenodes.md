> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/shouldcullnonvisiblenodes](https://developer.apple.com/documentation/spritekit/skview/shouldcullnonvisiblenodes)

# shouldCullNonVisibleNodes (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the view automatically culls non-visible nodes from the rendering tree.

## Declaration

```swift
var shouldCullNonVisibleNodes: Bool { get set }
```

## Mentioned In

- [Maximizing Node Drawing Performance](../maximizing-node-drawing-performance.md)

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), meaning that when the scene is rendered, the scene first searches the tree for invisible or offscreen nodes and culls them from the list of nodes to be rendered. Then the remaining (visible) nodes are processed and rendered. This is normally the desired behavior, because Scene Kit avoids expensive processing on nodes that cannot affect the final output. However, if your game is already managing the contents of the scene’s node tree (for example, by removing nodes from the tree when they are offscreen), you can set this to [false](https://developer.apple.com/documentation/swift/false) to disable automatic scene culling. Disabling scene culling removes the performance overhead of this check, but each invisible or offscreen node present in the node tree reduces the performance of the renderer.

## See Also

### Configuring Performance Related Toggles

- [ignoresSiblingOrder](ignoressiblingorder.md): A Boolean value that indicates whether parent-child and sibling relationships affect the rendering order of nodes in the scene.
- [allowsTransparency](allowstransparency.md): A Boolean property that indicates whether the view is rendered using transparency.
- [isAsynchronous](isasynchronous.md): A Boolean value that indicates whether the content is rendered asynchronously.

# shouldCullNonVisibleNodes (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the view automatically culls non-visible nodes from the rendering tree.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldCullNonVisibleNodes;
```

## Mentioned In

- [Maximizing Node Drawing Performance](../maximizing-node-drawing-performance.md)

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), meaning that when the scene is rendered, the scene first searches the tree for invisible or offscreen nodes and culls them from the list of nodes to be rendered. Then the remaining (visible) nodes are processed and rendered. This is normally the desired behavior, because Scene Kit avoids expensive processing on nodes that cannot affect the final output. However, if your game is already managing the contents of the scene’s node tree (for example, by removing nodes from the tree when they are offscreen), you can set this to [false](https://developer.apple.com/documentation/swift/false) to disable automatic scene culling. Disabling scene culling removes the performance overhead of this check, but each invisible or offscreen node present in the node tree reduces the performance of the renderer.

## See Also

### Configuring Performance Related Toggles

- [ignoresSiblingOrder](ignoressiblingorder.md): A Boolean value that indicates whether parent-child and sibling relationships affect the rendering order of nodes in the scene.
- [allowsTransparency](allowstransparency.md): A Boolean property that indicates whether the view is rendered using transparency.
- [asynchronous](isasynchronous.md): A Boolean value that indicates whether the content is rendered asynchronously.
