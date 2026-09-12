> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutinvalidationcontext/invalidateitems(at:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutinvalidationcontext/invalidateitems(at:))

# invalidateItems(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds the cells at the specified index paths to the list of invalid items.

## Declaration

```swift
func invalidateItems(at indexPaths: [IndexPath])
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects. Each index path represents a cell whose layout needs to be recomputed.

<a id="Discussion"></a>

## Discussion

Call this method to identify the specific cells of your layout that require updates. The cells you specify are added to the array in the [invalidatedItemIndexPaths](invalidateditemindexpaths.md) property.

## See Also

### Invalidating Specific Items

- [invalidateSupplementaryElements(ofKind:at:)](invalidatesupplementaryelements%28ofkind_at_%29.md): Adds the supplementary views at the specified index paths to the list of invalid items.
- [invalidateDecorationElements(ofKind:at:)](invalidatedecorationelements%28ofkind_at_%29.md): Adds the decoration views at the specified index paths to the list of invalid items.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): An array of index paths representing the cells that were invalidated.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary that identifies the supplementary views that were invalidated.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary that identifies the decoration views that were invalidated.

# invalidateItemsAtIndexPaths: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds the cells at the specified index paths to the list of invalid items.

## Declaration

```objectivec
- (void) invalidateItemsAtIndexPaths:(NSArray<NSIndexPath *> *) indexPaths;
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects. Each index path represents a cell whose layout needs to be recomputed.

<a id="Discussion"></a>

## Discussion

Call this method to identify the specific cells of your layout that require updates. The cells you specify are added to the array in the [invalidatedItemIndexPaths](invalidateditemindexpaths.md) property.

## See Also

### Invalidating Specific Items

- [invalidateSupplementaryElementsOfKind:atIndexPaths:](invalidatesupplementaryelements%28ofkind_at_%29.md): Adds the supplementary views at the specified index paths to the list of invalid items.
- [invalidateDecorationElementsOfKind:atIndexPaths:](invalidatedecorationelements%28ofkind_at_%29.md): Adds the decoration views at the specified index paths to the list of invalid items.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): An array of index paths representing the cells that were invalidated.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary that identifies the supplementary views that were invalidated.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary that identifies the decoration views that were invalidated.
