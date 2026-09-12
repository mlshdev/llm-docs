> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/calendar(withidentifier:)](https://developer.apple.com/documentation/eventkit/ekeventstore/calendar(withidentifier:))

# calendar(withIdentifier:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Locates a calendar with the specified identifier.

## Declaration

```swift
func calendar(withIdentifier identifier: String) -> EKCalendar?
```

## Parameters

- `identifier`: The calendar’s unique identifier.

<a id="return-value"></a>

## Return Value

A calendar with a [calendarIdentifier](../ekcalendar/calendaridentifier.md) that matches the specified identifier.

## See Also

### Accessing calendars

- [defaultCalendarForNewEvents](defaultcalendarfornewevents.md): The calendar that events are added to by default, as specified by user settings.
- [defaultCalendarForNewReminders()](defaultcalendarfornewreminders%28%29.md): Identifies the default calendar for adding reminders to, as specified by user settings.
- [calendars(for:)](calendars%28for_%29.md): Identifies the calendars that support a given entity type, such as reminders or events.
- [saveCalendar(\_:commit:)](savecalendar%28__commit_%29.md): Saves a calendar to the event store by either committing or batching the changes.
- [removeCalendar(\_:commit:)](removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](calendars.md): Deprecated. The calendars associated with the event store.

# calendarWithIdentifier: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Locates a calendar with the specified identifier.

## Declaration

```objectivec
- (EKCalendar *) calendarWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The calendar’s unique identifier.

<a id="return-value"></a>

## Return Value

A calendar with a [calendarIdentifier](../ekcalendar/calendaridentifier.md) that matches the specified identifier.

## See Also

### Accessing calendars

- [defaultCalendarForNewEvents](defaultcalendarfornewevents.md): The calendar that events are added to by default, as specified by user settings.
- [defaultCalendarForNewReminders](defaultcalendarfornewreminders%28%29.md): Identifies the default calendar for adding reminders to, as specified by user settings.
- [calendarsForEntityType:](calendars%28for_%29.md): Identifies the calendars that support a given entity type, such as reminders or events.
- [saveCalendar:commit:error:](savecalendar%28__commit_%29.md): Saves a calendar to the event store by either committing or batching the changes.
- [removeCalendar:commit:error:](removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](calendars.md): Deprecated. The calendars associated with the event store.
