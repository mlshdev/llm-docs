> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/previouslocation(in:)-ea29](https://developer.apple.com/documentation/uikit/uitouch/previouslocation(in:)-ea29)

# previousLocation(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the previous location of the touch in the coordinate system of the given node.

## Declaration

```swift
func previousLocation(in node: SKNode) -> CGPoint
```

## Parameters

- `node`: A node that is a descendant of a scene presented in the window that received the touch event.

<a id="return-value"></a>

## Return Value

The location of the touch in the node’s coordinate system.

## See Also

### Working with touch events in SpriteKit

- [location(in:)](location%28in_%29-44h4k.md): Returns the current location of the touch in the coordinate system of the given node.

# previousLocationInNode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Returns the previous location of the touch in the coordinate system of the given node.

## Declaration

```objectivec
- (CGPoint) previousLocationInNode:(SKNode *) node;
```

## Parameters

- `node`: A node that is a descendant of a scene presented in the window that received the touch event.

<a id="return-value"></a>

## Return Value

The location of the touch in the node’s coordinate system.

## See Also

### Working with touch events in SpriteKit

- [locationInNode:](location%28in_%29-44h4k.md): Returns the current location of the touch in the coordinate system of the given node.
