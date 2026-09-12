> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/calculateaccumulatedframe()](https://developer.apple.com/documentation/spritekit/sknode/calculateaccumulatedframe())

# calculateAccumulatedFrame() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a rectangle in the parent’s coordinate system that contains the position and size of itself and all child nodes.

## Declaration

```swift
func calculateAccumulatedFrame() -> CGRect
```

## Mentioned In

- [Controlling User Interaction on Nodes](../controlling-user-interaction-on-nodes.md)
- [Getting Started with Nodes](../getting-started-with-nodes.md)

<a id="Discussion"></a>

## Discussion

The frame takes into the account the cumulative effect of the [xScale](xscale.md), [yScale](yscale.md), and [zRotation](zrotation.md) properties of each node in the subtree.

Listing 1 shows, in Swift, how [calculateAccumulatedFrame()](calculateaccumulatedframe%28%29.md) can be used display the bounding box of a shape node. The child node, although smaller than its parent, is rotated by 30° so that its bounds extend beyond its parent’s bounds. After `childNode` has been added to `parentNode`, a further shape node, `boundingBoxNode`, is created with its size based on the accumulated frame of parentNode.

Listing 1. Displaying the accumulated frame of a shape node

```swift
let parentNode = SKShapeNode(rectOf: CGSize(width: 500, height: 500))
parentNode.lineWidth = 2
parentNode.strokeColor = .blue
parentNode.fillColor = .clear
     
let childNode = SKShapeNode(rectOf: CGSize(width: 400, height: 400))
childNode.strokeColor = .red
childNode.fillColor = .clear
childNode.zRotation = -CGFloat.pi / 6 // pi / 6 = 30°
     
parentNode.addChild(childNode)
     
let boundingBoxNode = SKShapeNode(rectOf: parentNode.calculateAccumulatedFrame().size)
boundingBoxNode.lineWidth = 1
boundingBoxNode.strokeColor = .black
boundingBoxNode.fillColor = .clear
boundingBoxNode.path = boundingBoxNode.path?.copy(dashingWithPhase: 0,
                                                  lengths: [10,10])
     
parentNode.addChild(boundingBoxNode)
```

The figure below shows the result of Listing 1 with `parentNode` rendered in blue, `childNode` rendered in red and the `boundingBoxNode` rendered with a dashed line.

![Displaying the accumulated frame of a shape node](https://developer.apple.com/images/com.apple.spritekit/media-2793217@2x.png)

## See Also

### Querying the Content Size

- [frame](frame.md): A rectangle in the parent’s coordinate system that contains the node’s content, ignoring the node’s children.

# calculateAccumulatedFrame (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a rectangle in the parent’s coordinate system that contains the position and size of itself and all child nodes.

## Declaration

```objectivec
- (CGRect) calculateAccumulatedFrame;
```

## Mentioned In

- [Controlling User Interaction on Nodes](../controlling-user-interaction-on-nodes.md)
- [Getting Started with Nodes](../getting-started-with-nodes.md)

<a id="Discussion"></a>

## Discussion

The frame takes into the account the cumulative effect of the [xScale](xscale.md), [yScale](yscale.md), and [zRotation](zrotation.md) properties of each node in the subtree.

Listing 1 shows, in Swift, how [calculateAccumulatedFrame](calculateaccumulatedframe%28%29.md) can be used display the bounding box of a shape node. The child node, although smaller than its parent, is rotated by 30° so that its bounds extend beyond its parent’s bounds. After `childNode` has been added to `parentNode`, a further shape node, `boundingBoxNode`, is created with its size based on the accumulated frame of parentNode.

Listing 1. Displaying the accumulated frame of a shape node

```swift
let parentNode = SKShapeNode(rectOf: CGSize(width: 500, height: 500))
parentNode.lineWidth = 2
parentNode.strokeColor = .blue
parentNode.fillColor = .clear
     
let childNode = SKShapeNode(rectOf: CGSize(width: 400, height: 400))
childNode.strokeColor = .red
childNode.fillColor = .clear
childNode.zRotation = -CGFloat.pi / 6 // pi / 6 = 30°
     
parentNode.addChild(childNode)
     
let boundingBoxNode = SKShapeNode(rectOf: parentNode.calculateAccumulatedFrame().size)
boundingBoxNode.lineWidth = 1
boundingBoxNode.strokeColor = .black
boundingBoxNode.fillColor = .clear
boundingBoxNode.path = boundingBoxNode.path?.copy(dashingWithPhase: 0,
                                                  lengths: [10,10])
     
parentNode.addChild(boundingBoxNode)
```

The figure below shows the result of Listing 1 with `parentNode` rendered in blue, `childNode` rendered in red and the `boundingBoxNode` rendered with a dashed line.

![Displaying the accumulated frame of a shape node](https://developer.apple.com/images/com.apple.spritekit/media-2793217@2x.png)

## See Also

### Querying the Content Size

- [frame](frame.md): A rectangle in the parent’s coordinate system that contains the node’s content, ignoring the node’s children.
