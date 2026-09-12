> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/updaterecurrences(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmeventtrigger/updaterecurrences(_:completionhandler:))

# updateRecurrences(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Updates the days of the week the trigger can repeat.

## Declaration

```swift
func updateRecurrences(_ recurrences: [DateComponents]?, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateRecurrences(_ recurrences: [DateComponents]?) async throws
```

## Parameters

- `recurrences`: An array of [DateComponents](../../foundation/datecomponents.md) that represent the days of the week that the event trigger can repeat. Only respects the [weekday](../../foundation/datecomponents/weekday.md) property of [DateComponents](../../foundation/datecomponents.md).
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Controlling recurrence

- [recurrences](recurrences.md): Specifies the days on which the trigger can execute.
- [executeOnce](executeonce.md): A Boolean that can execute the trigger many times.
- [updateExecuteOnce(\_:completionHandler:)](updateexecuteonce%28__completionhandler_%29.md): Updates the repetition status of the event trigger.

# updateRecurrences:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Updates the days of the week the trigger can repeat.

## Declaration

```objectivec
- (void) updateRecurrences:(NSArray<NSDateComponents *> *) recurrences completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `recurrences`: An array of [DateComponents](../../foundation/datecomponents.md) that represent the days of the week that the event trigger can repeat. Only respects the [weekday](../../foundation/datecomponents/weekday.md) property of [DateComponents](../../foundation/datecomponents.md).
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Controlling recurrence

- [recurrences](recurrences.md): Specifies the days on which the trigger can execute.
- [executeOnce](executeonce.md): A Boolean that can execute the trigger many times.
- [updateExecuteOnce:completionHandler:](updateexecuteonce%28__completionhandler_%29.md): Updates the repetition status of the event trigger.
