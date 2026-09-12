> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/init(name:events:predicate:)](https://developer.apple.com/documentation/homekit/hmeventtrigger/init(name:events:predicate:))

# init(name:events:predicate:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+

Creates a new event trigger with the specified name, events, and predicate.

## Declaration

```swift
init(name: String, events: [HMEvent], predicate: NSPredicate?)
```

## Parameters

- `name`: The name of the event trigger.
- `events`: An array of events that can activate the evaluation of the event trigger. The trigger is evaluated if any one of the events is true.
- `predicate`: The predicate to test and activate after evaluating the event trigger. Once activated, the event’s scenes execute. If a value isn’t specified the event trigger executes the scene if any of the events activate.

## See Also

### Creating an event trigger

- [init(name:events:end:recurrences:predicate:)](init%28name_events_end_recurrences_predicate_%29.md): Creates a new event trigger with the specified name, events, end events, recurrences, and predicate.

# initWithName:events:predicate: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates a new event trigger with the specified name, events, and predicate.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name events:(NSArray<HMEvent *> *) events predicate:(NSPredicate *) predicate;
```

## Parameters

- `name`: The name of the event trigger.
- `events`: An array of events that can activate the evaluation of the event trigger. The trigger is evaluated if any one of the events is true.
- `predicate`: The predicate to test and activate after evaluating the event trigger. Once activated, the event’s scenes execute. If a value isn’t specified the event trigger executes the scene if any of the events activate.

## See Also

### Creating an event trigger

- [initWithName:events:endEvents:recurrences:predicate:](init%28name_events_end_recurrences_predicate_%29.md): Creates a new event trigger with the specified name, events, end events, recurrences, and predicate.
