> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekreminder](https://developer.apple.com/documentation/eventkit/ekreminder)

# EKReminder (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents a reminder in a calendar.

## Declaration

```swift
class EKReminder
```

## Mentioned In

- [Creating events and reminders](creating-events-and-reminders.md)

<a id="overview"></a>

## Overview

Use the [init(eventStore:)](ekreminder/init%28eventstore_%29.md) method to create a new reminder. Use the properties in the class to get and modify certain information about a reminder.

## Topics

### Creating a Reminder

- [init(eventStore:)](ekreminder/init%28eventstore_%29.md): Creates and returns a new reminder in the given event store.

### Accessing Reminder Properties

- [EKReminderPriority](ekreminderpriority.md): The priority of the reminder.
- [priority](ekreminder/priority.md): The reminder’s priority.
- [startDateComponents](ekreminder/startdatecomponents.md): The start date of the task.
- [dueDateComponents](ekreminder/duedatecomponents.md): The date by which the reminder should be completed.
- [isCompleted](ekreminder/iscompleted.md): A Boolean value determining whether or not the reminder is marked completed.
- [completionDate](ekreminder/completiondate.md): The date on which the reminder was completed.

## Relationships

### Inherits From

- [EKCalendarItem](ekcalendaritem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Events and reminders

- [Creating events and reminders](creating-events-and-reminders.md): Create and modify events and reminders in a person’s database.
- [Retrieving events and reminders](retrieving-events-and-reminders.md): Fetch events and reminders from the Calendar database.
- [Updating with notifications](updating-with-notifications.md): Register for notifications about changes and keep your app up to date.
- [Managing location-based reminders](managing-location-based-reminders.md): Access reminders set up with geofence-enabled alarms on a person’s calendars.
- [EKEvent](ekevent.md): A class that represents an event in a calendar.

# EKReminder (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents a reminder in a calendar.

## Declaration

```objectivec
@interface EKReminder : EKCalendarItem
```

## Mentioned In

- [Creating events and reminders](creating-events-and-reminders.md)

<a id="overview"></a>

## Overview

Use the [reminderWithEventStore:](ekreminder/init%28eventstore_%29.md) method to create a new reminder. Use the properties in the class to get and modify certain information about a reminder.

## Topics

### Creating a Reminder

- [reminderWithEventStore:](ekreminder/init%28eventstore_%29.md): Creates and returns a new reminder in the given event store.

### Accessing Reminder Properties

- [EKReminderPriority](ekreminderpriority.md): The priority of the reminder.
- [priority](ekreminder/priority.md): The reminder’s priority.
- [startDateComponents](ekreminder/startdatecomponents.md): The start date of the task.
- [dueDateComponents](ekreminder/duedatecomponents.md): The date by which the reminder should be completed.
- [completed](ekreminder/iscompleted.md): A Boolean value determining whether or not the reminder is marked completed.
- [completionDate](ekreminder/completiondate.md): The date on which the reminder was completed.

## Relationships

### Inherits From

- [EKCalendarItem](ekcalendaritem.md)

## See Also

### Events and reminders

- [Creating events and reminders](creating-events-and-reminders.md): Create and modify events and reminders in a person’s database.
- [Retrieving events and reminders](retrieving-events-and-reminders.md): Fetch events and reminders from the Calendar database.
- [Updating with notifications](updating-with-notifications.md): Register for notifications about changes and keep your app up to date.
- [EKEvent](ekevent.md): A class that represents an event in a calendar.
