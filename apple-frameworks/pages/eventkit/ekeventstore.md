> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore](https://developer.apple.com/documentation/eventkit/ekeventstore)

# EKEventStore (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

An object that accesses a person’s calendar events and reminders and supports the scheduling of new events.

## Declaration

```swift
class EKEventStore
```

## Mentioned In

- [Retrieving events and reminders](retrieving-events-and-reminders.md)
- [Accessing the event store](accessing-the-event-store.md)
- [Creating events and reminders](creating-events-and-reminders.md)

<a id="overview"></a>

## Overview

The `EKEventStore` class is an app’s point of contact for accessing calendar and reminder data.

After initializing the event store, you must request access to events or reminders before attempting to fetch or create data. To request access to reminders, call [requestFullAccessToReminders(completion:)](ekeventstore/requestfullaccesstoreminders%28completion_%29.md). To request access to events, call [requestWriteOnlyAccessToEvents(completion:)](ekeventstore/requestwriteonlyaccesstoevents%28completion_%29.md) or [requestFullAccessToEvents(completion:)](ekeventstore/requestfullaccesstoevents%28completion_%29.md).

> **Important**

>  To request access to events and reminders, your app needs to include permission strings in its `Info.plist` file that explain to someone why the app needs access. For more information, see [Accessing the event store](accessing-the-event-store.md).

A typical workflow for using an event store is:

1. Create a predicate, or a search query for events, with [predicateForEvents(withStart:end:calendars:)](ekeventstore/predicateforevents%28withstart_end_calendars_%29.md).
2. Fetch and process events that match the predicate with the [events(matching:)](ekeventstore/events%28matching_%29.md) and [enumerateEvents(matching:using:)](ekeventstore/enumerateevents%28matching_using_%29.md) methods.
3. Save and delete events from the event store with the [save(\_:span:commit:)](ekeventstore/save%28__span_commit_%29.md) and [remove(\_:span:commit:)](ekeventstore/remove%28__span_commit_%29.md) methods.

Use similar methods to access and manipulate reminders.

After receiving an object from an event store, don’t use that object with a different event store. This restriction applies to [EKObject](ekobject.md) subclasses such as [EKEvent](ekevent.md), [EKReminder](ekreminder.md), [EKCalendar](ekcalendar.md), and [EKSource](eksource.md), as well as predicates that the event store creates. For example, don’t fetch an event from one event store, modify the event, and then pass it to [save(\_:span:)](ekeventstore/save%28__span_%29.md) in a different store.

## Topics

### Creating event stores

- [init()](ekeventstore/init%28%29.md): Creates a new event store.
- [init(sources:)](ekeventstore/init%28sources_%29.md): Creates an event store that contains data for the specified sources.
- [eventStoreIdentifier](ekeventstore/eventstoreidentifier.md): The unique identifier for the event store.

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEvents(completion:)](ekeventstore/requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToEvents(completion:)](ekeventstore/requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [requestFullAccessToReminders(completion:)](ekeventstore/requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [authorizationStatus(for:)](ekeventstore/authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKAuthorizationStatus](ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [EKEventStoreRequestAccessCompletionHandler](ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.

### Accessing account sources

- [sources](ekeventstore/sources.md): An unordered array of objects that represent accounts that contain calendars.
- [delegateSources](ekeventstore/delegatesources.md): The event sources delegated to the person using your app.
- [source(withIdentifier:)](ekeventstore/source%28withidentifier_%29.md): Locates an event source with the specified identifier.

### Saving and restoring state

- [commit()](ekeventstore/commit%28%29.md): Commits all unsaved changes to the event store.
- [reset()](ekeventstore/reset%28%29.md): Reverts the event store to its saved state.
- [refreshSourcesIfNecessary()](ekeventstore/refreshsourcesifnecessary%28%29.md): Pulls new data from remote sources, if necessary.

### Accessing calendars

- [defaultCalendarForNewEvents](ekeventstore/defaultcalendarfornewevents.md): The calendar that events are added to by default, as specified by user settings.
- [defaultCalendarForNewReminders()](ekeventstore/defaultcalendarfornewreminders%28%29.md): Identifies the default calendar for adding reminders to, as specified by user settings.
- [calendars(for:)](ekeventstore/calendars%28for_%29.md): Identifies the calendars that support a given entity type, such as reminders or events.
- [calendar(withIdentifier:)](ekeventstore/calendar%28withidentifier_%29.md): Locates a calendar with the specified identifier.
- [saveCalendar(\_:commit:)](ekeventstore/savecalendar%28__commit_%29.md): Saves a calendar to the event store by either committing or batching the changes.
- [removeCalendar(\_:commit:)](ekeventstore/removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](ekeventstore/calendars.md): Deprecated. The calendars associated with the event store.

### Accessing calendar events

- [event(withIdentifier:)](ekeventstore/event%28withidentifier_%29.md): Locates the first occurrence of an event with a given identifier.
- [calendarItem(withIdentifier:)](ekeventstore/calendaritem%28withidentifier_%29.md): Locates a reminder or the first occurrence of an event with the specified identifier.
- [calendarItems(withExternalIdentifier:)](ekeventstore/calendaritems%28withexternalidentifier_%29.md): Locates all reminders or the first occurrences of all events with the specified external identifier.
- [remove(\_:span:)](ekeventstore/remove%28__span_%29.md): Removes an event from the event store.
- [remove(\_:span:commit:)](ekeventstore/remove%28__span_commit_%29.md): Removes an event or recurring events from the event store by either committing or batching the changes.
- [remove(\_:commit:)](ekeventstore/remove%28__commit_%29.md): Removes a reminder from the event store by either committing or batching the changes.
- [save(\_:span:)](ekeventstore/save%28__span_%29.md): Saves changes to an event permanently.
- [save(\_:span:commit:)](ekeventstore/save%28__span_commit_%29.md): Saves an event or recurring events to the event store by either committing or batching the changes.
- [save(\_:commit:)](ekeventstore/save%28__commit_%29.md): Saves changes to a reminder by either committing or batching the changes.

### Searching calendars

- [enumerateEvents(matching:using:)](ekeventstore/enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [events(matching:)](ekeventstore/events%28matching_%29.md): Finds all events that match a given predicate.
- [fetchReminders(matching:completion:)](ekeventstore/fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest(\_:)](ekeventstore/cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEvents(withStart:end:calendars:)](ekeventstore/predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForReminders(in:)](ekeventstore/predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedReminders(withCompletionDateStarting:ending:calendars:)](ekeventstore/predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteReminders(withDueDateStarting:ending:calendars:)](ekeventstore/predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.

### Deprecated methods

- [requestAccess(to:completion:)](ekeventstore/requestaccess%28to_completion_%29.md): Deprecated. Prompts the person using your app to grant or deny access to event or reminder data.

### Structures

- [EKEventStore.EventStoreChanged](ekeventstore/eventstorechanged.md): A notification posted when changes are made to the Calendar or Reminders database.

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

## See Also

### Essentials

- [Accessing the event store](accessing-the-event-store.md): Request access to a person’s calendar data through the event store.
- [Accessing Calendar using EventKit and EventKitUI](accessing-calendar-using-eventkit-and-eventkitui.md): Choose and implement the appropriate Calendar access level in your app.

# EKEventStore (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

An object that accesses a person’s calendar events and reminders and supports the scheduling of new events.

## Declaration

```objectivec
@interface EKEventStore : NSObject
```

## Mentioned In

- [Retrieving events and reminders](retrieving-events-and-reminders.md)
- [Accessing the event store](accessing-the-event-store.md)
- [Creating events and reminders](creating-events-and-reminders.md)

<a id="overview"></a>

## Overview

The `EKEventStore` class is an app’s point of contact for accessing calendar and reminder data.

After initializing the event store, you must request access to events or reminders before attempting to fetch or create data. To request access to reminders, call [requestFullAccessToRemindersWithCompletion:](ekeventstore/requestfullaccesstoreminders%28completion_%29.md). To request access to events, call [requestWriteOnlyAccessToEventsWithCompletion:](ekeventstore/requestwriteonlyaccesstoevents%28completion_%29.md) or [requestFullAccessToEventsWithCompletion:](ekeventstore/requestfullaccesstoevents%28completion_%29.md).

> **Important**

>  To request access to events and reminders, your app needs to include permission strings in its `Info.plist` file that explain to someone why the app needs access. For more information, see [Accessing the event store](accessing-the-event-store.md).

A typical workflow for using an event store is:

1. Create a predicate, or a search query for events, with [predicateForEventsWithStartDate:endDate:calendars:](ekeventstore/predicateforevents%28withstart_end_calendars_%29.md).
2. Fetch and process events that match the predicate with the [eventsMatchingPredicate:](ekeventstore/events%28matching_%29.md) and [enumerateEventsMatchingPredicate:usingBlock:](ekeventstore/enumerateevents%28matching_using_%29.md) methods.
3. Save and delete events from the event store with the [saveEvent:span:commit:error:](ekeventstore/save%28__span_commit_%29.md) and [removeEvent:span:commit:error:](ekeventstore/remove%28__span_commit_%29.md) methods.

Use similar methods to access and manipulate reminders.

After receiving an object from an event store, don’t use that object with a different event store. This restriction applies to [EKObject](ekobject.md) subclasses such as [EKEvent](ekevent.md), [EKReminder](ekreminder.md), [EKCalendar](ekcalendar.md), and [EKSource](eksource.md), as well as predicates that the event store creates. For example, don’t fetch an event from one event store, modify the event, and then pass it to [saveEvent:span:error:](ekeventstore/save%28__span_%29.md) in a different store.

## Topics

### Creating event stores

- [init](ekeventstore/init%28%29.md): Creates a new event store.
- [initWithSources:](ekeventstore/init%28sources_%29.md): Creates an event store that contains data for the specified sources.
- [eventStoreIdentifier](ekeventstore/eventstoreidentifier.md): The unique identifier for the event store.
- [initWithAccessToEntityTypes:](ekeventstore/initwithaccesstoentitytypes_.md): Deprecated. Initializes access to the event store with support for the given entity type.

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEventsWithCompletion:](ekeventstore/requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToEventsWithCompletion:](ekeventstore/requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [requestFullAccessToRemindersWithCompletion:](ekeventstore/requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [authorizationStatusForEntityType:](ekeventstore/authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKAuthorizationStatus](ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [EKEventStoreRequestAccessCompletionHandler](ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.

### Accessing account sources

- [sources](ekeventstore/sources.md): An unordered array of objects that represent accounts that contain calendars.
- [delegateSources](ekeventstore/delegatesources.md): The event sources delegated to the person using your app.
- [sourceWithIdentifier:](ekeventstore/source%28withidentifier_%29.md): Locates an event source with the specified identifier.

### Saving and restoring state

- [commit:](ekeventstore/commit%28%29.md): Commits all unsaved changes to the event store.
- [reset](ekeventstore/reset%28%29.md): Reverts the event store to its saved state.
- [refreshSourcesIfNecessary](ekeventstore/refreshsourcesifnecessary%28%29.md): Pulls new data from remote sources, if necessary.

### Accessing calendars

- [defaultCalendarForNewEvents](ekeventstore/defaultcalendarfornewevents.md): The calendar that events are added to by default, as specified by user settings.
- [defaultCalendarForNewReminders](ekeventstore/defaultcalendarfornewreminders%28%29.md): Identifies the default calendar for adding reminders to, as specified by user settings.
- [calendarsForEntityType:](ekeventstore/calendars%28for_%29.md): Identifies the calendars that support a given entity type, such as reminders or events.
- [calendarWithIdentifier:](ekeventstore/calendar%28withidentifier_%29.md): Locates a calendar with the specified identifier.
- [saveCalendar:commit:error:](ekeventstore/savecalendar%28__commit_%29.md): Saves a calendar to the event store by either committing or batching the changes.
- [removeCalendar:commit:error:](ekeventstore/removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](ekeventstore/calendars.md): Deprecated. The calendars associated with the event store.

### Accessing calendar events

- [eventWithIdentifier:](ekeventstore/event%28withidentifier_%29.md): Locates the first occurrence of an event with a given identifier.
- [calendarItemWithIdentifier:](ekeventstore/calendaritem%28withidentifier_%29.md): Locates a reminder or the first occurrence of an event with the specified identifier.
- [calendarItemsWithExternalIdentifier:](ekeventstore/calendaritems%28withexternalidentifier_%29.md): Locates all reminders or the first occurrences of all events with the specified external identifier.
- [removeEvent:span:error:](ekeventstore/remove%28__span_%29.md): Removes an event from the event store.
- [removeEvent:span:commit:error:](ekeventstore/remove%28__span_commit_%29.md): Removes an event or recurring events from the event store by either committing or batching the changes.
- [removeReminder:commit:error:](ekeventstore/remove%28__commit_%29.md): Removes a reminder from the event store by either committing or batching the changes.
- [saveEvent:span:error:](ekeventstore/save%28__span_%29.md): Saves changes to an event permanently.
- [saveEvent:span:commit:error:](ekeventstore/save%28__span_commit_%29.md): Saves an event or recurring events to the event store by either committing or batching the changes.
- [saveReminder:commit:error:](ekeventstore/save%28__commit_%29.md): Saves changes to a reminder by either committing or batching the changes.

### Searching calendars

- [enumerateEventsMatchingPredicate:usingBlock:](ekeventstore/enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [eventsMatchingPredicate:](ekeventstore/events%28matching_%29.md): Finds all events that match a given predicate.
- [fetchRemindersMatchingPredicate:completion:](ekeventstore/fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest:](ekeventstore/cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEventsWithStartDate:endDate:calendars:](ekeventstore/predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForRemindersInCalendars:](ekeventstore/predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedRemindersWithCompletionDateStarting:ending:calendars:](ekeventstore/predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteRemindersWithDueDateStarting:ending:calendars:](ekeventstore/predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.

### Deprecated methods

- [requestAccessToEntityType:completion:](ekeventstore/requestaccess%28to_completion_%29.md): Deprecated. Prompts the person using your app to grant or deny access to event or reminder data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [Accessing the event store](accessing-the-event-store.md): Request access to a person’s calendar data through the event store.
