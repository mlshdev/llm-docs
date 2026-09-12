> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/events(matching:)](https://developer.apple.com/documentation/eventkit/ekeventstore/events(matching:))

# events(matching:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Finds all events that match a given predicate.

## Declaration

```swift
func events(matching predicate: NSPredicate) -> [EKEvent]
```

## Parameters

- `predicate`: A search predicate created with [predicateForEvents(withStart:end:calendars:)](predicateforevents%28withstart_end_calendars_%29.md).

<a id="return-value"></a>

## Return Value

An array of events that match `predicate`.

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

Only committed events are included in the results. To include events saved using [save(\_:span:commit:)](save%28__span_commit_%29.md) with the `commit` parameter set to [false](https://developer.apple.com/documentation/swift/false), call [commit()](commit%28%29.md) first.

This method is synchronous. For asynchronous behavior, run the method on another thread with [dispatch_async](../../dispatch/dispatch_async.md) or [Operation](../../foundation/operation.md).

## See Also

### Searching calendars

- [enumerateEvents(matching:using:)](enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [fetchReminders(matching:completion:)](fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest(\_:)](cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEvents(withStart:end:calendars:)](predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForReminders(in:)](predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedReminders(withCompletionDateStarting:ending:calendars:)](predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteReminders(withDueDateStarting:ending:calendars:)](predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](../ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.

# eventsMatchingPredicate: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Finds all events that match a given predicate.

## Declaration

```objectivec
- (NSArray<EKEvent *> *) eventsMatchingPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: A search predicate created with [predicateForEventsWithStartDate:endDate:calendars:](predicateforevents%28withstart_end_calendars_%29.md).

<a id="return-value"></a>

## Return Value

An array of events that match `predicate`.

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

Only committed events are included in the results. To include events saved using [saveEvent:span:commit:error:](save%28__span_commit_%29.md) with the `commit` parameter set to [false](https://developer.apple.com/documentation/swift/false), call [commit:](commit%28%29.md) first.

This method is synchronous. For asynchronous behavior, run the method on another thread with [dispatch_async](../../dispatch/dispatch_async.md) or [NSOperation](../../foundation/operation.md).

## See Also

### Searching calendars

- [enumerateEventsMatchingPredicate:usingBlock:](enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [fetchRemindersMatchingPredicate:completion:](fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest:](cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEventsWithStartDate:endDate:calendars:](predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForRemindersInCalendars:](predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedRemindersWithCompletionDateStarting:ending:calendars:](predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteRemindersWithDueDateStarting:ending:calendars:](predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](../ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.
