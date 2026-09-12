> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationdelegate/applicationdidbecomeactive()](https://developer.apple.com/documentation/watchkit/wkapplicationdelegate/applicationdidbecomeactive())

# applicationDidBecomeActive() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate that the watchOS app is visible and processing events.

## Declaration

```swift
optional func applicationDidBecomeActive()
```

<a id="Discussion"></a>

## Discussion

WatchKit calls this method to let you know that your app transitioned from the inactive to the active state. Use this method to start or unpause any tasks. For example, you could use it to start timers. You can also use it to gather information needed to configure your app’s initial user interface.

> **Note**

>  When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Monitoring state changes

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [main()](main%28%29.md): Provides the top-level entry point for an app.
- [applicationDidFinishLaunching()](applicationdidfinishlaunching%28%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [applicationWillResignActive()](applicationwillresignactive%28%29.md): Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground()](applicationwillenterforeground%28%29.md): Tells the delegate that the app is about to transition from the background to the foreground.
- [applicationDidEnterBackground()](applicationdidenterbackground%28%29.md): Tells the delegate that the app has transitioned from the foreground to the background.
- [deviceOrientationDidChange()](deviceorientationdidchange%28%29.md): Tells the delegate that the device’s orientation has changed.

# applicationDidBecomeActive (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate that the watchOS app is visible and processing events.

## Declaration

```objectivec
- (void) applicationDidBecomeActive;
```

<a id="Discussion"></a>

## Discussion

WatchKit calls this method to let you know that your app transitioned from the inactive to the active state. Use this method to start or unpause any tasks. For example, you could use it to start timers. You can also use it to gather information needed to configure your app’s initial user interface.

> **Note**

>  When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Monitoring state changes

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidFinishLaunching](applicationdidfinishlaunching%28%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [applicationWillResignActive](applicationwillresignactive%28%29.md): Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground](applicationwillenterforeground%28%29.md): Tells the delegate that the app is about to transition from the background to the foreground.
- [applicationDidEnterBackground](applicationdidenterbackground%28%29.md): Tells the delegate that the app has transitioned from the foreground to the background.
- [deviceOrientationDidChange](deviceorientationdidchange%28%29.md): Tells the delegate that the device’s orientation has changed.
