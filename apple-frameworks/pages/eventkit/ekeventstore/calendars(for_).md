> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/calendars(for:)](https://developer.apple.com/documentation/eventkit/ekeventstore/calendars(for:))

# calendars(for:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Identifies the calendars that support a given entity type, such as reminders or events.

## Declaration

```swift
func calendars(for entityType: EKEntityType) -> [EKCalendar]
```

## Parameters

- `entityType`: The calendar’s entity type.

<a id="return-value"></a>

## Return Value

An array of calendars that support the specified entity type.

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

## See Also

### Accessing calendars

- [defaultCalendarForNewEvents](defaultcalendarfornewevents.md): The calendar that events are added to by default, as specified by user settings.
- [defaultCalendarForNewReminders()](defaultcalendarfornewreminders%28%29.md): Identifies the default calendar for adding reminders to, as specified by user settings.
- [calendar(withIdentifier:)](calendar%28withidentifier_%29.md): Locates a calendar with the specified identifier.
- [saveCalendar(\_:commit:)](savecalendar%28__commit_%29.md): Saves a calendar to the event store by either committing or batching the changes.
- [removeCalendar(\_:commit:)](removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](calendars.md): Deprecated. The calendars associated with the event store.

# calendarsForEntityType: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Identifies the calendars that support a given entity type, such as reminders or events.

## Declaration

```objectivec
- (NSArray<EKCalendar *> *) calendarsForEntityType:(EKEntityType) entityType;
```

## Parameters

- `entityType`: The calendar’s entity type.

<a id="return-value"></a>

## Return Value

An array of calendars that support the specified entity type.

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

## See Also

### Accessing calendars

- [defaultCalendarForNewEvents](defaultcalendarfornewevents.md): The calendar that events are added to by default, as specified by user settings.
- [defaultCalendarForNewReminders](defaultcalendarfornewreminders%28%29.md): Identifies the default calendar for adding reminders to, as specified by user settings.
- [calendarWithIdentifier:](calendar%28withidentifier_%29.md): Locates a calendar with the specified identifier.
- [saveCalendar:commit:error:](savecalendar%28__commit_%29.md): Saves a calendar to the event store by either committing or batching the changes.
- [removeCalendar:commit:error:](removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](calendars.md): Deprecated. The calendars associated with the event store.
