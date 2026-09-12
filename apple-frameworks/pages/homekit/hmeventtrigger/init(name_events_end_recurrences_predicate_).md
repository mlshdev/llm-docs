> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/init(name:events:end:recurrences:predicate:)](https://developer.apple.com/documentation/homekit/hmeventtrigger/init(name:events:end:recurrences:predicate:))

# init(name:events:end:recurrences:predicate:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a new event trigger with the specified name, events, end events, recurrences, and predicate.

## Declaration

```swift
init(name: String, events: [HMEvent], end endEvents: [HMEvent]?, recurrences: [DateComponents]?, predicate: NSPredicate?)
```

## Parameters

- `name`: The name of the event trigger.
- `events`: An array of events that can activate the evaluation of the event trigger. The trigger is evaluated if any one of the events is true.
- `endEvents`: An array of events that can trigger the end of the scene that this event trigger represents.
- `recurrences`: Specifies the days of the week to evaluate the trigger. All properties other than [weekday](../../foundation/datecomponents/weekday.md) on [DateComponents](../../foundation/datecomponents.md) are ignored.
- `predicate`: The predicate to test and activate after evaluating the event trigger. Once activated, the event’s scenes execute. If a value isn’t specified the event trigger executes the scene if any of the events activate.

<a id="return-value"></a>

## Return Value

An initialized event trigger.

## See Also

### Creating an event trigger

- [init(name:events:predicate:)](init%28name_events_predicate_%29.md): Creates a new event trigger with the specified name, events, and predicate.

# initWithName:events:endEvents:recurrences:predicate: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates a new event trigger with the specified name, events, end events, recurrences, and predicate.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name events:(NSArray<HMEvent *> *) events endEvents:(NSArray<HMEvent *> *) endEvents recurrences:(NSArray<NSDateComponents *> *) recurrences predicate:(NSPredicate *) predicate;
```

## Parameters

- `name`: The name of the event trigger.
- `events`: An array of events that can activate the evaluation of the event trigger. The trigger is evaluated if any one of the events is true.
- `endEvents`: An array of events that can trigger the end of the scene that this event trigger represents.
- `recurrences`: Specifies the days of the week to evaluate the trigger. All properties other than [weekday](../../foundation/datecomponents/weekday.md) on [DateComponents](../../foundation/datecomponents.md) are ignored.
- `predicate`: The predicate to test and activate after evaluating the event trigger. Once activated, the event’s scenes execute. If a value isn’t specified the event trigger executes the scene if any of the events activate.

<a id="return-value"></a>

## Return Value

An initialized event trigger.

## See Also

### Creating an event trigger

- [initWithName:events:predicate:](init%28name_events_predicate_%29.md): Creates a new event trigger with the specified name, events, and predicate.
