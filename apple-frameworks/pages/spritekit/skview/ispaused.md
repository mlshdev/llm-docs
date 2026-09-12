> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/ispaused](https://developer.apple.com/documentation/spritekit/skview/ispaused)

# isPaused (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that indicates whether the view’s scene animations are paused.

## Declaration

```swift
var isPaused: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the scene’s content is fixed onscreen. No actions are executed and no physics simulation is performed.

When an application moves from an active to an inactive state, [isPaused](ispaused.md) is automatically set to [true](https://developer.apple.com/documentation/swift/true). When an application returns to an active state, [isPaused](ispaused.md) is automatically set to its previous value.

## See Also

### Controlling the Timing of a Scene’s Rendering

- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [delegate](delegate.md): A delegate that allows dynamic control of the view’s render rate.
- [SKViewDelegate](../skviewdelegate.md): Methods to take custom control over the view’s render rate.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the scene is called to update its contents.
- [preferredFrameRate](preferredframerate.md): Deprecated.

# paused (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that indicates whether the view’s scene animations are paused.

## Declaration

```objectivec
@property (nonatomic, getter=isPaused) BOOL paused;
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the scene’s content is fixed onscreen. No actions are executed and no physics simulation is performed.

When an application moves from an active to an inactive state, [paused](ispaused.md) is automatically set to [true](https://developer.apple.com/documentation/swift/true). When an application returns to an active state, [paused](ispaused.md) is automatically set to its previous value.

## See Also

### Controlling the Timing of a Scene’s Rendering

- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [delegate](delegate.md): A delegate that allows dynamic control of the view’s render rate.
- [SKViewDelegate](../skviewdelegate.md): Methods to take custom control over the view’s render rate.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the scene is called to update its contents.
- [preferredFrameRate](preferredframerate.md): Deprecated.
