> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/isfrontmosttimeoutextended](https://developer.apple.com/documentation/watchkit/wkextension/isfrontmosttimeoutextended)

# isFrontmostTimeoutExtended (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+ (deprecated in 7.0)

A Boolean value that determines whether the app extends its time as the frontmost app.

> In watchOS 7 and later, you can no longer request extended frontmost time. Instead, the user can set the frontmost app behavior for each app using its Return to App setting.

## Declaration

```swift
var isFrontmostTimeoutExtended: Bool { get set }
```

## Mentioned In

- [Taking advantage of frontmost app state](../taking-advantage-of-frontmost-app-state.md)

<a id="Discussion"></a>

## Discussion

This value defaults to [false](https://developer.apple.com/documentation/swift/false). An app remains the frontmost app for two minutes after the user drops their wrist. Setting this property to [true](https://developer.apple.com/documentation/swift/true) extends the app’s time as the frontmost app to eight minutes.

Don’t just extend the app’s frontmost time globally. Instead, enable it only when the user performs an activity that they are likely to continue. Otherwise, disable it. Users can also change the default length of time that apps spend as the frontmost app by choosing Settings \> General \> Wake Screen. If they select a time that is eight minutes or longer, this property has no effect. In other words, when [isFrontmostTimeoutExtended](isfrontmosttimeoutextended.md) is [true](https://developer.apple.com/documentation/swift/true), the app remains the frontmost app for eight minutes, or for the amount of time that the user selects, whichever is longer.

## See Also

### Managing the execution state

- [applicationState](applicationstate.md): Deprecated. The runtime state of the Watch app.
- [WKApplicationState](../wkapplicationstate.md): The running states of the Watch app.
- [isApplicationRunningInDock](isapplicationrunningindock.md): Deprecated. A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefresh(withPreferredDate:userInfo:scheduledCompletion:)](schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.

# frontmostTimeoutExtended (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+ (deprecated in 7.0)

A Boolean value that determines whether the app extends its time as the frontmost app.

> In watchOS 7 and later, you can no longer request extended frontmost time. Instead, the user can set the frontmost app behavior for each app using its Return to App setting.

## Declaration

```objectivec
@property (nonatomic, getter=isFrontmostTimeoutExtended) BOOL frontmostTimeoutExtended;
```

## Mentioned In

- [Taking advantage of frontmost app state](../taking-advantage-of-frontmost-app-state.md)

<a id="Discussion"></a>

## Discussion

This value defaults to [false](https://developer.apple.com/documentation/swift/false). An app remains the frontmost app for two minutes after the user drops their wrist. Setting this property to [true](https://developer.apple.com/documentation/swift/true) extends the app’s time as the frontmost app to eight minutes.

Don’t just extend the app’s frontmost time globally. Instead, enable it only when the user performs an activity that they are likely to continue. Otherwise, disable it. Users can also change the default length of time that apps spend as the frontmost app by choosing Settings \> General \> Wake Screen. If they select a time that is eight minutes or longer, this property has no effect. In other words, when [frontmostTimeoutExtended](isfrontmosttimeoutextended.md) is [true](https://developer.apple.com/documentation/swift/true), the app remains the frontmost app for eight minutes, or for the amount of time that the user selects, whichever is longer.

## See Also

### Managing the execution state

- [applicationState](applicationstate.md): Deprecated. The runtime state of the Watch app.
- [WKApplicationState](../wkapplicationstate.md): The running states of the Watch app.
- [isApplicationRunningInDock](isapplicationrunningindock.md): Deprecated. A Boolean value that indicates whether the app is running in the dock.
- [scheduleBackgroundRefreshWithPreferredDate:userInfo:scheduledCompletion:](schedulebackgroundrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md): Schedules a background task to refresh the app’s data.
