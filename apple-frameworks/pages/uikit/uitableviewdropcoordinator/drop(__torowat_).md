> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropcoordinator/drop(_:torowat:)](https://developer.apple.com/documentation/uikit/uitableviewdropcoordinator/drop(_:torowat:))

# drop(\_:toRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to the specified index path in the table view.

## Declaration

```swift
func drop(_ dragItem: UIDragItem, toRowAt indexPath: IndexPath) -> any UIDragAnimating
```

## Parameters

- `dragItem`: The dragged item that you want to animate into position.
- `indexPath`: The index path to use as the destination for the animation.

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to animate the dragged item to the specific location in the table view. Typically, you use this method for content that originated in the collection view and is moving to a new location.

## See Also

### Animating rows to their destination

- [drop(\_:intoRowAt:rect:)](drop%28__intorowat_rect_%29.md)
- [drop(\_:to:)](drop%28__to_%29-57wx.md): Animates the item to an arbitrary location in your view hierarchy.
- [drop(\_:to:)](drop%28__to_%29-3znax.md): Animates the item to the specified location and inserts a placeholder cell at that location.

# dropItem:toRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to the specified index path in the table view.

## Declaration

```objectivec
- (id<UIDragAnimating>) dropItem:(UIDragItem *) dragItem toRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `dragItem`: The dragged item that you want to animate into position.
- `indexPath`: The index path to use as the destination for the animation.

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to animate the dragged item to the specific location in the table view. Typically, you use this method for content that originated in the collection view and is moving to a new location.

## See Also

### Animating rows to their destination

- [dropItem:intoRowAtIndexPath:rect:](drop%28__intorowat_rect_%29.md)
- [dropItem:toTarget:](drop%28__to_%29-57wx.md): Animates the item to an arbitrary location in your view hierarchy.
- [dropItem:toPlaceholder:](drop%28__to_%29-3znax.md): Animates the item to the specified location and inserts a placeholder cell at that location.
