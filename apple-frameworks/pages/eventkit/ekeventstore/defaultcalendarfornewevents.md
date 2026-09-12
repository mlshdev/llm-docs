> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/defaultcalendarfornewevents](https://developer.apple.com/documentation/eventkit/ekeventstore/defaultcalendarfornewevents)

# defaultCalendarForNewEvents (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The calendar that events are added to by default, as specified by user settings.

## Declaration

```swift
var defaultCalendarForNewEvents: EKCalendar? { get }
```

## See Also

### Accessing calendars

- [defaultCalendarForNewReminders()](defaultcalendarfornewreminders%28%29.md): Identifies the default calendar for adding reminders to, as specified by user settings.
- [calendars(for:)](calendars%28for_%29.md): Identifies the calendars that support a given entity type, such as reminders or events.
- [calendar(withIdentifier:)](calendar%28withidentifier_%29.md): Locates a calendar with the specified identifier.
- [saveCalendar(\_:commit:)](savecalendar%28__commit_%29.md): Saves a calendar to the event store by either committing or batching the changes.
- [removeCalendar(\_:commit:)](removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](calendars.md): Deprecated. The calendars associated with the event store.

# defaultCalendarForNewEvents (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The calendar that events are added to by default, as specified by user settings.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) EKCalendar * defaultCalendarForNewEvents;
```

## See Also

### Accessing calendars

- [defaultCalendarForNewReminders](defaultcalendarfornewreminders%28%29.md): Identifies the default calendar for adding reminders to, as specified by user settings.
- [calendarsForEntityType:](calendars%28for_%29.md): Identifies the calendars that support a given entity type, such as reminders or events.
- [calendarWithIdentifier:](calendar%28withidentifier_%29.md): Locates a calendar with the specified identifier.
- [saveCalendar:commit:error:](savecalendar%28__commit_%29.md): Saves a calendar to the event store by either committing or batching the changes.
- [removeCalendar:commit:error:](removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](calendars.md): Deprecated. The calendars associated with the event store.
