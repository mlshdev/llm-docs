> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/cancel(taskrequestwithidentifier:)](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/cancel(taskrequestwithidentifier:))

# cancel(taskRequestWithIdentifier:) (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Cancel a previously scheduled task request.

## Declaration

```swift
func cancel(taskRequestWithIdentifier identifier: String)
```

## Parameters

- `identifier`: The string identifier of the task request to cancel.

## See Also

### Canceling a task

- [cancelAllTaskRequests()](cancelalltaskrequests%28%29.md): Cancel all scheduled task requests.

# cancelTaskRequestWithIdentifier: (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Cancel a previously scheduled task request.

## Declaration

```objectivec
- (void) cancelTaskRequestWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The string identifier of the task request to cancel.

## See Also

### Canceling a task

- [cancelAllTaskRequests](cancelalltaskrequests%28%29.md): Cancel all scheduled task requests.
