> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/applicationwillterminate(_:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/applicationwillterminate(_:))

# applicationWillTerminate(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when the app is about to terminate.

## Declaration

```swift
optional func applicationWillTerminate(_ application: UIApplication)
```

## Parameters

- `application`: Your singleton app object.

<a id="Discussion"></a>

## Discussion

This method lets your app know that it is about to be terminated and purged from memory entirely. You should use this method to perform any final clean-up tasks for your app, such as freeing shared resources, saving user data, and invalidating timers. Your implementation of this method has approximately five seconds to perform any tasks and return. If the method does not return before time expires, the system may terminate the process altogether.

For apps that do not support background execution or are linked against iOS 3.x or earlier, this method is always called when the user quits the app. For apps that support background execution, this method is generally not called when the user quits the app because the app simply moves to the background in that case. However, this method may be called in situations where the app is running in the background (not suspended) and the system needs to terminate it for some reason.

After calling this method, the app also posts a [willTerminateNotification](../uiapplication/willterminatenotification.md) notification to give interested objects a chance to respond to the transition.

## See Also

### Related Documentation

- [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.

### Responding to app life-cycle events

- [applicationDidBecomeActive(\_:)](applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive(\_:)](applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground(\_:)](applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground(\_:)](applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [didBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [didEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [willEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [willResignActiveNotification](../uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [willTerminateNotification](../uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.

# applicationWillTerminate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when the app is about to terminate.

## Declaration

```objectivec
- (void) applicationWillTerminate:(UIApplication *) application;
```

## Parameters

- `application`: Your singleton app object.

<a id="Discussion"></a>

## Discussion

This method lets your app know that it is about to be terminated and purged from memory entirely. You should use this method to perform any final clean-up tasks for your app, such as freeing shared resources, saving user data, and invalidating timers. Your implementation of this method has approximately five seconds to perform any tasks and return. If the method does not return before time expires, the system may terminate the process altogether.

For apps that do not support background execution or are linked against iOS 3.x or earlier, this method is always called when the user quits the app. For apps that support background execution, this method is generally not called when the user quits the app because the app simply moves to the background in that case. However, this method may be called in situations where the app is running in the background (not suspended) and the system needs to terminate it for some reason.

After calling this method, the app also posts a [UIApplicationWillTerminateNotification](../uiapplication/willterminatenotification.md) notification to give interested objects a chance to respond to the transition.

## See Also

### Related Documentation

- [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.

### Responding to app life-cycle events

- [applicationDidBecomeActive:](applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive:](applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground:](applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground:](applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [UIApplicationDidBecomeActiveNotification](../uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [UIApplicationDidEnterBackgroundNotification](../uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [UIApplicationWillEnterForegroundNotification](../uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [UIApplicationWillResignActiveNotification](../uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [UIApplicationWillTerminateNotification](../uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.
