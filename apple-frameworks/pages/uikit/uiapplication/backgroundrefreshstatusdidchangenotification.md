> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/backgroundrefreshstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiapplication/backgroundrefreshstatusdidchangenotification)

# backgroundRefreshStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A notification that posts when the app’s status for downloading content in the background changes.

## Declaration

```swift
nonisolated class let backgroundRefreshStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The system sends this notification when the [backgroundRefreshStatus](backgroundrefreshstatus.md) property of the app object changes. That property can change in response to the user disabling multitasking support for the app. The `object` of the notification is the `UIApplication` object. There is no `userInfo` dictionary.

## See Also

### Managing background tasks

- [backgroundRefreshStatus](backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIBackgroundRefreshStatus](../uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [beginBackgroundTask(withName:expirationHandler:)](beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTask(expirationHandler:)](beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask(\_:)](endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](../uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.

# UIApplicationBackgroundRefreshStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A notification that posts when the app’s status for downloading content in the background changes.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationBackgroundRefreshStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The system sends this notification when the [backgroundRefreshStatus](backgroundrefreshstatus.md) property of the app object changes. That property can change in response to the user disabling multitasking support for the app. The `object` of the notification is the `UIApplication` object. There is no `userInfo` dictionary.

## See Also

### Managing background tasks

- [backgroundRefreshStatus](backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIBackgroundRefreshStatus](../uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [beginBackgroundTaskWithName:expirationHandler:](beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTaskWithExpirationHandler:](beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask:](endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](../uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.
