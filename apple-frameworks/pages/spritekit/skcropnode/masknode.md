> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skcropnode/masknode](https://developer.apple.com/documentation/spritekit/skcropnode/masknode)

# maskNode (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The node used to determine the crop node’s mask.

## Declaration

```swift
var maskNode: SKNode? { get set }
```

## Mentioned In

- [Cropping Nodes](../cropping-nodes.md)

<a id="Discussion"></a>

## Discussion

The node supplied to the crop node must not be a child of another node; however, it may have children of its own.

When the crop node’s contents are rendered, the crop node first draws its mask into a private buffer. Then, it renders its children. When rendering its children, each pixel is verified against the corresponding pixel in the mask. If the pixel in the mask has an alpha value of less than 0.05, the image pixel is masked out. Any pixel not rendered by the mask node is automatically masked out.

The default value of this property is `nil`, which indicates that the child nodes should not be cropped.

# maskNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The node used to determine the crop node’s mask.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKNode * maskNode;
```

## Mentioned In

- [Cropping Nodes](../cropping-nodes.md)

<a id="Discussion"></a>

## Discussion

The node supplied to the crop node must not be a child of another node; however, it may have children of its own.

When the crop node’s contents are rendered, the crop node first draws its mask into a private buffer. Then, it renders its children. When rendering its children, each pixel is verified against the corresponding pixel in the mask. If the pixel in the mask has an alpha value of less than 0.05, the image pixel is masked out. Any pixel not rendered by the mask node is automatically masked out.

The default value of this property is `nil`, which indicates that the child nodes should not be cropped.
