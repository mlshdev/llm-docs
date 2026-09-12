> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/events](https://developer.apple.com/documentation/homekit/hmeventtrigger/events)

# events (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The events that activate the trigger.

## Declaration

```swift
var events: [HMEvent] { get }
```

## See Also

### Setting trigger events

- [updateEvents(\_:completionHandler:)](updateevents%28__completionhandler_%29.md): Updates the set of trigger events.
- [Location events](../location-events.md): Events that represent the user’s movement among regions.
- [Time events](../time-events.md): Events based on time, significant occurrences, and time durations.
- [Characteristic events](../characteristic-events.md): Events based on the capabilities or characteristics of accessories.
- [Presence events](../presence-events.md): Events based on the user’s presence in a home.
- [HMEvent](../hmevent.md): The abstract base class for a HomeKit event.

# events (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The events that activate the trigger.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMEvent *> * events;
```

## See Also

### Setting trigger events

- [updateEvents:completionHandler:](updateevents%28__completionhandler_%29.md): Updates the set of trigger events.
- [Location events](../location-events.md): Events that represent the user’s movement among regions.
- [Time events](../time-events.md): Events based on time, significant occurrences, and time durations.
- [Characteristic events](../characteristic-events.md): Events based on the capabilities or characteristics of accessories.
- [Presence events](../presence-events.md): Events based on the user’s presence in a home.
- [HMEvent](../hmevent.md): The abstract base class for a HomeKit event.
