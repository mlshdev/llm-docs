> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/removetrigger(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/removetrigger(_:completionhandler:))

# removeTrigger(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes a trigger from the home.

## Declaration

```swift
func removeTrigger(_ trigger: HMTrigger, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeTrigger(_ trigger: HMTrigger) async throws
```

## Parameters

- `trigger`: The trigger to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

If `trigger` is enabled, removing it from the home disables it.

## See Also

### Triggering an action set

- [triggers](triggers.md): An array of triggers defined in the home.
- [addTrigger(\_:completionHandler:)](addtrigger%28__completionhandler_%29.md): Adds a trigger to the home.
- [HMTimerTrigger](../hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](../hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.
- [HMTrigger](../hmtrigger.md): An abstract base class for triggering actions based on a set of conditions.

# removeTrigger:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes a trigger from the home.

## Declaration

```objectivec
- (void) removeTrigger:(HMTrigger *) trigger completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `trigger`: The trigger to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

If `trigger` is enabled, removing it from the home disables it.

## See Also

### Triggering an action set

- [triggers](triggers.md): An array of triggers defined in the home.
- [addTrigger:completionHandler:](addtrigger%28__completionhandler_%29.md): Adds a trigger to the home.
- [HMTimerTrigger](../hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](../hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.
- [HMTrigger](../hmtrigger.md): An abstract base class for triggering actions based on a set of conditions.
