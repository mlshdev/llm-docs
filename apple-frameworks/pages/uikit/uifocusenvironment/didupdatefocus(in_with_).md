> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusenvironment/didupdatefocus(in:with:)](https://developer.apple.com/documentation/uikit/uifocusenvironment/didupdatefocus(in:with:))

# didUpdateFocus(in:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Called immediately after the system updates the focus to a new view.

## Declaration

```swift
func didUpdateFocus(in context: UIFocusUpdateContext, with coordinator: UIFocusAnimationCoordinator)
```

## Parameters

- `context`: An instance of [UIFocusUpdateContext](../uifocusupdatecontext.md) containing metadata of the focus related update.
- `coordinator`: An instance of [UIFocusAnimationCoordinator](../uifocusanimationcoordinator.md) used for coordinating focus-related animations.

<a id="Discussion"></a>

## Discussion

After the focus is updated to a new view, the focus engine calls this method on all focus environments that contain either the previously focused view, the next focused view, or both, in ascending order. You should override this method to update your app’s state in response to changes in focus. Use the provided animation coordinator to animate changes in visual appearance related to the update. For more information on animation coordinators, see [UIFocusAnimationCoordinator](../uifocusanimationcoordinator.md).

# didUpdateFocusInContext:withAnimationCoordinator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Called immediately after the system updates the focus to a new view.

## Declaration

```objectivec
- (void) didUpdateFocusInContext:(UIFocusUpdateContext *) context withAnimationCoordinator:(UIFocusAnimationCoordinator *) coordinator;
```

## Parameters

- `context`: An instance of [UIFocusUpdateContext](../uifocusupdatecontext.md) containing metadata of the focus related update.
- `coordinator`: An instance of [UIFocusAnimationCoordinator](../uifocusanimationcoordinator.md) used for coordinating focus-related animations.

<a id="Discussion"></a>

## Discussion

After the focus is updated to a new view, the focus engine calls this method on all focus environments that contain either the previously focused view, the next focused view, or both, in ascending order. You should override this method to update your app’s state in response to changes in focus. Use the provided animation coordinator to animate changes in visual appearance related to the update. For more information on animation coordinators, see [UIFocusAnimationCoordinator](../uifocusanimationcoordinator.md).
