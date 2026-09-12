> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropcoordinator/drop(_:toitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdropcoordinator/drop(_:toitemat:))

# drop(\_:toItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to the specified index path in the collection view.

## Declaration

```swift
func drop(_ dragItem: UIDragItem, toItemAt indexPath: IndexPath) -> any UIDragAnimating
```

## Parameters

- `dragItem`: The dragged item that you want to animate into position.
- `indexPath`: The index path to use as the destination for the animation.

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to animate the dragged item to the specific location in the collection view. Typically, you use this method for content that originated in the collection view and is moving to a new location.

## See Also

### Animating Items to Their Destination

- [drop(\_:intoItemAt:rect:)](drop%28__intoitemat_rect_%29.md): Animates the item to the specified rectangle in the collection view.
- [drop(\_:to:)](drop%28__to_%29-7w5rn.md): Animates the item to an arbitrary location in your view hierarchy.
- [drop(\_:to:)](drop%28__to_%29-l5tg.md): Animates the item to the specified location and inserts a placeholder cell at that location.

# dropItem:toItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to the specified index path in the collection view.

## Declaration

```objectivec
- (id<UIDragAnimating>) dropItem:(UIDragItem *) dragItem toItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `dragItem`: The dragged item that you want to animate into position.
- `indexPath`: The index path to use as the destination for the animation.

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to animate the dragged item to the specific location in the collection view. Typically, you use this method for content that originated in the collection view and is moving to a new location.

## See Also

### Animating Items to Their Destination

- [dropItem:intoItemAtIndexPath:rect:](drop%28__intoitemat_rect_%29.md): Animates the item to the specified rectangle in the collection view.
- [dropItem:toTarget:](drop%28__to_%29-7w5rn.md): Animates the item to an arbitrary location in your view hierarchy.
- [dropItem:toPlaceholder:](drop%28__to_%29-l5tg.md): Animates the item to the specified location and inserts a placeholder cell at that location.
