> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkrefreshbackgroundtask/expirationhandler](https://developer.apple.com/documentation/watchkit/wkrefreshbackgroundtask/expirationhandler)

# expirationHandler (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 8.0+

A block that the system calls when the available runtime for a background task is about to expire.

## Declaration

```swift
var expirationHandler: (() -> Void)? { get set }
```

## Mentioned In

- [Using background tasks](../using-background-tasks.md)

<a id="Discussion"></a>

## Discussion

To respond when your background task is about to expire, assign a block to this property. In this block, clean up any running background tasks, and prepare for the system to suspend your app.

## See Also

### Completing the background task

- [setTaskCompletedWithSnapshot(\_:)](settaskcompletedwithsnapshot%28__%29.md): Marks the task as complete and indicates whether the system should take a new snapshot of the app.
- [setTaskCompleted()](settaskcompleted%28%29.md): Deprecated. Marks the task as complete.

# expirationHandler (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 8.0+

A block that the system calls when the available runtime for a background task is about to expire.

## Declaration

```objectivec
@property (strong, nullable) void (^expirationHandler)();
```

## Mentioned In

- [Using background tasks](../using-background-tasks.md)

<a id="Discussion"></a>

## Discussion

To respond when your background task is about to expire, assign a block to this property. In this block, clean up any running background tasks, and prepare for the system to suspend your app.

## See Also

### Completing the background task

- [setTaskCompletedWithSnapshot:](settaskcompletedwithsnapshot%28__%29.md): Marks the task as complete and indicates whether the system should take a new snapshot of the app.
- [setTaskCompleted](settaskcompleted%28%29.md): Deprecated. Marks the task as complete.
