> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/performexpiringactivity(withreason:using:)](https://developer.apple.com/documentation/foundation/processinfo/performexpiringactivity(withreason:using:))

# performExpiringActivity(withReason:using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs the specified block asynchronously and notifies you if the process is about to be suspended.

## Declaration

```swift
func performExpiringActivity(withReason reason: String, using block: @escaping @Sendable (Bool) -> Void)
```

## Parameters

- `reason`: A string used in debugging to indicate the reason the activity began. This parameter must not be `nil` or an empty string.
- `block`: A block containing the work to be performed by the activity. The block has no return value and takes the following parameter:

  - **expired**: A Boolean indicating whether the process is about to be suspended. If the value is [true](https://developer.apple.com/documentation/swift/true), the process is about to be suspended so you should take whatever steps are needed to stop in progress work. If it is [false](https://developer.apple.com/documentation/swift/false), start the planned tasks.

<a id="Discussion"></a>

## Discussion

Use this method to perform tasks when your process is executing in the background. This method queues `block` for asynchronous execution on a concurrent queue. When your process is in the background, the method tries to take a task assertion to ensure that your block has time to execute. If it is unable to take a task assertion, or if the time allotted for the task assertion expires, the system executes your block with the parameter set to [true](https://developer.apple.com/documentation/swift/true). If it is able to take the task assertion, it executes the block and passes [false](https://developer.apple.com/documentation/swift/false) for the expired parameter.

If your block is still executing and the system need to suspend the process, the system executes your block a second time with the `expired` parameter set to [true](https://developer.apple.com/documentation/swift/true). Your block must be prepared to handle this case. When the expired parameter is [true](https://developer.apple.com/documentation/swift/true), stop any in-progress tasks as quickly as possible.

## See Also

### Managing activities

- [beginActivity(options:reason:)](beginactivity%28options_reason_%29.md): Begin an activity using the given options and reason.
- [endActivity(\_:)](endactivity%28__%29.md): Ends the given activity.
- [performActivity(options:reason:using:)](performactivity%28options_reason_using_%29.md): Synchronously perform an activity defined by a given block using the given options.
- [ProcessInfo.ActivityOptions](activityoptions.md): Option flags used with [beginActivity(options:reason:)](beginactivity%28options_reason_%29.md) and [performActivity(options:reason:using:)](performactivity%28options_reason_using_%29.md).

# performExpiringActivityWithReason:usingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs the specified block asynchronously and notifies you if the process is about to be suspended.

## Declaration

```objectivec
- (void) performExpiringActivityWithReason:(NSString *) reason usingBlock:(void (^)(BOOL expired)) block;
```

## Parameters

- `reason`: A string used in debugging to indicate the reason the activity began. This parameter must not be `nil` or an empty string.
- `block`: A block containing the work to be performed by the activity. The block has no return value and takes the following parameter:

  - **expired**: A Boolean indicating whether the process is about to be suspended. If the value is [true](https://developer.apple.com/documentation/swift/true), the process is about to be suspended so you should take whatever steps are needed to stop in progress work. If it is [false](https://developer.apple.com/documentation/swift/false), start the planned tasks.

<a id="Discussion"></a>

## Discussion

Use this method to perform tasks when your process is executing in the background. This method queues `block` for asynchronous execution on a concurrent queue. When your process is in the background, the method tries to take a task assertion to ensure that your block has time to execute. If it is unable to take a task assertion, or if the time allotted for the task assertion expires, the system executes your block with the parameter set to [true](https://developer.apple.com/documentation/swift/true). If it is able to take the task assertion, it executes the block and passes [false](https://developer.apple.com/documentation/swift/false) for the expired parameter.

If your block is still executing and the system need to suspend the process, the system executes your block a second time with the `expired` parameter set to [true](https://developer.apple.com/documentation/swift/true). Your block must be prepared to handle this case. When the expired parameter is [true](https://developer.apple.com/documentation/swift/true), stop any in-progress tasks as quickly as possible.

## See Also

### Managing activities

- [beginActivityWithOptions:reason:](beginactivity%28options_reason_%29.md): Begin an activity using the given options and reason.
- [endActivity:](endactivity%28__%29.md): Ends the given activity.
- [performActivityWithOptions:reason:usingBlock:](performactivity%28options_reason_using_%29.md): Synchronously perform an activity defined by a given block using the given options.
- [NSActivityOptions](activityoptions.md): Option flags used with [beginActivityWithOptions:reason:](beginactivity%28options_reason_%29.md) and [performActivityWithOptions:reason:usingBlock:](performactivity%28options_reason_using_%29.md).
