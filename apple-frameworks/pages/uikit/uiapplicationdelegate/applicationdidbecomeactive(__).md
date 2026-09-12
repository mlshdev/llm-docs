> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/applicationdidbecomeactive(_:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/applicationdidbecomeactive(_:))

# applicationDidBecomeActive(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 26.0) · iPadOS 2.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the app has become active.

> Use UIScene lifecycle and sceneDidBecomeActive(\_:) from UISceneDelegate or the UIApplication.didBecomeActiveNotification instead.

## Declaration

```swift
optional func applicationDidBecomeActive(_ application: UIApplication)
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you’re using scenes (see [Scenes](../scenes.md)), UIKit will not call this method. Use [sceneDidBecomeActive(\_:)](../uiscenedelegate/scenedidbecomeactive%28__%29.md) instead to restart any tasks or refresh your app’s user interface. UIKit posts a [didBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md) regardless of whether your app uses scenes.

UIKit calls this method to let your app know that it moved from the inactive to active state. The app moves to the active state because it was launched by the user or the system, or because the user ignores an interruption (like an incoming phone call or SMS message) that sent the app temporarily to the inactive state.

Use this method to restart any tasks that were paused (or not yet started) while the app was inactive. For example, use it to restart timers or throttle up OpenGL ES frame rates. If your app was previously in the background, you can also use it to refresh your app’s user interface.

After calling this method, UIKit posts a [didBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md) to give interested objects a chance to respond to the transition.

## See Also

### Responding to app life-cycle events

- [applicationWillResignActive(\_:)](applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground(\_:)](applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground(\_:)](applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate(\_:)](applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [didBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [didEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [willEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [willResignActiveNotification](../uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [willTerminateNotification](../uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.

# applicationDidBecomeActive: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 26.0) · iPadOS 2.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the app has become active.

> Use UIScene lifecycle and sceneDidBecomeActive(\_:) from UISceneDelegate or the UIApplication.didBecomeActiveNotification instead.

## Declaration

```objectivec
- (void) applicationDidBecomeActive:(UIApplication *) application;
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you’re using scenes (see [Scenes](../scenes.md)), UIKit will not call this method. Use [sceneDidBecomeActive:](../uiscenedelegate/scenedidbecomeactive%28__%29.md) instead to restart any tasks or refresh your app’s user interface. UIKit posts a [UIApplicationDidBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md) regardless of whether your app uses scenes.

UIKit calls this method to let your app know that it moved from the inactive to active state. The app moves to the active state because it was launched by the user or the system, or because the user ignores an interruption (like an incoming phone call or SMS message) that sent the app temporarily to the inactive state.

Use this method to restart any tasks that were paused (or not yet started) while the app was inactive. For example, use it to restart timers or throttle up OpenGL ES frame rates. If your app was previously in the background, you can also use it to refresh your app’s user interface.

After calling this method, UIKit posts a [UIApplicationDidBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md) to give interested objects a chance to respond to the transition.

## See Also

### Responding to app life-cycle events

- [applicationWillResignActive:](applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground:](applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground:](applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate:](applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [UIApplicationDidBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [UIApplicationDidEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [UIApplicationWillEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [UIApplicationWillResignActiveNotification](../uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [UIApplicationWillTerminateNotification](../uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.
