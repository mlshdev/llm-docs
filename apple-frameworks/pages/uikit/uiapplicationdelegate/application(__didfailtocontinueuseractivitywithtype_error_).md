> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:didfailtocontinueuseractivitywithtype:error:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:didfailtocontinueuseractivitywithtype:error:))

# application(\_:didFailToContinueUserActivityWithType:error:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the activity couldn’t be continued.

> Use UIScene lifecycle and scene(\_:didFailToContinueUserActivityWithType:error:) from UISceneDelegate instead.

## Declaration

```swift
optional func application(_ application: UIApplication, didFailToContinueUserActivityWithType userActivityType: String, error: any Error)
```

## Parameters

- `application`: Your shared app object.
- `userActivityType`: The activity type that was attempted.
- `error`: An error object indicating the reason for the failure.

<a id="Discussion"></a>

## Discussion

Use this method to let the user know that the specified activity could not be continued. If you do not implement this method, UIKit displays an error to the user with an appropriate message about the reason for the failure.

This method is not called if either [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) or [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Continuing user activity and handling quick actions

- [application(\_:willContinueUserActivityWithType:)](application%28__willcontinueuseractivitywithtype_%29.md): Deprecated. Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.
- [application(\_:continue:restorationHandler:)](application%28__continue_restorationhandler_%29.md): Deprecated. Tells the delegate that the data for continuing an activity is available.
- [application(\_:didUpdate:)](application%28__didupdate_%29.md): Deprecated. Tells the delegate that the activity was updated.
- [application(\_:performActionFor:completionHandler:)](application%28__performactionfor_completionhandler_%29.md): Deprecated. Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.

# application:didFailToContinueUserActivityWithType:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the activity couldn’t be continued.

> Use UIScene lifecycle and scene(\_:didFailToContinueUserActivityWithType:error:) from UISceneDelegate instead.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didFailToContinueUserActivityWithType:(NSString *) userActivityType error:(NSError *) error;
```

## Parameters

- `application`: Your shared app object.
- `userActivityType`: The activity type that was attempted.
- `error`: An error object indicating the reason for the failure.

<a id="Discussion"></a>

## Discussion

Use this method to let the user know that the specified activity could not be continued. If you do not implement this method, UIKit displays an error to the user with an appropriate message about the reason for the failure.

This method is not called if either [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) or [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Continuing user activity and handling quick actions

- [application:willContinueUserActivityWithType:](application%28__willcontinueuseractivitywithtype_%29.md): Deprecated. Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.
- [application:continueUserActivity:restorationHandler:](application%28__continue_restorationhandler_%29.md): Deprecated. Tells the delegate that the data for continuing an activity is available.
- [application:didUpdateUserActivity:](application%28__didupdate_%29.md): Deprecated. Tells the delegate that the activity was updated.
- [application:performActionForShortcutItem:completionHandler:](application%28__performactionfor_completionhandler_%29.md): Deprecated. Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.
