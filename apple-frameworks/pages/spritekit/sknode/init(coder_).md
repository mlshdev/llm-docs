> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/init(coder:)](https://developer.apple.com/documentation/spritekit/sknode/init(coder:))

# init(coder:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Called when a node is initialized from an .sks file.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

## See Also

### First Steps

- [Getting Started with Nodes](../getting-started-with-nodes.md): Learn about the fundamental properties that provide a foundation for all other nodes.
- [init()](init%28%29.md): Initializes a blank node.
- [init(fileNamed:)](init%28filenamed_%29.md): Creates a new node by loading an archive file from the game’s main bundle.
- [init(fileNamed:securelyWithClasses:)](init%28filenamed_securelywithclasses_%29.md)

# initWithCoder: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Called when a node is initialized from an .sks file.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## See Also

### First Steps

- [Getting Started with Nodes](../getting-started-with-nodes.md): Learn about the fundamental properties that provide a foundation for all other nodes.
- [init](init%28%29.md): Initializes a blank node.
- [node](node.md): Creates a new node.
- [nodeWithFileNamed:](init%28filenamed_%29.md): Creates a new node by loading an archive file from the game’s main bundle.
- [nodeWithFileNamed:securelyWithClasses:andError:](init%28filenamed_securelywithclasses_%29.md)
