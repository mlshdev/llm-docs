> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/init(filenamed:)](https://developer.apple.com/documentation/spritekit/sknode/init(filenamed:))

# init(fileNamed:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new node by loading an archive file from the game’s main bundle.

## Declaration

```swift
convenience init?(fileNamed filename: String)
```

## Parameters

- `filename`: The name of the file, without a file extension. The file must be in the app’s main bundle and have a `.sks` filename extension.

<a id="return-value"></a>

## Return Value

The unarchived node object.

## Mentioned In

- [Creating a Scene from a File](../creating-a-scene-from-a-file.md)

<a id="Discussion"></a>

## Discussion

If you call this method on a subclass of the [SKScene](../skscene.md) class and the object in the archive is an [SKScene](../skscene.md) object, the returned object is initialized as if it is a member of the subclass. You use this behavior to create scene layouts in the Xcode Editor and provide custom behaviors in your subclass.

## See Also

### First Steps

- [Getting Started with Nodes](../getting-started-with-nodes.md): Learn about the fundamental properties that provide a foundation for all other nodes.
- [init()](init%28%29.md): Initializes a blank node.
- [init(coder:)](init%28coder_%29.md): Called when a node is initialized from an .sks file.
- [init(fileNamed:securelyWithClasses:)](init%28filenamed_securelywithclasses_%29.md)

# nodeWithFileNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new node by loading an archive file from the game’s main bundle.

## Declaration

```objectivec
+ (instancetype) nodeWithFileNamed:(NSString *) filename;
```

## Parameters

- `filename`: The name of the file, without a file extension. The file must be in the app’s main bundle and have a `.sks` filename extension.

<a id="return-value"></a>

## Return Value

The unarchived node object.

## Mentioned In

- [Creating a Scene from a File](../creating-a-scene-from-a-file.md)

<a id="Discussion"></a>

## Discussion

If you call this method on a subclass of the [SKScene](../skscene.md) class and the object in the archive is an [SKScene](../skscene.md) object, the returned object is initialized as if it is a member of the subclass. You use this behavior to create scene layouts in the Xcode Editor and provide custom behaviors in your subclass.

## See Also

### First Steps

- [Getting Started with Nodes](../getting-started-with-nodes.md): Learn about the fundamental properties that provide a foundation for all other nodes.
- [init](init%28%29.md): Initializes a blank node.
- [node](node.md): Creates a new node.
- [initWithCoder:](init%28coder_%29.md): Called when a node is initialized from an .sks file.
- [nodeWithFileNamed:securelyWithClasses:andError:](init%28filenamed_securelywithclasses_%29.md)
