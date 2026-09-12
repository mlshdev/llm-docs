> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/addevent(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmeventtrigger/addevent(_:completionhandler:))

# addEvent(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Adds a new event to the event trigger.

> Use [updateEvents(\_:completionHandler:)](updateevents%28__completionhandler_%29.md) instead.

## Declaration

```swift
func addEvent(_ event: HMEvent, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func addEvent(_ event: HMEvent) async throws
```

## Parameters

- `event`: An event to add to the event trigger.
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Deprecated symbols

- [removeEvent(\_:completionHandler:)](removeevent%28__completionhandler_%29.md): Deprecated. Removes the specified event from the event trigger.
- [predicateForEvaluatingTrigger(occurringBefore:applyingOffset:)](predicateforevaluatingtrigger%28occurringbefore_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.
- [predicateForEvaluatingTrigger(occurringAfter:applyingOffset:)](predicateforevaluatingtrigger%28occurringafter_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.

# addEvent:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Adds a new event to the event trigger.

> Use [updateEvents:completionHandler:](updateevents%28__completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) addEvent:(HMEvent *) event completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `event`: An event to add to the event trigger.
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Deprecated symbols

- [removeEvent:completionHandler:](removeevent%28__completionhandler_%29.md): Deprecated. Removes the specified event from the event trigger.
- [predicateForEvaluatingTriggerOccurringBeforeSignificantEvent:applyingOffset:](predicateforevaluatingtrigger%28occurringbefore_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.
- [predicateForEvaluatingTriggerOccurringAfterSignificantEvent:applyingOffset:](predicateforevaluatingtrigger%28occurringafter_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.
