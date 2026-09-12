> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/node](https://developer.apple.com/documentation/spritekit/skphysicsbody/node)

# node (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The node that this body is connected to.

## Declaration

```swift
weak var node: SKNode? { get }
```

<a id="Discussion"></a>

## Discussion

You associate the body with a node by assigning it to the [physicsBody](../sknode/physicsbody.md) property of the [SKNode](../sknode.md) object. If the body is not associated with a node, the value is `nil`.

# node (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The node that this body is connected to.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) SKNode * node;
```

<a id="Discussion"></a>

## Discussion

You associate the body with a node by assigning it to the [physicsBody](../sknode/physicsbody.md) property of the [SKNode](../sknode.md) object. If the body is not associated with a node, the value is `nil`.
