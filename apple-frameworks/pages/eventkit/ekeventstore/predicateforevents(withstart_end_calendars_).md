> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/predicateforevents(withstart:end:calendars:)](https://developer.apple.com/documentation/eventkit/ekeventstore/predicateforevents(withstart:end:calendars:))

# predicateForEvents(withStart:end:calendars:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate to identify events that occur within a given date range.

## Declaration

```swift
func predicateForEvents(withStart startDate: Date, end endDate: Date, calendars: [EKCalendar]?) -> NSPredicate
```

## Parameters

- `startDate`: The start date of the range of events fetched.
- `endDate`: The end date of the range of events fetched.
- `calendars`: An array of calendars to search, or `nil` to search all calendars.

<a id="return-value"></a>

## Return Value

A predicate to use when calling [enumerateEvents(matching:using:)](enumerateevents%28matching_using_%29.md) or [events(matching:)](events%28matching_%29.md).

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

Use this method to create a predicate for use with [events(matching:)](events%28matching_%29.md) or [enumerateEvents(matching:using:)](enumerateevents%28matching_using_%29.md). The events returned using this predicate are in the default time zone. For performance reasons, this method matches only those events within a four-year time span. If the date range between `startDate` and `endDate` is greater than four years, it’s shortened to the first four years.

## See Also

### Searching calendars

- [enumerateEvents(matching:using:)](enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [events(matching:)](events%28matching_%29.md): Finds all events that match a given predicate.
- [fetchReminders(matching:completion:)](fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest(\_:)](cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForReminders(in:)](predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedReminders(withCompletionDateStarting:ending:calendars:)](predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteReminders(withDueDateStarting:ending:calendars:)](predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](../ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.

# predicateForEventsWithStartDate:endDate:calendars: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate to identify events that occur within a given date range.

## Declaration

```objectivec
- (NSPredicate *) predicateForEventsWithStartDate:(NSDate *) startDate endDate:(NSDate *) endDate calendars:(NSArray<EKCalendar *> *) calendars;
```

## Parameters

- `startDate`: The start date of the range of events fetched.
- `endDate`: The end date of the range of events fetched.
- `calendars`: An array of calendars to search, or `nil` to search all calendars.

<a id="return-value"></a>

## Return Value

A predicate to use when calling [enumerateEventsMatchingPredicate:usingBlock:](enumerateevents%28matching_using_%29.md) or [eventsMatchingPredicate:](events%28matching_%29.md).

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

Use this method to create a predicate for use with [eventsMatchingPredicate:](events%28matching_%29.md) or [enumerateEventsMatchingPredicate:usingBlock:](enumerateevents%28matching_using_%29.md). The events returned using this predicate are in the default time zone. For performance reasons, this method matches only those events within a four-year time span. If the date range between `startDate` and `endDate` is greater than four years, it’s shortened to the first four years.

## See Also

### Searching calendars

- [enumerateEventsMatchingPredicate:usingBlock:](enumerateevents%28matching_using_%29.md): Finds all events that match a given predicate and calls a given callback for each event found.
- [eventsMatchingPredicate:](events%28matching_%29.md): Finds all events that match a given predicate.
- [fetchRemindersMatchingPredicate:completion:](fetchreminders%28matching_completion_%29.md): Fetches reminders that match a given predicate.
- [cancelFetchRequest:](cancelfetchrequest%28__%29.md): Cancels the request to fetch reminders.
- [predicateForRemindersInCalendars:](predicateforreminders%28in_%29.md): Creates a predicate to identify all reminders in a collection of calendars.
- [predicateForCompletedRemindersWithCompletionDateStarting:ending:calendars:](predicateforcompletedreminders%28withcompletiondatestarting_ending_calendars_%29.md): Creates a predicate to identify all completed reminders that occur within a given date range.
- [predicateForIncompleteRemindersWithDueDateStarting:ending:calendars:](predicateforincompletereminders%28withduedatestarting_ending_calendars_%29.md): Creates a predicate to identify all incomplete reminders that occur within a given date range.
- [EKEventSearchCallback](../ekeventsearchcallback.md): The signature for a closure that operates on events when enumerating them.
