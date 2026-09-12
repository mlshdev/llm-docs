> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipercentdriveninteractivetransition/completioncurve](https://developer.apple.com/documentation/uikit/uipercentdriveninteractivetransition/completioncurve)

# completionCurve (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Indicates the animation completion curve for an interactive transition.

## Declaration

```swift
var completionCurve: UIView.AnimationCurve { get set }
```

<a id="Discussion"></a>

## Discussion

When the interactive part of a view controller transition is complete, you can set this property to indicate a desired animation completion curve. Default value is [UIView.AnimationCurve.easeInOut](../uiview/animationcurve/easeinout.md).

During the interactive portion of a view controller transition, the animation curve is linear.

## See Also

### Accessing transition attributes

- [timingCurve](timingcurve.md): The timing curve to use when driving the animations.
- [duration](duration.md): The overall duration (in seconds) of the transition animation.
- [percentComplete](percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [completionSpeed](completionspeed.md): The speed of the transition animation.
- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.

# completionCurve (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Indicates the animation completion curve for an interactive transition.

## Declaration

```objectivec
@property (nonatomic, assign) UIViewAnimationCurve completionCurve;
```

<a id="Discussion"></a>

## Discussion

When the interactive part of a view controller transition is complete, you can set this property to indicate a desired animation completion curve. Default value is [UIViewAnimationCurveEaseInOut](../uiview/animationcurve/easeinout.md).

During the interactive portion of a view controller transition, the animation curve is linear.

## See Also

### Accessing transition attributes

- [timingCurve](timingcurve.md): The timing curve to use when driving the animations.
- [duration](duration.md): The overall duration (in seconds) of the transition animation.
- [percentComplete](percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [completionSpeed](completionspeed.md): The speed of the transition animation.
- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.
