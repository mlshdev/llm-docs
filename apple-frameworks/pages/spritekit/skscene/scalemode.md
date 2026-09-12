> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/scalemode](https://developer.apple.com/documentation/spritekit/skscene/scalemode)

# scaleMode (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A setting that defines how the scene is mapped to the view that presents it.

## Declaration

```swift
var scaleMode: SKSceneScaleMode { get set }
```

## Mentioned In

- [Scaling a Scene’s Content to Fit the View](../scaling-a-scene-s-content-to-fit-the-view.md)

<a id="Discussion"></a>

## Discussion

It is possible for a scene’s size to differ from the size of the view it is presented in. The scale mode determines how the visible portion of the scene is mapped to the view. The possible values are listed in [SKSceneScaleMode](../skscenescalemode.md). The default value is [SKSceneScaleMode.fill](../skscenescalemode/fill.md).

## See Also

### Stretching Content to Fit the View

- [Scaling a Scene’s Content to Fit the View](../scaling-a-scene-s-content-to-fit-the-view.md): Configure the scale mode to determine how a scene is sized to fit its view.
- [SKSceneScaleMode](../skscenescalemode.md): The modes that determine how the scene’s area is mapped to the view that presents it.

# scaleMode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A setting that defines how the scene is mapped to the view that presents it.

## Declaration

```objectivec
@property (nonatomic) SKSceneScaleMode scaleMode;
```

## Mentioned In

- [Scaling a Scene’s Content to Fit the View](../scaling-a-scene-s-content-to-fit-the-view.md)

<a id="Discussion"></a>

## Discussion

It is possible for a scene’s size to differ from the size of the view it is presented in. The scale mode determines how the visible portion of the scene is mapped to the view. The possible values are listed in [SKSceneScaleMode](../skscenescalemode.md). The default value is [SKSceneScaleModeFill](../skscenescalemode/fill.md).

## See Also

### Stretching Content to Fit the View

- [Scaling a Scene’s Content to Fit the View](../scaling-a-scene-s-content-to-fit-the-view.md): Configure the scale mode to determine how a scene is sized to fit its view.
- [SKSceneScaleMode](../skscenescalemode.md): The modes that determine how the scene’s area is mapped to the view that presents it.
