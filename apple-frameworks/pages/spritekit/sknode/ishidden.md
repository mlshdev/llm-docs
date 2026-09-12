> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/ishidden](https://developer.apple.com/documentation/spritekit/sknode/ishidden)

# isHidden (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether a node and its descendants are rendered.

## Declaration

```swift
var isHidden: Bool { get set }
```

## Mentioned In

- [About Node Property Propagation](../about-node-property-propagation.md)
- [Getting Started with Nodes](../getting-started-with-nodes.md)

<a id="Discussion"></a>

## Discussion

When hidden, a node and its descendants are not rendered. However, they still exist in the scene and continue to interact in other ways. For example, the node’s actions still run and the node can still be intersected with other nodes. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Altering Node Visibility

- [alpha](alpha.md): The transparency value applied to the node’s contents.

# hidden (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether a node and its descendants are rendered.

## Declaration

```objectivec
@property (nonatomic, getter=isHidden) BOOL hidden;
```

## Mentioned In

- [About Node Property Propagation](../about-node-property-propagation.md)
- [Getting Started with Nodes](../getting-started-with-nodes.md)

<a id="Discussion"></a>

## Discussion

When hidden, a node and its descendants are not rendered. However, they still exist in the scene and continue to interact in other ways. For example, the node’s actions still run and the node can still be intersected with other nodes. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Altering Node Visibility

- [alpha](alpha.md): The transparency value applied to the node’s contents.
