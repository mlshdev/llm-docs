> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/completioncurve](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/completioncurve)

# completionCurve (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the completion curve associated with the transition.

## Declaration

```swift
var completionCurve: UIView.AnimationCurve { get }
```

<a id="return-value"></a>

## Return Value

The completion curve for the view controller transition. For a list of possible values, see the [UIView.AnimationCurve](../uiview/animationcurve.md) type.

<a id="Discussion"></a>

## Discussion

The completion curve defines the timing of the animations. For interactive transitions, this value is usually obtained from the [completionCurve](../uiviewcontrollerinteractivetransitioning/completioncurve.md) property of the interactive animator object. Use this value when configuring your own animations if you want the same timing as the main transition.

## See Also

### Getting the behavior attributes

- [presentationStyle](presentationstyle.md): The presentation style to use for the transition.
- [transitionDuration](transitionduration.md): Returns the noninteractive duration of a transition.
- [completionVelocity](completionvelocity.md): Returns the starting velocity to use for any final animations.
- [percentComplete](percentcomplete.md): Returns the percentage of completion for an interactive transition when it moves to its noninteractive phase.

# completionCurve (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the completion curve associated with the transition.

## Declaration

```objectivec
@property (nonatomic, readonly) UIViewAnimationCurve completionCurve;
```

<a id="return-value"></a>

## Return Value

The completion curve for the view controller transition. For a list of possible values, see the [UIViewAnimationCurve](../uiview/animationcurve.md) type.

<a id="Discussion"></a>

## Discussion

The completion curve defines the timing of the animations. For interactive transitions, this value is usually obtained from the [completionCurve](../uiviewcontrollerinteractivetransitioning/completioncurve.md) property of the interactive animator object. Use this value when configuring your own animations if you want the same timing as the main transition.

## See Also

### Getting the behavior attributes

- [presentationStyle](presentationstyle.md): The presentation style to use for the transition.
- [transitionDuration](transitionduration.md): Returns the noninteractive duration of a transition.
- [completionVelocity](completionvelocity.md): Returns the starting velocity to use for any final animations.
- [percentComplete](percentcomplete.md): Returns the percentage of completion for an interactive transition when it moves to its noninteractive phase.
