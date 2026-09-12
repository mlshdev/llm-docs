> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:didfailtocontinueuseractivitywithtype:error:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:didfailtocontinueuseractivitywithtype:error:))

# application(\_:didFailToContinueUserActivityWithType:error:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app couldn’t continue the specified activity.

## Declaration

```swift
@MainActor optional func application(_ application: NSApplication, didFailToContinueUserActivityWithType userActivityType: String, error: any Error)
```

## Parameters

- `application`: The app that attempted to continue the activity.
- `userActivityType`: The activity type that was attempted.
- `error`: An error object indicating the reason for the failure.

<a id="Discussion"></a>

## Discussion

Use this method to let the user know that the specified activity could not be continued. If you do not implement this method, AppKit displays an error to the user with an appropriate message about the reason for the failure.

## See Also

### Continuing User Activities

- [application(\_:willContinueUserActivityWithType:)](application%28__willcontinueuseractivitywithtype_%29.md): Returns a Boolean value that indicates if the app can continue the specified activity.
- [application(\_:continue:restorationHandler:)](application%28__continue_restorationhandler_%29.md): Returns a Boolean value that indicates if the app successfully recreates the specified activity.
- [application(\_:didUpdate:)](application%28__didupdate_%29.md): Tells the delegate that there are changes to the specified activity.

# application:didFailToContinueUserActivityWithType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app couldn’t continue the specified activity.

## Declaration

```objectivec
- (void) application:(NSApplication *) application didFailToContinueUserActivityWithType:(NSString *) userActivityType error:(NSError *) error;
```

## Parameters

- `application`: The app that attempted to continue the activity.
- `userActivityType`: The activity type that was attempted.
- `error`: An error object indicating the reason for the failure.

<a id="Discussion"></a>

## Discussion

Use this method to let the user know that the specified activity could not be continued. If you do not implement this method, AppKit displays an error to the user with an appropriate message about the reason for the failure.

## See Also

### Continuing User Activities

- [application:willContinueUserActivityWithType:](application%28__willcontinueuseractivitywithtype_%29.md): Returns a Boolean value that indicates if the app can continue the specified activity.
- [application:continueUserActivity:restorationHandler:](application%28__continue_restorationhandler_%29.md): Returns a Boolean value that indicates if the app successfully recreates the specified activity.
- [application:didUpdateUserActivity:](application%28__didupdate_%29.md): Tells the delegate that there are changes to the specified activity.
