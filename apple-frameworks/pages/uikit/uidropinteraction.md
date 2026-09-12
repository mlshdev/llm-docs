> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropinteraction](https://developer.apple.com/documentation/uikit/uidropinteraction)

# UIDropInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interaction to enable dropping of items onto a view, employing a delegate to instantiate objects and respond to calls from the drop session.

## Declaration

```swift
@MainActor class UIDropInteraction
```

## Mentioned In

- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)

## Topics

### Initializing drop interactions

- [init(delegate:)](uidropinteraction/init%28delegate_%29.md): Initializes a drop interaction object with a custom delegate object.

### Managing drop interactions

- [delegate](uidropinteraction/delegate.md): An object that configures and controls a drop interaction.
- [UIDropInteractionDelegate](uidropinteractiondelegate.md): The interface for configuring and controlling a drop interaction.

### Allowing simultaneous drops

- [allowsSimultaneousDropSessions](uidropinteraction/allowssimultaneousdropsessions.md): A Boolean value that specifies whether the drop interaction handles more than one simultaneous drop session.

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
- [UIDragInteraction](uidraginteraction.md): An interaction to enable dragging of items from a view, employing a delegate to provide drag items and to respond to calls from the drag session.

# UIDropInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interaction to enable dropping of items onto a view, employing a delegate to instantiate objects and respond to calls from the drop session.

## Declaration

```objectivec
@interface UIDropInteraction : NSObject
```

## Mentioned In

- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)

## Topics

### Initializing drop interactions

- [initWithDelegate:](uidropinteraction/init%28delegate_%29.md): Initializes a drop interaction object with a custom delegate object.

### Managing drop interactions

- [delegate](uidropinteraction/delegate.md): An object that configures and controls a drop interaction.
- [UIDropInteractionDelegate](uidropinteractiondelegate.md): The interface for configuring and controlling a drop interaction.

### Allowing simultaneous drops

- [allowsSimultaneousDropSessions](uidropinteraction/allowssimultaneousdropsessions.md): A Boolean value that specifies whether the drop interaction handles more than one simultaneous drop session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Drag and drop interactions

- [UIDragInteractionDelegate](uidraginteractiondelegate.md): The interface for configuring and controlling a drag interaction.
- [UIDropInteractionDelegate](uidropinteractiondelegate.md): The interface for configuring and controlling a drop interaction.
- [UIDragInteraction](uidraginteraction.md): An interaction to enable dragging of items from a view, employing a delegate to provide drag items and to respond to calls from the drag session.
