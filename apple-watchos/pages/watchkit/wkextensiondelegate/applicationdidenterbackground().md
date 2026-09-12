> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/applicationdidenterbackground()](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/applicationdidenterbackground())

# applicationDidEnterBackground() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

Tells the delegate that the app has transitioned from the foreground to the background.

## Declaration

```swift
optional func applicationDidEnterBackground()
```

## Mentioned In

- [Handling Common State Transitions](../handling-common-state-transitions.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

Override this method to release shared resources, invalidate timers, and store enough app state information to restore your app to its current state if it’s purged from memory. You have only a few seconds to complete these actions and return.

The system typically suspends your app shortly after this method returns; therefore, don’t call any asynchronous methods from your [applicationDidEnterBackground()](applicationdidenterbackground%28%29.md) implementation. Asynchronous methods may not be able to complete before the app is suspended.

Additionally, the system may purge suspended apps at any time to make room for other apps. You aren’t notified when an app is purged from memory. The [applicationDidEnterBackground()](applicationdidenterbackground%28%29.md) method is your last chance to perform any cleanup before the app terminates.

> **Note**

>  When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Monitoring state changes

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidFinishLaunching()](applicationdidfinishlaunching%28%29.md): Deprecated. Tells the delegate that the launch process is almost done and the extension is almost ready to run.
- [applicationDidBecomeActive()](applicationdidbecomeactive%28%29.md): Deprecated. Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive()](applicationwillresignactive%28%29.md): Deprecated. Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground()](applicationwillenterforeground%28%29.md): Deprecated. Tells the delegate that the app is about to transition from the background to the foreground.
- [deviceOrientationDidChange()](deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

# applicationDidEnterBackground (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

Tells the delegate that the app has transitioned from the foreground to the background.

## Declaration

```objectivec
- (void) applicationDidEnterBackground;
```

## Mentioned In

- [Handling Common State Transitions](../handling-common-state-transitions.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

Override this method to release shared resources, invalidate timers, and store enough app state information to restore your app to its current state if it’s purged from memory. You have only a few seconds to complete these actions and return.

The system typically suspends your app shortly after this method returns; therefore, don’t call any asynchronous methods from your [applicationDidEnterBackground](applicationdidenterbackground%28%29.md) implementation. Asynchronous methods may not be able to complete before the app is suspended.

Additionally, the system may purge suspended apps at any time to make room for other apps. You aren’t notified when an app is purged from memory. The [applicationDidEnterBackground](applicationdidenterbackground%28%29.md) method is your last chance to perform any cleanup before the app terminates.

> **Note**

>  When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Monitoring state changes

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidFinishLaunching](applicationdidfinishlaunching%28%29.md): Deprecated. Tells the delegate that the launch process is almost done and the extension is almost ready to run.
- [applicationDidBecomeActive](applicationdidbecomeactive%28%29.md): Deprecated. Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive](applicationwillresignactive%28%29.md): Deprecated. Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground](applicationwillenterforeground%28%29.md): Deprecated. Tells the delegate that the app is about to transition from the background to the foreground.
- [deviceOrientationDidChange](deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.
