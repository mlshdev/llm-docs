> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekreminder/init(eventstore:)](https://developer.apple.com/documentation/eventkit/ekreminder/init(eventstore:))

# init(eventStore:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new reminder in the given event store.

## Declaration

```swift
init(eventStore: EKEventStore)
```

## Parameters

- `eventStore`: The event store.

<a id="return-value"></a>

## Return Value

The created reminder.

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

# reminderWithEventStore: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new reminder in the given event store.

## Declaration

```objectivec
+ (EKReminder *) reminderWithEventStore:(EKEventStore *) eventStore;
```

## Parameters

- `eventStore`: The event store.

<a id="return-value"></a>

## Return Value

The created reminder.

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)
