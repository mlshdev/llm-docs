> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skvideonode/anchorpoint](https://developer.apple.com/documentation/spritekit/skvideonode/anchorpoint)

# anchorPoint (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The point in the sprite that corresponds to the node’s position.

## Declaration

```swift
var anchorPoint: CGPoint { get set }
```

## Mentioned In

- [Adding a Video to a Scene](../adding-a-video-to-a-scene.md)

<a id="Discussion"></a>

## Discussion

You specify the anchor point using the unit coordinate space. The default value is `(0.5,0.5)`, which means that the video is centered on the node’s position.

## See Also

### Setting the Video Node’s Visual Properties

- [size](size.md): The dimensions of the video node, in points.

# anchorPoint (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The point in the sprite that corresponds to the node’s position.

## Declaration

```objectivec
@property (nonatomic) CGPoint anchorPoint;
```

## Mentioned In

- [Adding a Video to a Scene](../adding-a-video-to-a-scene.md)

<a id="Discussion"></a>

## Discussion

You specify the anchor point using the unit coordinate space. The default value is `(0.5,0.5)`, which means that the video is centered on the node’s position.

## See Also

### Setting the Video Node’s Visual Properties

- [size](size.md): The dimensions of the video node, in points.
