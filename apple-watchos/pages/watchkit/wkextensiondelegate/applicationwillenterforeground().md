> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/applicationwillenterforeground()](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/applicationwillenterforeground())

# applicationWillEnterForeground() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

Tells the delegate that the app is about to transition from the background to the foreground.

## Declaration

```swift
optional func applicationWillEnterForeground()
```

## Mentioned In

- [Handling Common State Transitions](../handling-common-state-transitions.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when the app transitions from the background to the foreground. Override this method to undo many of the changes you made to your app upon entering the background. The call to this method is invariably followed by a call to the [applicationDidBecomeActive()](applicationdidbecomeactive%28%29.md) method, as the app moves from the inactive to the active state.

> **Note**

>  When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Monitoring state changes

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidFinishLaunching()](applicationdidfinishlaunching%28%29.md): Deprecated. Tells the delegate that the launch process is almost done and the extension is almost ready to run.
- [applicationDidBecomeActive()](applicationdidbecomeactive%28%29.md): Deprecated. Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive()](applicationwillresignactive%28%29.md): Deprecated. Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationDidEnterBackground()](applicationdidenterbackground%28%29.md): Deprecated. Tells the delegate that the app has transitioned from the foreground to the background.
- [deviceOrientationDidChange()](deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

# applicationWillEnterForeground (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

Tells the delegate that the app is about to transition from the background to the foreground.

## Declaration

```objectivec
- (void) applicationWillEnterForeground;
```

## Mentioned In

- [Handling Common State Transitions](../handling-common-state-transitions.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when the app transitions from the background to the foreground. Override this method to undo many of the changes you made to your app upon entering the background. The call to this method is invariably followed by a call to the [applicationDidBecomeActive](applicationdidbecomeactive%28%29.md) method, as the app moves from the inactive to the active state.

> **Note**

>  When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Monitoring state changes

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidFinishLaunching](applicationdidfinishlaunching%28%29.md): Deprecated. Tells the delegate that the launch process is almost done and the extension is almost ready to run.
- [applicationDidBecomeActive](applicationdidbecomeactive%28%29.md): Deprecated. Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive](applicationwillresignactive%28%29.md): Deprecated. Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationDidEnterBackground](applicationdidenterbackground%28%29.md): Deprecated. Tells the delegate that the app has transitioned from the foreground to the background.
- [deviceOrientationDidChange](deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.
