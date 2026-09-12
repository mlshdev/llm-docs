> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteraction](https://developer.apple.com/documentation/uikit/uidraginteraction)

# UIDragInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interaction to enable dragging of items from a view, employing a delegate to provide drag items and to respond to calls from the drag session.

## Declaration

```swift
@MainActor class UIDragInteraction
```

## Mentioned In

- [Making a view into a drag source](making-a-view-into-a-drag-source.md)

## Topics

### Initializing the drag interaction

- [init(delegate:)](uidraginteraction/init%28delegate_%29.md): Initializes a drag interaction object with a custom delegate object.

### Configuring lift behavior

- [liftBehavior](uidraginteraction/liftbehavior-swift.property.md): A value that controls the timing behavior for initiating a drag gesture from a touch.
- [UIDragInteraction.LiftBehavior](uidraginteraction/liftbehavior-swift.enum.md): Constants that determine the lift behavior for a drag interaction.
- [allowsPointerDragBeforeLiftDelay](uidraginteraction/allowspointerdragbeforeliftdelay.md): A Boolean value that controls whether pointer-initiated drags begin before the lift delay elapses.

### Managing drag interactions

- [allowsSimultaneousRecognitionDuringLift](uidraginteraction/allowssimultaneousrecognitionduringlift.md): A Boolean value that determines whether the interaction allows recognition of other gestures during the lift activity.
- [delegate](uidraginteraction/delegate.md): An object that configures and controls a drag interaction.
- [UIDragInteractionDelegate](uidraginteractiondelegate.md): The interface for configuring and controlling a drag interaction.

### Enabling the interactions

- [isEnabled](uidraginteraction/isenabled.md): A Boolean value that specifies whether the drag interaction responds to touches and is allowed to participate in a drag activity.
- [isEnabledByDefault](uidraginteraction/isenabledbydefault.md): A device-dependent Boolean value that indicates whether a newly-instantiated drag interaction is allowed to participate in a drag activity.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](uiinteraction.md)

## See Also

### Drag and drop interactions

- [UIDragInteractionDelegate](uidraginteractiondelegate.md): The interface for configuring and controlling a drag interaction.
- [UIDropInteractionDelegate](uidropinteractiondelegate.md): The interface for configuring and controlling a drop interaction.
- [UIDropInteraction](uidropinteraction.md): An interaction to enable dropping of items onto a view, employing a delegate to instantiate objects and respond to calls from the drop session.

# UIDragInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interaction to enable dragging of items from a view, employing a delegate to provide drag items and to respond to calls from the drag session.

## Declaration

```objectivec
@interface UIDragInteraction : NSObject
```

## Mentioned In

- [Making a view into a drag source](making-a-view-into-a-drag-source.md)

## Topics

### Initializing the drag interaction

- [initWithDelegate:](uidraginteraction/init%28delegate_%29.md): Initializes a drag interaction object with a custom delegate object.

### Configuring lift behavior

- [liftBehavior](uidraginteraction/liftbehavior-swift.property.md): A value that controls the timing behavior for initiating a drag gesture from a touch.
- [UIDragLiftBehavior](uidraginteraction/liftbehavior-swift.enum.md): Constants that determine the lift behavior for a drag interaction.
- [allowsPointerDragBeforeLiftDelay](uidraginteraction/allowspointerdragbeforeliftdelay.md): A Boolean value that controls whether pointer-initiated drags begin before the lift delay elapses.

### Managing drag interactions

- [allowsSimultaneousRecognitionDuringLift](uidraginteraction/allowssimultaneousrecognitionduringlift.md): A Boolean value that determines whether the interaction allows recognition of other gestures during the lift activity.
- [delegate](uidraginteraction/delegate.md): An object that configures and controls a drag interaction.
- [UIDragInteractionDelegate](uidraginteractiondelegate.md): The interface for configuring and controlling a drag interaction.

### Enabling the interactions

- [enabled](uidraginteraction/isenabled.md): A Boolean value that specifies whether the drag interaction responds to touches and is allowed to participate in a drag activity.
- [enabledByDefault](uidraginteraction/isenabledbydefault.md): A device-dependent Boolean value that indicates whether a newly-instantiated drag interaction is allowed to participate in a drag activity.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Drag and drop interactions

- [UIDragInteractionDelegate](uidraginteractiondelegate.md): The interface for configuring and controlling a drag interaction.
- [UIDropInteractionDelegate](uidropinteractiondelegate.md): The interface for configuring and controlling a drop interaction.
- [UIDropInteraction](uidropinteraction.md): An interaction to enable dropping of items onto a view, employing a delegate to instantiate objects and respond to calls from the drop session.
