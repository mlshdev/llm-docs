> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/didbecomeactivenotification](https://developer.apple.com/documentation/uikit/uiapplication/didbecomeactivenotification)

# didBecomeActiveNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts when the app becomes active.

## Declaration

```swift
nonisolated class let didBecomeActiveNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

An app is active when it is receiving events. An active app can be said to have focus. It gains focus after being launched, loses focus when an overlay window pops up or when the device is locked, and gains focus when the device is unlocked.

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive(\_:)](../uiapplicationdelegate/applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive(\_:)](../uiapplicationdelegate/applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground(\_:)](../uiapplicationdelegate/applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground(\_:)](../uiapplicationdelegate/applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate(\_:)](../uiapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [didEnterBackgroundNotification](didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [willEnterForegroundNotification](willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [willResignActiveNotification](willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [willTerminateNotification](willterminatenotification.md): A notification that posts when the app is about to terminate.

# UIApplicationDidBecomeActiveNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts when the app becomes active.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationDidBecomeActiveNotification;
```

<a id="Discussion"></a>

## Discussion

An app is active when it is receiving events. An active app can be said to have focus. It gains focus after being launched, loses focus when an overlay window pops up or when the device is locked, and gains focus when the device is unlocked.

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive:](../uiapplicationdelegate/applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive:](../uiapplicationdelegate/applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground:](../uiapplicationdelegate/applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground:](../uiapplicationdelegate/applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate:](../uiapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [UIApplicationDidEnterBackgroundNotification](didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [UIApplicationWillEnterForegroundNotification](willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [UIApplicationWillResignActiveNotification](willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [UIApplicationWillTerminateNotification](willterminatenotification.md): A notification that posts when the app is about to terminate.
