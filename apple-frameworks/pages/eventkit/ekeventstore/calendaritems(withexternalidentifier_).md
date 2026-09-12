> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/calendaritems(withexternalidentifier:)](https://developer.apple.com/documentation/eventkit/ekeventstore/calendaritems(withexternalidentifier:))

# calendarItems(withExternalIdentifier:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Locates all reminders or the first occurrences of all events with the specified external identifier.

## Declaration

```swift
func calendarItems(withExternalIdentifier externalIdentifier: String) -> [EKCalendarItem]
```

## Parameters

- `externalIdentifier`: The calendar item’s external identifier.

<a id="return-value"></a>

## Return Value

An array of calendar items with the specified identifier.

<a id="Discussion"></a>

## Discussion

Use [calendarItemExternalIdentifier](../ekcalendaritem/calendaritemexternalidentifier.md) to obtain the external identifier. There may be more than one matching calendar item due to reasons discussed in `calendarItemExternalIdentifier`.

## See Also

### Accessing calendar events

- [event(withIdentifier:)](event%28withidentifier_%29.md): Locates the first occurrence of an event with a given identifier.
- [calendarItem(withIdentifier:)](calendaritem%28withidentifier_%29.md): Locates a reminder or the first occurrence of an event with the specified identifier.
- [remove(\_:span:)](remove%28__span_%29.md): Removes an event from the event store.
- [remove(\_:span:commit:)](remove%28__span_commit_%29.md): Removes an event or recurring events from the event store by either committing or batching the changes.
- [remove(\_:commit:)](remove%28__commit_%29.md): Removes a reminder from the event store by either committing or batching the changes.
- [save(\_:span:)](save%28__span_%29.md): Saves changes to an event permanently.
- [save(\_:span:commit:)](save%28__span_commit_%29.md): Saves an event or recurring events to the event store by either committing or batching the changes.
- [save(\_:commit:)](save%28__commit_%29.md): Saves changes to a reminder by either committing or batching the changes.

# calendarItemsWithExternalIdentifier: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Locates all reminders or the first occurrences of all events with the specified external identifier.

## Declaration

```objectivec
- (NSArray<EKCalendarItem *> *) calendarItemsWithExternalIdentifier:(NSString *) externalIdentifier;
```

## Parameters

- `externalIdentifier`: The calendar item’s external identifier.

<a id="return-value"></a>

## Return Value

An array of calendar items with the specified identifier.

<a id="Discussion"></a>

## Discussion

Use [calendarItemExternalIdentifier](../ekcalendaritem/calendaritemexternalidentifier.md) to obtain the external identifier. There may be more than one matching calendar item due to reasons discussed in `calendarItemExternalIdentifier`.

## See Also

### Accessing calendar events

- [eventWithIdentifier:](event%28withidentifier_%29.md): Locates the first occurrence of an event with a given identifier.
- [calendarItemWithIdentifier:](calendaritem%28withidentifier_%29.md): Locates a reminder or the first occurrence of an event with the specified identifier.
- [removeEvent:span:error:](remove%28__span_%29.md): Removes an event from the event store.
- [removeEvent:span:commit:error:](remove%28__span_commit_%29.md): Removes an event or recurring events from the event store by either committing or batching the changes.
- [removeReminder:commit:error:](remove%28__commit_%29.md): Removes a reminder from the event store by either committing or batching the changes.
- [saveEvent:span:error:](save%28__span_%29.md): Saves changes to an event permanently.
- [saveEvent:span:commit:error:](save%28__span_commit_%29.md): Saves an event or recurring events to the event store by either committing or batching the changes.
- [saveReminder:commit:error:](save%28__commit_%29.md): Saves changes to a reminder by either committing or batching the changes.
