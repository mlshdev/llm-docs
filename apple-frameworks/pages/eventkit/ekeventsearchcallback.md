> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventsearchcallback](https://developer.apple.com/documentation/eventkit/ekeventsearchcallback)

# EKEventSearchCallback (Swift)

**Framework:** EventKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The signature for a closure that operates on events when enumerating them.

## Declaration

```swift
typealias EKEventSearchCallback = (EKEvent, UnsafeMutablePointer<ObjCBool>) -> Void
```

## Parameters

- `event`: An event object to operate on.
- `stop`: A pointer to a Boolean value. Set this value to [true](https://developer.apple.com/documentation/swift/true) to stop enumerating events.

## See Also

### Searching calendars

- [enumerateEvents(matching:using:)](ekeventstore/enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [events(matching:)](ekeventstore/events%28matching_%29.md): Finds all events that match a given predicate.
- [fetchReminders(matching:completion:)](ekeventstore/fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest(\_:)](ekeventstore/cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEvents(withStart:end:calendars:)](ekeventstore/predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForReminders(in:)](ekeventstore/predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedReminders(withCompletionDateStarting:ending:calendars:)](ekeventstore/predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteReminders(withDueDateStarting:ending:calendars:)](ekeventstore/predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.

# EKEventSearchCallback (Objective-C)

**Framework:** EventKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The signature for a closure that operates on events when enumerating them.

## Declaration

```objectivec
typedef void (^)(EKEvent *, _Bool *) EKEventSearchCallback;
```

## Parameters

- `event`: An event object to operate on.
- `stop`: A pointer to a Boolean value. Set this value to [true](https://developer.apple.com/documentation/swift/true) to stop enumerating events.

## See Also

### Searching calendars

- [enumerateEventsMatchingPredicate:usingBlock:](ekeventstore/enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [eventsMatchingPredicate:](ekeventstore/events%28matching_%29.md): Finds all events that match a given predicate.
- [fetchRemindersMatchingPredicate:completion:](ekeventstore/fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest:](ekeventstore/cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEventsWithStartDate:endDate:calendars:](ekeventstore/predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForRemindersInCalendars:](ekeventstore/predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedRemindersWithCompletionDateStarting:ending:calendars:](ekeventstore/predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteRemindersWithDueDateStarting:ending:calendars:](ekeventstore/predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
