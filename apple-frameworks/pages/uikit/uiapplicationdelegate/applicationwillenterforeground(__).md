> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/applicationwillenterforeground(_:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/applicationwillenterforeground(_:))

# applicationWillEnterForeground(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the app is about to enter the foreground.

> Use UIScene lifecycle and sceneWillEnterForeground(\_:) from UISceneDelegate or the UIApplication.willEnterForegroundNotification instead.

## Declaration

```swift
optional func applicationWillEnterForeground(_ application: UIApplication)
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

In iOS 4.0 and later, UIKit calls this method as part of the transition from the background to the active state. You can use this method to undo many of the changes you made to your app upon entering the background. The call to this method is invariably followed by a call to the [applicationDidBecomeActive(\_:)](applicationdidbecomeactive%28__%29.md) method, which then moves the app from the inactive to the active state.

UIKit also posts a [willEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md) shortly before calling this method to give interested objects a chance to respond to the transition.

> **Important**

>  If your app adopts the scene-based life cycle (see [Scenes](../scenes.md)), UIKit doesn’t call this method. Use [sceneWillEnterForeground(\_:)](../uiscenedelegate/scenewillenterforeground%28__%29.md) instead to prepare your scene to enter the foreground. UIKit posts a [willEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md) regardless of whether your app adopts the scene-based life cycle, but in that case the notification reflects your app’s aggregate state ([applicationState](../uiapplication/applicationstate.md)) rather than any single scene’s transition. UIKit posts it when that aggregate state moves from background to foreground. If a person performs an action that brings an additional scene to the foreground while your app’s aggregate state is already in the foreground, that action doesn’t change the aggregate state, so UIKit doesn’t post the notification again.

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive(\_:)](applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive(\_:)](applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground(\_:)](applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillTerminate(\_:)](applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [didBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [didEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [willEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [willResignActiveNotification](../uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [willTerminateNotification](../uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.

# applicationWillEnterForeground: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the app is about to enter the foreground.

> Use UIScene lifecycle and sceneWillEnterForeground(\_:) from UISceneDelegate or the UIApplication.willEnterForegroundNotification instead.

## Declaration

```objectivec
- (void) applicationWillEnterForeground:(UIApplication *) application;
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

In iOS 4.0 and later, UIKit calls this method as part of the transition from the background to the active state. You can use this method to undo many of the changes you made to your app upon entering the background. The call to this method is invariably followed by a call to the [applicationDidBecomeActive:](applicationdidbecomeactive%28__%29.md) method, which then moves the app from the inactive to the active state.

UIKit also posts a [UIApplicationWillEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md) shortly before calling this method to give interested objects a chance to respond to the transition.

> **Important**

>  If your app adopts the scene-based life cycle (see [Scenes](../scenes.md)), UIKit doesn’t call this method. Use [sceneWillEnterForeground:](../uiscenedelegate/scenewillenterforeground%28__%29.md) instead to prepare your scene to enter the foreground. UIKit posts a [UIApplicationWillEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md) regardless of whether your app adopts the scene-based life cycle, but in that case the notification reflects your app’s aggregate state ([applicationState](../uiapplication/applicationstate.md)) rather than any single scene’s transition. UIKit posts it when that aggregate state moves from background to foreground. If a person performs an action that brings an additional scene to the foreground while your app’s aggregate state is already in the foreground, that action doesn’t change the aggregate state, so UIKit doesn’t post the notification again.

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive:](applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive:](applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground:](applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillTerminate:](applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [UIApplicationDidBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [UIApplicationDidEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [UIApplicationWillEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [UIApplicationWillResignActiveNotification](../uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [UIApplicationWillTerminateNotification](../uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.
