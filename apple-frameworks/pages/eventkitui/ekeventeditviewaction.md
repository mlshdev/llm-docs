> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventeditviewaction](https://developer.apple.com/documentation/eventkitui/ekeventeditviewaction)

# EKEventEditViewAction (Swift)

**Framework:** EventKit UI  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The action taken by the user after editing an event.

## Declaration

```swift
enum EKEventEditViewAction
```

## Topics

### Constants

- [EKEventEditViewAction.canceled](ekeventeditviewaction/canceled.md): The user canceled changes made to the event.
- [EKEventEditViewAction.saved](ekeventeditviewaction/saved.md): The user saved changes made to the event.
- [EKEventEditViewAction.deleted](ekeventeditviewaction/deleted.md): The user deleted the event.
- [cancelled](ekeventeditviewaction/cancelled.md): A static variable used to cancel changes made to the event.

### Initializers

- [init(rawValue:)](ekeventeditviewaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Finishing an Edit

- [eventEditViewController(\_:didCompleteWith:)](ekeventeditviewdelegate/eventeditviewcontroller%28__didcompletewith_%29.md): Invoked when the user finishes editing an event.

# EKEventEditViewAction (Objective-C)

**Framework:** EventKit UI  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The action taken by the user after editing an event.

## Declaration

```objectivec
enum EKEventEditViewAction : NSInteger;
```

## Topics

### Constants

- [EKEventEditViewActionCanceled](ekeventeditviewaction/canceled.md): The user canceled changes made to the event.
- [EKEventEditViewActionSaved](ekeventeditviewaction/saved.md): The user saved changes made to the event.
- [EKEventEditViewActionDeleted](ekeventeditviewaction/deleted.md): The user deleted the event.
- [EKEventEditViewActionCancelled](ekeventeditviewaction/cancelled.md): A static variable used to cancel changes made to the event.

## See Also

### Finishing an Edit

- [eventEditViewController:didCompleteWithAction:](ekeventeditviewdelegate/eventeditviewcontroller%28__didcompletewith_%29.md): Invoked when the user finishes editing an event.
