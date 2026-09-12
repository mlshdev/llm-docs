> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/node](https://developer.apple.com/documentation/spritekit/sknode/node)

# node

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new node.

## Declaration

```objectivec
+ (instancetype) node;
```

<a id="return-value"></a>

## Return Value

A newly initialized node.

<a id="Discussion"></a>

## Discussion

The [SKNode](../sknode.md) class does not draw or perform any tasks directly, so it is more common to instantiate a node subclass instead. However, you might create an `SKNode` object to organize other related nodes in the node tree.

## See Also

### First Steps

- [Getting Started with Nodes](../getting-started-with-nodes.md): Learn about the fundamental properties that provide a foundation for all other nodes.
- [init](init%28%29.md): Initializes a blank node.
- [nodeWithFileNamed:](init%28filenamed_%29.md): Creates a new node by loading an archive file from the game’s main bundle.
- [initWithCoder:](init%28coder_%29.md): Called when a node is initialized from an .sks file.
- [nodeWithFileNamed:securelyWithClasses:andError:](init%28filenamed_securelywithclasses_%29.md)
