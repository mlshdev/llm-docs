> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipercentdriveninteractivetransition/completionspeed](https://developer.apple.com/documentation/uikit/uipercentdriveninteractivetransition/completionspeed)

# completionSpeed (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The speed of the transition animation.

## Declaration

```swift
var completionSpeed: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `1.0`, which yields an animation that proceeds in real time. You typically change this value to speed up or slow down the animation at specific points in the transition. For example, you might change the animation speed at the end of a transition or when canceling it, in which case you would set the speed when you stop tracking user events and are about to call the [cancel()](cancel%28%29.md) or [finish()](finish%28%29.md) method.

The speed acts as a multiplier to the current animation speed, so values greater than `1.0` speed up the animation and values less than `1.0` slow it down. The value in this property must always be greater than `0.0`.

## See Also

### Accessing transition attributes

- [timingCurve](timingcurve.md): The timing curve to use when driving the animations.
- [completionCurve](completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [duration](duration.md): The overall duration (in seconds) of the transition animation.
- [percentComplete](percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.

# completionSpeed (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The speed of the transition animation.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat completionSpeed;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `1.0`, which yields an animation that proceeds in real time. You typically change this value to speed up or slow down the animation at specific points in the transition. For example, you might change the animation speed at the end of a transition or when canceling it, in which case you would set the speed when you stop tracking user events and are about to call the [cancelInteractiveTransition](cancel%28%29.md) or [finishInteractiveTransition](finish%28%29.md) method.

The speed acts as a multiplier to the current animation speed, so values greater than `1.0` speed up the animation and values less than `1.0` slow it down. The value in this property must always be greater than `0.0`.

## See Also

### Accessing transition attributes

- [timingCurve](timingcurve.md): The timing curve to use when driving the animations.
- [completionCurve](completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [duration](duration.md): The overall duration (in seconds) of the transition animation.
- [percentComplete](percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.
