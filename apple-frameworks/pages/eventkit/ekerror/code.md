> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekerror/code](https://developer.apple.com/documentation/eventkit/ekerror/code)

# EKError.Code (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Error codes for EventKit errors.

## Declaration

```swift
enum Code
```

## Topics

### Constants

- [EKError.Code.eventNotMutable](code/eventnotmutable.md): The event isn’t mutable and you can’t save or delete it.
- [EKError.Code.noCalendar](code/nocalendar.md): The event isn’t associated with a calendar.
- [EKError.Code.noStartDate](code/nostartdate.md): The event has no start date set.
- [EKError.Code.noEndDate](code/noenddate.md): The event has no end date set.
- [EKError.Code.datesInverted](code/datesinverted.md): The event’s end date occurs before its start date.
- [EKError.Code.internalFailure](code/internalfailure.md): An internal error occurred.
- [EKError.Code.calendarReadOnly](code/calendarreadonly.md): The calendar is read-only and you can’t add events to it.
- [EKError.Code.durationGreaterThanRecurrence](code/durationgreaterthanrecurrence.md): The duration of an event is greater than its recurrence interval.
- [EKError.Code.alarmGreaterThanRecurrence](code/alarmgreaterthanrecurrence.md): The alarm interval is greater than the recurrence interval.
- [EKError.Code.startDateTooFarInFuture](code/startdatetoofarinfuture.md): The start date is further into the future than the calendar can display.
- [EKError.Code.startDateCollidesWithOtherOccurrence](code/startdatecollideswithotheroccurrence.md): The event’s start date collides with another occurrence of the event.
- [EKError.Code.objectBelongsToDifferentStore](code/objectbelongstodifferentstore.md): The object belongs to a different calendar store.
- [EKError.Code.invitesCannotBeMoved](code/invitescannotbemoved.md): You can’t move the event because it’s an invitation.
- [EKError.Code.invalidSpan](code/invalidspan.md): The system encountered an invalid span during a save or deletion.
- [EKError.Code.calendarHasNoSource](code/calendarhasnosource.md): You can’t save the calendar without setting a source first.
- [EKError.Code.calendarSourceCannotBeModified](code/calendarsourcecannotbemodified.md): You can’t move the calendar to another source.
- [EKError.Code.calendarIsImmutable](code/calendarisimmutable.md): The calendar is immutable and you can’t modify or delete it.
- [EKError.Code.sourceDoesNotAllowCalendarAddDelete](code/sourcedoesnotallowcalendaradddelete.md): The source doesn’t allow you to add or delete calendars.
- [EKError.Code.recurringReminderRequiresDueDate](code/recurringreminderrequiresduedate.md): The recurring reminder requires a due date.
- [EKError.Code.structuredLocationsNotSupported](code/structuredlocationsnotsupported.md): The source to which this calendar belongs doesn’t support structured locations.
- [EKError.Code.reminderLocationsNotSupported](code/reminderlocationsnotsupported.md): The source doesn’t support locations on reminders.
- [EKError.Code.alarmProximityNotSupported](code/alarmproximitynotsupported.md): The source doesn’t allow geofences on alarms.
- [EKError.Code.calendarDoesNotAllowEvents](code/calendardoesnotallowevents.md): The calendar doesn’t allow you to add events.
- [EKError.Code.calendarDoesNotAllowReminders](code/calendardoesnotallowreminders.md): The calendar doesn’t allow you to add reminders.
- [EKError.Code.sourceDoesNotAllowReminders](code/sourcedoesnotallowreminders.md): The source doesn’t allow calendars supporting reminder entity types.
- [EKError.Code.sourceDoesNotAllowEvents](code/sourcedoesnotallowevents.md): The source doesn’t allow calendars supporting event entity types.
- [EKError.Code.priorityIsInvalid](code/priorityisinvalid.md): The priority number for the reminder is invalid.
- [EKError.Code.invalidEntityType](code/invalidentitytype.md): The entity type is invalid.
- [EKError.Code.procedureAlarmsNotMutable](code/procedurealarmsnotmutable.md): You can’t create or modify procedure alarms.
- [EKError.Code.eventStoreNotAuthorized](code/eventstorenotauthorized.md): The user hasn’t authorized your app to access events or reminders.
- [EKError.Code.osNotSupported](code/osnotsupported.md): The action isn’t supported on the current operating system.
- [EKError.Code.invalidInviteReplyCalendar](code/invalidinvitereplycalendar.md): The calendar is invalid or nil.
- [EKError.Code.notificationsCollectionFlagNotSet](code/notificationscollectionflagnotset.md): The notification collection doesn’t have the notifications collection flag.
- [EKError.Code.sourceMismatch](code/sourcemismatch.md): The object’s source doesn’t match its container’s source.
- [EKError.Code.notificationCollectionMismatch](code/notificationcollectionmismatch.md): The notification collection that contains this notification doesn’t match the collection the system is trying to save.
- [EKError.Code.notificationSavedWithoutCollection](code/notificationsavedwithoutcollection.md): The notification can’t save because you haven’t added it to a notification collection and saved the collection first.
- [EKError.Code.last](code/last.md): This error is for internal use.

### Enumeration Cases

- [EKError.Code.reminderAlarmContainsEmailOrUrl](code/reminderalarmcontainsemailorurl.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [EKError](../ekerror.md): An EventKit error.
- [EKErrorDomain](../ekerrordomain.md): A string that identifies the EventKit error domain.

# EKErrorCode (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Error codes for EventKit errors.

## Declaration

```objectivec
enum EKErrorCode : NSInteger;
```

## Topics

### Constants

- [EKErrorEventNotMutable](code/eventnotmutable.md): The event isn’t mutable and you can’t save or delete it.
- [EKErrorNoCalendar](code/nocalendar.md): The event isn’t associated with a calendar.
- [EKErrorNoStartDate](code/nostartdate.md): The event has no start date set.
- [EKErrorNoEndDate](code/noenddate.md): The event has no end date set.
- [EKErrorDatesInverted](code/datesinverted.md): The event’s end date occurs before its start date.
- [EKErrorInternalFailure](code/internalfailure.md): An internal error occurred.
- [EKErrorCalendarReadOnly](code/calendarreadonly.md): The calendar is read-only and you can’t add events to it.
- [EKErrorDurationGreaterThanRecurrence](code/durationgreaterthanrecurrence.md): The duration of an event is greater than its recurrence interval.
- [EKErrorAlarmGreaterThanRecurrence](code/alarmgreaterthanrecurrence.md): The alarm interval is greater than the recurrence interval.
- [EKErrorStartDateTooFarInFuture](code/startdatetoofarinfuture.md): The start date is further into the future than the calendar can display.
- [EKErrorStartDateCollidesWithOtherOccurrence](code/startdatecollideswithotheroccurrence.md): The event’s start date collides with another occurrence of the event.
- [EKErrorObjectBelongsToDifferentStore](code/objectbelongstodifferentstore.md): The object belongs to a different calendar store.
- [EKErrorInvitesCannotBeMoved](code/invitescannotbemoved.md): You can’t move the event because it’s an invitation.
- [EKErrorInvalidSpan](code/invalidspan.md): The system encountered an invalid span during a save or deletion.
- [EKErrorCalendarHasNoSource](code/calendarhasnosource.md): You can’t save the calendar without setting a source first.
- [EKErrorCalendarSourceCannotBeModified](code/calendarsourcecannotbemodified.md): You can’t move the calendar to another source.
- [EKErrorCalendarIsImmutable](code/calendarisimmutable.md): The calendar is immutable and you can’t modify or delete it.
- [EKErrorSourceDoesNotAllowCalendarAddDelete](code/sourcedoesnotallowcalendaradddelete.md): The source doesn’t allow you to add or delete calendars.
- [EKErrorRecurringReminderRequiresDueDate](code/recurringreminderrequiresduedate.md): The recurring reminder requires a due date.
- [EKErrorStructuredLocationsNotSupported](code/structuredlocationsnotsupported.md): The source to which this calendar belongs doesn’t support structured locations.
- [EKErrorReminderLocationsNotSupported](code/reminderlocationsnotsupported.md): The source doesn’t support locations on reminders.
- [EKErrorAlarmProximityNotSupported](code/alarmproximitynotsupported.md): The source doesn’t allow geofences on alarms.
- [EKErrorCalendarDoesNotAllowEvents](code/calendardoesnotallowevents.md): The calendar doesn’t allow you to add events.
- [EKErrorCalendarDoesNotAllowReminders](code/calendardoesnotallowreminders.md): The calendar doesn’t allow you to add reminders.
- [EKErrorSourceDoesNotAllowReminders](code/sourcedoesnotallowreminders.md): The source doesn’t allow calendars supporting reminder entity types.
- [EKErrorSourceDoesNotAllowEvents](code/sourcedoesnotallowevents.md): The source doesn’t allow calendars supporting event entity types.
- [EKErrorPriorityIsInvalid](code/priorityisinvalid.md): The priority number for the reminder is invalid.
- [EKErrorInvalidEntityType](code/invalidentitytype.md): The entity type is invalid.
- [EKErrorProcedureAlarmsNotMutable](code/procedurealarmsnotmutable.md): You can’t create or modify procedure alarms.
- [EKErrorEventStoreNotAuthorized](code/eventstorenotauthorized.md): The user hasn’t authorized your app to access events or reminders.
- [EKErrorOSNotSupported](code/osnotsupported.md): The action isn’t supported on the current operating system.
- [EKErrorInvalidInviteReplyCalendar](code/invalidinvitereplycalendar.md): The calendar is invalid or nil.
- [EKErrorNotificationsCollectionFlagNotSet](code/notificationscollectionflagnotset.md): The notification collection doesn’t have the notifications collection flag.
- [EKErrorSourceMismatch](code/sourcemismatch.md): The object’s source doesn’t match its container’s source.
- [EKErrorNotificationCollectionMismatch](code/notificationcollectionmismatch.md): The notification collection that contains this notification doesn’t match the collection the system is trying to save.
- [EKErrorNotificationSavedWithoutCollection](code/notificationsavedwithoutcollection.md): The notification can’t save because you haven’t added it to a notification collection and saved the collection first.
- [EKErrorLast](code/last.md): This error is for internal use.

### Enumeration Cases

- [EKErrorReminderAlarmContainsEmailOrUrl](code/reminderalarmcontainsemailorurl.md)

## See Also

### Errors

- [EKErrorDomain](../ekerrordomain.md): A string that identifies the EventKit error domain.
