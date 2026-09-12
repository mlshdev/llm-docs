> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkrefreshbackgroundtask/settaskcompleted()](https://developer.apple.com/documentation/watchkit/wkrefreshbackgroundtask/settaskcompleted())

# setTaskCompleted() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+ (deprecated in 4.0)

Marks the task as complete.

> Use [setTaskCompletedWithSnapshot(\_:)](settaskcompletedwithsnapshot%28__%29.md) instead.

## Declaration

```swift
func setTaskCompleted()
```

<a id="Discussion"></a>

## Discussion

Call this method as soon as you have finished the background task. The system provides your extension with a limited amount of time to finish the task (on the order of seconds). If you do not call [setTaskCompleted()](settaskcompleted%28%29.md) on the task, the system continues to run in the background until all the available time is consumed, wasting battery power.

The system suspends the extension as soon as all background tasks are complete.

## See Also

### Completing the background task

- [expirationHandler](expirationhandler.md): A block that the system calls when the available runtime for a background task is about to expire.
- [setTaskCompletedWithSnapshot(\_:)](settaskcompletedwithsnapshot%28__%29.md): Marks the task as complete and indicates whether the system should take a new snapshot of the app.

# setTaskCompleted (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+ (deprecated in 4.0)

Marks the task as complete.

> Use [setTaskCompletedWithSnapshot:](settaskcompletedwithsnapshot%28__%29.md) instead.

## Declaration

```objectivec
- (void) setTaskCompleted;
```

<a id="Discussion"></a>

## Discussion

Call this method as soon as you have finished the background task. The system provides your extension with a limited amount of time to finish the task (on the order of seconds). If you do not call [setTaskCompleted](settaskcompleted%28%29.md) on the task, the system continues to run in the background until all the available time is consumed, wasting battery power.

The system suspends the extension as soon as all background tasks are complete.

## See Also

### Completing the background task

- [expirationHandler](expirationhandler.md): A block that the system calls when the available runtime for a background task is about to expire.
- [setTaskCompletedWithSnapshot:](settaskcompletedwithsnapshot%28__%29.md): Marks the task as complete and indicates whether the system should take a new snapshot of the app.
