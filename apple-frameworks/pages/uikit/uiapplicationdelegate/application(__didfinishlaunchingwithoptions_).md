> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:didfinishlaunchingwithoptions:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:didfinishlaunchingwithoptions:))

# application(\_:didFinishLaunchingWithOptions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the launch process is almost done and the app is almost ready to run.

## Declaration

```swift
optional func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool
```

## Parameters

- `application`: The singleton app object.
- `launchOptions`: A dictionary indicating the reason the person or system launched the app. The contents of this dictionary may be empty in situations where a person launched the app directly. If the app supports scenes, this is `nil`. For information about the possible keys in this dictionary and how to handle them, see [UIApplication.LaunchOptionsKey](../uiapplication/launchoptionskey.md).

<a id="return-value"></a>

## Return Value

Return [false](https://developer.apple.com/documentation/swift/false) if the app can’t handle the URL resource or continue a user activity, otherwise return [true](https://developer.apple.com/documentation/swift/true). The system ignores the return value if the app launches as a result of a remote notification.

## Mentioned In

- [About the app launch sequence](../about-the-app-launch-sequence.md)
- [Performing one-time setup for your app](../performing-one-time-setup-for-your-app.md)
- [About the UI restoration process](../about-the-ui-restoration-process.md)

<a id="Discussion"></a>

## Discussion

Use this method (and the corresponding [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) method) to complete your app’s initialization. In an app that supports scenes:

- The system calls this method as soon as the process is done launching.
- The system then creates the scene(s) that you configured for your app.
- The system calls scene life-cycle methods, such as [scene(\_:willConnectTo:options:)](../uiscenedelegate/scene%28__willconnectto_options_%29.md).
- As the system presents a scene, it updates that scene’s [activationState](../uiscene/activationstate-swift.property.md). The app’s state is the aggregate of all the scene [UIScene.ActivationState](../uiscene/activationstate-swift.enum.md) values.

In an app that doesn’t support scenes:

- The system performs state restoration before calling this method.
- The system calls this method when the process is done launching.
- The system presents your app’s window, scene(s), and other UI.
- At some point after this method returns, the system calls another of your app delegate’s methods to move the app to the active (foreground) state or the background state.

This method represents your last chance to process any keys in the `launchOptions` dictionary. If you didn’t evaluate the keys in your [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) method, review them in this method and provide an appropriate response.

Objects that aren’t the app delegate can access the same `launchOptions` dictionary values by observing the notification named [didFinishLaunchingNotification](../uiapplication/didfinishlaunchingnotification.md) and accessing the notification’s [userInfo](../../foundation/nsnotification/userinfo.md) dictionary. The system sends that notification shortly after this method returns.

The system combines the return result from this method with the return result from the [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) method to determine whether to handle a URL. If either method returns [false](https://developer.apple.com/documentation/swift/false), the system doesn’t handle the URL. If you don’t implement one of the methods, the system only considers the return value of the implemented method.

## See Also

### Related Documentation

- [applicationDidEnterBackground(\_:)](applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationDidBecomeActive(\_:)](applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.

### Initializing the app

- [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process has begun.
- [UIApplication.LaunchOptionsKey](../uiapplication/launchoptionskey.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.
- [didFinishLaunchingNotification](../uiapplication/didfinishlaunchingnotification.md): A notification that posts immediately after the app finishes launching.

# application:didFinishLaunchingWithOptions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the launch process is almost done and the app is almost ready to run.

## Declaration

```objectivec
- (BOOL) application:(UIApplication *) application didFinishLaunchingWithOptions:(NSDictionary<NSString *,id> *) launchOptions;
```

## Parameters

- `application`: The singleton app object.
- `launchOptions`: A dictionary indicating the reason the person or system launched the app. The contents of this dictionary may be empty in situations where a person launched the app directly. If the app supports scenes, this is `nil`. For information about the possible keys in this dictionary and how to handle them, see [UIApplicationLaunchOptionsKey](../uiapplication/launchoptionskey.md).

<a id="return-value"></a>

## Return Value

Return [false](https://developer.apple.com/documentation/swift/false) if the app can’t handle the URL resource or continue a user activity, otherwise return [true](https://developer.apple.com/documentation/swift/true). The system ignores the return value if the app launches as a result of a remote notification.

## Mentioned In

- [About the app launch sequence](../about-the-app-launch-sequence.md)
- [Performing one-time setup for your app](../performing-one-time-setup-for-your-app.md)
- [About the UI restoration process](../about-the-ui-restoration-process.md)

<a id="Discussion"></a>

## Discussion

Use this method (and the corresponding [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) method) to complete your app’s initialization. In an app that supports scenes:

- The system calls this method as soon as the process is done launching.
- The system then creates the scene(s) that you configured for your app.
- The system calls scene life-cycle methods, such as [scene:willConnectToSession:options:](../uiscenedelegate/scene%28__willconnectto_options_%29.md).
- As the system presents a scene, it updates that scene’s [activationState](../uiscene/activationstate-swift.property.md). The app’s state is the aggregate of all the scene [UISceneActivationState](../uiscene/activationstate-swift.enum.md) values.

In an app that doesn’t support scenes:

- The system performs state restoration before calling this method.
- The system calls this method when the process is done launching.
- The system presents your app’s window, scene(s), and other UI.
- At some point after this method returns, the system calls another of your app delegate’s methods to move the app to the active (foreground) state or the background state.

This method represents your last chance to process any keys in the `launchOptions` dictionary. If you didn’t evaluate the keys in your [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) method, review them in this method and provide an appropriate response.

Objects that aren’t the app delegate can access the same `launchOptions` dictionary values by observing the notification named [UIApplicationDidFinishLaunchingNotification](../uiapplication/didfinishlaunchingnotification.md) and accessing the notification’s [userInfo](../../foundation/nsnotification/userinfo.md) dictionary. The system sends that notification shortly after this method returns.

The system combines the return result from this method with the return result from the [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) method to determine whether to handle a URL. If either method returns [false](https://developer.apple.com/documentation/swift/false), the system doesn’t handle the URL. If you don’t implement one of the methods, the system only considers the return value of the implemented method.

## See Also

### Related Documentation

- [applicationDidEnterBackground:](applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationDidBecomeActive:](applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.

### Initializing the app

- [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process has begun.
- [UIApplicationLaunchOptionsKey](../uiapplication/launchoptionskey.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.
- [UIApplicationDidFinishLaunchingNotification](../uiapplication/didfinishlaunchingnotification.md): A notification that posts immediately after the app finishes launching.
