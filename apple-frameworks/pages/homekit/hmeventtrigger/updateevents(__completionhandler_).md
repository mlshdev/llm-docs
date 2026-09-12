> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/updateevents(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmeventtrigger/updateevents(_:completionhandler:))

# updateEvents(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Updates the set of trigger events.

## Declaration

```swift
func updateEvents(_ events: [HMEvent], completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateEvents(_ events: [HMEvent]) async throws
```

## Parameters

- `events`: An array of events that replaces the events on the trigger.
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Setting trigger events

- [events](events.md): The events that activate the trigger.
- [Location events](../location-events.md): Events that represent the user’s movement among regions.
- [Time events](../time-events.md): Events based on time, significant occurrences, and time durations.
- [Characteristic events](../characteristic-events.md): Events based on the capabilities or characteristics of accessories.
- [Presence events](../presence-events.md): Events based on the user’s presence in a home.
- [HMEvent](../hmevent.md): The abstract base class for a HomeKit event.

# updateEvents:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Updates the set of trigger events.

## Declaration

```objectivec
- (void) updateEvents:(NSArray<HMEvent *> *) events completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `events`: An array of events that replaces the events on the trigger.
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Setting trigger events

- [events](events.md): The events that activate the trigger.
- [Location events](../location-events.md): Events that represent the user’s movement among regions.
- [Time events](../time-events.md): Events based on time, significant occurrences, and time durations.
- [Characteristic events](../characteristic-events.md): Events based on the capabilities or characteristics of accessories.
- [Presence events](../presence-events.md): Events based on the user’s presence in a home.
- [HMEvent](../hmevent.md): The abstract base class for a HomeKit event.
