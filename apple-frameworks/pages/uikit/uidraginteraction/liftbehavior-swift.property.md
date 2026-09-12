> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteraction/liftbehavior-swift.property](https://developer.apple.com/documentation/uikit/uidraginteraction/liftbehavior-swift.property)

# liftBehavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

A value that controls the timing behavior for initiating a drag gesture from a touch.

## Declaration

```swift
var liftBehavior: UIDragInteraction.LiftBehavior { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [UIDragInteraction.LiftBehavior.default](liftbehavior-swift.enum/default.md), which uses the standard lift timing parameters.

Set this property to [UIDragInteraction.LiftBehavior.extended](liftbehavior-swift.enum/extended.md) in gesture-rich views where recognizers compete for the same touches. The extended behavior increases the lift delay and cancels the drag when a second touch is detected, allowing other long-press gestures on the same view to activate before the drag begins.

For pointer-initiated drags, use [allowsPointerDragBeforeLiftDelay](allowspointerdragbeforeliftdelay.md) to control whether pointer drags respect the lift delay independently of this property.

## See Also

### Configuring lift behavior

- [UIDragInteraction.LiftBehavior](liftbehavior-swift.enum.md): Constants that determine the lift behavior for a drag interaction.
- [allowsPointerDragBeforeLiftDelay](allowspointerdragbeforeliftdelay.md): A Boolean value that controls whether pointer-initiated drags begin before the lift delay elapses.

# liftBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

A value that controls the timing behavior for initiating a drag gesture from a touch.

## Declaration

```objectivec
@property (nonatomic, assign) UIDragLiftBehavior liftBehavior;
```

<a id="Discussion"></a>

## Discussion

The default value is [UIDragLiftBehaviorDefault](liftbehavior-swift.enum/default.md), which uses the standard lift timing parameters.

Set this property to [UIDragLiftBehaviorExtended](liftbehavior-swift.enum/extended.md) in gesture-rich views where recognizers compete for the same touches. The extended behavior increases the lift delay and cancels the drag when a second touch is detected, allowing other long-press gestures on the same view to activate before the drag begins.

For pointer-initiated drags, use [allowsPointerDragBeforeLiftDelay](allowspointerdragbeforeliftdelay.md) to control whether pointer drags respect the lift delay independently of this property.

## See Also

### Configuring lift behavior

- [UIDragLiftBehavior](liftbehavior-swift.enum.md): Constants that determine the lift behavior for a drag interaction.
- [allowsPointerDragBeforeLiftDelay](allowspointerdragbeforeliftdelay.md): A Boolean value that controls whether pointer-initiated drags begin before the lift delay elapses.
