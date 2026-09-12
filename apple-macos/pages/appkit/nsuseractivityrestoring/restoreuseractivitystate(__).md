> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuseractivityrestoring/restoreuseractivitystate(_:)](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring/restoreuseractivitystate(_:))

# restoreUserActivityState(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Restores the state necessary to continue the specified user activity.

## Declaration

```swift
@MainActor func restoreUserActivityState(_ userActivity: NSUserActivity)
```

## Parameters

- `userActivity`: The user activity to continue.

<a id="Discussion"></a>

## Discussion

Implement this method to restore an object’s state using the specified user activity. The system calls this method on any responders or documents passed to the `restorationHandler` in [application(\_:continue:restorationHandler:)](../nsapplicationdelegate/application%28__continue_restorationhandler_%29.md). The system calls this method on the main thread. Your implementation should use the state data contained in the specified user activity’s [userInfo](https://developer.apple.com/documentation/foundation/nsuseractivity/userinfo) dictionary to restore the object.

On macOS, the system can automatically restore activities managed by [NSDocument](../nsdocument.md) if you don’t implement [application(\_:continue:restorationHandler:)](../nsapplicationdelegate/application%28__continue_restorationhandler_%29.md), or if you return [false](https://developer.apple.com/documentation/swift/false). When this occurs, the system opens the document using [openDocument(withContentsOf:display:completionHandler:)](../nsdocumentcontroller/opendocument%28withcontentsof_display_completionhandler_%29.md), and calls `restoreUserActivityState` on it.

# restoreUserActivityState: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Restores the state necessary to continue the specified user activity.

## Declaration

```objectivec
- (void) restoreUserActivityState:(NSUserActivity *) userActivity;
```

## Parameters

- `userActivity`: The user activity to continue.

<a id="Discussion"></a>

## Discussion

Implement this method to restore an object’s state using the specified user activity. The system calls this method on any responders or documents passed to the `restorationHandler` in [application:continueUserActivity:restorationHandler:](../nsapplicationdelegate/application%28__continue_restorationhandler_%29.md). The system calls this method on the main thread. Your implementation should use the state data contained in the specified user activity’s [userInfo](https://developer.apple.com/documentation/foundation/nsuseractivity/userinfo) dictionary to restore the object.

On macOS, the system can automatically restore activities managed by [NSDocument](../nsdocument.md) if you don’t implement [application:continueUserActivity:restorationHandler:](../nsapplicationdelegate/application%28__continue_restorationhandler_%29.md), or if you return [false](https://developer.apple.com/documentation/swift/false). When this occurs, the system opens the document using [openDocumentWithContentsOfURL:display:completionHandler:](../nsdocumentcontroller/opendocument%28withcontentsof_display_completionhandler_%29.md), and calls `restoreUserActivityState` on it.
