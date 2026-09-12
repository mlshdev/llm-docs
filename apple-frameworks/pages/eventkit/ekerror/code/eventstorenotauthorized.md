> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekerror/code/eventstorenotauthorized](https://developer.apple.com/documentation/eventkit/ekerror/code/eventstorenotauthorized)

# EKError.Code.eventStoreNotAuthorized (Swift)

**Framework:** EventKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The user hasn’t authorized your app to access events or reminders.

## Declaration

```swift
case eventStoreNotAuthorized
```

## See Also

### Constants

- [EKError.Code.eventNotMutable](eventnotmutable.md): The event isn’t mutable and you can’t save or delete it.
- [EKError.Code.noCalendar](nocalendar.md): The event isn’t associated with a calendar.
- [EKError.Code.noStartDate](nostartdate.md): The event has no start date set.
- [EKError.Code.noEndDate](noenddate.md): The event has no end date set.
- [EKError.Code.datesInverted](datesinverted.md): The event’s end date occurs before its start date.
- [EKError.Code.internalFailure](internalfailure.md): An internal error occurred.
- [EKError.Code.calendarReadOnly](calendarreadonly.md): The calendar is read-only and you can’t add events to it.
- [EKError.Code.durationGreaterThanRecurrence](durationgreaterthanrecurrence.md): The duration of an event is greater than its recurrence interval.
- [EKError.Code.alarmGreaterThanRecurrence](alarmgreaterthanrecurrence.md): The alarm interval is greater than the recurrence interval.
- [EKError.Code.startDateTooFarInFuture](startdatetoofarinfuture.md): The start date is further into the future than the calendar can display.
- [EKError.Code.startDateCollidesWithOtherOccurrence](startdatecollideswithotheroccurrence.md): The event’s start date collides with another occurrence of the event.
- [EKError.Code.objectBelongsToDifferentStore](objectbelongstodifferentstore.md): The object belongs to a different calendar store.
- [EKError.Code.invitesCannotBeMoved](invitescannotbemoved.md): You can’t move the event because it’s an invitation.
- [EKError.Code.invalidSpan](invalidspan.md): The system encountered an invalid span during a save or deletion.
- [EKError.Code.calendarHasNoSource](calendarhasnosource.md): You can’t save the calendar without setting a source first.

# EKErrorEventStoreNotAuthorized (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The user hasn’t authorized your app to access events or reminders.

## Declaration

```objectivec
EKErrorEventStoreNotAuthorized
```

## See Also

### Constants

- [EKErrorEventNotMutable](eventnotmutable.md): The event isn’t mutable and you can’t save or delete it.
- [EKErrorNoCalendar](nocalendar.md): The event isn’t associated with a calendar.
- [EKErrorNoStartDate](nostartdate.md): The event has no start date set.
- [EKErrorNoEndDate](noenddate.md): The event has no end date set.
- [EKErrorDatesInverted](datesinverted.md): The event’s end date occurs before its start date.
- [EKErrorInternalFailure](internalfailure.md): An internal error occurred.
- [EKErrorCalendarReadOnly](calendarreadonly.md): The calendar is read-only and you can’t add events to it.
- [EKErrorDurationGreaterThanRecurrence](durationgreaterthanrecurrence.md): The duration of an event is greater than its recurrence interval.
- [EKErrorAlarmGreaterThanRecurrence](alarmgreaterthanrecurrence.md): The alarm interval is greater than the recurrence interval.
- [EKErrorStartDateTooFarInFuture](startdatetoofarinfuture.md): The start date is further into the future than the calendar can display.
- [EKErrorStartDateCollidesWithOtherOccurrence](startdatecollideswithotheroccurrence.md): The event’s start date collides with another occurrence of the event.
- [EKErrorObjectBelongsToDifferentStore](objectbelongstodifferentstore.md): The object belongs to a different calendar store.
- [EKErrorInvitesCannotBeMoved](invitescannotbemoved.md): You can’t move the event because it’s an invitation.
- [EKErrorInvalidSpan](invalidspan.md): The system encountered an invalid span during a save or deletion.
- [EKErrorCalendarHasNoSource](calendarhasnosource.md): You can’t save the calendar without setting a source first.
