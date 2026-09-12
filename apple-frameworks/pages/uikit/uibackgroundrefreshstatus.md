> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundrefreshstatus](https://developer.apple.com/documentation/uikit/uibackgroundrefreshstatus)

# UIBackgroundRefreshStatus (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicate whether background execution is enabled for the app.

## Declaration

```swift
enum UIBackgroundRefreshStatus
```

## Topics

### Constants

- [UIBackgroundRefreshStatus.restricted](uibackgroundrefreshstatus/restricted.md): Background updates are unavailable and the user cannot enable them again.
- [UIBackgroundRefreshStatus.denied](uibackgroundrefreshstatus/denied.md): The user explicitly disabled background behavior for this app or for the whole system.
- [UIBackgroundRefreshStatus.available](uibackgroundrefreshstatus/available.md): Background updates are available for the app.

### Initializers

- [init(rawValue:)](uibackgroundrefreshstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing background tasks

- [backgroundRefreshStatus](uiapplication/backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [backgroundRefreshStatusDidChangeNotification](uiapplication/backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTask(withName:expirationHandler:)](uiapplication/beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTask(expirationHandler:)](uiapplication/beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask(\_:)](uiapplication/endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](uiapplication/backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.

# UIBackgroundRefreshStatus (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicate whether background execution is enabled for the app.

## Declaration

```objectivec
enum UIBackgroundRefreshStatus : NSInteger;
```

## Topics

### Constants

- [UIBackgroundRefreshStatusRestricted](uibackgroundrefreshstatus/restricted.md): Background updates are unavailable and the user cannot enable them again.
- [UIBackgroundRefreshStatusDenied](uibackgroundrefreshstatus/denied.md): The user explicitly disabled background behavior for this app or for the whole system.
- [UIBackgroundRefreshStatusAvailable](uibackgroundrefreshstatus/available.md): Background updates are available for the app.

## See Also

### Managing background tasks

- [backgroundRefreshStatus](uiapplication/backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIApplicationBackgroundRefreshStatusDidChangeNotification](uiapplication/backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTaskWithName:expirationHandler:](uiapplication/beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTaskWithExpirationHandler:](uiapplication/beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask:](uiapplication/endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [UIBackgroundTaskIdentifier](uibackgroundtaskidentifier.md): A unique token that identifies a request to run in the background.
- [backgroundTimeRemaining](uiapplication/backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.
