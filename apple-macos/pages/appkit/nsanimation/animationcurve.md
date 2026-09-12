> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/animationcurve](https://developer.apple.com/documentation/appkit/nsanimation/animationcurve)

# animationCurve (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The timing curve for the animation.

## Declaration

```swift
var animationCurve: NSAnimation.Curve { get set }
```

<a id="Discussion"></a>

## Discussion

The animation curve describes the relative frame rate over the course of the animation; predefined curves are linear, ease in (slow down near end), ease out (slowly speed up at start), and ease in-ease out (S-curve). Changing the value of this property changes the timing of an in-progress animation. The value of this property is ignored if the delegate implements the [animation(\_:valueForProgress:)](../nsanimationdelegate/animation%28__valueforprogress_%29.md) method.

Setting this property to an invalid value raises an exception. For a list of valid animation values, see [NSAnimation.Curve](curve.md).

## See Also

### Configuring an Animation

- [animationBlockingMode](animationblockingmode.md): The blocking mode of the animation.
- [runLoopModesForAnimating](runloopmodesforanimating.md): An array of strings representing the run loop modes in which the animation can run.
- [duration](duration.md): The duration of the animation, in seconds.
- [frameRate](framerate.md): The number of frame updates per second to generate for the animation.

# animationCurve (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The timing curve for the animation.

## Declaration

```objectivec
@property NSAnimationCurve animationCurve;
```

<a id="Discussion"></a>

## Discussion

The animation curve describes the relative frame rate over the course of the animation; predefined curves are linear, ease in (slow down near end), ease out (slowly speed up at start), and ease in-ease out (S-curve). Changing the value of this property changes the timing of an in-progress animation. The value of this property is ignored if the delegate implements the [animation:valueForProgress:](../nsanimationdelegate/animation%28__valueforprogress_%29.md) method.

Setting this property to an invalid value raises an exception. For a list of valid animation values, see [NSAnimationCurve](curve.md).

## See Also

### Configuring an Animation

- [animationBlockingMode](animationblockingmode.md): The blocking mode of the animation.
- [runLoopModesForAnimating](runloopmodesforanimating.md): An array of strings representing the run loop modes in which the animation can run.
- [duration](duration.md): The duration of the animation, in seconds.
- [frameRate](framerate.md): The number of frame updates per second to generate for the animation.
