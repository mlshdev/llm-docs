> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteraction/liftbehavior-swift.enum/extended](https://developer.apple.com/documentation/uikit/uidraginteraction/liftbehavior-swift.enum/extended)

# UIDragInteraction.LiftBehavior.extended (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

An extended lift behavior, which has a longer lift delay for the `UIDragInteraction`, allowing better disambiguation of gestures in the same view. This is useful for ‘canvas’ like views where they can be many gestures involved in the manipulation of objects on screen. For extended lifts, when a second touch is recognized in the view, the gesture will be cancelled.

## Declaration

```swift
case extended
```

## See Also

### Lift behaviors

- [UIDragInteraction.LiftBehavior.default](default.md): The default lift behavior, which configures the `UIDragInteraction` with the default timing parameters.

# UIDragLiftBehaviorExtended (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

An extended lift behavior, which has a longer lift delay for the `UIDragInteraction`, allowing better disambiguation of gestures in the same view. This is useful for ‘canvas’ like views where they can be many gestures involved in the manipulation of objects on screen. For extended lifts, when a second touch is recognized in the view, the gesture will be cancelled.

## Declaration

```objectivec
UIDragLiftBehaviorExtended
```

## See Also

### Lift behaviors

- [UIDragLiftBehaviorDefault](default.md): The default lift behavior, which configures the `UIDragInteraction` with the default timing parameters.
