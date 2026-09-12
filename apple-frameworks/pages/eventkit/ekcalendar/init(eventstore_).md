> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendar/init(eventstore:)](https://developer.apple.com/documentation/eventkit/ekcalendar/init(eventstore:))

# init(eventStore:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 2.0)

Creates and returns a calendar belonging to a specified event store.

## Declaration

```swift
init(eventStore: EKEventStore)
```

## Parameters

- `eventStore`: The event store to which the event belongs.

<a id="return-value"></a>

## Return Value

The created calendar.

## See Also

### Creating Calendars

- [init(for:eventStore:)](init%28for_eventstore_%29.md): Creates a new calendar that can contain the given entity type.

# calendarWithEventStore: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

Creates and returns a calendar belonging to a specified event store.

## Declaration

```objectivec
+ (EKCalendar *) calendarWithEventStore:(EKEventStore *) eventStore;
```

## Parameters

- `eventStore`: The event store to which the event belongs.

<a id="return-value"></a>

## Return Value

The created calendar.

## See Also

### Creating Calendars

- [calendarForEntityType:eventStore:](init%28for_eventstore_%29.md): Creates a new calendar that can contain the given entity type.
