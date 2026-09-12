> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/applicationdidenterbackground(_:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/applicationdidenterbackground(_:))

# applicationDidEnterBackground(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the app is now in the background.

## Declaration

```swift
optional func applicationDidEnterBackground(_ application: UIApplication)
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [About the background execution sequence](../about-the-background-execution-sequence.md)
- [Extending your app’s background execution time](../extending-your-app-s-background-execution-time.md)
- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you’re using scenes (see [Scenes](../scenes.md)), UIKit will not call this method. Use [sceneDidEnterBackground(\_:)](../uiscenedelegate/scenedidenterbackground%28__%29.md) instead to perform any final tasks. UIKit posts a [didEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md) regardless of whether your app uses scenes.

Use this method to release shared resources, invalidate timers, and store enough app state information to restore your app to its current state in case it’s terminated later. Disable updates to your app’s user interface, and avoid using some types of shared system resources (such as the user’s contacts database). Don’t use OpenGL ES in the background.

Return from [applicationDidEnterBackground(\_:)](applicationdidenterbackground%28__%29.md) as quickly as possible. Your implementation of this method has approximately five seconds to perform any tasks and return. If the method doesn’t return before time runs out, your app is terminated and purged from memory.

If you need additional time to perform any final tasks, request additional execution time from the system by calling [beginBackgroundTask(expirationHandler:)](../uiapplication/beginbackgroundtask%28expirationhandler_%29.md). Call [beginBackgroundTask(expirationHandler:)](../uiapplication/beginbackgroundtask%28expirationhandler_%29.md) as early as possible. Because the system needs time to process your request, there’s a chance that the system might suspend your app before that task assertion is granted. For example, don’t call [beginBackgroundTask(expirationHandler:)](../uiapplication/beginbackgroundtask%28expirationhandler_%29.md) at the very end of your [applicationDidEnterBackground(\_:)](applicationdidenterbackground%28__%29.md) method and expect your app to continue running.

Perform any tasks related to adjusting your user interface before [applicationDidEnterBackground(\_:)](applicationdidenterbackground%28__%29.md) exits. Move other tasks (such as saving state) to a concurrent dispatch queue or secondary thread as needed. Because it’s likely any background tasks you start in [applicationDidEnterBackground(\_:)](applicationdidenterbackground%28__%29.md) won’t run until after that method exits, request additional background execution time before starting those tasks. In other words, first call [beginBackgroundTask(expirationHandler:)](../uiapplication/beginbackgroundtask%28expirationhandler_%29.md) and *then* run the task on a dispatch queue or secondary thread.

UIKit also posts a [didEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md) around the same time it calls this method to give interested objects a chance to respond to the transition.

For more information about how to transition gracefully to the background, and for information about how to start background tasks, see [App Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072).

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive(\_:)](applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive(\_:)](applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationWillEnterForeground(\_:)](applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate(\_:)](applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [didBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [didEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [willEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [willResignActiveNotification](../uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [willTerminateNotification](../uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.

# applicationDidEnterBackground: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the app is now in the background.

## Declaration

```objectivec
- (void) applicationDidEnterBackground:(UIApplication *) application;
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [About the background execution sequence](../about-the-background-execution-sequence.md)
- [Extending your app’s background execution time](../extending-your-app-s-background-execution-time.md)
- [Transitioning to the UIKit scene-based life cycle](../transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you’re using scenes (see [Scenes](../scenes.md)), UIKit will not call this method. Use [sceneDidEnterBackground:](../uiscenedelegate/scenedidenterbackground%28__%29.md) instead to perform any final tasks. UIKit posts a [UIApplicationDidEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md) regardless of whether your app uses scenes.

Use this method to release shared resources, invalidate timers, and store enough app state information to restore your app to its current state in case it’s terminated later. Disable updates to your app’s user interface, and avoid using some types of shared system resources (such as the user’s contacts database). Don’t use OpenGL ES in the background.

Return from [applicationDidEnterBackground:](applicationdidenterbackground%28__%29.md) as quickly as possible. Your implementation of this method has approximately five seconds to perform any tasks and return. If the method doesn’t return before time runs out, your app is terminated and purged from memory.

If you need additional time to perform any final tasks, request additional execution time from the system by calling [beginBackgroundTaskWithExpirationHandler:](../uiapplication/beginbackgroundtask%28expirationhandler_%29.md). Call [beginBackgroundTaskWithExpirationHandler:](../uiapplication/beginbackgroundtask%28expirationhandler_%29.md) as early as possible. Because the system needs time to process your request, there’s a chance that the system might suspend your app before that task assertion is granted. For example, don’t call [beginBackgroundTaskWithExpirationHandler:](../uiapplication/beginbackgroundtask%28expirationhandler_%29.md) at the very end of your [applicationDidEnterBackground:](applicationdidenterbackground%28__%29.md) method and expect your app to continue running.

Perform any tasks related to adjusting your user interface before [applicationDidEnterBackground:](applicationdidenterbackground%28__%29.md) exits. Move other tasks (such as saving state) to a concurrent dispatch queue or secondary thread as needed. Because it’s likely any background tasks you start in [applicationDidEnterBackground:](applicationdidenterbackground%28__%29.md) won’t run until after that method exits, request additional background execution time before starting those tasks. In other words, first call [beginBackgroundTaskWithExpirationHandler:](../uiapplication/beginbackgroundtask%28expirationhandler_%29.md) and *then* run the task on a dispatch queue or secondary thread.

UIKit also posts a [UIApplicationDidEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md) around the same time it calls this method to give interested objects a chance to respond to the transition.

For more information about how to transition gracefully to the background, and for information about how to start background tasks, see [App Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072).

## See Also

### Responding to app life-cycle events

- [applicationDidBecomeActive:](applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive:](applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationWillEnterForeground:](applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate:](applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [UIApplicationDidBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [UIApplicationDidEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [UIApplicationWillEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [UIApplicationWillResignActiveNotification](../uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [UIApplicationWillTerminateNotification](../uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.
