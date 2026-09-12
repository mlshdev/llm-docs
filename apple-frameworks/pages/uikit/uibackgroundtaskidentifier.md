> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundtaskidentifier](https://developer.apple.com/documentation/uikit/uibackgroundtaskidentifier)

# UIBackgroundTaskIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A unique token that identifies a request to run in the background.

## Declaration

```swift
struct UIBackgroundTaskIdentifier
```

## Topics

### Identifier

- [invalid](uibackgroundtaskidentifier/invalid.md): A token that indicates an invalid task request.

### Initializers

- [init(rawValue:)](uibackgroundtaskidentifier/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

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
- [UIBackgroundRefreshStatus](uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [backgroundRefreshStatusDidChangeNotification](uiapplication/backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTask(withName:expirationHandler:)](uiapplication/beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTask(expirationHandler:)](uiapplication/beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask(\_:)](uiapplication/endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [backgroundTimeRemaining](uiapplication/backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.

# UIBackgroundTaskIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A unique token that identifies a request to run in the background.

## Declaration

```objectivec
typedef NSUInteger UIBackgroundTaskIdentifier;
```

## Topics

### Identifier

- [UIBackgroundTaskInvalid](uibackgroundtaskidentifier/invalid.md): A token that indicates an invalid task request.

## See Also

### Managing background tasks

- [backgroundRefreshStatus](uiapplication/backgroundrefreshstatus.md): Indicates whether the app can refresh content when running in the background.
- [UIBackgroundRefreshStatus](uibackgroundrefreshstatus.md): Constants that indicate whether background execution is enabled for the app.
- [UIApplicationBackgroundRefreshStatusDidChangeNotification](uiapplication/backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [beginBackgroundTaskWithName:expirationHandler:](uiapplication/beginbackgroundtask%28withname_expirationhandler_%29.md): Marks the start of a task with a custom name that should continue if the app enters the background.
- [beginBackgroundTaskWithExpirationHandler:](uiapplication/beginbackgroundtask%28expirationhandler_%29.md): Marks the start of a task that should continue if the app enters the background.
- [endBackgroundTask:](uiapplication/endbackgroundtask%28__%29.md): Marks the end of a specific long-running background task.
- [backgroundTimeRemaining](uiapplication/backgroundtimeremaining.md): The maximum amount of time remaining for the app to run in the background.
