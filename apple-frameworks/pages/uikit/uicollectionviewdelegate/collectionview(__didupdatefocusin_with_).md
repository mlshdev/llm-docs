> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:didupdatefocusin:with:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:didupdatefocusin:with:))

# collectionView(\_:didUpdateFocusIn:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that a focus update occurred.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, didUpdateFocusIn context: UICollectionViewFocusUpdateContext, with coordinator: UIFocusAnimationCoordinator)
```

## Parameters

- `collectionView`: The collection view object notifying you of the focus change.
- `context`: The context object containing metadata associated with the focus change. This object contains the index path of the previously focused item and the currently focused item.
- `coordinator`: The animation coordinator to use when creating any additional animations.

<a id="Discussion"></a>

## Discussion

The collection view calls this method when a focus-related change occurs. You can use this method to update your app’s state information or to animate changes to your app’s visual appearance.

If you subclass [UICollectionView](../uicollectionview.md), you can also implement the same behavior by overriding the [didUpdateFocus(in:with:)](../uifocusenvironment/didupdatefocus%28in_with_%29.md) method, which is defined by the [UIFocusEnvironment](../uifocusenvironment.md) protocol and adopted by all views.

## See Also

### Related Documentation

- [didUpdateFocus(in:with:)](../uifocusenvironment/didupdatefocus%28in_with_%29.md): Called immediately after the system updates the focus to a new view.

### Working with focus

- [collectionView(\_:canFocusItemAt:)](collectionview%28__canfocusitemat_%29.md): Asks the delegate whether the item at the specified index path can be focused.
- [indexPathForPreferredFocusedView(in:)](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the index path of the cell that should be focused.
- [collectionView(\_:shouldUpdateFocusIn:)](collectionview%28__shouldupdatefocusin_%29.md): Asks the delegate whether a change in focus should occur.
- [collectionView(\_:selectionFollowsFocusForItemAt:)](collectionview%28__selectionfollowsfocusforitemat_%29.md): Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.

# collectionView:didUpdateFocusInContext:withAnimationCoordinator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that a focus update occurred.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView didUpdateFocusInContext:(UICollectionViewFocusUpdateContext *) context withAnimationCoordinator:(UIFocusAnimationCoordinator *) coordinator;
```

## Parameters

- `collectionView`: The collection view object notifying you of the focus change.
- `context`: The context object containing metadata associated with the focus change. This object contains the index path of the previously focused item and the currently focused item.
- `coordinator`: The animation coordinator to use when creating any additional animations.

<a id="Discussion"></a>

## Discussion

The collection view calls this method when a focus-related change occurs. You can use this method to update your app’s state information or to animate changes to your app’s visual appearance.

If you subclass [UICollectionView](../uicollectionview.md), you can also implement the same behavior by overriding the [didUpdateFocusInContext:withAnimationCoordinator:](../uifocusenvironment/didupdatefocus%28in_with_%29.md) method, which is defined by the [UIFocusEnvironment](../uifocusenvironment.md) protocol and adopted by all views.

## See Also

### Related Documentation

- [didUpdateFocusInContext:withAnimationCoordinator:](../uifocusenvironment/didupdatefocus%28in_with_%29.md): Called immediately after the system updates the focus to a new view.

### Working with focus

- [collectionView:canFocusItemAtIndexPath:](collectionview%28__canfocusitemat_%29.md): Asks the delegate whether the item at the specified index path can be focused.
- [indexPathForPreferredFocusedViewInCollectionView:](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the index path of the cell that should be focused.
- [collectionView:shouldUpdateFocusInContext:](collectionview%28__shouldupdatefocusin_%29.md): Asks the delegate whether a change in focus should occur.
- [collectionView:selectionFollowsFocusForItemAtIndexPath:](collectionview%28__selectionfollowsfocusforitemat_%29.md): Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.
