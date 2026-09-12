> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit](https://developer.apple.com/documentation/eventkit)

# EventKit (Swift)

**Framework:** EventKit  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Create, view, and edit calendar and reminder events.

<a id="overview"></a>

## Overview

The EventKit framework provides access to calendar and reminders data so people can create, retrieve, and edit calendar items in your app. In iOS, [EventKit UI](eventkitui.md) provides user interfaces you can implement in your app so people can create and edit calendar items.

You can use EventKit to set up alarms and create recurring events. And if a change to the Calendar database occurs from outside your app, EventKit detects the change and sends a notification, allowing your app to stay up to date.

## Topics

### Essentials

- [Accessing the event store](eventkit/accessing-the-event-store.md): Request access to a person’s calendar data through the event store.
- [EKEventStore](eventkit/ekeventstore.md): An object that accesses a person’s calendar events and reminders and supports the scheduling of new events.
- [Accessing Calendar using EventKit and EventKitUI](eventkit/accessing-calendar-using-eventkit-and-eventkitui.md): Choose and implement the appropriate Calendar access level in your app.

### Events and reminders

- [Creating events and reminders](eventkit/creating-events-and-reminders.md): Create and modify events and reminders in a person’s database.
- [Retrieving events and reminders](eventkit/retrieving-events-and-reminders.md): Fetch events and reminders from the Calendar database.
- [Updating with notifications](eventkit/updating-with-notifications.md): Register for notifications about changes and keep your app up to date.
- [Managing location-based reminders](eventkit/managing-location-based-reminders.md): Access reminders set up with geofence-enabled alarms on a person’s calendars.
- [EKEvent](eventkit/ekevent.md): A class that represents an event in a calendar.
- [EKReminder](eventkit/ekreminder.md): A class that represents a reminder in a calendar.

### Calendars

- [EKCalendar](eventkit/ekcalendar.md): A class that represents a calendar in EventKit.
- [EKParticipant](eventkit/ekparticipant.md): A class that represents person, group, or room invited to a calendar event.

### Recurrence

- [Creating a recurring event](eventkit/creating-a-recurring-event.md): Set up an event or reminder that repeats.
- [EKRecurrenceDayOfWeek](eventkit/ekrecurrencedayofweek.md): A class that represents the day of the week.
- [EKRecurrenceEnd](eventkit/ekrecurrenceend.md): A class that defines the end of a recurrence rule.
- [EKRecurrenceRule](eventkit/ekrecurrencerule.md): A class that describes the pattern for a recurring event.

### Alarms

- [Setting an alarm](eventkit/setting-an-alarm.md): Alert users of events and reminders with an alarm.
- [EKAlarm](eventkit/ekalarm.md): A class that represents an alarm.
- [EKStructuredLocation](eventkit/ekstructuredlocation.md): `A` class that specifies a geofence to activate the alarm of a calendar item.

### Common objects

- [EKCalendarItem](eventkit/ekcalendaritem.md): An abstract superclass for calendar events and reminders.
- [EKObject](eventkit/ekobject.md): An abstract superclass for all EventKit classes that have persistent instances.
- [EKSource](eventkit/eksource.md): An abstract superclass that represents the account a calendar belongs to.

### Virtual conferences

- [Implementing a virtual conference extension](eventkit/implementing-a-virtual-conference-extension.md): Support adding a virtual conference room to an event in Calendar.
- [EKVirtualConferenceProvider](eventkit/ekvirtualconferenceprovider.md): An object that associates virtual conferencing details with an event object in a user’s calendar.
- [EKVirtualConferenceDescriptor](eventkit/ekvirtualconferencedescriptor.md): Details about a virtual conference that uses a custom room type.
- [EKVirtualConferenceRoomTypeDescriptor](eventkit/ekvirtualconferenceroomtypedescriptor.md): Details about a room where virtual conferences take place.

### Errors

- [EKError](eventkit/ekerror.md): An EventKit error.
- [EKError.Code](eventkit/ekerror/code.md): Error codes for EventKit errors.
- [EKErrorDomain](eventkit/ekerrordomain.md): A string that identifies the EventKit error domain.

# EventKit (Objective-C)

**Framework:** EventKit  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Create, view, and edit calendar and reminder events.

<a id="overview"></a>

## Overview

The EventKit framework provides access to calendar and reminders data so people can create, retrieve, and edit calendar items in your app. In iOS, [EventKit UI](eventkitui.md) provides user interfaces you can implement in your app so people can create and edit calendar items.

You can use EventKit to set up alarms and create recurring events. And if a change to the Calendar database occurs from outside your app, EventKit detects the change and sends a notification, allowing your app to stay up to date.

## Topics

### Essentials

- [Accessing the event store](eventkit/accessing-the-event-store.md): Request access to a person’s calendar data through the event store.
- [EKEventStore](eventkit/ekeventstore.md): An object that accesses a person’s calendar events and reminders and supports the scheduling of new events.

### Events and reminders

- [Creating events and reminders](eventkit/creating-events-and-reminders.md): Create and modify events and reminders in a person’s database.
- [Retrieving events and reminders](eventkit/retrieving-events-and-reminders.md): Fetch events and reminders from the Calendar database.
- [Updating with notifications](eventkit/updating-with-notifications.md): Register for notifications about changes and keep your app up to date.
- [EKEvent](eventkit/ekevent.md): A class that represents an event in a calendar.
- [EKReminder](eventkit/ekreminder.md): A class that represents a reminder in a calendar.

### Calendars

- [EKCalendar](eventkit/ekcalendar.md): A class that represents a calendar in EventKit.
- [EKParticipant](eventkit/ekparticipant.md): A class that represents person, group, or room invited to a calendar event.

### Recurrence

- [Creating a recurring event](eventkit/creating-a-recurring-event.md): Set up an event or reminder that repeats.
- [EKRecurrenceDayOfWeek](eventkit/ekrecurrencedayofweek.md): A class that represents the day of the week.
- [EKRecurrenceEnd](eventkit/ekrecurrenceend.md): A class that defines the end of a recurrence rule.
- [EKRecurrenceRule](eventkit/ekrecurrencerule.md): A class that describes the pattern for a recurring event.

### Alarms

- [Setting an alarm](eventkit/setting-an-alarm.md): Alert users of events and reminders with an alarm.
- [EKAlarm](eventkit/ekalarm.md): A class that represents an alarm.
- [EKStructuredLocation](eventkit/ekstructuredlocation.md): `A` class that specifies a geofence to activate the alarm of a calendar item.

### Common objects

- [EKCalendarItem](eventkit/ekcalendaritem.md): An abstract superclass for calendar events and reminders.
- [EKObject](eventkit/ekobject.md): An abstract superclass for all EventKit classes that have persistent instances.
- [EKSource](eventkit/eksource.md): An abstract superclass that represents the account a calendar belongs to.

### Virtual conferences

- [EKVirtualConferenceProvider](eventkit/ekvirtualconferenceprovider.md): An object that associates virtual conferencing details with an event object in a user’s calendar.
- [EKVirtualConferenceDescriptor](eventkit/ekvirtualconferencedescriptor.md): Details about a virtual conference that uses a custom room type.
- [EKVirtualConferenceRoomTypeDescriptor](eventkit/ekvirtualconferenceroomtypedescriptor.md): Details about a room where virtual conferences take place.

### Errors

- [EKErrorCode](eventkit/ekerror/code.md): Error codes for EventKit errors.
- [EKErrorDomain](eventkit/ekerrordomain.md): A string that identifies the EventKit error domain.

### Macros

- [DATETIME_COMPONENTS](eventkit/datetime_components.md)
- [DATE_COMPONENTS](eventkit/date_components.md)
- [EK_LOSE_FRACTIONAL_SECONDS](eventkit/ek_lose_fractional_seconds.md)
- [EVENTKIT_EXTERN](eventkit/eventkit_extern.md)
