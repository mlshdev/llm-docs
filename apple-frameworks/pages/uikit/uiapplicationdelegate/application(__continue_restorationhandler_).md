> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:continue:restorationhandler:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:continue:restorationhandler:))

# application(\_:continue:restorationHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the data for continuing an activity is available.

> Use UIScene lifecycle and scene(\_:continue:) from UISceneDelegate instead.

## Declaration

```swift
optional func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([any UIUserActivityRestoring]?) -> Void) -> Bool
```

## Parameters

- `application`: The shared app object that controls and coordinates your app.
- `userActivity`: The activity object containing the data associated with the task the user was performing. Use the data to continue the user’s activity in your iOS app.
- `restorationHandler`: A block to execute if your app creates objects to perform the task the user was performing. Calling this block is optional and you can copy this block and call it at a later time. When calling a saved copy of the block, you must call it from the app’s main thread. This block has no return value and takes the following parameter:

  - **restorableObjects**: An array of objects that conform to [UIUserActivityRestoring](../uiuseractivityrestoring.md) that represent the objects you created or fetched in order to perform the operation. The system calls the [restoreUserActivityState(\_:)](../uiuseractivityrestoring/restoreuseractivitystate%28__%29.md) method of each object in the array to give it a chance to perform the operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to indicate that your app handled the activity or [false](https://developer.apple.com/documentation/swift/false) to let iOS know that your app didn’t handle the activity.

<a id="Discussion"></a>

## Discussion

The app calls this method when it receives data associated with a user activity, for example, when the user transfers an activity from a different device using Handoff.

Implement this method to update your iOS app so that the user can continue the activity from where they left off. If you don’t implement this method or if your implementation returns [false](https://developer.apple.com/documentation/swift/false), iOS tries to create a document for your app to open using a URL.

Calling the block in the `restorationHandler` is optional and only needed when specific objects are capable of continuing the activity.

This method isn’t called if either [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) or [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Handling-Activities-from-SiriKit"></a>

### Handling Activities from SiriKit

This method is called whenever your app is launched to handle a SiriKit intent. Update your app’s user interface based on the `userActivity` parameter. Your app should seamlessly continue the interaction that began in Siri.

By default, the intent provides an [NSUserActivity](../../foundation/nsuseractivity.md) object whose [interaction](../../foundation/nsuseractivity/interaction.md) property contains both the originating intent and your response. You can add additional, app-specific information by creating a new [NSUserActivity](../../foundation/nsuseractivity.md) object in your intent’s `confirm` or `handle` method and adding your data to the activity’s [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary.

When continuing activities from SiriKit:

- Look for the intent specified in the [interaction](../../foundation/nsuseractivity/interaction.md) property. Resume handling this intent in your app.
- Avoid accidentally repeating actions (such as making double payments). For example, check the [INInteraction](../../intents/ininteraction.md) object’s [intentResponse](../../intents/ininteraction/intentresponse.md) property to see if the action has already been completed.

Intents may launch your app under the following circumstances:

- Some intents always launch the app after the intent is successfully handled (for example, intents with a `continueInApp` response code).
- Your intent’s `handle` and `confirm` methods launch the app when you resolve the intent with a `failureRequiringAppLaunch` (or similar) response code.
- The user can always decide to launch the app at any point in a Siri transaction.

## See Also

### Continuing user activity and handling quick actions

- [application(\_:willContinueUserActivityWithType:)](application%28__willcontinueuseractivitywithtype_%29.md): Deprecated. Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.
- [application(\_:didUpdate:)](application%28__didupdate_%29.md): Deprecated. Tells the delegate that the activity was updated.
- [application(\_:didFailToContinueUserActivityWithType:error:)](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Deprecated. Tells the delegate that the activity couldn’t be continued.
- [application(\_:performActionFor:completionHandler:)](application%28__performactionfor_completionhandler_%29.md): Deprecated. Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.

# application:continueUserActivity:restorationHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the data for continuing an activity is available.

> Use UIScene lifecycle and scene(\_:continue:) from UISceneDelegate instead.

## Declaration

```objectivec
- (BOOL) application:(UIApplication *) application continueUserActivity:(NSUserActivity *) userActivity restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> *restorableObjects)) restorationHandler;
```

## Parameters

- `application`: The shared app object that controls and coordinates your app.
- `userActivity`: The activity object containing the data associated with the task the user was performing. Use the data to continue the user’s activity in your iOS app.
- `restorationHandler`: A block to execute if your app creates objects to perform the task the user was performing. Calling this block is optional and you can copy this block and call it at a later time. When calling a saved copy of the block, you must call it from the app’s main thread. This block has no return value and takes the following parameter:

  - **restorableObjects**: An array of objects that conform to [UIUserActivityRestoring](../uiuseractivityrestoring.md) that represent the objects you created or fetched in order to perform the operation. The system calls the [restoreUserActivityState:](../uiuseractivityrestoring/restoreuseractivitystate%28__%29.md) method of each object in the array to give it a chance to perform the operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to indicate that your app handled the activity or [false](https://developer.apple.com/documentation/swift/false) to let iOS know that your app didn’t handle the activity.

<a id="Discussion"></a>

## Discussion

The app calls this method when it receives data associated with a user activity, for example, when the user transfers an activity from a different device using Handoff.

Implement this method to update your iOS app so that the user can continue the activity from where they left off. If you don’t implement this method or if your implementation returns [false](https://developer.apple.com/documentation/swift/false), iOS tries to create a document for your app to open using a URL.

Calling the block in the `restorationHandler` is optional and only needed when specific objects are capable of continuing the activity.

This method isn’t called if either [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) or [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Handling-Activities-from-SiriKit"></a>

### Handling Activities from SiriKit

This method is called whenever your app is launched to handle a SiriKit intent. Update your app’s user interface based on the `userActivity` parameter. Your app should seamlessly continue the interaction that began in Siri.

By default, the intent provides an [NSUserActivity](../../foundation/nsuseractivity.md) object whose [interaction](../../foundation/nsuseractivity/interaction.md) property contains both the originating intent and your response. You can add additional, app-specific information by creating a new [NSUserActivity](../../foundation/nsuseractivity.md) object in your intent’s `confirm` or `handle` method and adding your data to the activity’s [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary.

When continuing activities from SiriKit:

- Look for the intent specified in the [interaction](../../foundation/nsuseractivity/interaction.md) property. Resume handling this intent in your app.
- Avoid accidentally repeating actions (such as making double payments). For example, check the [INInteraction](../../intents/ininteraction.md) object’s [intentResponse](../../intents/ininteraction/intentresponse.md) property to see if the action has already been completed.

Intents may launch your app under the following circumstances:

- Some intents always launch the app after the intent is successfully handled (for example, intents with a `continueInApp` response code).
- Your intent’s `handle` and `confirm` methods launch the app when you resolve the intent with a `failureRequiringAppLaunch` (or similar) response code.
- The user can always decide to launch the app at any point in a Siri transaction.

## See Also

### Continuing user activity and handling quick actions

- [application:willContinueUserActivityWithType:](application%28__willcontinueuseractivitywithtype_%29.md): Deprecated. Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.
- [application:didUpdateUserActivity:](application%28__didupdate_%29.md): Deprecated. Tells the delegate that the activity was updated.
- [application:didFailToContinueUserActivityWithType:error:](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Deprecated. Tells the delegate that the activity couldn’t be continued.
- [application:performActionForShortcutItem:completionHandler:](application%28__performactionfor_completionhandler_%29.md): Deprecated. Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.
