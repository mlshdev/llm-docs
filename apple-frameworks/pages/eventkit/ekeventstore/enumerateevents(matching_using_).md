> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/enumerateevents(matching:using:)](https://developer.apple.com/documentation/eventkit/ekeventstore/enumerateevents(matching:using:))

# enumerateEvents(matching:using:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Finds all events that match a given predicate and calls a given callback for each event found.

## Declaration

```swift
func enumerateEvents(matching predicate: NSPredicate, using block: @escaping EKEventSearchCallback)
```

## Parameters

- `predicate`: A search predicate created with [predicateForEvents(withStart:end:calendars:)](predicateforevents%28withstart_end_calendars_%29.md).
- `block`: The closure to call for each event. The callback must match the signature defined by [EKEventSearchCallback](../ekeventsearchcallback.md).

<a id="Discussion"></a>

## Discussion

Only committed events are included in the enumeration. To include events saved using [save(\_:span:commit:)](save%28__span_commit_%29.md) with the `commit` parameter set to [false](https://developer.apple.com/documentation/swift/false), call [commit()](commit%28%29.md) first.

This method is synchronous. For asynchronous behavior, run the method on another thread with [dispatch_async](../../dispatch/dispatch_async.md) or [Operation](../../foundation/operation.md).

## See Also

### Searching calendars

- [events(matching:)](events%28matching_%29.md): Finds all events that match a given predicate.
- [fetchReminders(matching:completion:)](fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest(\_:)](cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEvents(withStart:end:calendars:)](predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForReminders(in:)](predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedReminders(withCompletionDateStarting:ending:calendars:)](predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteReminders(withDueDateStarting:ending:calendars:)](predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](../ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.

# enumerateEventsMatchingPredicate:usingBlock: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Finds all events that match a given predicate and calls a given callback for each event found.

## Declaration

```objectivec
- (void) enumerateEventsMatchingPredicate:(NSPredicate *) predicate usingBlock:(EKEventSearchCallback) block;
```

## Parameters

- `predicate`: A search predicate created with [predicateForEventsWithStartDate:endDate:calendars:](predicateforevents%28withstart_end_calendars_%29.md).
- `block`: The closure to call for each event. The callback must match the signature defined by [EKEventSearchCallback](../ekeventsearchcallback.md).

<a id="Discussion"></a>

## Discussion

Only committed events are included in the enumeration. To include events saved using [saveEvent:span:commit:error:](save%28__span_commit_%29.md) with the `commit` parameter set to [false](https://developer.apple.com/documentation/swift/false), call [commit:](commit%28%29.md) first.

This method is synchronous. For asynchronous behavior, run the method on another thread with [dispatch_async](../../dispatch/dispatch_async.md) or [NSOperation](../../foundation/operation.md).

## See Also

### Searching calendars

- [eventsMatchingPredicate:](events%28matching_%29.md): Finds all events that match a given predicate.
- [fetchRemindersMatchingPredicate:completion:](fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest:](cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEventsWithStartDate:endDate:calendars:](predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForRemindersInCalendars:](predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedRemindersWithCompletionDateStarting:ending:calendars:](predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteRemindersWithDueDateStarting:ending:calendars:](predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](../ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.
