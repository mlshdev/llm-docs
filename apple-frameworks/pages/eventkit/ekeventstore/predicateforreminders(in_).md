> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/predicateforreminders(in:)](https://developer.apple.com/documentation/eventkit/ekeventstore/predicateforreminders(in:))

# predicateForReminders(in:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate to identify all reminders in a collection of calendars.

## Declaration

```swift
func predicateForReminders(in calendars: [EKCalendar]?) -> NSPredicate
```

## Parameters

- `calendars`: An array of calendars to search.

<a id="return-value"></a>

## Return Value

A predicate to use when calling [fetchReminders(matching:completion:)](fetchreminders%28matching_completion_%29.md).

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

## See Also

### Searching calendars

- [enumerateEvents(matching:using:)](enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [events(matching:)](events%28matching_%29.md): Finds all events that match a given predicate.
- [fetchReminders(matching:completion:)](fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest(\_:)](cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEvents(withStart:end:calendars:)](predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForCompletedReminders(withCompletionDateStarting:ending:calendars:)](predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteReminders(withDueDateStarting:ending:calendars:)](predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](../ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.

# predicateForRemindersInCalendars: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate to identify all reminders in a collection of calendars.

## Declaration

```objectivec
- (NSPredicate *) predicateForRemindersInCalendars:(NSArray<EKCalendar *> *) calendars;
```

## Parameters

- `calendars`: An array of calendars to search.

<a id="return-value"></a>

## Return Value

A predicate to use when calling [fetchRemindersMatchingPredicate:completion:](fetchreminders%28matching_completion_%29.md).

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

## See Also

### Searching calendars

- [enumerateEventsMatchingPredicate:usingBlock:](enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [eventsMatchingPredicate:](events%28matching_%29.md): Finds all events that match a given predicate.
- [fetchRemindersMatchingPredicate:completion:](fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest:](cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEventsWithStartDate:endDate:calendars:](predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForCompletedRemindersWithCompletionDateStarting:ending:calendars:](predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteRemindersWithDueDateStarting:ending:calendars:](predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](../ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.
