> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtimertrigger/updaterecurrence(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmtimertrigger/updaterecurrence(_:completionhandler:))

# updateRecurrence(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Updates the recurrence interval.

## Declaration

```swift
func updateRecurrence(_ recurrence: DateComponents?, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateRecurrence(_ recurrence: DateComponents?) async throws
```

## Parameters

- `recurrence`: The new recurrence interval.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

See [recurrence](recurrence.md) for a discussion of how the recurrence value is used.

## See Also

### Using recurrence

- [recurrence](recurrence.md): The interval on which to repeat firing the trigger.

# updateRecurrence:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Updates the recurrence interval.

## Declaration

```objectivec
- (void) updateRecurrence:(NSDateComponents *) recurrence completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `recurrence`: The new recurrence interval.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

See [recurrence](recurrence.md) for a discussion of how the recurrence value is used.

## See Also

### Using recurrence

- [recurrence](recurrence.md): The interval on which to repeat firing the trigger.
