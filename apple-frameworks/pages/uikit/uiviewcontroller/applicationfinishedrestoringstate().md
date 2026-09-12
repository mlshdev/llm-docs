> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/applicationfinishedrestoringstate()](https://developer.apple.com/documentation/uikit/uiviewcontroller/applicationfinishedrestoringstate())

# applicationFinishedRestoringState() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called on restored view controllers after other object decoding is complete.

## Declaration

```swift
func applicationFinishedRestoringState()
```

<a id="Discussion"></a>

## Discussion

After other object decoding has completed, the system calls this method. This allows a view controller to complete setup after other state restoration, relying on the system to ensure that the states of all objects from the restoration archive have been decoded.

## See Also

### Managing state restoration

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [restorationIdentifier](restorationidentifier.md): The identifier that determines whether the view controller supports state restoration.
- [restorationClass](restorationclass.md): The class responsible for recreating this view controller when restoring the app’s state.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Encodes state-related information for the view controller.
- [decodeRestorableState(with:)](decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the view controller.

# applicationFinishedRestoringState (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Called on restored view controllers after other object decoding is complete.

## Declaration

```objectivec
- (void) applicationFinishedRestoringState;
```

<a id="Discussion"></a>

## Discussion

After other object decoding has completed, the system calls this method. This allows a view controller to complete setup after other state restoration, relying on the system to ensure that the states of all objects from the restoration archive have been decoded.

## See Also

### Managing state restoration

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [restorationIdentifier](restorationidentifier.md): The identifier that determines whether the view controller supports state restoration.
- [restorationClass](restorationclass.md): The class responsible for recreating this view controller when restoring the app’s state.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Encodes state-related information for the view controller.
- [decodeRestorableStateWithCoder:](decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the view controller.
