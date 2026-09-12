> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplication/didenterbackgroundnotification](https://developer.apple.com/documentation/watchkit/wkapplication/didenterbackgroundnotification)

# didEnterBackgroundNotification (Swift)

**Framework:** WatchKit  
**Kind:** Type Property  
**Availability:** watchOS 7.0+

A message indicating that the watchOS app transitioned from the foreground to the background.

## Declaration

```swift
class let didEnterBackgroundNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Observing messages from the notification center

- [didFinishLaunchingNotification](didfinishlaunchingnotification.md): A message indicating that the launch process finished and the extension is ready to run.
- [didBecomeActiveNotification](didbecomeactivenotification.md): A message indicating that the watchOS app is visible and processing events.
- [willResignActiveNotification](willresignactivenotification.md): A message indicating that the system is about to deactivate the watchOS app.
- [willEnterForegroundNotification](willenterforegroundnotification.md): A message indicating that the watchOS app is about to transition from the background to the foreground.

# WKApplicationDidEnterBackgroundNotification (Objective-C)

**Framework:** WatchKit  
**Kind:** Global Variable  
**Availability:** watchOS 7.0+

A message indicating that the watchOS app transitioned from the foreground to the background.

## Declaration

```objectivec
extern NSNotificationName const WKApplicationDidEnterBackgroundNotification;
```

<a id="Discussion"></a>

## Discussion

When creating an app that uses the SwiftUI [App](https://developer.apple.com/documentation/swiftui/app) protocol to manage your life cycle, use the [onChange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:perform:%29) modifier and the [scenePhase](https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase) environment value to monitor life cycle changes when possible. For more information, see [Building a watchOS app](../../watchos-apps/building_a_watchos_app.md).

## See Also

### Observing messages from the notification center

- [WKApplicationDidFinishLaunchingNotification](didfinishlaunchingnotification.md): A message indicating that the launch process finished and the extension is ready to run.
- [WKApplicationDidBecomeActiveNotification](didbecomeactivenotification.md): A message indicating that the watchOS app is visible and processing events.
- [WKApplicationWillResignActiveNotification](willresignactivenotification.md): A message indicating that the system is about to deactivate the watchOS app.
- [WKApplicationWillEnterForegroundNotification](willenterforegroundnotification.md): A message indicating that the watchOS app is about to transition from the background to the foreground.
