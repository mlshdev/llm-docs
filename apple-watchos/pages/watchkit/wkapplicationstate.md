> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationstate](https://developer.apple.com/documentation/watchkit/wkapplicationstate)

# WKApplicationState (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 3.0+

The running states of the Watch app.

## Declaration

```swift
enum WKApplicationState
```

## Topics

### Constants

- [WKApplicationState.active](wkapplicationstate/active.md): The Watch app is running in the foreground and currently receiving events.
- [WKApplicationState.inactive](wkapplicationstate/inactive.md): The Watch app is running in the foreground, but is not yet responding to actions from controls or gestures.
- [WKApplicationState.background](wkapplicationstate/background.md): The Watch app is running in the background.

### Initializers

- [init(rawValue:)](wkapplicationstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the app state

- [applicationState](wkapplication/applicationstate.md): The runtime state of the watchOS app.
- [isApplicationRunningInDock](wkapplication/isapplicationrunningindock.md): A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefresh(withPreferredDate:userInfo:scheduledCompletion:)](wkapplication/schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.

# WKApplicationState (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 3.0+

The running states of the Watch app.

## Declaration

```objectivec
enum WKApplicationState : NSInteger;
```

## Topics

### Constants

- [WKApplicationStateActive](wkapplicationstate/active.md): The Watch app is running in the foreground and currently receiving events.
- [WKApplicationStateInactive](wkapplicationstate/inactive.md): The Watch app is running in the foreground, but is not yet responding to actions from controls or gestures.
- [WKApplicationStateBackground](wkapplicationstate/background.md): The Watch app is running in the background.

## See Also

### Managing the app state

- [applicationState](wkapplication/applicationstate.md): The runtime state of the watchOS app.
- [isApplicationRunningInDock](wkapplication/isapplicationrunningindock.md): A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefreshWithPreferredDate:userInfo:scheduledCompletion:](wkapplication/schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.
