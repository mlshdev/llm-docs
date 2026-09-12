> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerinteractivetransitioning/completioncurve](https://developer.apple.com/documentation/uikit/uiviewcontrollerinteractivetransitioning/completioncurve)

# completionCurve (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called when the system needs the animation completion curve for an interactive view controller transition.

## Declaration

```swift
optional var completionCurve: UIView.AnimationCurve { get }
```

<a id="return-value"></a>

## Return Value

Default value is [UIView.AnimationCurve.easeInOut](../uiview/animationcurve/easeinout.md), with other possible values described in the [UIView.AnimationCurve](../uiview/animationcurve.md) type definition.

## See Also

### Providing a transition’s completion characteristics

- [completionSpeed](completionspeed.md): Called when the system needs the speed at which to complete an interactive transition, after the interactive portion is finished.

# completionCurve (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called when the system needs the animation completion curve for an interactive view controller transition.

## Declaration

```objectivec
@property (nonatomic, readonly) UIViewAnimationCurve completionCurve;
```

<a id="return-value"></a>

## Return Value

Default value is [UIViewAnimationCurveEaseInOut](../uiview/animationcurve/easeinout.md), with other possible values described in the [UIViewAnimationCurve](../uiview/animationcurve.md) type definition.

## See Also

### Providing a transition’s completion characteristics

- [completionSpeed](completionspeed.md): Called when the system needs the speed at which to complete an interactive transition, after the interactive portion is finished.
