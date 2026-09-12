> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventviewaction](https://developer.apple.com/documentation/eventkitui/ekeventviewaction)

# EKEventViewAction (Swift)

**Framework:** EventKit UI  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Describes the action taken to close the event view controller.

## Declaration

```swift
enum EKEventViewAction
```

## Topics

### Constants

- [EKEventViewAction.done](ekeventviewaction/done.md): The user tapped the Done button.
- [EKEventViewAction.responded](ekeventviewaction/responded.md): The user responded to and saved a pending event invitation.
- [EKEventViewAction.deleted](ekeventviewaction/deleted.md): The user deleted the event.

### Initializers

- [init(rawValue:)](ekeventviewaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to the Interface’s Dismissal

- [eventViewController(\_:didCompleteWith:)](ekeventviewdelegate/eventviewcontroller%28__didcompletewith_%29.md): Invoked when closing the event view controller.

# EKEventViewAction (Objective-C)

**Framework:** EventKit UI  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Describes the action taken to close the event view controller.

## Declaration

```objectivec
enum EKEventViewAction : NSInteger;
```

## Topics

### Constants

- [EKEventViewActionDone](ekeventviewaction/done.md): The user tapped the Done button.
- [EKEventViewActionResponded](ekeventviewaction/responded.md): The user responded to and saved a pending event invitation.
- [EKEventViewActionDeleted](ekeventviewaction/deleted.md): The user deleted the event.

## See Also

### Responding to the Interface’s Dismissal

- [eventViewController:didCompleteWithAction:](ekeventviewdelegate/eventviewcontroller%28__didcompletewith_%29.md): Invoked when closing the event view controller.
