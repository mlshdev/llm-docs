> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:shouldupdatefocusin:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:shouldupdatefocusin:))

# collectionView(\_:shouldUpdateFocusIn:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate whether a change in focus should occur.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, shouldUpdateFocusIn context: UICollectionViewFocusUpdateContext) -> Bool
```

## Parameters

- `collectionView`: The collection view object requesting this information.
- `context`: The context object containing metadata associated with the focus change. This object contains the index path of the previously focused item and the item targeted to receive focus next. Use this information to determine if the focus change should occur.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the focus change should occur or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

Before a focus change can occur, the focus engine asks all affected views if such a change should occur. In response, the collection view calls this method to give you the opportunity to allow or prevent the change. Return this method to prevent changes that should not occur. For example, you might use it to ensure that the navigation between cells occurs in a specific order.

If you do not implement this method, the collection view assumes a return value of [true](https://developer.apple.com/documentation/swift/true).

If you subclass [UICollectionView](../uicollectionview.md), you can also implement the same behavior by overriding the [shouldUpdateFocus(in:)](../uifocusenvironment/shouldupdatefocus%28in_%29.md) method, which is defined by the [UIFocusEnvironment](../uifocusenvironment.md) protocol and adopted by all views.

## See Also

### Related Documentation

- [shouldUpdateFocus(in:)](../uifocusenvironment/shouldupdatefocus%28in_%29.md): Returns a Boolean value indicating whether the focus engine should allow the focus update described by the specified context to occur.

### Working with focus

- [collectionView(\_:canFocusItemAt:)](collectionview%28__canfocusitemat_%29.md): Asks the delegate whether the item at the specified index path can be focused.
- [indexPathForPreferredFocusedView(in:)](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the index path of the cell that should be focused.
- [collectionView(\_:didUpdateFocusIn:with:)](collectionview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update occurred.
- [collectionView(\_:selectionFollowsFocusForItemAt:)](collectionview%28__selectionfollowsfocusforitemat_%29.md): Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.

# collectionView:shouldUpdateFocusInContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate whether a change in focus should occur.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView shouldUpdateFocusInContext:(UICollectionViewFocusUpdateContext *) context;
```

## Parameters

- `collectionView`: The collection view object requesting this information.
- `context`: The context object containing metadata associated with the focus change. This object contains the index path of the previously focused item and the item targeted to receive focus next. Use this information to determine if the focus change should occur.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the focus change should occur or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

Before a focus change can occur, the focus engine asks all affected views if such a change should occur. In response, the collection view calls this method to give you the opportunity to allow or prevent the change. Return this method to prevent changes that should not occur. For example, you might use it to ensure that the navigation between cells occurs in a specific order.

If you do not implement this method, the collection view assumes a return value of [true](https://developer.apple.com/documentation/swift/true).

If you subclass [UICollectionView](../uicollectionview.md), you can also implement the same behavior by overriding the [shouldUpdateFocusInContext:](../uifocusenvironment/shouldupdatefocus%28in_%29.md) method, which is defined by the [UIFocusEnvironment](../uifocusenvironment.md) protocol and adopted by all views.

## See Also

### Related Documentation

- [shouldUpdateFocusInContext:](../uifocusenvironment/shouldupdatefocus%28in_%29.md): Returns a Boolean value indicating whether the focus engine should allow the focus update described by the specified context to occur.

### Working with focus

- [collectionView:canFocusItemAtIndexPath:](collectionview%28__canfocusitemat_%29.md): Asks the delegate whether the item at the specified index path can be focused.
- [indexPathForPreferredFocusedViewInCollectionView:](indexpathforpreferredfocusedview%28in_%29.md): Asks the delegate for the index path of the cell that should be focused.
- [collectionView:didUpdateFocusInContext:withAnimationCoordinator:](collectionview%28__didupdatefocusin_with_%29.md): Tells the delegate that a focus update occurred.
- [collectionView:selectionFollowsFocusForItemAtIndexPath:](collectionview%28__selectionfollowsfocusforitemat_%29.md): Asks the delegate whether to relate selection and focus behavior for the cell at the corresponding index path.
