> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipercentdriveninteractivetransition/percentcomplete](https://developer.apple.com/documentation/uikit/uipercentdriveninteractivetransition/percentcomplete)

# percentComplete (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The amount of the transition (specified as a percentage of the overall duration) that’s complete.

## Declaration

```swift
var percentComplete: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property reflects the last value passed to the [update(\_:)](update%28__%29.md) method.

## See Also

### Related Documentation

- [update(\_:)](update%28__%29.md): Updates the completion percentage of the transition.

### Accessing transition attributes

- [timingCurve](timingcurve.md): The timing curve to use when driving the animations.
- [completionCurve](completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [duration](duration.md): The overall duration (in seconds) of the transition animation.
- [completionSpeed](completionspeed.md): The speed of the transition animation.
- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.

# percentComplete (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The amount of the transition (specified as a percentage of the overall duration) that’s complete.

## Declaration

```objectivec
@property (readonly) CGFloat percentComplete;
```

<a id="Discussion"></a>

## Discussion

The value in this property reflects the last value passed to the [updateInteractiveTransition:](update%28__%29.md) method.

## See Also

### Related Documentation

- [updateInteractiveTransition:](update%28__%29.md): Updates the completion percentage of the transition.

### Accessing transition attributes

- [timingCurve](timingcurve.md): The timing curve to use when driving the animations.
- [completionCurve](completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [duration](duration.md): The overall duration (in seconds) of the transition animation.
- [completionSpeed](completionspeed.md): The speed of the transition animation.
- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.
