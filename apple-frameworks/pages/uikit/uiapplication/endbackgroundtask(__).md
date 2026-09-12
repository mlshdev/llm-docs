> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/endbackgroundtask(_:)](https://developer.apple.com/documentation/uikit/uiapplication/endbackgroundtask(_:))

# endBackgroundTask(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Marks the end of a specific long-running background task.

## Declaration

```swift
nonisolated func endBackgroundTask(_ identifier: UIBackgroundTaskIdentifier)
```

## Parameters

- `identifier`: An identifier returned by the [beginBackgroundTask(expirationHandler:)](beginbackgroundtask%28expirationhandler_%29.md) method.

## Mentioned In

- [Extending your app’s background execution time](../extending-your-app-s-background-execution-time.md)

<a id="Discussion"></a>

## Discussion

You must call this method to end a task that was started using the [beginBackgroundTask(expirationHandler:)](beginbackgroundtask%28expirationhandler_%29.md) method. If you do not, the system may terminate your app.

This method can be safely called on a non-main thread.

## See Also

### Managing background tasks

- [backgroundRefreshStatus](backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIBackgroundRefreshStatus](../uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [backgroundRefreshStatusDidChangeNotification](backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTask(withName:expirationHandler:)](beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTask(expirationHandler:)](beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [UIBackgroundTaskIdentifier](../uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.

# endBackgroundTask: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Marks the end of a specific long-running background task.

## Declaration

```objectivec
- (void) endBackgroundTask:(UIBackgroundTaskIdentifier) identifier;
```

## Parameters

- `identifier`: An identifier returned by the [beginBackgroundTaskWithExpirationHandler:](beginbackgroundtask%28expirationhandler_%29.md) method.

## Mentioned In

- [Extending your app’s background execution time](../extending-your-app-s-background-execution-time.md)

<a id="Discussion"></a>

## Discussion

You must call this method to end a task that was started using the [beginBackgroundTaskWithExpirationHandler:](beginbackgroundtask%28expirationhandler_%29.md) method. If you do not, the system may terminate your app.

This method can be safely called on a non-main thread.

## See Also

### Managing background tasks

- [backgroundRefreshStatus](backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIBackgroundRefreshStatus](../uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [UIApplicationBackgroundRefreshStatusDidChangeNotification](backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTaskWithName:expirationHandler:](beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTaskWithExpirationHandler:](beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [UIBackgroundTaskIdentifier](../uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.
