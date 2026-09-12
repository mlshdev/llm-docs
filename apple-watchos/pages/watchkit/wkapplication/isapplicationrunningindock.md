> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplication/isapplicationrunningindock](https://developer.apple.com/documentation/watchkit/wkapplication/isapplicationrunningindock)

# isApplicationRunningInDock (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

A Boolean value that indicates whether the app is running in the dock.

## Declaration

```swift
var isApplicationRunningInDock: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) if the app is running in the dock; otherwise, [false](https://developer.apple.com/documentation/swift/false).

Check this property (for example, in your app delegate’s [applicationWillEnterForeground()](../wkapplicationdelegate/applicationwillenterforeground%28%29.md) method) to determine whether your app is running in the dock. You can use this information to customize your user interface in the dock.

## See Also

### Managing the app state

- [applicationState](applicationstate.md): The runtime state of the watchOS app.
- [WKApplicationState](../wkapplicationstate.md): The running states of the Watch app.
- [scheduleBackgroundRefresh(withPreferredDate:userInfo:scheduledCompletion:)](schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.

# isApplicationRunningInDock (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

A Boolean value that indicates whether the app is running in the dock.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isApplicationRunningInDock;
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) if the app is running in the dock; otherwise, [false](https://developer.apple.com/documentation/swift/false).

Check this property (for example, in your app delegate’s [applicationWillEnterForeground](../wkapplicationdelegate/applicationwillenterforeground%28%29.md) method) to determine whether your app is running in the dock. You can use this information to customize your user interface in the dock.

## See Also

### Managing the app state

- [applicationState](applicationstate.md): The runtime state of the watchOS app.
- [WKApplicationState](../wkapplicationstate.md): The running states of the Watch app.
- [scheduleBackgroundRefreshWithPreferredDate:userInfo:scheduledCompletion:](schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.
