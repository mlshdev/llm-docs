> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:canfocusitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:canfocusitemat:))

# collectionView(\_:canFocusItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate whether the item at the specified index path can be focused.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, canFocusItemAt indexPath: IndexPath) -> Bool
```

## Parameters

- `collectionView`: The collection view object requesting this information.
- `indexPath`: The index path of an item in the collection view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item can receive be focused or [false](https://developer.apple.com/documentation/swift/false) if it can not.

<a id="Discussion"></a>

## Discussion

You can use this method, or a cell’s [canBecomeFocused](../uiview/canbecomefocused.md) method, to control which items in the collection view can receive focus. The focus engine calls the cell’s [canBecomeFocused](../uiview/canbecomefocused.md) method first, the default implementation of which defers to the collection view and this delegate method.

If you do not implement this method, the ability to focus on items depends on whether the collection view’s items are selectable. When the items are selectable, they can also be focused as if this method had returned [true](https://developer.apple.com/documentation/swift/true); otherwise, they do not receive focus.

## See Also

### Related Documentation

- [allowsSelection](../uicollectionview/allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.

### Working with focus

- [indexPathForPreferredFocusedView(in:)](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the index path of the cell that should be focused.
- [collectionView(\_:shouldUpdateFocusIn:)](collectionview%28__shouldupdatefocusin_%29.md): Asks the delegate whether a change in focus should occur.
- [collectionView(\_:didUpdateFocusIn:with:)](collectionview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update occurred.
- [collectionView(\_:selectionFollowsFocusForItemAt:)](collectionview%28__selectionfollowsfocusforitemat_%29.md): Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.

# collectionView:canFocusItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate whether the item at the specified index path can be focused.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView canFocusItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object requesting this information.
- `indexPath`: The index path of an item in the collection view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item can receive be focused or [false](https://developer.apple.com/documentation/swift/false) if it can not.

<a id="Discussion"></a>

## Discussion

You can use this method, or a cell’s [canBecomeFocused](../uiview/canbecomefocused.md) method, to control which items in the collection view can receive focus. The focus engine calls the cell’s [canBecomeFocused](../uiview/canbecomefocused.md) method first, the default implementation of which defers to the collection view and this delegate method.

If you do not implement this method, the ability to focus on items depends on whether the collection view’s items are selectable. When the items are selectable, they can also be focused as if this method had returned [true](https://developer.apple.com/documentation/swift/true); otherwise, they do not receive focus.

## See Also

### Related Documentation

- [allowsSelection](../uicollectionview/allowsselection.md): A Boolean value that indicates whether users can select items in the collection view.

### Working with focus

- [indexPathForPreferredFocusedViewInCollectionView:](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the index path of the cell that should be focused.
- [collectionView:shouldUpdateFocusInContext:](collectionview%28__shouldupdatefocusin_%29.md): Asks the delegate whether a change in focus should occur.
- [collectionView:didUpdateFocusInContext:withAnimationCoordinator:](collectionview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update occurred.
- [collectionView:selectionFollowsFocusForItemAtIndexPath:](collectionview%28__selectionfollowsfocusforitemat_%29.md): Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.
