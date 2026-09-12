> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/savecalendar(_:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/savecalendar(_:commit:))

# saveCalendar(\_:commit:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+

Saves a calendar to the event store by either committing or batching the changes.

## Declaration

```swift
func saveCalendar(_ calendar: EKCalendar, commit: Bool) throws
```

## Parameters

- `calendar`: The calendar to save.
- `commit`: [true](https://developer.apple.com/documentation/swift/true) to save the calendar immediately; otherwise, the change is batched until the [commit()](commit%28%29.md) method is invoked.

<a id="Discussion"></a>

## Discussion

This method raises an exception if `calendar` belongs to another event store.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. Call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Accessing calendars

- [defaultCalendarForNewEvents](defaultcalendarfornewevents.md): The calendar that events are added to by default, as specified by user settings.
- [defaultCalendarForNewReminders()](defaultcalendarfornewreminders%28%29.md): Identifies the default calendar for adding reminders to, as specified by user settings.
- [calendars(for:)](calendars%28for_%29.md): Identifies the calendars that support a given entity type, such as reminders or events.
- [calendar(withIdentifier:)](calendar%28withidentifier_%29.md): Locates a calendar with the specified identifier.
- [removeCalendar(\_:commit:)](removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](calendars.md): Deprecated. The calendars associated with the event store.

# saveCalendar:commit:error: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+

Saves a calendar to the event store by either committing or batching the changes.

## Declaration

```objectivec
- (BOOL) saveCalendar:(EKCalendar *) calendar commit:(BOOL) commit error:(NSError **) error;
```

## Parameters

- `calendar`: The calendar to save.
- `commit`: [true](https://developer.apple.com/documentation/swift/true) to save the calendar immediately; otherwise, the change is batched until the [commit:](commit%28%29.md) method is invoked.
- `error`: The error that occurred, if any; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method raises an exception if `calendar` belongs to another event store.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. Call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Accessing calendars

- [defaultCalendarForNewEvents](defaultcalendarfornewevents.md): The calendar that events are added to by default, as specified by user settings.
- [defaultCalendarForNewReminders](defaultcalendarfornewreminders%28%29.md): Identifies the default calendar for adding reminders to, as specified by user settings.
- [calendarsForEntityType:](calendars%28for_%29.md): Identifies the calendars that support a given entity type, such as reminders or events.
- [calendarWithIdentifier:](calendar%28withidentifier_%29.md): Locates a calendar with the specified identifier.
- [removeCalendar:commit:error:](removecalendar%28__commit_%29.md): Removes a calendar from the event store by either committing or batching the changes.
- [calendars](calendars.md): Deprecated. The calendars associated with the event store.
