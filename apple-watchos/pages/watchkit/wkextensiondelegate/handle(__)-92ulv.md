> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/handle(_:)-92ulv](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle(_:)-92ulv)

# handle(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+ (deprecated in 9.2)

Tells the delegate that the app has received one or more background tasks.

## Declaration

```swift
optional func handle(_ backgroundTasks: Set<WKRefreshBackgroundTask>)
```

## Parameters

- `backgroundTasks`: A set containing one or more background tasks.

## Mentioned In

- [Using background tasks](../using-background-tasks.md)

<a id="Discussion"></a>

## Discussion

The system calls this method after launching your app to handle a background task. Use this method to handle the specified tasks. Call each tasks’s [setTaskCompletedWithSnapshot(\_:)](../wkrefreshbackgroundtask/settaskcompletedwithsnapshot%28__%29.md) method as soon as the task is complete. For more information on background tasks, see [Using background tasks](../using-background-tasks.md).

## See Also

### Related Documentation

- [recoverActiveWorkoutSession(completion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/recoveractiveworkoutsession%28completion:%29): Recovers an active workout session.

# handleBackgroundTasks: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+ (deprecated in 9.2)

Tells the delegate that the app has received one or more background tasks.

## Declaration

```objectivec
- (void) handleBackgroundTasks:(NSSet<WKRefreshBackgroundTask *> *) backgroundTasks;
```

## Parameters

- `backgroundTasks`: A set containing one or more background tasks.

## Mentioned In

- [Using background tasks](../using-background-tasks.md)

<a id="Discussion"></a>

## Discussion

The system calls this method after launching your app to handle a background task. Use this method to handle the specified tasks. Call each tasks’s [setTaskCompletedWithSnapshot:](../wkrefreshbackgroundtask/settaskcompletedwithsnapshot%28__%29.md) method as soon as the task is complete. For more information on background tasks, see [Using background tasks](../using-background-tasks.md).

## See Also

### Related Documentation

- [recoverActiveWorkoutSessionWithCompletion:](https://developer.apple.com/documentation/healthkit/hkhealthstore/recoveractiveworkoutsession%28completion:%29): Recovers an active workout session.
