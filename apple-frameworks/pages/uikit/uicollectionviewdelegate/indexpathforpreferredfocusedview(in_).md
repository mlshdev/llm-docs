> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/indexpathforpreferredfocusedview(in:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/indexpathforpreferredfocusedview(in:))

# indexPathForPreferredFocusedView(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate for the index path of the cell that should be focused.

## Declaration

```swift
optional func indexPathForPreferredFocusedView(in collectionView: UICollectionView) -> IndexPath?
```

## Parameters

- `collectionView`: The collection view object requesting this information.

<a id="return-value"></a>

## Return Value

The index path of the preferred cell. The index path you specify must correspond to a valid cell in the collection view.

<a id="Discussion"></a>

## Discussion

When focus is about to change to a collection view, the collection view must pick which of its subviews should receive that focus. If the collection view’s [remembersLastFocusedIndexPath](../uitableview/rememberslastfocusedindexpath.md) property is set to [true](https://developer.apple.com/documentation/swift/true), the collection view returns the index path of the cell that was last focused. If the [remembersLastFocusedIndexPath](../uitableview/rememberslastfocusedindexpath.md) property is [false](https://developer.apple.com/documentation/swift/false), or if there is no saved index path because no cell was previously focused, the collection view calls this method so that you can specify which cell should receive focus. If you do not implement this method, the collection view returns an appropriate cell.

The effects of this method may be ignored during or immediately after a view controller transition, such as a presentation dismissal or navigation stack pop. In such cases, the view controller attempts to restore focus to the item that was focused prior to the transition (for example, prior to the view controller being presented or pushed), which can take precedence over the effects of this method. To learn how to control or disable this behavior in the view controller, see [restoresFocusAfterTransition](../uiviewcontroller/restoresfocusaftertransition.md).

If you subclass [UICollectionView](../uicollectionview.md), you can also implement the same behavior by overriding the [preferredFocusEnvironments](../uifocusenvironment/preferredfocusenvironments.md) property, which is defined by the [UIFocusEnvironment](../uifocusenvironment.md) protocol and adopted by all views.

## See Also

### Related Documentation

- [preferredFocusedView](../uifocusenvironment/preferredfocusedview.md): Deprecated. Specifies the view that should be focused if this environment is focused.

### Working with focus

- [collectionView(\_:canFocusItemAt:)](collectionview%28__canfocusitemat_%29.md): Asks the delegate whether the item at the specified index path can be focused.
- [collectionView(\_:shouldUpdateFocusIn:)](collectionview%28__shouldupdatefocusin_%29.md): Asks the delegate whether a change in focus should occur.
- [collectionView(\_:didUpdateFocusIn:with:)](collectionview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update occurred.
- [collectionView(\_:selectionFollowsFocusForItemAt:)](collectionview%28__selectionfollowsfocusforitemat_%29.md): Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.

# indexPathForPreferredFocusedViewInCollectionView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate for the index path of the cell that should be focused.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForPreferredFocusedViewInCollectionView:(UICollectionView *) collectionView;
```

## Parameters

- `collectionView`: The collection view object requesting this information.

<a id="return-value"></a>

## Return Value

The index path of the preferred cell. The index path you specify must correspond to a valid cell in the collection view.

<a id="Discussion"></a>

## Discussion

When focus is about to change to a collection view, the collection view must pick which of its subviews should receive that focus. If the collection view’s [remembersLastFocusedIndexPath](../uitableview/rememberslastfocusedindexpath.md) property is set to [true](https://developer.apple.com/documentation/swift/true), the collection view returns the index path of the cell that was last focused. If the [remembersLastFocusedIndexPath](../uitableview/rememberslastfocusedindexpath.md) property is [false](https://developer.apple.com/documentation/swift/false), or if there is no saved index path because no cell was previously focused, the collection view calls this method so that you can specify which cell should receive focus. If you do not implement this method, the collection view returns an appropriate cell.

The effects of this method may be ignored during or immediately after a view controller transition, such as a presentation dismissal or navigation stack pop. In such cases, the view controller attempts to restore focus to the item that was focused prior to the transition (for example, prior to the view controller being presented or pushed), which can take precedence over the effects of this method. To learn how to control or disable this behavior in the view controller, see [restoresFocusAfterTransition](../uiviewcontroller/restoresfocusaftertransition.md).

If you subclass [UICollectionView](../uicollectionview.md), you can also implement the same behavior by overriding the [preferredFocusEnvironments](../uifocusenvironment/preferredfocusenvironments.md) property, which is defined by the [UIFocusEnvironment](../uifocusenvironment.md) protocol and adopted by all views.

## See Also

### Related Documentation

- [preferredFocusedView](../uifocusenvironment/preferredfocusedview.md): Deprecated. Specifies the view that should be focused if this environment is focused.

### Working with focus

- [collectionView:canFocusItemAtIndexPath:](collectionview%28__canfocusitemat_%29.md): Asks the delegate whether the item at the specified index path can be focused.
- [collectionView:shouldUpdateFocusInContext:](collectionview%28__shouldupdatefocusin_%29.md): Asks the delegate whether a change in focus should occur.
- [collectionView:didUpdateFocusInContext:withAnimationCoordinator:](collectionview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update occurred.
- [collectionView:selectionFollowsFocusForItemAtIndexPath:](collectionview%28__selectionfollowsfocusforitemat_%29.md): Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.
