> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplication/applicationstate](https://developer.apple.com/documentation/watchkit/wkapplication/applicationstate)

# applicationState (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

The runtime state of the watchOS app.

## Declaration

```swift
var applicationState: WKApplicationState { get }
```

<a id="Discussion"></a>

## Discussion

The watchOS app may be active, inactive, or running in the background. Use this property to get the current state. To receive notifications about state changes, implement the appropriate methods of the [WKApplicationDelegate](../wkapplicationdelegate.md) object, or create a SwiftUI view that updates based on changes to the [ScenePhase](https://developer.apple.com/documentation/swiftui/scenephase) environment value.

## See Also

### Managing the app state

- [WKApplicationState](../wkapplicationstate.md): The running states of the Watch app.
- [isApplicationRunningInDock](isapplicationrunningindock.md): A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefresh(withPreferredDate:userInfo:scheduledCompletion:)](schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.

# applicationState (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

The runtime state of the watchOS app.

## Declaration

```objectivec
@property (nonatomic, readonly) WKApplicationState applicationState;
```

<a id="Discussion"></a>

## Discussion

The watchOS app may be active, inactive, or running in the background. Use this property to get the current state. To receive notifications about state changes, implement the appropriate methods of the [WKApplicationDelegate](../wkapplicationdelegate.md) object, or create a SwiftUI view that updates based on changes to the [ScenePhase](https://developer.apple.com/documentation/swiftui/scenephase) environment value.

## See Also

### Managing the app state

- [WKApplicationState](../wkapplicationstate.md): The running states of the Watch app.
- [isApplicationRunningInDock](isapplicationrunningindock.md): A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefreshWithPreferredDate:userInfo:scheduledCompletion:](schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.
