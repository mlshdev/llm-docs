> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/restoreuseractivitystate(_:)](https://developer.apple.com/documentation/uikit/uidocument/restoreuseractivitystate(_:))

# restoreUserActivityState(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Restores the state needed to continue the given user activity.

## Declaration

```swift
func restoreUserActivityState(_ userActivity: NSUserActivity)
```

## Parameters

- `userActivity`: The user activity to be continued.

<a id="Discussion"></a>

## Discussion

Subclasses override this method to restore the responder’s state with the given user activity. The override should use the state data contained in the `userInfo` dictionary of the given user activity to restore the object.

The system can restore user activities that [UIDocument](../uidocument.md) manages automatically, if you return [false](https://developer.apple.com/documentation/swift/false) from [application(\_:continue:restorationHandler:)](../uiapplicationdelegate/application%28__continue_restorationhandler_%29.md) or if you don’t implement the method. In this situation, the [UIDocumentViewController](../uidocumentviewcontroller.md) method [openDocument(completionHandler:)](../uidocumentviewcontroller/opendocument%28completionhandler_%29.md) opens the document, and calls [restoreUserActivityState(\_:)](restoreuseractivitystate%28__%29.md).

## See Also

### Supporting user activities

- [userActivity](useractivity.md): An object encapsulating a user activity supported by this document.
- [updateUserActivityState(\_:)](updateuseractivitystate%28__%29.md): Updates the state of the given user activity.

# restoreUserActivityState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Restores the state needed to continue the given user activity.

## Declaration

```objectivec
- (void) restoreUserActivityState:(NSUserActivity *) userActivity;
```

## Parameters

- `userActivity`: The user activity to be continued.

<a id="Discussion"></a>

## Discussion

Subclasses override this method to restore the responder’s state with the given user activity. The override should use the state data contained in the `userInfo` dictionary of the given user activity to restore the object.

The system can restore user activities that [UIDocument](../uidocument.md) manages automatically, if you return [false](https://developer.apple.com/documentation/swift/false) from [application:continueUserActivity:restorationHandler:](../uiapplicationdelegate/application%28__continue_restorationhandler_%29.md) or if you don’t implement the method. In this situation, the [UIDocumentViewController](../uidocumentviewcontroller.md) method [openDocumentWithCompletionHandler:](../uidocumentviewcontroller/opendocument%28completionhandler_%29.md) opens the document, and calls [restoreUserActivityState:](restoreuseractivitystate%28__%29.md).

## See Also

### Supporting user activities

- [userActivity](useractivity.md): An object encapsulating a user activity supported by this document.
- [updateUserActivityState:](updateuseractivitystate%28__%29.md): Updates the state of the given user activity.
