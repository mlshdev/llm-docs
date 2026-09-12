> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:selectionfollowsfocusforitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:selectionfollowsfocusforitemat:))

# collectionView(\_:selectionFollowsFocusForItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, selectionFollowsFocusForItemAt indexPath: IndexPath) -> Bool
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPath`: The index path of the cell to determine selection and focus behavior for.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want to automatically select the cell at the specified index path when focus moves to it; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the collection view’s [selectionFollowsFocus](../uicollectionview/selectionfollowsfocus.md) property is [true](https://developer.apple.com/documentation/swift/true) and you return [false](https://developer.apple.com/documentation/swift/false) from this delegate method, focus still moves to the cell when the user selects it. However, when focus moves to the cell, the cell doesn’t automatically select.

## See Also

### Working with focus

- [collectionView(\_:canFocusItemAt:)](collectionview%28__canfocusitemat_%29.md): Asks the delegate whether the item at the specified index path can be focused.
- [indexPathForPreferredFocusedView(in:)](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the index path of the cell that should be focused.
- [collectionView(\_:shouldUpdateFocusIn:)](collectionview%28__shouldupdatefocusin_%29.md): Asks the delegate whether a change in focus should occur.
- [collectionView(\_:didUpdateFocusIn:with:)](collectionview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update occurred.

# collectionView:selectionFollowsFocusForItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView selectionFollowsFocusForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view making the request.
- `indexPath`: The index path of the cell to determine selection and focus behavior for.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want to automatically select the cell at the specified index path when focus moves to it; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the collection view’s [selectionFollowsFocus](../uicollectionview/selectionfollowsfocus.md) property is [true](https://developer.apple.com/documentation/swift/true) and you return [false](https://developer.apple.com/documentation/swift/false) from this delegate method, focus still moves to the cell when the user selects it. However, when focus moves to the cell, the cell doesn’t automatically select.

## See Also

### Working with focus

- [collectionView:canFocusItemAtIndexPath:](collectionview%28__canfocusitemat_%29.md): Asks the delegate whether the item at the specified index path can be focused.
- [indexPathForPreferredFocusedViewInCollectionView:](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the index path of the cell that should be focused.
- [collectionView:shouldUpdateFocusInContext:](collectionview%28__shouldupdatefocusin_%29.md): Asks the delegate whether a change in focus should occur.
- [collectionView:didUpdateFocusInContext:withAnimationCoordinator:](collectionview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update occurred.
