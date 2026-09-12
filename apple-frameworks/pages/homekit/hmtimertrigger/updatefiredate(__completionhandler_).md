> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtimertrigger/updatefiredate(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmtimertrigger/updatefiredate(_:completionhandler:))

# updateFireDate(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Updates the next fire date for the trigger.

## Declaration

```swift
func updateFireDate(_ fireDate: Date, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateFireDate(_ fireDate: Date) async throws
```

## Parameters

- `fireDate`: The new fire date.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Choosing the fire date

- [fireDate](firedate.md): The time at which the trigger will next fire.

# updateFireDate:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Updates the next fire date for the trigger.

## Declaration

```objectivec
- (void) updateFireDate:(NSDate *) fireDate completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `fireDate`: The new fire date.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Choosing the fire date

- [fireDate](firedate.md): The time at which the trigger will next fire.
