> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/register(fortaskwithidentifier:using:launchhandler:)](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/register(fortaskwithidentifier:using:launchhandler:))

# register(forTaskWithIdentifier:using:launchHandler:) (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Register a launch handler for the task with the associated identifier that’s executed on the specified queue.

## Declaration

```swift
func register(forTaskWithIdentifier identifier: String, using queue: dispatch_queue_t?, launchHandler: @escaping (BGTask) -> Void) -> Bool
```

## Parameters

- `identifier`: A string containing the identifier of the task.
- `queue`: A queue for executing the task. Pass `nil` to use a default background queue.
- `launchHandler`: The system runs the block of code for the launch handler when it launches the app in the background. The block takes a single parameter, a [BGTask](../bgtask.md) object used for assigning an expiration handler and for setting a completion status. The block has no return value.

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="Return-value"></a>

## Return value

Returns [true](https://developer.apple.com/documentation/swift/true) if the launch handler was registered. Returns [false](https://developer.apple.com/documentation/swift/false) if the identifier isn’t included in the [BGTaskSchedulerPermittedIdentifiers](../../bundleresources/information-property-list/bgtaskschedulerpermittedidentifiers.md) `Info.plist`.

<a id="Discussion"></a>

## Discussion

Every identifier in the [BGTaskSchedulerPermittedIdentifiers](../../bundleresources/information-property-list/bgtaskschedulerpermittedidentifiers.md) requires a handler. Registration of all launch handlers must be complete before the end of [applicationDidFinishLaunching(\_:)](../../uikit/uiapplicationdelegate/applicationdidfinishlaunching%28__%29.md).

> **Important**

> Register each task identifier only once. The system kills the app on the second registration of the same task identifier.

## See Also

### Scheduling a task

- [submit(\_:)](submit%28__%29.md): Deprecated. Submit a previously registered background task for execution.

# registerForTaskWithIdentifier:usingQueue:launchHandler: (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Register a launch handler for the task with the associated identifier that’s executed on the specified queue.

## Declaration

```objectivec
- (BOOL) registerForTaskWithIdentifier:(NSString *) identifier usingQueue:(dispatch_queue_t) queue launchHandler:(void (^)(BGTask *task)) launchHandler;
```

## Parameters

- `identifier`: A string containing the identifier of the task.
- `queue`: A queue for executing the task. Pass `nil` to use a default background queue.
- `launchHandler`: The system runs the block of code for the launch handler when it launches the app in the background. The block takes a single parameter, a [BGTask](../bgtask.md) object used for assigning an expiration handler and for setting a completion status. The block has no return value.

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="Return-value"></a>

## Return value

Returns [true](https://developer.apple.com/documentation/swift/true) if the launch handler was registered. Returns [false](https://developer.apple.com/documentation/swift/false) if the identifier isn’t included in the [BGTaskSchedulerPermittedIdentifiers](../../bundleresources/information-property-list/bgtaskschedulerpermittedidentifiers.md) `Info.plist`.

<a id="Discussion"></a>

## Discussion

Every identifier in the [BGTaskSchedulerPermittedIdentifiers](../../bundleresources/information-property-list/bgtaskschedulerpermittedidentifiers.md) requires a handler. Registration of all launch handlers must be complete before the end of [applicationDidFinishLaunching:](../../uikit/uiapplicationdelegate/applicationdidfinishlaunching%28__%29.md).

> **Important**

> Register each task identifier only once. The system kills the app on the second registration of the same task identifier.

## See Also

### Scheduling a task

- [submitTaskRequest:error:](submit%28__%29.md): Deprecated. Submit a previously registered background task for execution.
