> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem](https://developer.apple.com/documentation/eventkit/ekcalendaritem)

# EKCalendarItem (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

An abstract superclass for calendar events and reminders.

## Declaration

```swift
class EKCalendarItem
```

## Mentioned In

- [Creating a recurring event](creating-a-recurring-event.md)
- [Creating events and reminders](creating-events-and-reminders.md)

<a id="overview"></a>

## Overview

The `EKCalendarItem` is a an abstract superclass for calendar events and reminders. This class provides common properties and methods for accessing properties of calendar items such as the ability to set the calendar, title, and location, as well as support for attaching notes, displaying attendees, setting multiple alarms, and specifying recurrence rules.

## Topics

### Accessing Calendar Items

- [calendarItemIdentifier](ekcalendaritem/calendaritemidentifier.md): The calendar item’s unique identifier.
- [calendarItemExternalIdentifier](ekcalendaritem/calendaritemexternalidentifier.md): The calendar item’s external identifier as provided by the calendar server.
- [uuid](ekcalendaritem/uuid.md): Deprecated. The calendar item’s unique identifier.

### Accessing Calendar Item Properties

- [calendar](ekcalendaritem/calendar.md): The calendar for the calendar item.
- [title](ekcalendaritem/title.md): The title for the calendar item.
- [location](ekcalendaritem/location.md): The location associated with the calendar item.
- [creationDate](ekcalendaritem/creationdate.md): The date that this calendar item was created.
- [lastModifiedDate](ekcalendaritem/lastmodifieddate.md): The date that the calendar item was last modified.
- [timeZone](ekcalendaritem/timezone.md): The time zone for the calendar item.
- [url](ekcalendaritem/url.md): The URL for the calendar item.

### Attaching Notes

- [hasNotes](ekcalendaritem/hasnotes.md): A Boolean value that indicates whether the calendar item has notes.
- [notes](ekcalendaritem/notes.md): The notes associated with the calendar item.

### Displaying Attendees

- [hasAttendees](ekcalendaritem/hasattendees.md): A Boolean value that indicates whether the calendar item has attendees.
- [attendees](ekcalendaritem/attendees.md): The attendees associated with the calendar item, as an array of [EKParticipant](ekparticipant.md) objects.

### Adding and Removing Alarms

- [hasAlarms](ekcalendaritem/hasalarms.md): A Boolean value that indicates whether the calendar item has alarms.
- [addAlarm(\_:)](ekcalendaritem/addalarm%28__%29.md): Adds an alarm to the receiver.
- [removeAlarm(\_:)](ekcalendaritem/removealarm%28__%29.md): Removes an alarm from the calendar item.
- [alarms](ekcalendaritem/alarms.md): The alarms associated with the calendar item, as an array of [EKAlarm](ekalarm.md) objects.

### Setting Recurrence Rules

- [hasRecurrenceRules](ekcalendaritem/hasrecurrencerules.md): A Boolean value that indicates whether the calendar item has recurrence rules.
- [addRecurrenceRule(\_:)](ekcalendaritem/addrecurrencerule%28__%29.md): Adds a recurrence rule to the recurrence rule array.
- [removeRecurrenceRule(\_:)](ekcalendaritem/removerecurrencerule%28__%29.md): Removes a recurrence rule from the recurrence rule array.
- [recurrenceRules](ekcalendaritem/recurrencerules.md): The recurrence rules for the calendar item.

## Relationships

### Inherits From

- [EKObject](ekobject.md)

### Inherited By

- [EKEvent](ekevent.md)
- [EKReminder](ekreminder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Common objects

- [EKObject](ekobject.md): An abstract superclass for all EventKit classes that have persistent instances.
- [EKSource](eksource.md): An abstract superclass that represents the account a calendar belongs to.

# EKCalendarItem (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

An abstract superclass for calendar events and reminders.

## Declaration

```objectivec
@interface EKCalendarItem : EKObject
```

## Mentioned In

- [Creating a recurring event](creating-a-recurring-event.md)
- [Creating events and reminders](creating-events-and-reminders.md)

<a id="overview"></a>

## Overview

The `EKCalendarItem` is a an abstract superclass for calendar events and reminders. This class provides common properties and methods for accessing properties of calendar items such as the ability to set the calendar, title, and location, as well as support for attaching notes, displaying attendees, setting multiple alarms, and specifying recurrence rules.

## Topics

### Accessing Calendar Items

- [calendarItemIdentifier](ekcalendaritem/calendaritemidentifier.md): The calendar item’s unique identifier.
- [calendarItemExternalIdentifier](ekcalendaritem/calendaritemexternalidentifier.md): The calendar item’s external identifier as provided by the calendar server.
- [UUID](ekcalendaritem/uuid.md): Deprecated. The calendar item’s unique identifier.

### Accessing Calendar Item Properties

- [calendar](ekcalendaritem/calendar.md): The calendar for the calendar item.
- [title](ekcalendaritem/title.md): The title for the calendar item.
- [location](ekcalendaritem/location.md): The location associated with the calendar item.
- [creationDate](ekcalendaritem/creationdate.md): The date that this calendar item was created.
- [lastModifiedDate](ekcalendaritem/lastmodifieddate.md): The date that the calendar item was last modified.
- [timeZone](ekcalendaritem/timezone.md): The time zone for the calendar item.
- [URL](ekcalendaritem/url.md): The URL for the calendar item.

### Attaching Notes

- [hasNotes](ekcalendaritem/hasnotes.md): A Boolean value that indicates whether the calendar item has notes.
- [notes](ekcalendaritem/notes.md): The notes associated with the calendar item.

### Displaying Attendees

- [hasAttendees](ekcalendaritem/hasattendees.md): A Boolean value that indicates whether the calendar item has attendees.
- [attendees](ekcalendaritem/attendees.md): The attendees associated with the calendar item, as an array of [EKParticipant](ekparticipant.md) objects.

### Adding and Removing Alarms

- [hasAlarms](ekcalendaritem/hasalarms.md): A Boolean value that indicates whether the calendar item has alarms.
- [addAlarm:](ekcalendaritem/addalarm%28__%29.md): Adds an alarm to the receiver.
- [removeAlarm:](ekcalendaritem/removealarm%28__%29.md): Removes an alarm from the calendar item.
- [alarms](ekcalendaritem/alarms.md): The alarms associated with the calendar item, as an array of [EKAlarm](ekalarm.md) objects.

### Setting Recurrence Rules

- [hasRecurrenceRules](ekcalendaritem/hasrecurrencerules.md): A Boolean value that indicates whether the calendar item has recurrence rules.
- [addRecurrenceRule:](ekcalendaritem/addrecurrencerule%28__%29.md): Adds a recurrence rule to the recurrence rule array.
- [removeRecurrenceRule:](ekcalendaritem/removerecurrencerule%28__%29.md): Removes a recurrence rule from the recurrence rule array.
- [recurrenceRules](ekcalendaritem/recurrencerules.md): The recurrence rules for the calendar item.

## Relationships

### Inherits From

- [EKObject](ekobject.md)

### Inherited By

- [EKEvent](ekevent.md)
- [EKReminder](ekreminder.md)

## See Also

### Common objects

- [EKObject](ekobject.md): An abstract superclass for all EventKit classes that have persistent instances.
- [EKSource](eksource.md): An abstract superclass that represents the account a calendar belongs to.
