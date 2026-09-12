> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekreminder/completiondate](https://developer.apple.com/documentation/eventkit/ekreminder/completiondate)

# completionDate (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The date on which the reminder was completed.

## Declaration

```swift
var completionDate: Date? { get set }
```

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

Setting this property to a date will set [isCompleted](iscompleted.md) to [true](https://developer.apple.com/documentation/swift/true); setting this property to `nil` will set `completed` to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing Reminder Properties

- [EKReminderPriority](../ekreminderpriority.md): The priority of the reminder.
- [priority](priority.md): The reminder’s priority.
- [startDateComponents](startdatecomponents.md): The start date of the task.
- [dueDateComponents](duedatecomponents.md): The date by which the reminder should be completed.
- [isCompleted](iscompleted.md): A Boolean value determining whether or not the reminder is marked completed.

# completionDate (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The date on which the reminder was completed.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * completionDate;
```

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

Setting this property to a date will set [completed](iscompleted.md) to [true](https://developer.apple.com/documentation/swift/true); setting this property to `nil` will set `completed` to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing Reminder Properties

- [EKReminderPriority](../ekreminderpriority.md): The priority of the reminder.
- [priority](priority.md): The reminder’s priority.
- [startDateComponents](startdatecomponents.md): The start date of the task.
- [dueDateComponents](duedatecomponents.md): The date by which the reminder should be completed.
- [completed](iscompleted.md): A Boolean value determining whether or not the reminder is marked completed.
