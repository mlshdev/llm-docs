> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/location(in:)-44h4k](https://developer.apple.com/documentation/uikit/uitouch/location(in:)-44h4k)

# location(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the current location of the touch in the coordinate system of the given node.

## Declaration

```swift
func location(in node: SKNode) -> CGPoint
```

## Parameters

- `node`: A node that is a descendant of a scene presented in the window that received the touch event.

<a id="return-value"></a>

## Return Value

The location of the touch in the node’s coordinate system.

## See Also

### Working with touch events in SpriteKit

- [previousLocation(in:)](previouslocation%28in_%29-ea29.md): Returns the previous location of the touch in the coordinate system of the given node.

# locationInNode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Returns the current location of the touch in the coordinate system of the given node.

## Declaration

```objectivec
- (CGPoint) locationInNode:(SKNode *) node;
```

## Parameters

- `node`: A node that is a descendant of a scene presented in the window that received the touch event.

<a id="return-value"></a>

## Return Value

The location of the touch in the node’s coordinate system.

## See Also

### Working with touch events in SpriteKit

- [previousLocationInNode:](previouslocation%28in_%29-ea29.md): Returns the previous location of the touch in the coordinate system of the given node.
