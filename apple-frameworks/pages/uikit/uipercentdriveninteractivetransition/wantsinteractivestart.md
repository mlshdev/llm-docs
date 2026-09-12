> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipercentdriveninteractivetransition/wantsinteractivestart](https://developer.apple.com/documentation/uikit/uipercentdriveninteractivetransition/wantsinteractivestart)

# wantsInteractiveStart (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the animations are interactive initially.

## Declaration

```swift
var wantsInteractiveStart: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), interactive animations start as paused, allowing you to drive the animations yourself from the start. You might set this property to [false](https://developer.apple.com/documentation/swift/false) when you want to start your animations without interactivity. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing transition attributes

- [timingCurve](timingcurve.md): The timing curve to use when driving the animations.
- [completionCurve](completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [duration](duration.md): The overall duration (in seconds) of the transition animation.
- [percentComplete](percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [completionSpeed](completionspeed.md): The speed of the transition animation.

# wantsInteractiveStart (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the animations are interactive initially.

## Declaration

```objectivec
@property (nonatomic) BOOL wantsInteractiveStart;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), interactive animations start as paused, allowing you to drive the animations yourself from the start. You might set this property to [false](https://developer.apple.com/documentation/swift/false) when you want to start your animations without interactivity. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing transition attributes

- [timingCurve](timingcurve.md): The timing curve to use when driving the animations.
- [completionCurve](completioncurve.md): Indicates the animation completion curve for an interactive transition.
- [duration](duration.md): The overall duration (in seconds) of the transition animation.
- [percentComplete](percentcomplete.md): The amount of the transition (specified as a percentage of the overall duration) that’s complete.
- [completionSpeed](completionspeed.md): The speed of the transition animation.
