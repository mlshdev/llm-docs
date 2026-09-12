> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropcoordinator/drop(_:intorowat:rect:)](https://developer.apple.com/documentation/uikit/uitableviewdropcoordinator/drop(_:intorowat:rect:))

# drop(\_:intoRowAt:rect:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

## Declaration

```swift
func drop(_ dragItem: UIDragItem, intoRowAt indexPath: IndexPath, rect: CGRect) -> any UIDragAnimating
```

## Parameters

- `dragItem`: The dragged item that you want to animate into position.
- `indexPath`: The index path in the table view at which to incorporate the item.
- `rect`: The destination rectangle to use for the animation. Specify the rectangle in the coordinate system of the cell at the specified `indexPath`. UIKit animates the drag item to the specified rectangle.

<a id="Discussion"></a>

## Discussion

Use this method to animate drops where you incorporate the dragged items into another item of your table view. For example, when incorporating items into a folder, you would use this method to animate the items in a way that makes it look like they were placed into the folder.

## See Also

### Animating rows to their destination

- [drop(\_:toRowAt:)](drop%28__torowat_%29.md): Animates the item to the specified index path in the table view.
- [drop(\_:to:)](drop%28__to_%29-57wx.md): Animates the item to an arbitrary location in your view hierarchy.
- [drop(\_:to:)](drop%28__to_%29-3znax.md): Animates the item to the specified location and inserts a placeholder cell at that location.

# dropItem:intoRowAtIndexPath:rect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

## Declaration

```objectivec
- (id<UIDragAnimating>) dropItem:(UIDragItem *) dragItem intoRowAtIndexPath:(NSIndexPath *) indexPath rect:(CGRect) rect;
```

## Parameters

- `dragItem`: The dragged item that you want to animate into position.
- `indexPath`: The index path in the table view at which to incorporate the item.
- `rect`: The destination rectangle to use for the animation. Specify the rectangle in the coordinate system of the cell at the specified `indexPath`. UIKit animates the drag item to the specified rectangle.

<a id="Discussion"></a>

## Discussion

Use this method to animate drops where you incorporate the dragged items into another item of your table view. For example, when incorporating items into a folder, you would use this method to animate the items in a way that makes it look like they were placed into the folder.

## See Also

### Animating rows to their destination

- [dropItem:toRowAtIndexPath:](drop%28__torowat_%29.md): Animates the item to the specified index path in the table view.
- [dropItem:toTarget:](drop%28__to_%29-57wx.md): Animates the item to an arbitrary location in your view hierarchy.
- [dropItem:toPlaceholder:](drop%28__to_%29-3znax.md): Animates the item to the specified location and inserts a placeholder cell at that location.
