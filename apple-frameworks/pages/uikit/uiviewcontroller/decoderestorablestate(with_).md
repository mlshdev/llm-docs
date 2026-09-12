> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/decoderestorablestate(with:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/decoderestorablestate(with:))

# decodeRestorableState(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Decodes and restores state-related information for the view controller.

## Declaration

```swift
func decodeRestorableState(with coder: NSCoder)
```

## Parameters

- `coder`: The coder object to use to decode the state of the view.

## Mentioned In

- [About the UI restoration process](../about-the-ui-restoration-process.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly. The system calls this method during the state restoration process so that you can restore your view controller to its previous state.

If your app supports state restoration, override this method for any view controllers for which you also overrode the [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md) method. Your implementation of this method should use any saved state information to restore the view controller to its previous configuration. If your [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md) method called `super`, this method should similarly call `super` at some point in its implementation.

## See Also

### Managing state restoration

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [restorationIdentifier](restorationidentifier.md): The identifier that determines whether the view controller supports state restoration.
- [restorationClass](restorationclass.md): The class responsible for recreating this view controller when restoring the app’s state.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Encodes state-related information for the view controller.
- [applicationFinishedRestoringState()](applicationfinishedrestoringstate%28%29.md): Called on restored view controllers after other object decoding is complete.

# decodeRestorableStateWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decodes and restores state-related information for the view controller.

## Declaration

```objectivec
- (void) decodeRestorableStateWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder object to use to decode the state of the view.

## Mentioned In

- [About the UI restoration process](../about-the-ui-restoration-process.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly. The system calls this method during the state restoration process so that you can restore your view controller to its previous state.

If your app supports state restoration, override this method for any view controllers for which you also overrode the [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md) method. Your implementation of this method should use any saved state information to restore the view controller to its previous configuration. If your [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md) method called `super`, this method should similarly call `super` at some point in its implementation.

## See Also

### Managing state restoration

- [Restoring your app’s state](../restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [restorationIdentifier](restorationidentifier.md): The identifier that determines whether the view controller supports state restoration.
- [restorationClass](restorationclass.md): The class responsible for recreating this view controller when restoring the app’s state.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Encodes state-related information for the view controller.
- [applicationFinishedRestoringState](applicationfinishedrestoringstate%28%29.md): Called on restored view controllers after other object decoding is complete.
