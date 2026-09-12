> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/completionvelocity](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/completionvelocity)

# completionVelocity (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+

Returns the starting velocity to use for any final animations.

## Declaration

```swift
var completionVelocity: CGFloat { get }
```

<a id="return-value"></a>

## Return Value

The completion velocity for the view controller transition. A value of `1.0` corresponds to an animation that would complete in the duration returned by the [transitionDuration](transitionduration.md) method. Higher values cause the animations to move faster by the corresponding factor and lower values cause it to move slower. The value of this property is always greater than `0.0`.

<a id="Discussion"></a>

## Discussion

The completion velocity provides the starting speed to use at the end of an interactive animation. Setting the initial speed of your animations ensures that views don’t change velocity abruptly. This value is usually obtained from the [completionVelocity](completionvelocity.md) property of the interactive animator object.

## See Also

### Getting the behavior attributes

- [presentationStyle](presentationstyle.md): The presentation style to use for the transition.
- [transitionDuration](transitionduration.md): Returns the noninteractive duration of a transition.
- [completionCurve](completioncurve.md): Returns the completion curve associated with the transition.
- [percentComplete](percentcomplete.md): Returns the percentage of completion for an interactive transition when it moves to its noninteractive phase.

# completionVelocity (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the starting velocity to use for any final animations.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat completionVelocity;
```

<a id="return-value"></a>

## Return Value

The completion velocity for the view controller transition. A value of `1.0` corresponds to an animation that would complete in the duration returned by the [transitionDuration](transitionduration.md) method. Higher values cause the animations to move faster by the corresponding factor and lower values cause it to move slower. The value of this property is always greater than `0.0`.

<a id="Discussion"></a>

## Discussion

The completion velocity provides the starting speed to use at the end of an interactive animation. Setting the initial speed of your animations ensures that views don’t change velocity abruptly. This value is usually obtained from the [completionVelocity](completionvelocity.md) property of the interactive animator object.

## See Also

### Getting the behavior attributes

- [presentationStyle](presentationstyle.md): The presentation style to use for the transition.
- [transitionDuration](transitionduration.md): Returns the noninteractive duration of a transition.
- [completionCurve](completioncurve.md): Returns the completion curve associated with the transition.
- [percentComplete](percentcomplete.md): Returns the percentage of completion for an interactive transition when it moves to its noninteractive phase.
