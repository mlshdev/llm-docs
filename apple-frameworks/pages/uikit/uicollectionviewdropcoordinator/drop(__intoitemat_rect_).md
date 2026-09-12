> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropcoordinator/drop(_:intoitemat:rect:)](https://developer.apple.com/documentation/uikit/uicollectionviewdropcoordinator/drop(_:intoitemat:rect:))

# drop(\_:intoItemAt:rect:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to the specified rectangle in the collection view.

## Declaration

```swift
func drop(_ dragItem: UIDragItem, intoItemAt indexPath: IndexPath, rect: CGRect) -> any UIDragAnimating
```

## Parameters

- `dragItem`: The dragged item that you want to animate into position.
- `indexPath`: The index path in the collection view at which to incorporate the item.
- `rect`: The destination rectangle to use for the animation. Specify the rectangle in the coordinate system of the cell at the specified `indexPath`. UIKit animates the drag item to the specified rectangle.

<a id="Discussion"></a>

## Discussion

Use this method to animate drops where you incorporate the dragged items into another item of your collection view. For example, when incorporating items into a folder, you’d use this method to animate the items in a way that makes it look like they were placed into the folder.

## See Also

### Animating Items to Their Destination

- [drop(\_:toItemAt:)](drop%28__toitemat_%29.md): Animates the item to the specified index path in the collection view.
- [drop(\_:to:)](drop%28__to_%29-7w5rn.md): Animates the item to an arbitrary location in your view hierarchy.
- [drop(\_:to:)](drop%28__to_%29-l5tg.md): Animates the item to the specified location and inserts a placeholder cell at that location.

# dropItem:intoItemAtIndexPath:rect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to the specified rectangle in the collection view.

## Declaration

```objectivec
- (id<UIDragAnimating>) dropItem:(UIDragItem *) dragItem intoItemAtIndexPath:(NSIndexPath *) indexPath rect:(CGRect) rect;
```

## Parameters

- `dragItem`: The dragged item that you want to animate into position.
- `indexPath`: The index path in the collection view at which to incorporate the item.
- `rect`: The destination rectangle to use for the animation. Specify the rectangle in the coordinate system of the cell at the specified `indexPath`. UIKit animates the drag item to the specified rectangle.

<a id="Discussion"></a>

## Discussion

Use this method to animate drops where you incorporate the dragged items into another item of your collection view. For example, when incorporating items into a folder, you’d use this method to animate the items in a way that makes it look like they were placed into the folder.

## See Also

### Animating Items to Their Destination

- [dropItem:toItemAtIndexPath:](drop%28__toitemat_%29.md): Animates the item to the specified index path in the collection view.
- [dropItem:toTarget:](drop%28__to_%29-7w5rn.md): Animates the item to an arbitrary location in your view hierarchy.
- [dropItem:toPlaceholder:](drop%28__to_%29-l5tg.md): Animates the item to the specified location and inserts a placeholder cell at that location.
