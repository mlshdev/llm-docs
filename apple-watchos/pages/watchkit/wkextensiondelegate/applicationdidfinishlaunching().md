> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/applicationdidfinishlaunching()](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/applicationdidfinishlaunching())

# applicationDidFinishLaunching() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

Tells the delegate that the launch process is almost done and the extension is almost ready to run.

## Declaration

```swift
optional func applicationDidFinishLaunching()
```

## Mentioned In

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)
- [Handling Common State Transitions](../handling-common-state-transitions.md)

<a id="Discussion"></a>

## Discussion

WatchKit calls this method after the launch cycle has finished and before your app’s interface is active. Use this method to complete your WatchKit extension’s initialization and prepare it to run. For example, a page-based app could use this method to call the [reloadRootControllers(withNames:contexts:)](../wkinterfacecontroller/reloadrootcontrollers%28withnames_contexts_%29.md) method to specify the initial set of interface controllers to display.

> **Note**

>  When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Monitoring state changes

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidBecomeActive()](applicationdidbecomeactive%28%29.md): Deprecated. Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive()](applicationwillresignactive%28%29.md): Deprecated. Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground()](applicationwillenterforeground%28%29.md): Deprecated. Tells the delegate that the app is about to transition from the background to the foreground.
- [applicationDidEnterBackground()](applicationdidenterbackground%28%29.md): Deprecated. Tells the delegate that the app has transitioned from the foreground to the background.
- [deviceOrientationDidChange()](deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

# applicationDidFinishLaunching (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

Tells the delegate that the launch process is almost done and the extension is almost ready to run.

## Declaration

```objectivec
- (void) applicationDidFinishLaunching;
```

## Mentioned In

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)
- [Handling Common State Transitions](../handling-common-state-transitions.md)

<a id="Discussion"></a>

## Discussion

WatchKit calls this method after the launch cycle has finished and before your app’s interface is active. Use this method to complete your WatchKit extension’s initialization and prepare it to run. For example, a page-based app could use this method to call the [reloadRootControllersWithNames:contexts:](../wkinterfacecontroller/reloadrootcontrollers%28withnames_contexts_%29.md) method to specify the initial set of interface controllers to display.

> **Note**

>  When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Monitoring state changes

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidBecomeActive](applicationdidbecomeactive%28%29.md): Deprecated. Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive](applicationwillresignactive%28%29.md): Deprecated. Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground](applicationwillenterforeground%28%29.md): Deprecated. Tells the delegate that the app is about to transition from the background to the foreground.
- [applicationDidEnterBackground](applicationdidenterbackground%28%29.md): Deprecated. Tells the delegate that the app has transitioned from the foreground to the background.
- [deviceOrientationDidChange](deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.
