> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropcoordinator/drop(_:to:)-57wx](https://developer.apple.com/documentation/uikit/uitableviewdropcoordinator/drop(_:to:)-57wx)

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

Use this method to animate drops to any view in your app. For example, you might use this method to drop items onto a tab bar or toolbar that is part of your interface.

## See Also

### Animating rows to their destination

- [drop(\_:toRowAt:)](drop%28__torowat_%29.md): Animates the item to the specified index path in the table view.
- [drop(\_:intoRowAt:rect:)](drop%28__intorowat_rect_%29.md)
- [drop(\_:to:)](drop%28__to_%29-3znax.md): Animates the item to the specified location and inserts a placeholder cell at that location.

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

Use this method to animate drops to any view in your app. For example, you might use this method to drop items onto a tab bar or toolbar that is part of your interface.

## See Also

### Animating rows to their destination

- [dropItem:toRowAtIndexPath:](drop%28__torowat_%29.md): Animates the item to the specified index path in the table view.
- [dropItem:intoRowAtIndexPath:rect:](drop%28__intorowat_rect_%29.md)
- [dropItem:toPlaceholder:](drop%28__to_%29-3znax.md): Animates the item to the specified location and inserts a placeholder cell at that location.
