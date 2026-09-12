> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationdelegate/handle(_:)-4vdjo](https://developer.apple.com/documentation/watchkit/wkapplicationdelegate/handle(_:)-4vdjo)

# handle(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate that the app has received one or more background tasks.

## Declaration

```swift
optional func handle(_ backgroundTasks: Set<WKRefreshBackgroundTask>)
```

## Parameters

- `backgroundTasks`: A set containing one or more background tasks.

## Mentioned In

- [Using background tasks](../using-background-tasks.md)
- [Preparing to take your watchOS app’s snapshot](../preparing-to-take-your-watchos-app-s-snapshot.md)

<a id="Discussion"></a>

## Discussion

The system calls this method after launching your app to handle a background task. Use this method to handle the specified tasks. Call each tasks’s [setTaskCompletedWithSnapshot(\_:)](../wkrefreshbackgroundtask/settaskcompletedwithsnapshot%28__%29.md) method as soon as the task is complete. For more information on background tasks, see [Using background tasks](../using-background-tasks.md).

# handleBackgroundTasks: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate that the app has received one or more background tasks.

## Declaration

```objectivec
- (void) handleBackgroundTasks:(NSSet<WKRefreshBackgroundTask *> *) backgroundTasks;
```

## Parameters

- `backgroundTasks`: A set containing one or more background tasks.

## Mentioned In

- [Using background tasks](../using-background-tasks.md)
- [Preparing to take your watchOS app’s snapshot](../preparing-to-take-your-watchos-app-s-snapshot.md)

<a id="Discussion"></a>

## Discussion

The system calls this method after launching your app to handle a background task. Use this method to handle the specified tasks. Call each tasks’s [setTaskCompletedWithSnapshot:](../wkrefreshbackgroundtask/settaskcompletedwithsnapshot%28__%29.md) method as soon as the task is complete. For more information on background tasks, see [Using background tasks](../using-background-tasks.md).
