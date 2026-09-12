> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/defaultcalendarfornewreminders()](https://developer.apple.com/documentation/eventkit/ekeventstore/defaultcalendarfornewreminders())

# defaultCalendarForNewReminders() (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Identifies the default calendar for adding reminders to, as specified by user settings.

## Declaration

```swift
func defaultCalendarForNewReminders() -> EKCalendar?
```

<a id="return-value"></a>

## Return Value

The calendar that reminders are added to by default.

## See Also

### Accessing calendars

- [defaultCalendarForNewEvents](defaultcalendarfornewevents.md): The calendar that events are added to by default, as specified by user settings.
- [calendars(for:)](calendars%28for_%29.md): Identifies the calendars that support a given entity type, such as reminders or events.
- [calendar(withIdentifier:)](calendar%28withidentifier_%29.md): Locates a calendar with the specified identifier.
- [saveCalendar(\_:commit:)](savecalendar%28__commit_%29.md): Saves a calendar to the event store by either committing or batching the changes.
- [removeCalendar(\_:commit:)](removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](calendars.md): Deprecated. The calendars associated with the event store.

# defaultCalendarForNewReminders (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Identifies the default calendar for adding reminders to, as specified by user settings.

## Declaration

```objectivec
- (EKCalendar *) defaultCalendarForNewReminders;
```

<a id="return-value"></a>

## Return Value

The calendar that reminders are added to by default.

## See Also

### Accessing calendars

- [defaultCalendarForNewEvents](defaultcalendarfornewevents.md): The calendar that events are added to by default, as specified by user settings.
- [calendarsForEntityType:](calendars%28for_%29.md): Identifies the calendars that support a given entity type, such as reminders or events.
- [calendarWithIdentifier:](calendar%28withidentifier_%29.md): Locates a calendar with the specified identifier.
- [saveCalendar:commit:error:](savecalendar%28__commit_%29.md): Saves a calendar to the event store by either committing or batching the changes.
- [removeCalendar:commit:error:](removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](calendars.md): Deprecated. The calendars associated with the event store.
