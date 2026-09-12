> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/converting-coordinate-spaces](https://developer.apple.com/documentation/spritekit/converting-coordinate-spaces)

# Converting Coordinate Spaces (Swift)

**Framework:** SpriteKit  
**Kind:** Article

Convert positions across the various coordinate spaces in a scene.

<a id="overview"></a>

## Overview

When working with the node tree, sometimes you need to convert a position from one coordinate space to another. For example, when specifying joints in the physics system, the joint positions are specified in scene coordinates. So, if you have those points in a local coordinate system, you need to convert them to the scene’s coordinate space.

The following code shows how to convert a node’s position into the scene coordinate system. The scene is asked to perform the conversion. Remember that a node’s position is specified in its parent’s coordinate system, so the code passes `node.parent` as the node to convert from. You could perform the same conversion in reverse by calling the [convert(\_:to:)](sknode/convert%28__to_%29.md) method.

**Swift**

```swift
let positionInScene: CGPoint?

if let parent = node.parent {
    positionInScene = node.scene?.convert(node.position,
                                          from: parent)
}
else {
    positionInScene = nil
}
```

**Obj-C**

```objc
CGPoint positionInScene = [node.scene convertPoint:node.position fromNode:node.parent];
```

One situation where you need to perform coordinate conversions is when you perform event handling. Mouse and touch events need to be converted from window coordinates to view coordinates, and from there into the scene. To simplify the code you need to write, SpriteKit adds a few convenience methods:

- In iOS, use the [location(in:)](../uikit/uitouch/location%28in_%29-44h4k.md) and [previousLocation(in:)](../uikit/uitouch/previouslocation%28in_%29-ea29.md) on [UITouch](../uikit/uitouch.md) objects to convert a touch location into a node’s coordinate system.
- In macOS, use the [location(in:)](https://developer.apple.com/documentation/appkit/nsevent/location%28in:%29) method on [NSEvent](https://developer.apple.com/documentation/appkit/nsevent) objects to convert a mouse event into a node’s coordinate system.

## See Also

### Converting Between Coordinate Systems of Different Nodes

- [convert(\_:from:)](sknode/convert%28__from_%29.md): Converts a point from the coordinate system of another node in the node tree to the coordinate system of this node.
- [convert(\_:to:)](sknode/convert%28__to_%29.md): Converts a point in this node’s coordinate system to the coordinate system of another node in the node tree.

# Converting Coordinate Spaces (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

Convert positions across the various coordinate spaces in a scene.

<a id="overview"></a>

## Overview

When working with the node tree, sometimes you need to convert a position from one coordinate space to another. For example, when specifying joints in the physics system, the joint positions are specified in scene coordinates. So, if you have those points in a local coordinate system, you need to convert them to the scene’s coordinate space.

The following code shows how to convert a node’s position into the scene coordinate system. The scene is asked to perform the conversion. Remember that a node’s position is specified in its parent’s coordinate system, so the code passes `node.parent` as the node to convert from. You could perform the same conversion in reverse by calling the [convertPoint:toNode:](sknode/convert%28__to_%29.md) method.

**Swift**

```swift
let positionInScene: CGPoint?

if let parent = node.parent {
    positionInScene = node.scene?.convert(node.position,
                                          from: parent)
}
else {
    positionInScene = nil
}
```

**Obj-C**

```objc
CGPoint positionInScene = [node.scene convertPoint:node.position fromNode:node.parent];
```

One situation where you need to perform coordinate conversions is when you perform event handling. Mouse and touch events need to be converted from window coordinates to view coordinates, and from there into the scene. To simplify the code you need to write, SpriteKit adds a few convenience methods:

- In iOS, use the [locationInNode:](../uikit/uitouch/location%28in_%29-44h4k.md) and [previousLocationInNode:](../uikit/uitouch/previouslocation%28in_%29-ea29.md) on [UITouch](../uikit/uitouch.md) objects to convert a touch location into a node’s coordinate system.
- In macOS, use the [locationInNode:](https://developer.apple.com/documentation/appkit/nsevent/location%28in:%29) method on [NSEvent](https://developer.apple.com/documentation/appkit/nsevent) objects to convert a mouse event into a node’s coordinate system.

## See Also

### Converting Between Coordinate Systems of Different Nodes

- [convertPoint:fromNode:](sknode/convert%28__from_%29.md): Converts a point from the coordinate system of another node in the node tree to the coordinate system of this node.
- [convertPoint:toNode:](sknode/convert%28__to_%29.md): Converts a point in this node’s coordinate system to the coordinate system of another node in the node tree.
