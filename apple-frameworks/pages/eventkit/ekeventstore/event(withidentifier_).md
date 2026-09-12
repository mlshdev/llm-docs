> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/event(withidentifier:)](https://developer.apple.com/documentation/eventkit/ekeventstore/event(withidentifier:))

# event(withIdentifier:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Locates the first occurrence of an event with a given identifier.

## Declaration

```swift
func event(withIdentifier identifier: String) -> EKEvent?
```

## Parameters

- `identifier`: The identifier of the event.

<a id="return-value"></a>

## Return Value

The event that corresponds with `identifier`, or `nil` if no event is found.

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

## See Also

### Accessing calendar events

- [calendarItem(withIdentifier:)](calendaritem%28withidentifier_%29.md): Locates a reminder or the first occurrence of an event with the specified identifier.
- [calendarItems(withExternalIdentifier:)](calendaritems%28withexternalidentifier_%29.md): Locates all reminders or the first occurrences of all events with the specified external identifier.
- [remove(\_:span:)](remove%28__span_%29.md): Removes an event from the event store.
- [remove(\_:span:commit:)](remove%28__span_commit_%29.md): Removes an event or recurring events from the event store by either committing or batching the changes.
- [remove(\_:commit:)](remove%28__commit_%29.md): Removes a reminder from the event store by either committing or batching the changes.
- [save(\_:span:)](save%28__span_%29.md): Saves changes to an event permanently.
- [save(\_:span:commit:)](save%28__span_commit_%29.md): Saves an event or recurring events to the event store by either committing or batching the changes.
- [save(\_:commit:)](save%28__commit_%29.md): Saves changes to a reminder by either committing or batching the changes.

# eventWithIdentifier: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Locates the first occurrence of an event with a given identifier.

## Declaration

```objectivec
- (EKEvent *) eventWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The identifier of the event.

<a id="return-value"></a>

## Return Value

The event that corresponds with `identifier`, or `nil` if no event is found.

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

## See Also

### Accessing calendar events

- [calendarItemWithIdentifier:](calendaritem%28withidentifier_%29.md): Locates a reminder or the first occurrence of an event with the specified identifier.
- [calendarItemsWithExternalIdentifier:](calendaritems%28withexternalidentifier_%29.md): Locates all reminders or the first occurrences of all events with the specified external identifier.
- [removeEvent:span:error:](remove%28__span_%29.md): Removes an event from the event store.
- [removeEvent:span:commit:error:](remove%28__span_commit_%29.md): Removes an event or recurring events from the event store by either committing or batching the changes.
- [removeReminder:commit:error:](remove%28__commit_%29.md): Removes a reminder from the event store by either committing or batching the changes.
- [saveEvent:span:error:](save%28__span_%29.md): Saves changes to an event permanently.
- [saveEvent:span:commit:error:](save%28__span_commit_%29.md): Saves an event or recurring events to the event store by either committing or batching the changes.
- [saveReminder:commit:error:](save%28__commit_%29.md): Saves changes to a reminder by either committing or batching the changes.
