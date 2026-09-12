> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/presentationstyle](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/presentationstyle)

# presentationStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The presentation style to use for the transition.

## Declaration

```swift
var presentationStyle: UIModalPresentationStyle { get }
```

<a id="return-value"></a>

## Return Value

The modal presentation style associated with the transition or [UIModalPresentationStyle.none](../uimodalpresentationstyle/none.md) if the transition is not a modal presentation or dismissal. For a list of possible values, see “Modal Presentation Styles” in [UIViewController](../uiviewcontroller.md).

<a id="Discussion"></a>

## Discussion

When presenting or dismissing a view controller modally, this method returns the presentation style used for that transition. For interface rotations and other events that don’t involve a specific transition between view controllers, this method returns [UIModalPresentationStyle.none](../uimodalpresentationstyle/none.md).

## See Also

### Getting the behavior attributes

- [transitionDuration](transitionduration.md): Returns the noninteractive duration of a transition.
- [completionCurve](completioncurve.md): Returns the completion curve associated with the transition.
- [completionVelocity](completionvelocity.md): Returns the starting velocity to use for any final animations.
- [percentComplete](percentcomplete.md): Returns the percentage of completion for an interactive transition when it moves to its noninteractive phase.

# presentationStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The presentation style to use for the transition.

## Declaration

```objectivec
@property (nonatomic, readonly) UIModalPresentationStyle presentationStyle;
```

<a id="return-value"></a>

## Return Value

The modal presentation style associated with the transition or [UIModalPresentationNone](../uimodalpresentationstyle/none.md) if the transition is not a modal presentation or dismissal. For a list of possible values, see “Modal Presentation Styles” in [UIViewController](../uiviewcontroller.md).

<a id="Discussion"></a>

## Discussion

When presenting or dismissing a view controller modally, this method returns the presentation style used for that transition. For interface rotations and other events that don’t involve a specific transition between view controllers, this method returns [UIModalPresentationNone](../uimodalpresentationstyle/none.md).

## See Also

### Getting the behavior attributes

- [transitionDuration](transitionduration.md): Returns the noninteractive duration of a transition.
- [completionCurve](completioncurve.md): Returns the completion curve associated with the transition.
- [completionVelocity](completionvelocity.md): Returns the starting velocity to use for any final animations.
- [percentComplete](percentcomplete.md): Returns the percentage of completion for an interactive transition when it moves to its noninteractive phase.
