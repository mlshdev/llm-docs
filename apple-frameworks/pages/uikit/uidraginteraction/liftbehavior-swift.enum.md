> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteraction/liftbehavior-swift.enum](https://developer.apple.com/documentation/uikit/uidraginteraction/liftbehavior-swift.enum)

# UIDragInteraction.LiftBehavior (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Constants that determine the lift behavior for a drag interaction.

## Declaration

```swift
enum LiftBehavior
```

## Topics

### Lift behaviors

- [UIDragInteraction.LiftBehavior.default](liftbehavior-swift.enum/default.md): The default lift behavior, which configures the `UIDragInteraction` with the default timing parameters.
- [UIDragInteraction.LiftBehavior.extended](liftbehavior-swift.enum/extended.md): An extended lift behavior, which has a longer lift delay for the `UIDragInteraction`, allowing better disambiguation of gestures in the same view. This is useful for ‘canvas’ like views where they can be many gestures involved in the manipulation of objects on screen. For extended lifts, when a second touch is recognized in the view, the gesture will be cancelled.

### Initializers

- [init(rawValue:)](liftbehavior-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring lift behavior

- [liftBehavior](liftbehavior-swift.property.md): A value that controls the timing behavior for initiating a drag gesture from a touch.
- [allowsPointerDragBeforeLiftDelay](allowspointerdragbeforeliftdelay.md): A Boolean value that controls whether pointer-initiated drags begin before the lift delay elapses.

# UIDragLiftBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Constants that determine the lift behavior for a drag interaction.

## Declaration

```objectivec
enum UIDragLiftBehavior : NSUInteger;
```

## Topics

### Lift behaviors

- [UIDragLiftBehaviorDefault](liftbehavior-swift.enum/default.md): The default lift behavior, which configures the `UIDragInteraction` with the default timing parameters.
- [UIDragLiftBehaviorExtended](liftbehavior-swift.enum/extended.md): An extended lift behavior, which has a longer lift delay for the `UIDragInteraction`, allowing better disambiguation of gestures in the same view. This is useful for ‘canvas’ like views where they can be many gestures involved in the manipulation of objects on screen. For extended lifts, when a second touch is recognized in the view, the gesture will be cancelled.

## See Also

### Configuring lift behavior

- [liftBehavior](liftbehavior-swift.property.md): A value that controls the timing behavior for initiating a drag gesture from a touch.
- [allowsPointerDragBeforeLiftDelay](allowspointerdragbeforeliftdelay.md): A Boolean value that controls whether pointer-initiated drags begin before the lift delay elapses.
