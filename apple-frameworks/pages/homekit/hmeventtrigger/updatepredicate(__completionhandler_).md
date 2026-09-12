> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/updatepredicate(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmeventtrigger/updatepredicate(_:completionhandler:))

# updatePredicate(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+

Replaces the predicate used to evaluate execution of the scene associated with the event trigger.

## Declaration

```swift
func updatePredicate(_ predicate: NSPredicate?, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updatePredicate(_ predicate: NSPredicate?) async throws
```

## Parameters

- `predicate`: The new predicate to use with the event trigger.
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Adding a trigger condition

- [predicate](predicate.md): The predicate to evaluate before executing the scene associated with the event trigger.

# updatePredicate:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Replaces the predicate used to evaluate execution of the scene associated with the event trigger.

## Declaration

```objectivec
- (void) updatePredicate:(NSPredicate *) predicate completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `predicate`: The new predicate to use with the event trigger.
- `completion`: A block that executes after processing the request.

  The block takes the following parameter:

  - **error**: If the request was successful, the value of `error` is `nil`; otherwise, the value provides more information about the request status.

## See Also

### Adding a trigger condition

- [predicate](predicate.md): The predicate to evaluate before executing the scene associated with the event trigger.
