> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/technotes/tn3130-changes-to-eventkit-in-macos13-ventura](https://developer.apple.com/documentation/technotes/tn3130-changes-to-eventkit-in-macos13-ventura)

# TN3130: Changes to EventKit in macOS Ventura 13

**Kind:** Technote

Test your apps against EventKit API changes in macOS Ventura 13.

<a id="Overview"></a>

## Overview

In macOS Ventura 13, the EventKit framework has seen significant changes. This document highlights some of the notable changes. To learn about related changes in iOS 16, see [TN3132: Changes to EventKit and EventKitUI in iOS 16](tn3132-changes-eventkit-and-eventkitui-in-ios16.md).

For apps running on systems prior to macOS Ventura 13, the legacy behavior remains in place when using EventKit. When you run your app on macOS Ventura 13, and have built it with Xcode 14 and linked against the macOS 13 SDK, you may see behavior that you are unfamiliar with when using EventKit. To identify these changes in behavior, thoroughly test your app for each major OS version it supports. Confirm that your implementation of EventKit behaves as you expect in each OS version and update your code where needed. If you notice an unexpected behavior in EventKit, report it using [Feedback Assistant](https://developer.apple.com/bug-reporting/).

<a id="EKCalendar"></a>

## EKCalendar

The inherited initializer `init()` throws an exception when attempting to create a new calendar. Use [init(for:eventStore:)](https://developer.apple.com/documentation/eventkit/ekcalendar/init%28for:eventstore:%29) instead.

```swift
let calendar = EKCalendar(for: .event, eventStore: eventStore)
```

In the legacy behavior, this inherited initializer returns an unusable `EKCalendar` object.

<a id="EKCalendarItem"></a>

## EKCalendarItem

<a id="Fetching-recurrence-rules"></a>

### Fetching recurrence rules

The [recurrenceRules](https://developer.apple.com/documentation/eventkit/ekcalendaritem/recurrencerules) property returns an empty array if the calendar item doesn’t have any recurrence rules.

In the legacy behavior, `recurrenceRules` returns `nil` if the calendar item doesn’t have any recurrence rules.

<a id="Updating-time-zones"></a>

### Updating time zones

Changing the time zone of an event no longer changes the absolute time at which it occurs.

<a id="EKEvent"></a>

## EKEvent

<a id="Creating-events"></a>

### Creating events

The inherited initializer `init()` throws an exception when attempting to create a new event. Use [init(eventStore:)](https://developer.apple.com/documentation/eventkit/ekevent/init%28eventstore:%29) to create new events.

In the legacy behavior, this inherited initializer returns an unusable `EKEvent` object.

<a id="Event-identifiers"></a>

### Event identifiers

The [eventIdentifier](https://developer.apple.com/documentation/eventkit/ekevent/eventidentifier) property now returns identifiers in a new format. The previous identifier format will continue to work.

<a id="End-date-of-all-day-events"></a>

### End date of all-day events

The [endDate](https://developer.apple.com/documentation/eventkit/ekevent/enddate) property of all-day events returns a time of `11:59:59 PM` on the last day of this event.

```json
Event title: Marathon  
Start date: June 18, 2022 at 12:00:00 AM PDT
End date: June 18, 2022 at 11:59:59 PM PDT
```

In the legacy behavior, this property returns a time of `12:00:00 AM` on the day after the event.

```json
Event title: Marathon  
Start date: June 18, 2022 at 12:00:00 AM PDT
End date: June 19, 2022 at 12:00:00 AM PDT
```

<a id="EKEventStore"></a>

## EKEventStore

<a id="Accessing-sources"></a>

### Accessing sources

The [sources](https://developer.apple.com/documentation/eventkit/ekeventstore/sources) property now contains delegate sources.

```swift
// Fetch all sources associated with the event store.
let sources = eventStore.sources

sources.forEach { source in
    // Let's check whether source is a delegate event source.
    let name = (source.isDelegate) ? "Delegate Source" : "Source"
    print("\(name): \(source.title)")
}
// Prints "Source: iCloud"
// Prints "Delegate Source: Calculus Office Hours"
```

<a id="Fetching-events"></a>

### Fetching events

[events(matching:)](https://developer.apple.com/documentation/eventkit/ekeventstore/events%28matching:%29) and [enumerateEvents(matching:using:)](https://developer.apple.com/documentation/eventkit/ekeventstore/enumerateevents%28matching:using:%29) no longer necessarily return events sorted by start date.

<a id="Accessing-calendar-events"></a>

### Accessing calendar events

The [calendarItem(withIdentifier:)](https://developer.apple.com/documentation/eventkit/ekeventstore/calendaritem%28withidentifier:%29), [calendarItems(withExternalIdentifier:)](https://developer.apple.com/documentation/eventkit/ekeventstore/calendaritems%28withexternalidentifier:%29), and [event(withIdentifier:)](https://developer.apple.com/documentation/eventkit/ekeventstore/event%28withidentifier:%29) methods may return different occurrences of an event or reminder with a given identifier in some cases. For instance, when the first occurrence of a recurring event was modified and the specified identifier refers to this occurrence. In this case, use the given identifier to fetch the unmodified version of the event’s first occurrence.

<a id="Committing-changes"></a>

### Committing changes

When you call [saveCalendar(\_:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/savecalendar%28_:commit:%29), [removeCalendar(\_:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/removecalendar%28_:commit:%29), [save(\_:span:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/save%28_:span:commit:%29), [remove(\_:span:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/remove%28_:span:commit:%29), [save(\_:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/save%28_:commit:%29), or [remove(\_:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/remove%28_:commit:%29) methods with the `commit` parameter set to `true`, [EKEventStore](https://developer.apple.com/documentation/eventkit/ekeventstore) attempts to immediately save and commit your changes to the event store. If the commit fails, `EKEventStore` automatically rolls back all changes that been saved but aren’t yet committed to the event store.

In the legacy behavior, uncommitted objects remain saved in the event store.

<a id="EKReminder"></a>

## EKReminder

The inherited initializer `init()` throws an exception when attempting to create a new reminder. Use [init(eventStore:)](https://developer.apple.com/documentation/eventkit/ekreminder/init%28eventstore:%29) instead.

```swift
let reminder = EKReminder(eventStore: eventStore)
```

In the legacy behavior, this inherited initializer returns an unusable `EKReminder` object.

<a id="EKSource"></a>

## EKSource

The [isDelegate](https://developer.apple.com/documentation/eventkit/eksource/isdelegate) property indicates whether the source is an event source delegated to the user.

<a id="Revision-History"></a>

## Revision History

- **2022-08-16** First published.

## See Also

### Related Documentation

- [TN3132: Changes to EventKit and EventKitUI in iOS 16](tn3132-changes-eventkit-and-eventkitui-in-ios16.md): Test your apps against EventKit and EventKitUI API changes in iOS 16.
- [TN3153: Adopting API changes for EventKit in iOS 17, macOS 14, and watchOS 10](tn3153-adopting-api-changes-for-eventkit-in-ios-macos-and-watchos.md): Test your existing apps against EventKit API latest changes.
