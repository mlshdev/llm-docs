> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/percentcomplete](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/percentcomplete)

# percentComplete (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+

Returns the percentage of completion for an interactive transition when it moves to its noninteractive phase.

## Declaration

```swift
var percentComplete: CGFloat { get }
```

<a id="return-value"></a>

## Return Value

The percentage of completion when an interactive transition moves to its noninteractive completion phase.

<a id="Discussion"></a>

## Discussion

Use this value to determine how much of the interactive transition completed before the transition was canceled or moved to its final animations.

## See Also

### Getting the behavior attributes

- [presentationStyle](presentationstyle.md): The presentation style to use for the transition.
- [transitionDuration](transitionduration.md): Returns the noninteractive duration of a transition.
- [completionCurve](completioncurve.md): Returns the completion curve associated with the transition.
- [completionVelocity](completionvelocity.md): Returns the starting velocity to use for any final animations.

# percentComplete (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the percentage of completion for an interactive transition when it moves to its noninteractive phase.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat percentComplete;
```

<a id="return-value"></a>

## Return Value

The percentage of completion when an interactive transition moves to its noninteractive completion phase.

<a id="Discussion"></a>

## Discussion

Use this value to determine how much of the interactive transition completed before the transition was canceled or moved to its final animations.

## See Also

### Getting the behavior attributes

- [presentationStyle](presentationstyle.md): The presentation style to use for the transition.
- [transitionDuration](transitionduration.md): Returns the noninteractive duration of a transition.
- [completionCurve](completioncurve.md): Returns the completion curve associated with the transition.
- [completionVelocity](completionvelocity.md): Returns the starting velocity to use for any final animations.
