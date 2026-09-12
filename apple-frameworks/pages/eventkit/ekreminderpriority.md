> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekreminderpriority](https://developer.apple.com/documentation/eventkit/ekreminderpriority)

# EKReminderPriority (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The priority of the reminder.

## Declaration

```swift
enum EKReminderPriority
```

## Topics

### Constants

- [EKReminderPriority.none](ekreminderpriority/none.md): The reminder has no priority set.
- [EKReminderPriority.high](ekreminderpriority/high.md): The reminder is high priority.
- [EKReminderPriority.medium](ekreminderpriority/medium.md): The reminder is medium priority.
- [EKReminderPriority.low](ekreminderpriority/low.md): The reminder is low priority.

### Initializers

- [init(rawValue:)](ekreminderpriority/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Reminder Properties

- [priority](ekreminder/priority.md): The reminder’s priority.
- [startDateComponents](ekreminder/startdatecomponents.md): The start date of the task.
- [dueDateComponents](ekreminder/duedatecomponents.md): The date by which the reminder should be completed.
- [isCompleted](ekreminder/iscompleted.md): A Boolean value determining whether or not the reminder is marked completed.
- [completionDate](ekreminder/completiondate.md): The date on which the reminder was completed.

# EKReminderPriority (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The priority of the reminder.

## Declaration

```objectivec
enum EKReminderPriority : NSUInteger;
```

## Topics

### Constants

- [EKReminderPriorityNone](ekreminderpriority/none.md): The reminder has no priority set.
- [EKReminderPriorityHigh](ekreminderpriority/high.md): The reminder is high priority.
- [EKReminderPriorityMedium](ekreminderpriority/medium.md): The reminder is medium priority.
- [EKReminderPriorityLow](ekreminderpriority/low.md): The reminder is low priority.

## See Also

### Accessing Reminder Properties

- [priority](ekreminder/priority.md): The reminder’s priority.
- [startDateComponents](ekreminder/startdatecomponents.md): The start date of the task.
- [dueDateComponents](ekreminder/duedatecomponents.md): The date by which the reminder should be completed.
- [completed](ekreminder/iscompleted.md): A Boolean value determining whether or not the reminder is marked completed.
- [completionDate](ekreminder/completiondate.md): The date on which the reminder was completed.
