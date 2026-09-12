> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/transitionduration](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/transitionduration)

# transitionDuration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the noninteractive duration of a transition.

## Declaration

```swift
var transitionDuration: TimeInterval { get }
```

<a id="return-value"></a>

## Return Value

The expected duration, in seconds, of the view controller transition, if it proceeds noninteractively.

<a id="Discussion"></a>

## Discussion

The transition duration defines the time for the main transition to finish. Use this value when configuring your own animations if you want them to end at the same time as the main transition.

## See Also

### Getting the behavior attributes

- [presentationStyle](presentationstyle.md): The presentation style to use for the transition.
- [completionCurve](completioncurve.md): Returns the completion curve associated with the transition.
- [completionVelocity](completionvelocity.md): Returns the starting velocity to use for any final animations.
- [percentComplete](percentcomplete.md): Returns the percentage of completion for an interactive transition when it moves to its noninteractive phase.

# transitionDuration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the noninteractive duration of a transition.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval transitionDuration;
```

<a id="return-value"></a>

## Return Value

The expected duration, in seconds, of the view controller transition, if it proceeds noninteractively.

<a id="Discussion"></a>

## Discussion

The transition duration defines the time for the main transition to finish. Use this value when configuring your own animations if you want them to end at the same time as the main transition.

## See Also

### Getting the behavior attributes

- [presentationStyle](presentationstyle.md): The presentation style to use for the transition.
- [completionCurve](completioncurve.md): Returns the completion curve associated with the transition.
- [completionVelocity](completionvelocity.md): Returns the starting velocity to use for any final animations.
- [percentComplete](percentcomplete.md): Returns the percentage of completion for an interactive transition when it moves to its noninteractive phase.
