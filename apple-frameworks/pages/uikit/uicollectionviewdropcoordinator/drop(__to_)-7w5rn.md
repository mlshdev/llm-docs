> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropcoordinator/drop(_:to:)-7w5rn](https://developer.apple.com/documentation/uikit/uicollectionviewdropcoordinator/drop(_:to:)-7w5rn)

# drop(\_:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to an arbitrary location in your view hierarchy.

## Declaration

```swift
func drop(_ dragItem: UIDragItem, to target: UIDragPreviewTarget) -> any UIDragAnimating
```

## Parameters

- `dragItem`: The item that you want to drop.
- `target`: The location at which to drop the item, specified as a point in a view. You can also use the [UIDragPreviewTarget](../uidragpreviewtarget.md) object to specify a final transform to apply to the content.

<a id="Discussion"></a>

## Discussion

Use this method to animate drops to any view in your app. For example, you might use this method to drop items onto a tab bar or toolbar that’s part of your interface.

## See Also

### Animating Items to Their Destination

- [drop(\_:toItemAt:)](drop%28__toitemat_%29.md): Animates the item to the specified index path in the collection view.
- [drop(\_:intoItemAt:rect:)](drop%28__intoitemat_rect_%29.md): Animates the item to the specified rectangle in the collection view.
- [drop(\_:to:)](drop%28__to_%29-l5tg.md): Animates the item to the specified location and inserts a placeholder cell at that location.

# dropItem:toTarget: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Animates the item to an arbitrary location in your view hierarchy.

## Declaration

```objectivec
- (id<UIDragAnimating>) dropItem:(UIDragItem *) dragItem toTarget:(UIDragPreviewTarget *) target;
```

## Parameters

- `dragItem`: The item that you want to drop.
- `target`: The location at which to drop the item, specified as a point in a view. You can also use the [UIDragPreviewTarget](../uidragpreviewtarget.md) object to specify a final transform to apply to the content.

<a id="Discussion"></a>

## Discussion

Use this method to animate drops to any view in your app. For example, you might use this method to drop items onto a tab bar or toolbar that’s part of your interface.

## See Also

### Animating Items to Their Destination

- [dropItem:toItemAtIndexPath:](drop%28__toitemat_%29.md): Animates the item to the specified index path in the collection view.
- [dropItem:intoItemAtIndexPath:rect:](drop%28__intoitemat_rect_%29.md): Animates the item to the specified rectangle in the collection view.
- [dropItem:toPlaceholder:](drop%28__to_%29-l5tg.md): Animates the item to the specified location and inserts a placeholder cell at that location.
