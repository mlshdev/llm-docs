> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekerror/noenddate](https://developer.apple.com/documentation/eventkit/ekerror/noenddate)

# noEndDate

**Framework:** EventKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The event has no start date set.

## Declaration

```swift
static var noEndDate: EKError.Code { get }
```

## See Also

### Error Codes

- [eventNotMutable](eventnotmutable.md): The event isn’t mutable and you can’t save or delete it.
- [noCalendar](nocalendar.md): The event isn’t associated with a calendar.
- [noStartDate](nostartdate.md): The event has no end date set.
- [datesInverted](datesinverted.md): The event’s end date occurs before its start date.
- [internalFailure](internalfailure.md): An internal error occurred.
- [calendarReadOnly](calendarreadonly.md): The calendar is read-only and you can’t add events to it.
- [durationGreaterThanRecurrence](durationgreaterthanrecurrence.md): The duration of an event is greater than its recurrence interval.
- [alarmGreaterThanRecurrence](alarmgreaterthanrecurrence.md): The alarm interval is greater than the recurrence interval.
- [startDateTooFarInFuture](startdatetoofarinfuture.md): The start date is further into the future than the calendar can display.
- [startDateCollidesWithOtherOccurrence](startdatecollideswithotheroccurrence.md): The event’s start date collides with another occurrence of the event.
- [objectBelongsToDifferentStore](objectbelongstodifferentstore.md): The object belongs to a different calendar store.
- [invitesCannotBeMoved](invitescannotbemoved.md): You can’t move the event because it’s an invitation.
- [invalidSpan](invalidspan.md): The system encountered an invalid span during a save or deletion.
- [calendarHasNoSource](calendarhasnosource.md): You can’t save the calendar without setting a source first.
- [calendarSourceCannotBeModified](calendarsourcecannotbemodified.md): You can’t move the calendar to another source.
