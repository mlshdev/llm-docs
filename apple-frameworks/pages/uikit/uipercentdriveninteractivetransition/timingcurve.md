> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipercentdriveninteractivetransition/timingcurve](https://developer.apple.com/documentation/uikit/uipercentdriveninteractivetransition/timingcurve)

# timingCurve (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The timing curve to use when driving the animations.

## Declaration

```swift
var timingCurve: (any UITimingCurveProvider)? { get set }
```

## See Also

### Accessing transition attributes

- [completionCurve](completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [duration](duration.md): The overall duration (in seconds) of the transition animation.
- [percentComplete](percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [completionSpeed](completionspeed.md): The speed of the transition animation.
- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.

# timingCurve (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The timing curve to use when driving the animations.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<UITimingCurveProvider> timingCurve;
```

## See Also

### Accessing transition attributes

- [completionCurve](completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [duration](duration.md): The overall duration (in seconds) of the transition animation.
- [percentComplete](percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [completionSpeed](completionspeed.md): The speed of the transition animation.
- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.
