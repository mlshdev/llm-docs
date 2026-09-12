> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/isapplicationrunningindock](https://developer.apple.com/documentation/watchkit/wkextension/isapplicationrunningindock)

# isApplicationRunningInDock (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+ (deprecated in 9.2)

A Boolean value that indicates whether the app is running in the dock.

## Declaration

```swift
var isApplicationRunningInDock: Bool { get }
```

## Mentioned In

- [Handling Common State Transitions](../handling-common-state-transitions.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) if the app is running in the dock; otherwise, [false](https://developer.apple.com/documentation/swift/false).

Check this property (for example, in your extension delegate’s [applicationWillEnterForeground()](../wkextensiondelegate/applicationwillenterforeground%28%29.md) method) to determine whether your app is running in the dock. You can use this information to customize your user interface in the dock.

## See Also

### Managing the execution state

- [applicationState](applicationstate.md): Deprecated. The runtime state of the Watch app.
- [WKApplicationState](../wkapplicationstate.md): The running states of the Watch app.
- [scheduleBackgroundRefresh(withPreferredDate:userInfo:scheduledCompletion:)](schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.
- [isFrontmostTimeoutExtended](isfrontmosttimeoutextended.md): Deprecated. A Boolean value that determines whether the app extends its time as the frontmost app.

# isApplicationRunningInDock (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+ (deprecated in 9.2)

A Boolean value that indicates whether the app is running in the dock.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isApplicationRunningInDock;
```

## Mentioned In

- [Handling Common State Transitions](../handling-common-state-transitions.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) if the app is running in the dock; otherwise, [false](https://developer.apple.com/documentation/swift/false).

Check this property (for example, in your extension delegate’s [applicationWillEnterForeground](../wkextensiondelegate/applicationwillenterforeground%28%29.md) method) to determine whether your app is running in the dock. You can use this information to customize your user interface in the dock.

## See Also

### Managing the execution state

- [applicationState](applicationstate.md): Deprecated. The runtime state of the Watch app.
- [WKApplicationState](../wkapplicationstate.md): The running states of the Watch app.
- [scheduleBackgroundRefreshWithPreferredDate:userInfo:scheduledCompletion:](schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.
- [frontmostTimeoutExtended](isfrontmosttimeoutextended.md): Deprecated. A Boolean value that determines whether the app extends its time as the frontmost app.
