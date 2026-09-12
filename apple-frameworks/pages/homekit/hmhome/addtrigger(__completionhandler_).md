> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/addtrigger(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/addtrigger(_:completionhandler:))

# addTrigger(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds a trigger to the home.

## Declaration

```swift
func addTrigger(_ trigger: HMTrigger, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func addTrigger(_ trigger: HMTrigger) async throws
```

## Parameters

- `trigger`: The name of the new trigger. Must not be `nil`, and must not be the name of a trigger already in the home.
- `completion`: The block executed after the request is processed.

  - **trigger**: The newly created trigger.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Triggering an action set

- [triggers](triggers.md): An array of triggers defined in the home.
- [removeTrigger(\_:completionHandler:)](removetrigger%28__completionhandler_%29.md): Removes a trigger from the home.
- [HMTimerTrigger](../hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](../hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.
- [HMTrigger](../hmtrigger.md): An abstract base class for triggering actions based on a set of conditions.

# addTrigger:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds a trigger to the home.

## Declaration

```objectivec
- (void) addTrigger:(HMTrigger *) trigger completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `trigger`: The name of the new trigger. Must not be `nil`, and must not be the name of a trigger already in the home.
- `completion`: The block executed after the request is processed.

  - **trigger**: The newly created trigger.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Triggering an action set

- [triggers](triggers.md): An array of triggers defined in the home.
- [removeTrigger:completionHandler:](removetrigger%28__completionhandler_%29.md): Removes a trigger from the home.
- [HMTimerTrigger](../hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](../hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.
- [HMTrigger](../hmtrigger.md): An abstract base class for triggering actions based on a set of conditions.
