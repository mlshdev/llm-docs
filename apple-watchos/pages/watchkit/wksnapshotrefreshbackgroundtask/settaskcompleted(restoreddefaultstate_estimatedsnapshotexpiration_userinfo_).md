> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wksnapshotrefreshbackgroundtask/settaskcompleted(restoreddefaultstate:estimatedsnapshotexpiration:userinfo:)](https://developer.apple.com/documentation/watchkit/wksnapshotrefreshbackgroundtask/settaskcompleted(restoreddefaultstate:estimatedsnapshotexpiration:userinfo:))

# setTaskCompleted(restoredDefaultState:estimatedSnapshotExpiration:userInfo:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Marks the task as complete.

## Declaration

```swift
func setTaskCompleted(restoredDefaultState: Bool, estimatedSnapshotExpiration: Date?, userInfo: (any NSSecureCoding & NSObjectProtocol)?)
```

## Parameters

- `restoredDefaultState`: Pass [true](https://developer.apple.com/documentation/swift/true) if your app has navigated back to its default launch scene.
- `estimatedSnapshotExpiration`: The preferred date and time for the next background snapshot refresh task.  Use [distantFuture](https://developer.apple.com/documentation/foundation/nsdate/distantfuture) if you do not want to schedule the next refresh.
- `userInfo`: Custom data to be associated with the next background snapshot refresh task. This value is assigned to the next [WKSnapshotRefreshBackgroundTask](../wksnapshotrefreshbackgroundtask.md) object’s [userInfo](../wkrefreshbackgroundtask/userinfo.md) property. Pass `nil` if you don’t want to associate any data with the next task.

<a id="Discussion"></a>

## Discussion

Call this method as soon as your app finishes updating its user interface. The system provides your extension with a limited amount of time (on the order of seconds) to finish the background snapshot refresh task. If you do not call [setTaskCompleted(restoredDefaultState:estimatedSnapshotExpiration:userInfo:)](settaskcompleted%28restoreddefaultstate_estimatedsnapshotexpiration_userinfo_%29.md) on the task, the system uses all available time, wasting battery power. The system then suspends the extension as soon as the allotted time has expired.

The system automatically takes a snapshot of your app’s user interface as soon as this task is complete. The system also suspends the extension as soon as all background tasks are complete.

# setTaskCompletedWithDefaultStateRestored:estimatedSnapshotExpiration:userInfo: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Marks the task as complete.

## Declaration

```objectivec
- (void) setTaskCompletedWithDefaultStateRestored:(BOOL) restoredDefaultState estimatedSnapshotExpiration:(NSDate *) estimatedSnapshotExpiration userInfo:(id<NSObject,NSSecureCoding>) userInfo;
```

## Parameters

- `restoredDefaultState`: Pass [true](https://developer.apple.com/documentation/swift/true) if your app has navigated back to its default launch scene.
- `estimatedSnapshotExpiration`: The preferred date and time for the next background snapshot refresh task.  Use [distantFuture](https://developer.apple.com/documentation/foundation/nsdate/distantfuture) if you do not want to schedule the next refresh.
- `userInfo`: Custom data to be associated with the next background snapshot refresh task. This value is assigned to the next [WKSnapshotRefreshBackgroundTask](../wksnapshotrefreshbackgroundtask.md) object’s [userInfo](../wkrefreshbackgroundtask/userinfo.md) property. Pass `nil` if you don’t want to associate any data with the next task.

<a id="Discussion"></a>

## Discussion

Call this method as soon as your app finishes updating its user interface. The system provides your extension with a limited amount of time (on the order of seconds) to finish the background snapshot refresh task. If you do not call [setTaskCompletedWithDefaultStateRestored:estimatedSnapshotExpiration:userInfo:](settaskcompleted%28restoreddefaultstate_estimatedsnapshotexpiration_userinfo_%29.md) on the task, the system uses all available time, wasting battery power. The system then suspends the extension as soon as the allotted time has expired.

The system automatically takes a snapshot of your app’s user interface as soon as this task is complete. The system also suspends the extension as soon as all background tasks are complete.
