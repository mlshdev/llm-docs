> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:willcontinueuseractivitywithtype:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:willcontinueuseractivitywithtype:))

# application(\_:willContinueUserActivityWithType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.

> Use UIScene lifecycle and scene(\_:willContinueUserActivityWithType:) from UISceneDelegate instead.

## Declaration

```swift
optional func application(_ application: UIApplication, willContinueUserActivityWithType userActivityType: String) -> Bool
```

## Parameters

- `application`: Your shared app object.
- `userActivityType`: The requested activity type.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want to notify the user that a continuation is in progress or [false](https://developer.apple.com/documentation/swift/false) if you want iOS to notify the user.

<a id="Discussion"></a>

## Discussion

Use this method to provide immediate feedback to the user that an activity is about to continue on this device. The app calls this method as soon as the user confirms that an activity should be continued but possibly before the data associated with that activity is available.

Your implementation of this method should prepare to initiate the activity. If you notify the user as part of your preparations, return [true](https://developer.apple.com/documentation/swift/true) from this method so that iOS does not also notify the user. If you do not implement this method or your implementation returns [false](https://developer.apple.com/documentation/swift/false), iOS notifes the user.

This method is not called if either [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) or [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Continuing user activity and handling quick actions

- [application(\_:continue:restorationHandler:)](application%28__continue_restorationhandler_%29.md): Deprecated. Tells the delegate that the data for continuing an activity is available.
- [application(\_:didUpdate:)](application%28__didupdate_%29.md): Deprecated. Tells the delegate that the activity was updated.
- [application(\_:didFailToContinueUserActivityWithType:error:)](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Deprecated. Tells the delegate that the activity couldn’t be continued.
- [application(\_:performActionFor:completionHandler:)](application%28__performactionfor_completionhandler_%29.md): Deprecated. Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.

# application:willContinueUserActivityWithType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.

> Use UIScene lifecycle and scene(\_:willContinueUserActivityWithType:) from UISceneDelegate instead.

## Declaration

```objectivec
- (BOOL) application:(UIApplication *) application willContinueUserActivityWithType:(NSString *) userActivityType;
```

## Parameters

- `application`: Your shared app object.
- `userActivityType`: The requested activity type.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want to notify the user that a continuation is in progress or [false](https://developer.apple.com/documentation/swift/false) if you want iOS to notify the user.

<a id="Discussion"></a>

## Discussion

Use this method to provide immediate feedback to the user that an activity is about to continue on this device. The app calls this method as soon as the user confirms that an activity should be continued but possibly before the data associated with that activity is available.

Your implementation of this method should prepare to initiate the activity. If you notify the user as part of your preparations, return [true](https://developer.apple.com/documentation/swift/true) from this method so that iOS does not also notify the user. If you do not implement this method or your implementation returns [false](https://developer.apple.com/documentation/swift/false), iOS notifes the user.

This method is not called if either [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) or [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Continuing user activity and handling quick actions

- [application:continueUserActivity:restorationHandler:](application%28__continue_restorationhandler_%29.md): Deprecated. Tells the delegate that the data for continuing an activity is available.
- [application:didUpdateUserActivity:](application%28__didupdate_%29.md): Deprecated. Tells the delegate that the activity was updated.
- [application:didFailToContinueUserActivityWithType:error:](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Deprecated. Tells the delegate that the activity couldn’t be continued.
- [application:performActionForShortcutItem:completionHandler:](application%28__performactionfor_completionhandler_%29.md): Deprecated. Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.
