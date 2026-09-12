> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktiledefinition/userdata](https://developer.apple.com/documentation/spritekit/sktiledefinition/userdata)

# userData (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A dictionary containing arbitrary data.

## Declaration

```swift
var userData: NSMutableDictionary? { get set }
```

<a id="Discussion"></a>

## Discussion

You use this property to store your own data in a tile definition. For example, you might use this property to specify whether this tile is a platform that a player can land on.

SpriteKit doesn’t do anything with this data. However, the data is archived when the tile definition is archived.

# userData (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A dictionary containing arbitrary data.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSMutableDictionary * userData;
```

<a id="Discussion"></a>

## Discussion

You use this property to store your own data in a tile definition. For example, you might use this property to specify whether this tile is a platform that a player can land on.

SpriteKit doesn’t do anything with this data. However, the data is archived when the tile definition is archived.
