> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/applicationwillresignactive(_:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/applicationwillresignactive(_:))

# applicationWillResignActive(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 26.0) · iPadOS 2.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the app is about to become inactive.

> Use UIScene lifecycle and sceneWillResignActive(\_:) from UISceneDelegate or the UIApplication.willResignActiveNotification instead.

## Declaration

```swift
optional func applicationWillResignActive(_ application: UIApplication)
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [About the background execution sequence](../about-the-background-execution-sequence.md)
- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you’re using scenes (see [Scenes](../scenes.md)), UIKit will not call this method. Use [sceneWillResignActive(\_:)](../uiscenedelegate/scenewillresignactive%28__%29.md) instead to pause any activity or save state. UIKit posts a [willResignActiveNotification](../uiapplication/willresignactivenotification.md) regardless of whether your app uses scenes.

UIKit calls this method to let your app know that it is about to move from the active to inactive state. The app moves to the inactive state because of temporary interruptions like an incoming phone call or SMS message, or when the user quits the app and it begins the transition to the background state. An app in the inactive state continues to run but doesn’t dispatch incoming events to responders.

Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game. An app in the inactive state should do minimal work while it waits to transition to either the active or background state.

If your app has unsaved user data, you can save it to ensure that it isn’t lost. However, it is recommended that you save user data at appropriate points throughout the execution of your app, usually in response to specific actions. For example, save data when the user dismisses a data entry screen. Don’t rely on specific app state transitions to save all of your app’s critical data.

After calling this method, UIKit also posts a [willResignActiveNotification](../uiapplication/willresignactivenotification.md) to give interested objects a chance to respond to the transition.

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive(\_:)](applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationDidEnterBackground(\_:)](applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground(\_:)](applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate(\_:)](applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [didBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [didEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [willEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [willResignActiveNotification](../uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [willTerminateNotification](../uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.

# applicationWillResignActive: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 26.0) · iPadOS 2.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the app is about to become inactive.

> Use UIScene lifecycle and sceneWillResignActive(\_:) from UISceneDelegate or the UIApplication.willResignActiveNotification instead.

## Declaration

```objectivec
- (void) applicationWillResignActive:(UIApplication *) application;
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [About the background execution sequence](../about-the-background-execution-sequence.md)
- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you’re using scenes (see [Scenes](../scenes.md)), UIKit will not call this method. Use [sceneWillResignActive:](../uiscenedelegate/scenewillresignactive%28__%29.md) instead to pause any activity or save state. UIKit posts a [UIApplicationWillResignActiveNotification](../uiapplication/willresignactivenotification.md) regardless of whether your app uses scenes.

UIKit calls this method to let your app know that it is about to move from the active to inactive state. The app moves to the inactive state because of temporary interruptions like an incoming phone call or SMS message, or when the user quits the app and it begins the transition to the background state. An app in the inactive state continues to run but doesn’t dispatch incoming events to responders.

Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game. An app in the inactive state should do minimal work while it waits to transition to either the active or background state.

If your app has unsaved user data, you can save it to ensure that it isn’t lost. However, it is recommended that you save user data at appropriate points throughout the execution of your app, usually in response to specific actions. For example, save data when the user dismisses a data entry screen. Don’t rely on specific app state transitions to save all of your app’s critical data.

After calling this method, UIKit also posts a [UIApplicationWillResignActiveNotification](../uiapplication/willresignactivenotification.md) to give interested objects a chance to respond to the transition.

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive:](applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationDidEnterBackground:](applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground:](applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate:](applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [UIApplicationDidBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [UIApplicationDidEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [UIApplicationWillEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [UIApplicationWillResignActiveNotification](../uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [UIApplicationWillTerminateNotification](../uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.
