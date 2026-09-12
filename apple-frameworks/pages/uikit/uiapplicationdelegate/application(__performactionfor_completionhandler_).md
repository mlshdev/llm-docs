> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:performactionfor:completionhandler:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:performactionfor:completionhandler:))

# application(\_:performActionFor:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.

> Use UIScene lifecycle and windowScene(\_:performActionFor:completionHandler:) from UIWindowSceneDelegate instead.

## Declaration

```swift
optional func application(_ application: UIApplication, performActionFor shortcutItem: UIApplicationShortcutItem, completionHandler: @escaping (Bool) -> Void)
```

```swift
optional func application(_ application: UIApplication, performActionFor shortcutItem: UIApplicationShortcutItem) async -> Bool
```

## Parameters

- `application`: Your shared app object.
- `shortcutItem`: The quick action for which you’re providing an implementation in this method.
- `completionHandler`: The block you call after your quick action implementation completes, returning [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false) depending on the success or failure of your implementation code.

  - **succeeded**: A Boolean value that indicates whether or not your implementation succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method is not called for scene-based apps. If you have a scene-based app, implement [windowScene(\_:performActionFor:completionHandler:)](../uiwindowscenedelegate/windowscene%28__performactionfor_completionhandler_%29.md) in your scene delegate instead.

Implement this method to respond to the user’s selection of a Home screen quick action for your app. When finished, call the completion handler, with an appropriate Boolean value.

It’s your responsibility to ensure the system calls this method conditionally, depending on whether or not one of your app launch methods ([application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) or [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md)) has already handled a quick action invocation. The system calls a launch method (before calling this method) when a user selects a quick action for your app and your app *launches* instead of *activating*.

The requested quick action might employ code paths different than those used otherwise when your app launches. For example, your app normally launches to display view A, but your app was launched in response to a quick action that needs view B. To handle such cases, upon launch, check whether your app is being launched via a quick action. Perform this check in your [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) or [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) method by checking for the [shortcutItem](../uiapplication/launchoptionskey/shortcutitem.md) launch option key. The [UIApplicationShortcutItem](../uiapplicationshortcutitem.md) object is available as the value of the launch option key.

If you find that your app was indeed launched using a quick action, perform the requested quick action within the launch method and return a value of [false](https://developer.apple.com/documentation/swift/false) from that method. When you return a value of [false](https://developer.apple.com/documentation/swift/false), the system doesn’t call the [application(\_:performActionFor:completionHandler:)](application%28__performactionfor_completionhandler_%29.md) method.

## See Also

### Continuing user activity and handling quick actions

- [application(\_:willContinueUserActivityWithType:)](application%28__willcontinueuseractivitywithtype_%29.md): Deprecated. Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.
- [application(\_:continue:restorationHandler:)](application%28__continue_restorationhandler_%29.md): Deprecated. Tells the delegate that the data for continuing an activity is available.
- [application(\_:didUpdate:)](application%28__didupdate_%29.md): Deprecated. Tells the delegate that the activity was updated.
- [application(\_:didFailToContinueUserActivityWithType:error:)](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Deprecated. Tells the delegate that the activity couldn’t be continued.

# application:performActionForShortcutItem:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.

> Use UIScene lifecycle and windowScene(\_:performActionFor:completionHandler:) from UIWindowSceneDelegate instead.

## Declaration

```objectivec
- (void) application:(UIApplication *) application performActionForShortcutItem:(UIApplicationShortcutItem *) shortcutItem completionHandler:(void (^)(BOOL succeeded)) completionHandler;
```

## Parameters

- `application`: Your shared app object.
- `shortcutItem`: The quick action for which you’re providing an implementation in this method.
- `completionHandler`: The block you call after your quick action implementation completes, returning [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false) depending on the success or failure of your implementation code.

  - **succeeded**: A Boolean value that indicates whether or not your implementation succeeded.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method is not called for scene-based apps. If you have a scene-based app, implement [windowScene:performActionForShortcutItem:completionHandler:](../uiwindowscenedelegate/windowscene%28__performactionfor_completionhandler_%29.md) in your scene delegate instead.

Implement this method to respond to the user’s selection of a Home screen quick action for your app. When finished, call the completion handler, with an appropriate Boolean value.

It’s your responsibility to ensure the system calls this method conditionally, depending on whether or not one of your app launch methods ([application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) or [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md)) has already handled a quick action invocation. The system calls a launch method (before calling this method) when a user selects a quick action for your app and your app *launches* instead of *activating*.

The requested quick action might employ code paths different than those used otherwise when your app launches. For example, your app normally launches to display view A, but your app was launched in response to a quick action that needs view B. To handle such cases, upon launch, check whether your app is being launched via a quick action. Perform this check in your [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) or [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) method by checking for the [UIApplicationLaunchOptionsShortcutItemKey](../uiapplication/launchoptionskey/shortcutitem.md) launch option key. The [UIApplicationShortcutItem](../uiapplicationshortcutitem.md) object is available as the value of the launch option key.

If you find that your app was indeed launched using a quick action, perform the requested quick action within the launch method and return a value of [false](https://developer.apple.com/documentation/swift/false) from that method. When you return a value of [false](https://developer.apple.com/documentation/swift/false), the system doesn’t call the [application:performActionForShortcutItem:completionHandler:](application%28__performactionfor_completionhandler_%29.md) method.

## See Also

### Continuing user activity and handling quick actions

- [application:willContinueUserActivityWithType:](application%28__willcontinueuseractivitywithtype_%29.md): Deprecated. Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.
- [application:continueUserActivity:restorationHandler:](application%28__continue_restorationhandler_%29.md): Deprecated. Tells the delegate that the data for continuing an activity is available.
- [application:didUpdateUserActivity:](application%28__didupdate_%29.md): Deprecated. Tells the delegate that the activity was updated.
- [application:didFailToContinueUserActivityWithType:error:](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Deprecated. Tells the delegate that the activity couldn’t be continued.
