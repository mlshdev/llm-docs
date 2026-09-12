> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplication/didfinishlaunchingnotification](https://developer.apple.com/documentation/watchkit/wkapplication/didfinishlaunchingnotification)

# didFinishLaunchingNotification (Swift)

**Framework:** WatchKit  
**Kind:** Type Property  
**Availability:** watchOS 7.0+

A message indicating that the launch process finished and the extension is ready to run.

## Declaration

```swift
class let didFinishLaunchingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Observing messages from the notification center

- [didBecomeActiveNotification](didbecomeactivenotification.md): A message indicating that the watchOS app is visible and processing events.
- [willResignActiveNotification](willresignactivenotification.md): A message indicating that the system is about to deactivate the watchOS app.
- [willEnterForegroundNotification](willenterforegroundnotification.md): A message indicating that the watchOS app is about to transition from the background to the foreground.
- [didEnterBackgroundNotification](didenterbackgroundnotification.md): A message indicating that the watchOS app transitioned from the foreground to the background.

# WKApplicationDidFinishLaunchingNotification (Objective-C)

**Framework:** WatchKit  
**Kind:** Global Variable  
**Availability:** watchOS 7.0+

A message indicating that the launch process finished and the extension is ready to run.

## Declaration

```objectivec
extern NSNotificationName const WKApplicationDidFinishLaunchingNotification;
```

<a id="Discussion"></a>

## Discussion

When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Observing messages from the notification center

- [WKApplicationDidBecomeActiveNotification](didbecomeactivenotification.md): A message indicating that the watchOS app is visible and processing events.
- [WKApplicationWillResignActiveNotification](willresignactivenotification.md): A message indicating that the system is about to deactivate the watchOS app.
- [WKApplicationWillEnterForegroundNotification](willenterforegroundnotification.md): A message indicating that the watchOS app is about to transition from the background to the foreground.
- [WKApplicationDidEnterBackgroundNotification](didenterbackgroundnotification.md): A message indicating that the watchOS app transitioned from the foreground to the background.
