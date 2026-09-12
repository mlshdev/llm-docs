> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/save(_:span:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/save(_:span:commit:))

# save(\_:span:commit:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+

Saves an event or recurring events to the event store by either committing or batching the changes.

## Declaration

```swift
func save(_ event: EKEvent, span: EKSpan, commit: Bool) throws
```

## Parameters

- `event`: The event to save.
- `span`: The span that indicates whether to remove a single event or all future instances of the event in the case of a recurring event.
- `commit`: To save the event immediately, pass [true](https://developer.apple.com/documentation/swift/true); otherwise, the change is batched until the [commit()](commit%28%29.md) method is invoked.

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

This method raises an exception if it’s passed an event from another event store.

When saving an event, it’s updated in the Calendar database. Any fields you didn’t modify are updated to reflect the most recent value in the database. If the event has been deleted from the database, it’s recreated as a new event.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. Call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [commit()](commit%28%29.md): Commits all unsaved changes to the event store.

### Accessing calendar events

- [event(withIdentifier:)](event%28withidentifier_%29.md): Locates the first occurrence of an event with a given identifier.
- [calendarItem(withIdentifier:)](calendaritem%28withidentifier_%29.md): Locates a reminder or the first occurrence of an event with the specified identifier.
- [calendarItems(withExternalIdentifier:)](calendaritems%28withexternalidentifier_%29.md): Locates all reminders or the first occurrences of all events with the specified external identifier.
- [remove(\_:span:)](remove%28__span_%29.md): Removes an event from the event store.
- [remove(\_:span:commit:)](remove%28__span_commit_%29.md): Removes an event or recurring events from the event store by either committing or batching the changes.
- [remove(\_:commit:)](remove%28__commit_%29.md): Removes a reminder from the event store by either committing or batching the changes.
- [save(\_:span:)](save%28__span_%29.md): Saves changes to an event permanently.
- [save(\_:commit:)](save%28__commit_%29.md): Saves changes to a reminder by either committing or batching the changes.

# saveEvent:span:commit:error: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+

Saves an event or recurring events to the event store by either committing or batching the changes.

## Declaration

```objectivec
- (BOOL) saveEvent:(EKEvent *) event span:(EKSpan) span commit:(BOOL) commit error:(NSError **) error;
```

## Parameters

- `event`: The event to save.
- `span`: The span that indicates whether to remove a single event or all future instances of the event in the case of a recurring event.
- `commit`: To save the event immediately, pass [true](https://developer.apple.com/documentation/swift/true); otherwise, the change is batched until the [commit:](commit%28%29.md) method is invoked.
- `error`: A pointer to an error object. If an error occurs, this pointer provides access to the error; otherwise, pass `nil` if you don’t need the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the event store saves the event successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method also returns [false](https://developer.apple.com/documentation/swift/false) if `event` wasn’t modified.

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

This method raises an exception if it’s passed an event from another event store.

When saving an event, it’s updated in the Calendar database. Any fields you didn’t modify are updated to reflect the most recent value in the database. If the event has been deleted from the database, it’s recreated as a new event.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. Call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [commit:](commit%28%29.md): Commits all unsaved changes to the event store.

### Accessing calendar events

- [eventWithIdentifier:](event%28withidentifier_%29.md): Locates the first occurrence of an event with a given identifier.
- [calendarItemWithIdentifier:](calendaritem%28withidentifier_%29.md): Locates a reminder or the first occurrence of an event with the specified identifier.
- [calendarItemsWithExternalIdentifier:](calendaritems%28withexternalidentifier_%29.md): Locates all reminders or the first occurrences of all events with the specified external identifier.
- [removeEvent:span:error:](remove%28__span_%29.md): Removes an event from the event store.
- [removeEvent:span:commit:error:](remove%28__span_commit_%29.md): Removes an event or recurring events from the event store by either committing or batching the changes.
- [removeReminder:commit:error:](remove%28__commit_%29.md): Removes a reminder from the event store by either committing or batching the changes.
- [saveEvent:span:error:](save%28__span_%29.md): Saves changes to an event permanently.
- [saveReminder:commit:error:](save%28__commit_%29.md): Saves changes to a reminder by either committing or batching the changes.
