> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/beginbackgroundtask(expirationhandler:)](https://developer.apple.com/documentation/uikit/uiapplication/beginbackgroundtask(expirationhandler:))

# beginBackgroundTask(expirationHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Marks the start of a task that should continue if the app enters the background.

## Declaration

```swift
nonisolated func beginBackgroundTask(expirationHandler handler: (@MainActor @Sendable () -> Void)? = nil) -> UIBackgroundTaskIdentifier
```

## Parameters

- `handler`: A handler to be called shortly before the app’s remaining background time reaches 0. Use this handler to clean up and mark the end of the background task. Failure to end the task explicitly will result in the termination of the app. The system calls the handler synchronously on the main thread, blocking the app’s suspension momentarily.

<a id="return-value"></a>

## Return Value

A unique identifier for the new background task. You must pass this value to the [endBackgroundTask(\_:)](endbackgroundtask%28__%29.md) method to mark the end of this task. This method returns [invalid](../uibackgroundtaskidentifier/invalid.md) if running in the background isn’t possible.

<a id="Discussion"></a>

## Discussion

This method requests additional background execution time for your app. Call this method when leaving a task unfinished might be detrimental to your app’s user experience. For example, call this method before writing data to a file to prevent the system from suspending your app while the operation is in progress. For background tasks requiring more time, use [Background Tasks](../../backgroundtasks.md).

Call this method as early as possible before starting your task, preferably before your app actually enters the background. The method requests the task assertion for your app asynchronously. If you call this method shortly before your app is due to be suspended, there’s a chance that the system might suspend your app before that task assertion is granted. For example, don’t call this method at the very end of your [applicationDidEnterBackground(\_:)](../uiapplicationdelegate/applicationdidenterbackground%28__%29.md) method and expect your app to continue running. If the system is unable to grant the task assertion, it calls your expiration handler.

Each call to this method must be balanced by a matching call to the [endBackgroundTask(\_:)](endbackgroundtask%28__%29.md) method. Apps running background tasks have a finite amount of time in which to run them. (You can find out the maximum background time available using the [backgroundTimeRemaining](backgroundtimeremaining.md) property.) If you don’t call [endBackgroundTask(\_:)](endbackgroundtask%28__%29.md) for each task before time expires, the system kills the app. If you provide a block object in the `handler` parameter, the system calls your handler before time expires to give you a chance to end the task.

You can call this method at any point in your app’s execution. You may also call this method multiple times to mark the beginning of several background tasks that run in parallel. However, each task must be ended separately. You identify a given task using the value returned by this method.

To assist with debugging, this method generates a name for the task, based on the name of the calling method or function. If you want to specify a custom name, use the [beginBackgroundTask(withName:expirationHandler:)](beginbackgroundtask%28withname_expirationhandler_%29.md) method instead.

This method can be safely called on a non-main thread. To extend the execution time of an app extension, use the [performExpiringActivity(withReason:using:)](../../foundation/processinfo/performexpiringactivity%28withreason_using_%29.md) method of [ProcessInfo](../../foundation/processinfo.md) instead.

> **Note**

>  If you’re having trouble debugging your background task code, you might try using the [beginBackgroundTask(withName:expirationHandler:)](beginbackgroundtask%28withname_expirationhandler_%29.md) method instead of this one. That method provides the same behavior but lets you specify a debugger-visible name for your task.

## See Also

### Related Documentation

- [Background Tasks](../../backgroundtasks.md): Support background processing in your app by wrapping your app’s most critical work in framework-provided tasks.

### Managing background tasks

- [backgroundRefreshStatus](backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIBackgroundRefreshStatus](../uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [backgroundRefreshStatusDidChangeNotification](backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTask(withName:expirationHandler:)](beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [endBackgroundTask(\_:)](endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](../uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.

# beginBackgroundTaskWithExpirationHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Marks the start of a task that should continue if the app enters the background.

## Declaration

```objectivec
- (UIBackgroundTaskIdentifier) beginBackgroundTaskWithExpirationHandler:(void (^)(void)) handler;
```

## Parameters

- `handler`: A handler to be called shortly before the app’s remaining background time reaches 0. Use this handler to clean up and mark the end of the background task. Failure to end the task explicitly will result in the termination of the app. The system calls the handler synchronously on the main thread, blocking the app’s suspension momentarily.

<a id="return-value"></a>

## Return Value

A unique identifier for the new background task. You must pass this value to the [endBackgroundTask:](endbackgroundtask%28__%29.md) method to mark the end of this task. This method returns [UIBackgroundTaskInvalid](../uibackgroundtaskidentifier/invalid.md) if running in the background isn’t possible.

<a id="Discussion"></a>

## Discussion

This method requests additional background execution time for your app. Call this method when leaving a task unfinished might be detrimental to your app’s user experience. For example, call this method before writing data to a file to prevent the system from suspending your app while the operation is in progress. For background tasks requiring more time, use [Background Tasks](../../backgroundtasks.md).

Call this method as early as possible before starting your task, preferably before your app actually enters the background. The method requests the task assertion for your app asynchronously. If you call this method shortly before your app is due to be suspended, there’s a chance that the system might suspend your app before that task assertion is granted. For example, don’t call this method at the very end of your [applicationDidEnterBackground:](../uiapplicationdelegate/applicationdidenterbackground%28__%29.md) method and expect your app to continue running. If the system is unable to grant the task assertion, it calls your expiration handler.

Each call to this method must be balanced by a matching call to the [endBackgroundTask:](endbackgroundtask%28__%29.md) method. Apps running background tasks have a finite amount of time in which to run them. (You can find out the maximum background time available using the [backgroundTimeRemaining](backgroundtimeremaining.md) property.) If you don’t call [endBackgroundTask:](endbackgroundtask%28__%29.md) for each task before time expires, the system kills the app. If you provide a block object in the `handler` parameter, the system calls your handler before time expires to give you a chance to end the task.

You can call this method at any point in your app’s execution. You may also call this method multiple times to mark the beginning of several background tasks that run in parallel. However, each task must be ended separately. You identify a given task using the value returned by this method.

To assist with debugging, this method generates a name for the task, based on the name of the calling method or function. If you want to specify a custom name, use the [beginBackgroundTaskWithName:expirationHandler:](beginbackgroundtask%28withname_expirationhandler_%29.md) method instead.

This method can be safely called on a non-main thread. To extend the execution time of an app extension, use the [performExpiringActivityWithReason:usingBlock:](../../foundation/processinfo/performexpiringactivity%28withreason_using_%29.md) method of [NSProcessInfo](../../foundation/processinfo.md) instead.

> **Note**

>  If you’re having trouble debugging your background task code, you might try using the [beginBackgroundTaskWithName:expirationHandler:](beginbackgroundtask%28withname_expirationhandler_%29.md) method instead of this one. That method provides the same behavior but lets you specify a debugger-visible name for your task.

## See Also

### Related Documentation

- [Background Tasks](../../backgroundtasks.md): Support background processing in your app by wrapping your app’s most critical work in framework-provided tasks.

### Managing background tasks

- [backgroundRefreshStatus](backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIBackgroundRefreshStatus](../uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [UIApplicationBackgroundRefreshStatusDidChangeNotification](backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTaskWithName:expirationHandler:](beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [endBackgroundTask:](endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](../uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.
