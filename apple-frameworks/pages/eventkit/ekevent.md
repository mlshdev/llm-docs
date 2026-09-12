> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekevent](https://developer.apple.com/documentation/eventkit/ekevent)

# EKEvent (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents an event in a calendar.

## Declaration

```swift
class EKEvent
```

## Mentioned In

- [Creating events and reminders](creating-events-and-reminders.md)
- [Retrieving events and reminders](retrieving-events-and-reminders.md)

<a id="overview"></a>

## Overview

Use the [init(eventStore:)](ekevent/init%28eventstore_%29.md) method to create a new event. Use the properties in the class to get and modify certain information about an event. Other properties, such as the event’s title and calendar, are inherited from the parent class [EKCalendarItem](ekcalendaritem.md).

## Topics

### Creating Events

- [init(eventStore:)](ekevent/init%28eventstore_%29.md): Creates and returns a new event belonging to a specified event store.

### Scheduling Events

- [EKEventStatus](ekeventstatus.md): The event’s status.
- [EKEventAvailability](ekeventavailability.md): The event’s availability setting for scheduling purposes.

### Comparing Events

- [compareStartDate(with:)](ekevent/comparestartdate%28with_%29.md): Compares the start date of the receiving event with the start date of another event.

### Accessing Event Properties

- [eventIdentifier](ekevent/eventidentifier.md): A unique identifier for the event.
- [availability](ekevent/availability.md): The availability setting for the event.
- [startDate](ekevent/startdate.md): The start date of the event.
- [endDate](ekevent/enddate.md): The end date for the event.
- [isAllDay](ekevent/isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [occurrenceDate](ekevent/occurrencedate.md): The original occurrence date of an event if it is part of a recurring series.
- [isDetached](ekevent/isdetached.md): A Boolean value that indicates whether an event is a detached instance of a repeating event.
- [organizer](ekevent/organizer.md): The organizer associated with the event.
- [status](ekevent/status.md): The status of the event.
- [birthdayContactIdentifier](ekevent/birthdaycontactidentifier.md): The contact identifier of the person for this birthday event.
- [structuredLocation](ekevent/structuredlocation.md): The event’s location with a potential geocoordinate.
- [birthdayPersonID](ekevent/birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
- [birthdayPersonUniqueID](ekevent/birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.

### Refreshing Event Data

- [refresh()](ekevent/refresh%28%29.md): Updates the event’s data with the current information in the Calendar database.

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
- [EKReminder](ekreminder.md): A class that represents a reminder in a calendar.

# EKEvent (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents an event in a calendar.

## Declaration

```objectivec
@interface EKEvent : EKCalendarItem
```

## Mentioned In

- [Creating events and reminders](creating-events-and-reminders.md)
- [Retrieving events and reminders](retrieving-events-and-reminders.md)

<a id="overview"></a>

## Overview

Use the [eventWithEventStore:](ekevent/init%28eventstore_%29.md) method to create a new event. Use the properties in the class to get and modify certain information about an event. Other properties, such as the event’s title and calendar, are inherited from the parent class [EKCalendarItem](ekcalendaritem.md).

## Topics

### Creating Events

- [eventWithEventStore:](ekevent/init%28eventstore_%29.md): Creates and returns a new event belonging to a specified event store.

### Scheduling Events

- [EKEventStatus](ekeventstatus.md): The event’s status.
- [EKEventAvailability](ekeventavailability.md): The event’s availability setting for scheduling purposes.

### Comparing Events

- [compareStartDateWithEvent:](ekevent/comparestartdate%28with_%29.md): Compares the start date of the receiving event with the start date of another event.

### Accessing Event Properties

- [eventIdentifier](ekevent/eventidentifier.md): A unique identifier for the event.
- [availability](ekevent/availability.md): The availability setting for the event.
- [startDate](ekevent/startdate.md): The start date of the event.
- [endDate](ekevent/enddate.md): The end date for the event.
- [allDay](ekevent/isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [occurrenceDate](ekevent/occurrencedate.md): The original occurrence date of an event if it is part of a recurring series.
- [isDetached](ekevent/isdetached.md): A Boolean value that indicates whether an event is a detached instance of a repeating event.
- [organizer](ekevent/organizer.md): The organizer associated with the event.
- [status](ekevent/status.md): The status of the event.
- [birthdayContactIdentifier](ekevent/birthdaycontactidentifier.md): The contact identifier of the person for this birthday event.
- [structuredLocation](ekevent/structuredlocation.md): The event’s location with a potential geocoordinate.
- [birthdayPersonID](ekevent/birthdaypersonid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.
- [birthdayPersonUniqueID](ekevent/birthdaypersonuniqueid.md): Deprecated. The Address Book framework record identifier of the person for this birthday event.

### Refreshing Event Data

- [refresh](ekevent/refresh%28%29.md): Updates the event’s data with the current information in the Calendar database.

## Relationships

### Inherits From

- [EKCalendarItem](ekcalendaritem.md)

## See Also

### Events and reminders

- [Creating events and reminders](creating-events-and-reminders.md): Create and modify events and reminders in a person’s database.
- [Retrieving events and reminders](retrieving-events-and-reminders.md): Fetch events and reminders from the Calendar database.
- [Updating with notifications](updating-with-notifications.md): Register for notifications about changes and keep your app up to date.
- [EKReminder](ekreminder.md): A class that represents a reminder in a calendar.
