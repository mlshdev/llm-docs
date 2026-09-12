> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/applicationdidbecomeactivenotification](https://developer.apple.com/documentation/watchkit/wkextension/applicationdidbecomeactivenotification)

# applicationDidBecomeActiveNotification

**Framework:** WatchKit  
**Kind:** Type Property  
**Availability:** watchOS 7.0+ (deprecated in 9.2)

A message indicating that the watchOS app is visible and processing events.

## Declaration

```swift
@MainActor @preconcurrency static var applicationDidBecomeActiveNotification: NSNotification.Name { get }
```

<a id="Discussion"></a>

## Discussion

When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Observing messages from the notification center

- [applicationDidFinishLaunchingNotification](applicationdidfinishlaunchingnotification.md): Deprecated. A message indicating that the launch process finished and the extension is ready to run.
- [applicationWillResignActiveNotification](applicationwillresignactivenotification.md): Deprecated. A message indicating that the system is about to deactivate the watchOS app.
- [applicationWillEnterForegroundNotification](applicationwillenterforegroundnotification.md): Deprecated. A message indicating that the watchOS app is about to transition from the background to the foreground.
- [applicationDidEnterBackgroundNotification](applicationdidenterbackgroundnotification.md): Deprecated. A message indicating that the watchOS app transitioned from the foreground to the background.
