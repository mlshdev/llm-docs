> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:didupdate:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:didupdate:))

# application(\_:didUpdate:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that there are changes to the specified activity.

## Declaration

```swift
@MainActor optional func application(_ application: NSApplication, didUpdate userActivity: NSUserActivity)
```

## Parameters

- `application`: The shared app object.
- `userActivity`: The user activity object that was updated.

<a id="Discussion"></a>

## Discussion

This method is called when any user activity managed by AppKit has been updated. Use this as a last chance to add additional data to the user activity object.

## See Also

### Continuing User Activities

- [application(\_:willContinueUserActivityWithType:)](application%28__willcontinueuseractivitywithtype_%29.md): Returns a Boolean value that indicates if the app can continue the specified activity.
- [application(\_:continue:restorationHandler:)](application%28__continue_restorationhandler_%29.md): Returns a Boolean value that indicates if the app successfully recreates the specified activity.
- [application(\_:didFailToContinueUserActivityWithType:error:)](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the app couldn’t continue the specified activity.

# application:didUpdateUserActivity: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that there are changes to the specified activity.

## Declaration

```objectivec
- (void) application:(NSApplication *) application didUpdateUserActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `application`: The shared app object.
- `userActivity`: The user activity object that was updated.

<a id="Discussion"></a>

## Discussion

This method is called when any user activity managed by AppKit has been updated. Use this as a last chance to add additional data to the user activity object.

## See Also

### Continuing User Activities

- [application:willContinueUserActivityWithType:](application%28__willcontinueuseractivitywithtype_%29.md): Returns a Boolean value that indicates if the app can continue the specified activity.
- [application:continueUserActivity:restorationHandler:](application%28__continue_restorationhandler_%29.md): Returns a Boolean value that indicates if the app successfully recreates the specified activity.
- [application:didFailToContinueUserActivityWithType:error:](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the app couldn’t continue the specified activity.
