> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/delegate](https://developer.apple.com/documentation/spritekit/skview/delegate)

# delegate (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A delegate that allows dynamic control of the view’s render rate.

## Declaration

```swift
weak var delegate: (any SKViewDelegate)? { get set }
```

## Mentioned In

- [Subclassing Scenes Versus Assigning a Delegate](../subclassing-scenes-versus-assigning-a-delegate.md)

## See Also

### Controlling the Timing of a Scene’s Rendering

- [isPaused](ispaused.md): A Boolean value that indicates whether the view’s scene animations are paused.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [SKViewDelegate](../skviewdelegate.md): Methods to take custom control over the view’s render rate.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the scene is called to update its contents.
- [preferredFrameRate](preferredframerate.md): Deprecated.

# delegate (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A delegate that allows dynamic control of the view’s render rate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) NSObject<SKViewDelegate> * delegate;
```

## Mentioned In

- [Subclassing Scenes Versus Assigning a Delegate](../subclassing-scenes-versus-assigning-a-delegate.md)

## See Also

### Controlling the Timing of a Scene’s Rendering

- [paused](ispaused.md): A Boolean value that indicates whether the view’s scene animations are paused.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [SKViewDelegate](../skviewdelegate.md): Methods to take custom control over the view’s render rate.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the scene is called to update its contents.
- [preferredFrameRate](preferredframerate.md): Deprecated.
