> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:willcontinueuseractivitywithtype:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:willcontinueuseractivitywithtype:))

# application(\_:willContinueUserActivityWithType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns a Boolean value that indicates if the app can continue the specified activity.

## Declaration

```swift
@MainActor optional func application(_ application: NSApplication, willContinueUserActivityWithType userActivityType: String) -> Bool
```

## Parameters

- `application`: The app continuing the user activity.
- `userActivityType`: The type of activity to be continued.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you notify the user that your app is about to continue the activity or [false](https://developer.apple.com/documentation/swift/false) if you want AppKit to notify the user.

<a id="Discussion"></a>

## Discussion

Use this method to provide immediate feedback to the user that an activity is about to continue on this device. The app calls this method as soon as the user confirms that an activity should be continued but possibly before the data associated with that activity is available.

This method is called on the main thread as soon as the user indicates they want to continue an activity in your app. The `NSUserActivity` object may not be available instantly, so use this as an opportunity to show the user that an activity will be continued shortly and return [true](https://developer.apple.com/documentation/swift/true). If you leave this method unimplemented or return [false](https://developer.apple.com/documentation/swift/false), AppKit displays a default indication.

For each invocation of this method, the app delegate is guaranteed to get exactly one invocation of [application(\_:continue:restorationHandler:)](application%28__continue_restorationhandler_%29.md) on success, or [application(\_:didFailToContinueUserActivityWithType:error:)](application%28__didfailtocontinueuseractivitywithtype_error_%29.md) if an error was encountered.

## See Also

### Continuing User Activities

- [application(\_:continue:restorationHandler:)](application%28__continue_restorationhandler_%29.md): Returns a Boolean value that indicates if the app successfully recreates the specified activity.
- [application(\_:didFailToContinueUserActivityWithType:error:)](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the app couldn’t continue the specified activity.
- [application(\_:didUpdate:)](application%28__didupdate_%29.md): Tells the delegate that there are changes to the specified activity.

# application:willContinueUserActivityWithType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns a Boolean value that indicates if the app can continue the specified activity.

## Declaration

```objectivec
- (BOOL) application:(NSApplication *) application willContinueUserActivityWithType:(NSString *) userActivityType;
```

## Parameters

- `application`: The app continuing the user activity.
- `userActivityType`: The type of activity to be continued.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you notify the user that your app is about to continue the activity or [false](https://developer.apple.com/documentation/swift/false) if you want AppKit to notify the user.

<a id="Discussion"></a>

## Discussion

Use this method to provide immediate feedback to the user that an activity is about to continue on this device. The app calls this method as soon as the user confirms that an activity should be continued but possibly before the data associated with that activity is available.

This method is called on the main thread as soon as the user indicates they want to continue an activity in your app. The `NSUserActivity` object may not be available instantly, so use this as an opportunity to show the user that an activity will be continued shortly and return [true](https://developer.apple.com/documentation/swift/true). If you leave this method unimplemented or return [false](https://developer.apple.com/documentation/swift/false), AppKit displays a default indication.

For each invocation of this method, the app delegate is guaranteed to get exactly one invocation of [application:continueUserActivity:restorationHandler:](application%28__continue_restorationhandler_%29.md) on success, or [application:didFailToContinueUserActivityWithType:error:](application%28__didfailtocontinueuseractivitywithtype_error_%29.md) if an error was encountered.

## See Also

### Continuing User Activities

- [application:continueUserActivity:restorationHandler:](application%28__continue_restorationhandler_%29.md): Returns a Boolean value that indicates if the app successfully recreates the specified activity.
- [application:didFailToContinueUserActivityWithType:error:](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the app couldn’t continue the specified activity.
- [application:didUpdateUserActivity:](application%28__didupdate_%29.md): Tells the delegate that there are changes to the specified activity.
