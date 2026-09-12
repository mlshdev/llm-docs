> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/fetchreminders(matching:completion:)](https://developer.apple.com/documentation/eventkit/ekeventstore/fetchreminders(matching:completion:))

# fetchReminders(matching:completion:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Fetches reminders that match a given predicate.

## Declaration

```swift
func fetchReminders(matching predicate: NSPredicate, completion: @escaping ([EKReminder]?) -> Void) -> Any
```

## Parameters

- `predicate`: A search predicate created with [predicateForReminders(in:)](predicateforreminders%28in_%29.md).
- `completion`: A closure that receives the reminders that match `predicate`.

<a id="return-value"></a>

## Return Value

A value that represents the asynchronous fetch request. To cancel a fetch request before it completes, pass this value to [cancelFetchRequest(\_:)](cancelfetchrequest%28__%29.md).

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

Only committed reminders are included in the results. To include reminders saved using [save(\_:commit:)](save%28__commit_%29.md) with the `commit` parameter set to [false](https://developer.apple.com/documentation/swift/false), call [commit()](commit%28%29.md) first.

This method fetches reminders asynchronously.

## See Also

### Searching calendars

- [enumerateEvents(matching:using:)](enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [events(matching:)](events%28matching_%29.md): Finds all events that match a given predicate.
- [cancelFetchRequest(\_:)](cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEvents(withStart:end:calendars:)](predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForReminders(in:)](predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedReminders(withCompletionDateStarting:ending:calendars:)](predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteReminders(withDueDateStarting:ending:calendars:)](predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](../ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.

# fetchRemindersMatchingPredicate:completion: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Fetches reminders that match a given predicate.

## Declaration

```objectivec
- (id) fetchRemindersMatchingPredicate:(NSPredicate *) predicate completion:(void (^)(NSArray<EKReminder *> *reminders)) completion;
```

## Parameters

- `predicate`: A search predicate created with [predicateForRemindersInCalendars:](predicateforreminders%28in_%29.md).
- `completion`: A closure that receives the reminders that match `predicate`.

<a id="return-value"></a>

## Return Value

A value that represents the asynchronous fetch request. To cancel a fetch request before it completes, pass this value to [cancelFetchRequest:](cancelfetchrequest%28__%29.md).

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

Only committed reminders are included in the results. To include reminders saved using [saveReminder:commit:error:](save%28__commit_%29.md) with the `commit` parameter set to [false](https://developer.apple.com/documentation/swift/false), call [commit:](commit%28%29.md) first.

This method fetches reminders asynchronously.

## See Also

### Searching calendars

- [enumerateEventsMatchingPredicate:usingBlock:](enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [eventsMatchingPredicate:](events%28matching_%29.md): Finds all events that match a given predicate.
- [cancelFetchRequest:](cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForEventsWithStartDate:endDate:calendars:](predicateforevents%28withstart_end_calendars_%29.md): Creates a predicate to identify events that occur within a given date range.
- [predicateForRemindersInCalendars:](predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedRemindersWithCompletionDateStarting:ending:calendars:](predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteRemindersWithDueDateStarting:ending:calendars:](predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](../ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.
