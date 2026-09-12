> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/willenterforegroundnotification](https://developer.apple.com/documentation/uikit/uiapplication/willenterforegroundnotification)

# willEnterForegroundNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts shortly before your app’s UI transitions to the foreground.

## Declaration

```swift
nonisolated class let willEnterForegroundNotification: NSNotification.Name
```

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The `object` of the notification is the [UIApplication](../uiapplication.md) object. There is no `userInfo` dictionary.

If your app adopts the scene-based life cycle, this notification isn’t an app-level mirror of [willEnterForegroundNotification](../uiscene/willenterforegroundnotification.md). That scene notification comes from an individual scene’s own life-cycle transition. This notification instead reflects your app’s aggregate state across all of its scenes. UIKit posts this notification when that aggregate state moves from background to foreground. If a person performs an action that brings an additional scene to the foreground while your app’s aggregate state is already in the foreground, that action doesn’t change the aggregate state, so this notification doesn’t fire again.

If your app launches directly into the foreground, UIKit posts this notification around launch time, as the launching scene transitions to the foreground and becomes visible. If your app launches into the background instead, for example to handle a silent push notification or a location update, this notification doesn’t fire at launch. It arrives later, only if your app actually enters the foreground.

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive(\_:)](../uiapplicationdelegate/applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive(\_:)](../uiapplicationdelegate/applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground(\_:)](../uiapplicationdelegate/applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground(\_:)](../uiapplicationdelegate/applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate(\_:)](../uiapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [didBecomeActiveNotification](didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [didEnterBackgroundNotification](didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [willResignActiveNotification](willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [willTerminateNotification](willterminatenotification.md): A notification that posts when the app is about to terminate.

# UIApplicationWillEnterForegroundNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts shortly before your app’s UI transitions to the foreground.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationWillEnterForegroundNotification;
```

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The `object` of the notification is the [UIApplication](../uiapplication.md) object. There is no `userInfo` dictionary.

If your app adopts the scene-based life cycle, this notification isn’t an app-level mirror of [UISceneWillEnterForegroundNotification](../uiscene/willenterforegroundnotification.md). That scene notification comes from an individual scene’s own life-cycle transition. This notification instead reflects your app’s aggregate state across all of its scenes. UIKit posts this notification when that aggregate state moves from background to foreground. If a person performs an action that brings an additional scene to the foreground while your app’s aggregate state is already in the foreground, that action doesn’t change the aggregate state, so this notification doesn’t fire again.

If your app launches directly into the foreground, UIKit posts this notification around launch time, as the launching scene transitions to the foreground and becomes visible. If your app launches into the background instead, for example to handle a silent push notification or a location update, this notification doesn’t fire at launch. It arrives later, only if your app actually enters the foreground.

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive:](../uiapplicationdelegate/applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive:](../uiapplicationdelegate/applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground:](../uiapplicationdelegate/applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground:](../uiapplicationdelegate/applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate:](../uiapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [UIApplicationDidBecomeActiveNotification](didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [UIApplicationDidEnterBackgroundNotification](didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [UIApplicationWillResignActiveNotification](willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [UIApplicationWillTerminateNotification](willterminatenotification.md): A notification that posts when the app is about to terminate.
