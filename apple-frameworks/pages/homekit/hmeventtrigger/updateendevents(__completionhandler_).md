> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/updateendevents(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmeventtrigger/updateendevents(_:completionhandler:))

# updateEndEvents(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Updates the set of end events associated with the event trigger.

## Declaration

```swift
func updateEndEvents(_ endEvents: [HMEvent], completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateEndEvents(_ endEvents: [HMEvent]) async throws
```

## Parameters

- `endEvents`: An array of events that replaces the end events on the trigger.
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Restoring the previous scene after an event

- [endEvents](endevents.md): The events associated with the end of scene represented by this trigger.

# updateEndEvents:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Updates the set of end events associated with the event trigger.

## Declaration

```objectivec
- (void) updateEndEvents:(NSArray<HMEvent *> *) endEvents completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `endEvents`: An array of events that replaces the end events on the trigger.
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Restoring the previous scene after an event

- [endEvents](endevents.md): The events associated with the end of scene represented by this trigger.
