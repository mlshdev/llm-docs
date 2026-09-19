> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/eventkit/ekevent/init(eventstore:)

# init(eventStore:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new event belonging to a specified event store.

## Declaration

```swift
init(eventStore: EKEventStore)
```

## Parameters

- `eventStore`: The event store to which the event belongs.

<a id="return-value"></a>

## Return Value

The created event.

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

# eventWithEventStore: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new event belonging to a specified event store.

## Declaration

```objectivec
+ (EKEvent *) eventWithEventStore:(EKEventStore *) eventStore;
```

## Parameters

- `eventStore`: The event store to which the event belongs.

<a id="return-value"></a>

## Return Value

The created event.

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)
