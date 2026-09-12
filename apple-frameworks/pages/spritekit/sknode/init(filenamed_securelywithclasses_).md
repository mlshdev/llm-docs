> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/init(filenamed:securelywithclasses:)](https://developer.apple.com/documentation/spritekit/sknode/init(filenamed:securelywithclasses:))

# init(fileNamed:securelyWithClasses:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
convenience init(fileNamed filename: String, securelyWithClasses classes: Set<AnyHashable>) throws
```

## See Also

### First Steps

- [Getting Started with Nodes](../getting-started-with-nodes.md): Learn about the fundamental properties that provide a foundation for all other nodes.
- [init()](init%28%29.md): Initializes a blank node.
- [init(fileNamed:)](init%28filenamed_%29.md): Creates a new node by loading an archive file from the game’s main bundle.
- [init(coder:)](init%28coder_%29.md): Called when a node is initialized from an .sks file.

# nodeWithFileNamed:securelyWithClasses:andError: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
+ (instancetype) nodeWithFileNamed:(NSString *) filename securelyWithClasses:(NSSet<Class> *) classes andError:(NSError **) error;
```

## See Also

### First Steps

- [Getting Started with Nodes](../getting-started-with-nodes.md): Learn about the fundamental properties that provide a foundation for all other nodes.
- [init](init%28%29.md): Initializes a blank node.
- [node](node.md): Creates a new node.
- [nodeWithFileNamed:](init%28filenamed_%29.md): Creates a new node by loading an archive file from the game’s main bundle.
- [initWithCoder:](init%28coder_%29.md): Called when a node is initialized from an .sks file.
