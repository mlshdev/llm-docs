> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/backgroundtimeremaining](https://developer.apple.com/documentation/uikit/uiapplication/backgroundtimeremaining)

# backgroundTimeRemaining (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The maximum amount of time remaining for the app to run in the background.

## Declaration

```swift
nonisolated var backgroundTimeRemaining: TimeInterval { get }
```

## Mentioned In

- [Extending your app’s background execution time](../extending-your-app-s-background-execution-time.md)

<a id="Discussion"></a>

## Discussion

The value is valid only after the app enters the background and has started at least one task using [beginBackgroundTask(expirationHandler:)](beginbackgroundtask%28expirationhandler_%29.md) in the foreground.

System conditions may end background execution earlier, either by calling the expiration handler, or by terminating the app.

This method can be safely called on a non-main thread.

## See Also

### Managing background tasks

- [backgroundRefreshStatus](backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIBackgroundRefreshStatus](../uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [backgroundRefreshStatusDidChangeNotification](backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTask(withName:expirationHandler:)](beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTask(expirationHandler:)](beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask(\_:)](endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](../uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.

# backgroundTimeRemaining (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The maximum amount of time remaining for the app to run in the background.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval backgroundTimeRemaining;
```

## Mentioned In

- [Extending your app’s background execution time](../extending-your-app-s-background-execution-time.md)

<a id="Discussion"></a>

## Discussion

The value is valid only after the app enters the background and has started at least one task using [beginBackgroundTaskWithExpirationHandler:](beginbackgroundtask%28expirationhandler_%29.md) in the foreground.

System conditions may end background execution earlier, either by calling the expiration handler, or by terminating the app.

This method can be safely called on a non-main thread.

## See Also

### Managing background tasks

- [backgroundRefreshStatus](backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIBackgroundRefreshStatus](../uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [UIApplicationBackgroundRefreshStatusDidChangeNotification](backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTaskWithName:expirationHandler:](beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTaskWithExpirationHandler:](beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask:](endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](../uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
