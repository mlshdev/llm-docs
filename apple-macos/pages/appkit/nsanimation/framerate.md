> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/framerate](https://developer.apple.com/documentation/appkit/nsanimation/framerate)

# frameRate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of frame updates per second to generate for the animation.

## Declaration

```swift
var frameRate: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property must be greater than or equal to `0`. Specifying a value of `0.0` causes the animation to run as fast as possible. Setting the property to a negative value raises an exception.

The frame rate is not guaranteed due to differences among systems for the time needed to process a frame. You can change the frame rate while an animation is running and the new value is used at the next frame. The default frame rate is set to a reasonable value (which is subject to future change).

## See Also

### Configuring an Animation

- [animationBlockingMode](animationblockingmode.md): The blocking mode of the animation.
- [runLoopModesForAnimating](runloopmodesforanimating.md): An array of strings representing the run loop modes in which the animation can run.
- [animationCurve](animationcurve.md): The timing curve for the animation.
- [duration](duration.md): The duration of the animation, in seconds.

# frameRate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of frame updates per second to generate for the animation.

## Declaration

```objectivec
@property float frameRate;
```

<a id="Discussion"></a>

## Discussion

The value of this property must be greater than or equal to `0`. Specifying a value of `0.0` causes the animation to run as fast as possible. Setting the property to a negative value raises an exception.

The frame rate is not guaranteed due to differences among systems for the time needed to process a frame. You can change the frame rate while an animation is running and the new value is used at the next frame. The default frame rate is set to a reasonable value (which is subject to future change).

## See Also

### Configuring an Animation

- [animationBlockingMode](animationblockingmode.md): The blocking mode of the animation.
- [runLoopModesForAnimating](runloopmodesforanimating.md): An array of strings representing the run loop modes in which the animation can run.
- [animationCurve](animationcurve.md): The timing curve for the animation.
- [duration](duration.md): The duration of the animation, in seconds.
