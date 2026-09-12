> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/anchorpoint](https://developer.apple.com/documentation/spritekit/skscene/anchorpoint)

# anchorPoint (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The point in the view’s frame that corresponds to the scene’s origin.

## Declaration

```swift
var anchorPoint: CGPoint { get set }
```

## Mentioned In

- [Positioning a Scene’s Origin Within its View](../positioning-a-scene-s-origin-within-its-view.md)
- [Drawing SpriteKit Content in a View](../drawing-spritekit-content-in-a-view.md)
- [Getting Started with a Camera](../getting-started-with-a-camera.md)

<a id="Discussion"></a>

## Discussion

When a scene is presented and a camera node has not been specified, the [size](size.md) and [anchorPoint](anchorpoint.md) properties determine which part of the scene’s coordinate space is visible in the view.

You specify the value using the unit coordinate space. The default value is `(0,0)`, which corresponds to the lower-left corner of the view’s frame rectangle.

## See Also

### Configuring the Viewport

- [Positioning a Scene’s Origin Within its View](../positioning-a-scene-s-origin-within-its-view.md): Try the different ways to configure the scene’s origin inside its view.
- [camera](camera.md): The camera node in the scene that determines what part of the scene’s coordinate space is visible in the view.

# anchorPoint (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The point in the view’s frame that corresponds to the scene’s origin.

## Declaration

```objectivec
@property (nonatomic) CGPoint anchorPoint;
```

## Mentioned In

- [Positioning a Scene’s Origin Within its View](../positioning-a-scene-s-origin-within-its-view.md)
- [Drawing SpriteKit Content in a View](../drawing-spritekit-content-in-a-view.md)
- [Getting Started with a Camera](../getting-started-with-a-camera.md)

<a id="Discussion"></a>

## Discussion

When a scene is presented and a camera node has not been specified, the [size](size.md) and [anchorPoint](anchorpoint.md) properties determine which part of the scene’s coordinate space is visible in the view.

You specify the value using the unit coordinate space. The default value is `(0,0)`, which corresponds to the lower-left corner of the view’s frame rectangle.

## See Also

### Configuring the Viewport

- [Positioning a Scene’s Origin Within its View](../positioning-a-scene-s-origin-within-its-view.md): Try the different ways to configure the scene’s origin inside its view.
- [camera](camera.md): The camera node in the scene that determines what part of the scene’s coordinate space is visible in the view.
