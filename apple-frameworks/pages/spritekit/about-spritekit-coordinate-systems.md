> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/about-spritekit-coordinate-systems](https://developer.apple.com/documentation/spritekit/about-spritekit-coordinate-systems)

# About SpriteKit Coordinate Systems

**Interface languages:** Swift, Objective-C

**Framework:** SpriteKit  
**Kind:** Article

Learn how a node conforms to its coordinate systems.

<a id="overview"></a>

## Overview

When a node is placed in the node tree, its [position](sknode/position.md) property places it within a coordinate system provided by its parent. SpriteKit uses the same coordinate system on both iOS and macOS.

<a id="Points-as-Position-Units"></a>

### Points as Position Units

When a node is placed in the node tree, its [position](sknode/position.md) property places it within a coordinate system provided by its parent. SpriteKit uses the same coordinate system on both iOS and macOS. The figure below shows the SpriteKit coordinate system. Coordinate values are measured in points, as in [UIKit](../uikit.md) or [AppKit](https://developer.apple.com/documentation/appkit); where necessary, points are converted to pixels when the scene is rendered. A positive `x` coordinate goes to the right and a positive `y` coordinate goes up the screen.

![SpriteKit coordinate system](https://developer.apple.com/images/com.apple.spritekit/media-3044993@2x.png)

<a id="Polar-Coordinate-Rotation"></a>

### Polar Coordinate Rotation

SpriteKit also has a standard rotation convention.  shows the polar coordinate convention. An angle of `0` radians specifies the positive x axis. A positive angle is in the counterclockwise direction.

![Polar coordinate conventions (rotation)](https://developer.apple.com/images/com.apple.spritekit/media-3044989@2x.png)

Nodes are rotated by setting their [zRotation](sknode/zrotation.md) property to the required angle in radians. If you prefer to work in degrees, the following code shows how you can write an extension to [CGFloat](../corefoundation/cgfloat-swift.struct.md) that converts between the two. The following example rotates `spriteNode` by 30 degrees counterclockwise.

```swift
extension CGFloat {
    func degreesToRadians() -> CGFloat {
        return self * CGFloat.pi / 180
    }
}

let rabbitTexture = SKTexture(imageNamed: "rabbit.png")

let spriteNode = SKSpriteNode(texture: rabbitTexture)

spriteNode.zRotation = CGFloat(30).degreesToRadians()
```

## See Also

### Accessing Related Nodes

- [scene](sknode/scene.md): The scene node that contains this node.
- [parent](sknode/parent.md): The node’s parent node.
- [children](sknode/children.md): The node’s children.
