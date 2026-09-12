> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteraction/liftbehavior-swift.enum/default](https://developer.apple.com/documentation/uikit/uidraginteraction/liftbehavior-swift.enum/default)

# UIDragInteraction.LiftBehavior.default (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The default lift behavior, which configures the `UIDragInteraction` with the default timing parameters.

## Declaration

```swift
case `default`
```

## See Also

### Lift behaviors

- [UIDragInteraction.LiftBehavior.extended](extended.md): An extended lift behavior, which has a longer lift delay for the `UIDragInteraction`, allowing better disambiguation of gestures in the same view. This is useful for ‘canvas’ like views where they can be many gestures involved in the manipulation of objects on screen. For extended lifts, when a second touch is recognized in the view, the gesture will be cancelled.

# UIDragLiftBehaviorDefault (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The default lift behavior, which configures the `UIDragInteraction` with the default timing parameters.

## Declaration

```objectivec
UIDragLiftBehaviorDefault
```

## See Also

### Lift behaviors

- [UIDragLiftBehaviorExtended](extended.md): An extended lift behavior, which has a longer lift delay for the `UIDragInteraction`, allowing better disambiguation of gestures in the same view. This is useful for ‘canvas’ like views where they can be many gestures involved in the manipulation of objects on screen. For extended lifts, when a second touch is recognized in the view, the gesture will be cancelled.
