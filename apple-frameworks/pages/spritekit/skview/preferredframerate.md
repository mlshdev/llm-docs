> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/preferredframerate](https://developer.apple.com/documentation/spritekit/skview/preferredframerate)

# preferredFrameRate (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```swift
var preferredFrameRate: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This function is deprecated. Use [preferredFramesPerSecond](preferredframespersecond.md) instead.

## See Also

### Controlling the Timing of a Scene’s Rendering

- [isPaused](ispaused.md): A Boolean value that indicates whether the view’s scene animations are paused.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [delegate](delegate.md): A delegate that allows dynamic control of the view’s render rate.
- [SKViewDelegate](../skviewdelegate.md): Methods to take custom control over the view’s render rate.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the scene is called to update its contents.

# preferredFrameRate (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```objectivec
@property (nonatomic) float preferredFrameRate;
```

<a id="Discussion"></a>

## Discussion

This function is deprecated. Use [preferredFramesPerSecond](preferredframespersecond.md) instead.

## See Also

### Controlling the Timing of a Scene’s Rendering

- [paused](ispaused.md): A Boolean value that indicates whether the view’s scene animations are paused.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [delegate](delegate.md): A delegate that allows dynamic control of the view’s render rate.
- [SKViewDelegate](../skviewdelegate.md): Methods to take custom control over the view’s render rate.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the scene is called to update its contents.
