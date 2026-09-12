> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:willfinishlaunchingwithoptions:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:willfinishlaunchingwithoptions:))

# application(\_:willFinishLaunchingWithOptions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the launch process has begun.

## Declaration

```swift
optional func application(_ application: UIApplication, willFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool
```

## Parameters

- `application`: The singleton app object.
- `launchOptions`: A dictionary indicating the reason the person or system launched the app. The contents of this dictionary may be empty in situations where a person launched the app directly. If the app supports scenes, this is `nil`. For information about the possible keys in this dictionary and how to handle them, see [UIApplication.LaunchOptionsKey](../uiapplication/launchoptionskey.md).

<a id="return-value"></a>

## Return Value

Return [false](https://developer.apple.com/documentation/swift/false) if the app can’t handle the URL resource or continue a user activity, or if the app doesn’t need to perform the [application(\_:performActionFor:completionHandler:)](application%28__performactionfor_completionhandler_%29.md) method because you’re handling the invocation of a Home Screen quick action in this method; otherwise return [true](https://developer.apple.com/documentation/swift/true). The system ignores the return value if the app launches as a result of a remote notification.

## Mentioned In

- [About the app launch sequence](../about-the-app-launch-sequence.md)
- [Performing one-time setup for your app](../performing-one-time-setup-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Use this method (and the corresponding [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) method) to initialize your app and prepare it to run. In an app that doesn’t support scenes, the system calls this method after your app launches and loads its main storyboard or nib file, but before restoring your app’s state. When the system calls this method, your app is in the inactive state.

If the system launched your app for a specific reason, the `launchOptions` dictionary contains data indicating the reason for the launch. For some launch reasons, the system may call additional methods of your app delegate. For example, if your app launched to open a URL, the system calls the [application(\_:open:options:)](application%28__open_options_%29.md) method after your app finishes initializing itself. The presence of the launch keys gives you the opportunity to plan for that behavior. In the case of a URL to open, you might want to prevent state restoration if the URL represents a document that the person wanted to open.

When the system asks to open a URL, the system combines the return result from this method with the return result from the [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) method to determine whether to handle a URL. If either method returns [false](https://developer.apple.com/documentation/swift/false), the system doesn’t call the [application(\_:open:options:)](application%28__open_options_%29.md) method. If you don’t implement one of the methods, the system only considers the return value of the implemented method.

In some cases, a person launches your app with a Home Screen quick action. To ensure you handle this launch case correctly, read the discussion in the [application(\_:performActionFor:completionHandler:)](application%28__performactionfor_completionhandler_%29.md) method.

> **Important**

>  If your app relies on the state restoration machinery to restore its view controllers, always show your app’s window from this method. Do not show the window in your app’s [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) method. Calling the window’s [makeKeyAndVisible()](../uiwindow/makekeyandvisible%28%29.md) method does not make the window visible right away anyway. UIKit waits until your app’s [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) method finishes before making the window visible on the screen.

## See Also

### Initializing the app

- [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [UIApplication.LaunchOptionsKey](../uiapplication/launchoptionskey.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.
- [didFinishLaunchingNotification](../uiapplication/didfinishlaunchingnotification.md): A notification that posts immediately after the app finishes launching.

# application:willFinishLaunchingWithOptions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the launch process has begun.

## Declaration

```objectivec
- (BOOL) application:(UIApplication *) application willFinishLaunchingWithOptions:(NSDictionary<NSString *,id> *) launchOptions;
```

## Parameters

- `application`: The singleton app object.
- `launchOptions`: A dictionary indicating the reason the person or system launched the app. The contents of this dictionary may be empty in situations where a person launched the app directly. If the app supports scenes, this is `nil`. For information about the possible keys in this dictionary and how to handle them, see [UIApplicationLaunchOptionsKey](../uiapplication/launchoptionskey.md).

<a id="return-value"></a>

## Return Value

Return [false](https://developer.apple.com/documentation/swift/false) if the app can’t handle the URL resource or continue a user activity, or if the app doesn’t need to perform the [application:performActionForShortcutItem:completionHandler:](application%28__performactionfor_completionhandler_%29.md) method because you’re handling the invocation of a Home Screen quick action in this method; otherwise return [true](https://developer.apple.com/documentation/swift/true). The system ignores the return value if the app launches as a result of a remote notification.

## Mentioned In

- [About the app launch sequence](../about-the-app-launch-sequence.md)
- [Performing one-time setup for your app](../performing-one-time-setup-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Use this method (and the corresponding [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) method) to initialize your app and prepare it to run. In an app that doesn’t support scenes, the system calls this method after your app launches and loads its main storyboard or nib file, but before restoring your app’s state. When the system calls this method, your app is in the inactive state.

If the system launched your app for a specific reason, the `launchOptions` dictionary contains data indicating the reason for the launch. For some launch reasons, the system may call additional methods of your app delegate. For example, if your app launched to open a URL, the system calls the [application:openURL:options:](application%28__open_options_%29.md) method after your app finishes initializing itself. The presence of the launch keys gives you the opportunity to plan for that behavior. In the case of a URL to open, you might want to prevent state restoration if the URL represents a document that the person wanted to open.

When the system asks to open a URL, the system combines the return result from this method with the return result from the [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) method to determine whether to handle a URL. If either method returns [false](https://developer.apple.com/documentation/swift/false), the system doesn’t call the [application:openURL:options:](application%28__open_options_%29.md) method. If you don’t implement one of the methods, the system only considers the return value of the implemented method.

In some cases, a person launches your app with a Home Screen quick action. To ensure you handle this launch case correctly, read the discussion in the [application:performActionForShortcutItem:completionHandler:](application%28__performactionfor_completionhandler_%29.md) method.

> **Important**

>  If your app relies on the state restoration machinery to restore its view controllers, always show your app’s window from this method. Do not show the window in your app’s [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) method. Calling the window’s [makeKeyAndVisible](../uiwindow/makekeyandvisible%28%29.md) method does not make the window visible right away anyway. UIKit waits until your app’s [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) method finishes before making the window visible on the screen.

## See Also

### Initializing the app

- [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [UIApplicationLaunchOptionsKey](../uiapplication/launchoptionskey.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.
- [UIApplicationDidFinishLaunchingNotification](../uiapplication/didfinishlaunchingnotification.md): A notification that posts immediately after the app finishes launching.
