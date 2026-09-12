> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekerror](https://developer.apple.com/documentation/eventkit/ekerror)

# EKError

**Framework:** EventKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

An EventKit error.

## Declaration

```swift
struct EKError
```

## Topics

### Error Codes

- [eventNotMutable](ekerror/eventnotmutable.md): The event isn’t mutable and you can’t save or delete it.
- [noCalendar](ekerror/nocalendar.md): The event isn’t associated with a calendar.
- [noEndDate](ekerror/noenddate.md): The event has no start date set.
- [noStartDate](ekerror/nostartdate.md): The event has no end date set.
- [datesInverted](ekerror/datesinverted.md): The event’s end date occurs before its start date.
- [internalFailure](ekerror/internalfailure.md): An internal error occurred.
- [calendarReadOnly](ekerror/calendarreadonly.md): The calendar is read-only and you can’t add events to it.
- [durationGreaterThanRecurrence](ekerror/durationgreaterthanrecurrence.md): The duration of an event is greater than its recurrence interval.
- [alarmGreaterThanRecurrence](ekerror/alarmgreaterthanrecurrence.md): The alarm interval is greater than the recurrence interval.
- [startDateTooFarInFuture](ekerror/startdatetoofarinfuture.md): The start date is further into the future than the calendar can display.
- [startDateCollidesWithOtherOccurrence](ekerror/startdatecollideswithotheroccurrence.md): The event’s start date collides with another occurrence of the event.
- [objectBelongsToDifferentStore](ekerror/objectbelongstodifferentstore.md): The object belongs to a different calendar store.
- [invitesCannotBeMoved](ekerror/invitescannotbemoved.md): You can’t move the event because it’s an invitation.
- [invalidSpan](ekerror/invalidspan.md): The system encountered an invalid span during a save or deletion.
- [calendarHasNoSource](ekerror/calendarhasnosource.md): You can’t save the calendar without setting a source first.
- [calendarSourceCannotBeModified](ekerror/calendarsourcecannotbemodified.md): You can’t move the calendar to another source.
- [calendarIsImmutable](ekerror/calendarisimmutable.md): The calendar is immutable and you can’t modify or delete it.
- [sourceDoesNotAllowCalendarAddDelete](ekerror/sourcedoesnotallowcalendaradddelete.md): The source doesn’t allow you to add or delete calendars.
- [recurringReminderRequiresDueDate](ekerror/recurringreminderrequiresduedate.md): The recurring reminder requires a due date.
- [structuredLocationsNotSupported](ekerror/structuredlocationsnotsupported.md): The source to which this calendar belongs doesn’t support structured locations.
- [reminderLocationsNotSupported](ekerror/reminderlocationsnotsupported.md): The source doesn’t support locations on reminders.
- [alarmProximityNotSupported](ekerror/alarmproximitynotsupported.md): The source doesn’t allow geofences on alarms.
- [calendarDoesNotAllowEvents](ekerror/calendardoesnotallowevents.md): The calendar doesn’t allow you to add events.
- [calendarDoesNotAllowReminders](ekerror/calendardoesnotallowreminders.md): The calendar doesn’t allow you to add reminders.
- [sourceDoesNotAllowReminders](ekerror/sourcedoesnotallowreminders.md): The source doesn’t allow calendars supporting reminder entity types.
- [sourceDoesNotAllowEvents](ekerror/sourcedoesnotallowevents.md): The source doesn’t allow calendars supporting event entity types.
- [priorityIsInvalid](ekerror/priorityisinvalid.md): The priority number for the reminder is invalid.
- [invalidEntityType](ekerror/invalidentitytype.md): The entity type is invalid.
- [procedureAlarmsNotMutable](ekerror/procedurealarmsnotmutable.md): You can’t create or modify procedure alarms.
- [eventStoreNotAuthorized](ekerror/eventstorenotauthorized.md): The user hasn’t authorized your app to access events or reminders.
- [osNotSupported](ekerror/osnotsupported.md): The action isn’t supported on the current operating system.
- [invalidInviteReplyCalendar](ekerror/invalidinvitereplycalendar.md): The calendar is invalid or nil.
- [notificationsCollectionFlagNotSet](ekerror/notificationscollectionflagnotset.md): The notification collection doesn’t have the notifications collection flag.
- [sourceMismatch](ekerror/sourcemismatch.md): The object’s source doesn’t match its container’s source.
- [notificationCollectionMismatch](ekerror/notificationcollectionmismatch.md): The notification collection that contains this notification doesn’t match the collection the system is trying to save.
- [notificationSavedWithoutCollection](ekerror/notificationsavedwithoutcollection.md): The notification can’t save because you haven’t added it to a notification collection and saved the collection first.
- [last](ekerror/last.md): This error is for internal use.

### Error Domain

- [EKErrorDomain](ekerrordomain.md): A string that identifies the EventKit error domain.

### Type Properties

- [errorDomain](ekerror/errordomain.md)
- [reminderAlarmContainsEmailOrUrl](ekerror/reminderalarmcontainsemailorurl.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [EKError.Code](ekerror/code.md): Error codes for EventKit errors.
- [EKErrorDomain](ekerrordomain.md): A string that identifies the EventKit error domain.
