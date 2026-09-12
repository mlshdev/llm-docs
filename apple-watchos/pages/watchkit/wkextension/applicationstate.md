> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/applicationstate](https://developer.apple.com/documentation/watchkit/wkextension/applicationstate)

# applicationState (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+ (deprecated in 9.2)

The runtime state of the Watch app.

## Declaration

```swift
var applicationState: WKApplicationState { get }
```

<a id="Discussion"></a>

## Discussion

The Watch app may be active, inactive, or running in the background. Use this property to get the current state. To be notified of state changes, implement the appropriate methods of the [delegate](delegate.md) object.

## See Also

### Managing the execution state

- [WKApplicationState](../wkapplicationstate.md): The running states of the Watch app.
- [isApplicationRunningInDock](isapplicationrunningindock.md): Deprecated. A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefresh(withPreferredDate:userInfo:scheduledCompletion:)](schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.
- [isFrontmostTimeoutExtended](isfrontmosttimeoutextended.md): Deprecated. A Boolean value that determines whether the app extends its time as the frontmost app.

# applicationState (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+ (deprecated in 9.2)

The runtime state of the Watch app.

## Declaration

```objectivec
@property (nonatomic, readonly) WKApplicationState applicationState;
```

<a id="Discussion"></a>

## Discussion

The Watch app may be active, inactive, or running in the background. Use this property to get the current state. To be notified of state changes, implement the appropriate methods of the [delegate](delegate.md) object.

## See Also

### Managing the execution state

- [WKApplicationState](../wkapplicationstate.md): The running states of the Watch app.
- [isApplicationRunningInDock](isapplicationrunningindock.md): Deprecated. A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefreshWithPreferredDate:userInfo:scheduledCompletion:](schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.
- [frontmostTimeoutExtended](isfrontmosttimeoutextended.md): Deprecated. A Boolean value that determines whether the app extends its time as the frontmost app.
