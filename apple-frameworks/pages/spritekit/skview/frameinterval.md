> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/frameinterval](https://developer.apple.com/documentation/spritekit/skview/frameinterval)

# frameInterval (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · tvOS  (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

The number of frames that must pass before the scene is called to update its contents.

## Declaration

```swift
var frameInterval: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1`, which results in your game being notified at the refresh rate of the display. If the value is set to a value larger than `1`, the display link notifies your game at a fraction of the native refresh rate. For example, setting the interval to `2` causes the scene to be called every other frame, providing half the frame rate.

Behavior is undefined with a value less than `1`.

This property is deprecated. Use [preferredFramesPerSecond](preferredframespersecond.md), or [view(\_:shouldRenderAtTime:)](../skviewdelegate/view%28__shouldrenderattime_%29.md) instead.

## See Also

### Controlling the Timing of a Scene’s Rendering

- [isPaused](ispaused.md): A Boolean value that indicates whether the view’s scene animations are paused.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [delegate](delegate.md): A delegate that allows dynamic control of the view’s render rate.
- [SKViewDelegate](../skviewdelegate.md): Methods to take custom control over the view’s render rate.
- [preferredFrameRate](preferredframerate.md): Deprecated.

# frameInterval (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · tvOS  (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

The number of frames that must pass before the scene is called to update its contents.

## Declaration

```objectivec
@property (nonatomic) NSInteger frameInterval;
```

<a id="Discussion"></a>

## Discussion

The default value is `1`, which results in your game being notified at the refresh rate of the display. If the value is set to a value larger than `1`, the display link notifies your game at a fraction of the native refresh rate. For example, setting the interval to `2` causes the scene to be called every other frame, providing half the frame rate.

Behavior is undefined with a value less than `1`.

This property is deprecated. Use [preferredFramesPerSecond](preferredframespersecond.md), or [view:shouldRenderAtTime:](../skviewdelegate/view%28__shouldrenderattime_%29.md) instead.

## See Also

### Controlling the Timing of a Scene’s Rendering

- [paused](ispaused.md): A Boolean value that indicates whether the view’s scene animations are paused.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [delegate](delegate.md): A delegate that allows dynamic control of the view’s render rate.
- [SKViewDelegate](../skviewdelegate.md): Methods to take custom control over the view’s render rate.
- [preferredFrameRate](preferredframerate.md): Deprecated.
