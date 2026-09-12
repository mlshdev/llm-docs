> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/userdata](https://developer.apple.com/documentation/spritekit/sknode/userdata)

# userData (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dictionary containing arbitrary data.

## Declaration

```swift
var userData: NSMutableDictionary? { get set }
```

<a id="Discussion"></a>

## Discussion

You use this property to store your own data in a node. For example, you might store game-specific data about each node to use inside your game logic. This can be a useful alternative to creating your own node subclasses to hold game data.

SpriteKit does not do anything with the data stored in the node. However, the data is archived when the node is archived.

# userData (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dictionary containing arbitrary data.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSMutableDictionary * userData;
```

<a id="Discussion"></a>

## Discussion

You use this property to store your own data in a node. For example, you might store game-specific data about each node to use inside your game logic. This can be a useful alternative to creating your own node subclasses to hold game data.

SpriteKit does not do anything with the data stored in the node. However, the data is archived when the node is archived.
