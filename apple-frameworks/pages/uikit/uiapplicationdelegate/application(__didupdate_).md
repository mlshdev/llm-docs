> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:didupdate:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:didupdate:))

# application(\_:didUpdate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the activity was updated.

> Use UIScene lifecycle and scene(\_:didUpdate) from UISceneDelegate instead.

## Declaration

```swift
optional func application(_ application: UIApplication, didUpdate userActivity: NSUserActivity)
```

## Parameters

- `application`: Your shared app object.
- `userActivity`: The activity object containing the data associated with the task the user was performing.

<a id="Discussion"></a>

## Discussion

This method is called on the main thread when a user activity managed by UIKit has been updated. You can implement this method as a final opportunity to add data to the user activity object.

## See Also

### Continuing user activity and handling quick actions

- [application(\_:willContinueUserActivityWithType:)](application%28__willcontinueuseractivitywithtype_%29.md): Deprecated. Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.
- [application(\_:continue:restorationHandler:)](application%28__continue_restorationhandler_%29.md): Deprecated. Tells the delegate that the data for continuing an activity is available.
- [application(\_:didFailToContinueUserActivityWithType:error:)](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Deprecated. Tells the delegate that the activity couldn’t be continued.
- [application(\_:performActionFor:completionHandler:)](application%28__performactionfor_completionhandler_%29.md): Deprecated. Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.

# application:didUpdateUserActivity: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Tells the delegate that the activity was updated.

> Use UIScene lifecycle and scene(\_:didUpdate) from UISceneDelegate instead.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didUpdateUserActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `application`: Your shared app object.
- `userActivity`: The activity object containing the data associated with the task the user was performing.

<a id="Discussion"></a>

## Discussion

This method is called on the main thread when a user activity managed by UIKit has been updated. You can implement this method as a final opportunity to add data to the user activity object.

## See Also

### Continuing user activity and handling quick actions

- [application:willContinueUserActivityWithType:](application%28__willcontinueuseractivitywithtype_%29.md): Deprecated. Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.
- [application:continueUserActivity:restorationHandler:](application%28__continue_restorationhandler_%29.md): Deprecated. Tells the delegate that the data for continuing an activity is available.
- [application:didFailToContinueUserActivityWithType:error:](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Deprecated. Tells the delegate that the activity couldn’t be continued.
- [application:performActionForShortcutItem:completionHandler:](application%28__performactionfor_completionhandler_%29.md): Deprecated. Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.
