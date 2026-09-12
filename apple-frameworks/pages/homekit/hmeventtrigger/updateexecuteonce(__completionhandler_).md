> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/updateexecuteonce(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmeventtrigger/updateexecuteonce(_:completionhandler:))

# updateExecuteOnce(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Updates the repetition status of the event trigger.

## Declaration

```swift
func updateExecuteOnce(_ executeOnce: Bool, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateExecuteOnce(_ executeOnce: Bool) async throws
```

## Parameters

- `executeOnce`: A Boolean value that specifies whether to repeat the trigger.
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Controlling recurrence

- [recurrences](recurrences.md): Specifies the days on which the trigger can execute.
- [updateRecurrences(\_:completionHandler:)](updaterecurrences%28__completionhandler_%29.md): Updates the days of the week the trigger can repeat.
- [executeOnce](executeonce.md): A Boolean that can execute the trigger many times.

# updateExecuteOnce:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Updates the repetition status of the event trigger.

## Declaration

```objectivec
- (void) updateExecuteOnce:(BOOL) executeOnce completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `executeOnce`: A Boolean value that specifies whether to repeat the trigger.
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Controlling recurrence

- [recurrences](recurrences.md): Specifies the days on which the trigger can execute.
- [updateRecurrences:completionHandler:](updaterecurrences%28__completionhandler_%29.md): Updates the days of the week the trigger can repeat.
- [executeOnce](executeonce.md): A Boolean that can execute the trigger many times.
