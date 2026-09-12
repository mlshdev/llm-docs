> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/backgroundrefreshstatus](https://developer.apple.com/documentation/uikit/uiapplication/backgroundrefreshstatus)

# backgroundRefreshStatus (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Indicates whether the app can refresh content when running in the background.

## Declaration

```swift
var backgroundRefreshStatus: UIBackgroundRefreshStatus { get }
```

<a id="Discussion"></a>

## Discussion

You can use this property to determine whether Background App Refresh—an app’s ability to open in the background to perform refresh tasks—is enabled, and warn the user if it is not. Don’t warn the user if the value of this property is set to [UIBackgroundRefreshStatus.restricted](../uibackgroundrefreshstatus/restricted.md). A restricted user, such as one who is managed under parental controls, can’t enable Background App Refresh.

Background App Refresh is disabled automatically when a device is operating in low-power mode. When this happens, the time available for performing background tasks is reduced to save power.

## See Also

### Managing background tasks

- [UIBackgroundRefreshStatus](../uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [backgroundRefreshStatusDidChangeNotification](backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTask(withName:expirationHandler:)](beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTask(expirationHandler:)](beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask(\_:)](endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](../uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.

# backgroundRefreshStatus (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Indicates whether the app can refresh content when running in the background.

## Declaration

```objectivec
@property (nonatomic, readonly) UIBackgroundRefreshStatus backgroundRefreshStatus;
```

<a id="Discussion"></a>

## Discussion

You can use this property to determine whether Background App Refresh—an app’s ability to open in the background to perform refresh tasks—is enabled, and warn the user if it is not. Don’t warn the user if the value of this property is set to [UIBackgroundRefreshStatusRestricted](../uibackgroundrefreshstatus/restricted.md). A restricted user, such as one who is managed under parental controls, can’t enable Background App Refresh.

Background App Refresh is disabled automatically when a device is operating in low-power mode. When this happens, the time available for performing background tasks is reduced to save power.

## See Also

### Managing background tasks

- [UIBackgroundRefreshStatus](../uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [UIApplicationBackgroundRefreshStatusDidChangeNotification](backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTaskWithName:expirationHandler:](beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTaskWithExpirationHandler:](beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask:](endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](../uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.
