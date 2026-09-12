> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipercentdriveninteractivetransition/duration](https://developer.apple.com/documentation/uikit/uipercentdriveninteractivetransition/duration)

# duration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The overall duration (in seconds) of the transition animation.

## Declaration

```swift
var duration: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the duration of the transition animation if it were to occur without user interactions. It is obtained from the standard animator object returned by your delegate. The actual duration can vary depending on the user interactions you are tracking and responding to.

## See Also

### Related Documentation

- [transitionDuration(using:)](../uiviewcontrolleranimatedtransitioning/transitionduration%28using_%29.md): Asks your animator object for the duration (in seconds) of the transition animation.

### Accessing transition attributes

- [timingCurve](timingcurve.md): The timing curve to use when driving the animations.
- [completionCurve](completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [percentComplete](percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [completionSpeed](completionspeed.md): The speed of the transition animation.
- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.

# duration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The overall duration (in seconds) of the transition animation.

## Declaration

```objectivec
@property (readonly) CGFloat duration;
```

<a id="Discussion"></a>

## Discussion

This property reflects the duration of the transition animation if it were to occur without user interactions. It is obtained from the standard animator object returned by your delegate. The actual duration can vary depending on the user interactions you are tracking and responding to.

## See Also

### Related Documentation

- [transitionDuration:](../uiviewcontrolleranimatedtransitioning/transitionduration%28using_%29.md): Asks your animator object for the duration (in seconds) of the transition animation.

### Accessing transition attributes

- [timingCurve](timingcurve.md): The timing curve to use when driving the animations.
- [completionCurve](completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [percentComplete](percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [completionSpeed](completionspeed.md): The speed of the transition animation.
- [wantsInteractiveStart](wantsinteractivestart.md): A Boolean value indicating whether the animations are interactive initially.
