> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:continue:restorationhandler:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:continue:restorationhandler:))

# application(\_:continue:restorationHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns a Boolean value that indicates if the app successfully recreates the specified activity.

## Declaration

```swift
@MainActor optional func application(_ application: NSApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([any NSUserActivityRestoring]) -> Void) -> Bool
```

## Parameters

- `application`: The app continuing the user activity.
- `userActivity`: The activity object containing the data associated with the task the user was performing. Use the data in this object to recreate what the user was doing.
- `restorationHandler`: A block to execute if your app creates or fetches objects to perform the task. Calling this block is optional and is only needed when specific objects are capable of continuing the activity. You can copy this block and call it at a later time. When calling a saved copy of the block, you must call it from the app’s main thread. This block has no return value and takes the following parameter:

  - **`restorableObjects`**: An array of [NSResponder](../nsresponder.md) or [NSDocument](../nsdocument.md) objects that you created or fetched in order to perform the operation. The system calls the [restoreUserActivityState(\_:)](../nsuseractivityrestoring/restoreuseractivitystate%28__%29.md) method of each object in the array to perform the operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this method handled continuing the activity; [false](https://developer.apple.com/documentation/swift/false) to have AppKit attempt to continue the activity.

<a id="Discussion"></a>

## Discussion

The app calls this method when it receives the data associated with the user activity. Use the data stored in the `NSUserActivity` object to re-create the user’s activity. This method is your opportunity to update your app so that it can perform the associated task.

If this user activity object was created automatically by having `NSUbiquitousDocumentUserActivityType` in a `CFBundleDocumentTypes` entry, AppKit can automatically restore the [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) in macOS if this method returns [false](https://developer.apple.com/documentation/swift/false), or if it is unimplemented. It does this by creating a document of the appropriate type using the URL stored in the [userInfo](https://developer.apple.com/documentation/foundation/nsuseractivity/userinfo) dictionary under the `NSUserActivityDocumentURLKey`. The system calls the [NSDocument](../nsdocument.md) method [restoreUserActivityState(\_:)](../nsuseractivityrestoring/restoreuseractivitystate%28__%29.md) on the document.

## See Also

### Continuing User Activities

- [application(\_:willContinueUserActivityWithType:)](application%28__willcontinueuseractivitywithtype_%29.md): Returns a Boolean value that indicates if the app can continue the specified activity.
- [application(\_:didFailToContinueUserActivityWithType:error:)](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the app couldn’t continue the specified activity.
- [application(\_:didUpdate:)](application%28__didupdate_%29.md): Tells the delegate that there are changes to the specified activity.

# application:continueUserActivity:restorationHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns a Boolean value that indicates if the app successfully recreates the specified activity.

## Declaration

```objectivec
- (BOOL) application:(NSApplication *) application continueUserActivity:(NSUserActivity *) userActivity restorationHandler:(void (^)(NSArray<id<NSUserActivityRestoring>> *restorableObjects)) restorationHandler;
```

## Parameters

- `application`: The app continuing the user activity.
- `userActivity`: The activity object containing the data associated with the task the user was performing. Use the data in this object to recreate what the user was doing.
- `restorationHandler`: A block to execute if your app creates or fetches objects to perform the task. Calling this block is optional and is only needed when specific objects are capable of continuing the activity. You can copy this block and call it at a later time. When calling a saved copy of the block, you must call it from the app’s main thread. This block has no return value and takes the following parameter:

  - **`restorableObjects`**: An array of [NSResponder](../nsresponder.md) or [NSDocument](../nsdocument.md) objects that you created or fetched in order to perform the operation. The system calls the [restoreUserActivityState:](../nsuseractivityrestoring/restoreuseractivitystate%28__%29.md) method of each object in the array to perform the operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this method handled continuing the activity; [false](https://developer.apple.com/documentation/swift/false) to have AppKit attempt to continue the activity.

<a id="Discussion"></a>

## Discussion

The app calls this method when it receives the data associated with the user activity. Use the data stored in the `NSUserActivity` object to re-create the user’s activity. This method is your opportunity to update your app so that it can perform the associated task.

If this user activity object was created automatically by having `NSUbiquitousDocumentUserActivityType` in a `CFBundleDocumentTypes` entry, AppKit can automatically restore the [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) in macOS if this method returns [false](https://developer.apple.com/documentation/swift/false), or if it is unimplemented. It does this by creating a document of the appropriate type using the URL stored in the [userInfo](https://developer.apple.com/documentation/foundation/nsuseractivity/userinfo) dictionary under the `NSUserActivityDocumentURLKey`. The system calls the [NSDocument](../nsdocument.md) method [restoreUserActivityState:](../nsuseractivityrestoring/restoreuseractivitystate%28__%29.md) on the document.

## See Also

### Continuing User Activities

- [application:willContinueUserActivityWithType:](application%28__willcontinueuseractivitywithtype_%29.md): Returns a Boolean value that indicates if the app can continue the specified activity.
- [application:didFailToContinueUserActivityWithType:error:](application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the app couldn’t continue the specified activity.
- [application:didUpdateUserActivity:](application%28__didupdate_%29.md): Tells the delegate that there are changes to the specified activity.
