> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekreminder/duedatecomponents](https://developer.apple.com/documentation/eventkit/ekreminder/duedatecomponents)

# dueDateComponents (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The date by which the reminder should be completed.

## Declaration

```swift
var dueDateComponents: DateComponents? { get set }
```

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

The use of date components allows the due date and its time zone to be represented in a single property. A `nil` time zone represents a floating date. Setting a date component without an hour, minute and second component will set the reminder to be an all-day reminder. If this property is set, the calendar must be set to `NSGregorianCalendar`; otherwise an exception is raised.

This components’s `timeZone` property is independent of time zone properties on [startDateComponents](startdatecomponents.md) and its super [EKCalendarItem](../ekcalendaritem.md) object. By default, the due date is set to the system time zone.

<a id="Special-Considerations"></a>

### Special Considerations

On iOS, Event Kit requires that a start date is set if the due date is set, however this is not a requirement in macOS.

## See Also

### Accessing Reminder Properties

- [EKReminderPriority](../ekreminderpriority.md): The priority of the reminder.
- [priority](priority.md): The reminder’s priority.
- [startDateComponents](startdatecomponents.md): The start date of the task.
- [isCompleted](iscompleted.md): A Boolean value determining whether or not the reminder is marked completed.
- [completionDate](completiondate.md): The date on which the reminder was completed.

# dueDateComponents (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The date by which the reminder should be completed.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDateComponents * dueDateComponents;
```

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

The use of date components allows the due date and its time zone to be represented in a single property. A `nil` time zone represents a floating date. Setting a date component without an hour, minute and second component will set the reminder to be an all-day reminder. If this property is set, the calendar must be set to `NSGregorianCalendar`; otherwise an exception is raised.

This components’s `timeZone` property is independent of time zone properties on [startDateComponents](startdatecomponents.md) and its super [EKCalendarItem](../ekcalendaritem.md) object. By default, the due date is set to the system time zone.

<a id="Special-Considerations"></a>

### Special Considerations

On iOS, Event Kit requires that a start date is set if the due date is set, however this is not a requirement in macOS.

## See Also

### Accessing Reminder Properties

- [EKReminderPriority](../ekreminderpriority.md): The priority of the reminder.
- [priority](priority.md): The reminder’s priority.
- [startDateComponents](startdatecomponents.md): The start date of the task.
- [completed](iscompleted.md): A Boolean value determining whether or not the reminder is marked completed.
- [completionDate](completiondate.md): The date on which the reminder was completed.
