> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/didenterbackgroundnotification](https://developer.apple.com/documentation/uikit/uiapplication/didenterbackgroundnotification)

# didEnterBackgroundNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when the app enters the background.

## Declaration

```swift
nonisolated class let didEnterBackgroundNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The `object` of the notification is the [UIApplication](../uiapplication.md) object. There is no `userInfo` dictionary.

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive(\_:)](../uiapplicationdelegate/applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive(\_:)](../uiapplicationdelegate/applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground(\_:)](../uiapplicationdelegate/applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground(\_:)](../uiapplicationdelegate/applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate(\_:)](../uiapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [didBecomeActiveNotification](didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [willEnterForegroundNotification](willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [willResignActiveNotification](willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [willTerminateNotification](willterminatenotification.md): A notification that posts when the app is about to terminate.

# UIApplicationDidEnterBackgroundNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when the app enters the background.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationDidEnterBackgroundNotification;
```

<a id="Discussion"></a>

## Discussion

The `object` of the notification is the [UIApplication](../uiapplication.md) object. There is no `userInfo` dictionary.

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive:](../uiapplicationdelegate/applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive:](../uiapplicationdelegate/applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground:](../uiapplicationdelegate/applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground:](../uiapplicationdelegate/applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate:](../uiapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [UIApplicationDidBecomeActiveNotification](didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [UIApplicationWillEnterForegroundNotification](willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [UIApplicationWillResignActiveNotification](willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [UIApplicationWillTerminateNotification](willterminatenotification.md): A notification that posts when the app is about to terminate.
