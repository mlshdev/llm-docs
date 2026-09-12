> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/restoreuseractivitystate(_:)](https://developer.apple.com/documentation/uikit/uiresponder/restoreuseractivitystate(_:))

# restoreUserActivityState(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Restores the state needed to continue the given user activity.

## Declaration

```swift
func restoreUserActivityState(_ activity: NSUserActivity)
```

## Parameters

- `activity`: The user activity to be continued.

<a id="Discussion"></a>

## Discussion

Subclasses override this method to restore the responder’s state with the given user activity. The system calls it on any objects passed to the restoration handler given to [application(\_:continue:restorationHandler:)](../uiapplicationdelegate/application%28__continue_restorationhandler_%29.md). The override should use the state data contained in the given user activity’s `userInfo` dictionary to restore the object.

You may also call this method directly if the app delegate chooses not to use the restoration handler.

## See Also

### Supporting user activities

- [userActivity](useractivity.md): An object encapsulating a user activity supported by this responder.
- [updateUserActivityState(\_:)](updateuseractivitystate%28__%29.md): Updates the state of the given user activity.

# restoreUserActivityState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Restores the state needed to continue the given user activity.

## Declaration

```objectivec
- (void) restoreUserActivityState:(NSUserActivity *) activity;
```

## Parameters

- `activity`: The user activity to be continued.

<a id="Discussion"></a>

## Discussion

Subclasses override this method to restore the responder’s state with the given user activity. The system calls it on any objects passed to the restoration handler given to [application:continueUserActivity:restorationHandler:](../uiapplicationdelegate/application%28__continue_restorationhandler_%29.md). The override should use the state data contained in the given user activity’s `userInfo` dictionary to restore the object.

You may also call this method directly if the app delegate chooses not to use the restoration handler.

## See Also

### Supporting user activities

- [userActivity](useractivity.md): An object encapsulating a user activity supported by this responder.
- [updateUserActivityState:](updateuseractivitystate%28__%29.md): Updates the state of the given user activity.
