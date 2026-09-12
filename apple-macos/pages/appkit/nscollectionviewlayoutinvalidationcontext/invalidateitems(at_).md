> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutinvalidationcontext/invalidateitems(at:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutinvalidationcontext/invalidateitems(at:))

# invalidateItems(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Marks the specified items as invalid so that their layout information can be updated.

## Declaration

```swift
func invalidateItems(at indexPaths: Set<IndexPath>)
```

## Parameters

- `indexPaths`: A set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects. Each index path represents an item whose layout needs to be recomputed.

<a id="Discussion"></a>

## Discussion

Call this method when you want the layout object to recompute attributes for a specific set of items. The items you provide are added to the [invalidatedItemIndexPaths](invalidateditemindexpaths.md) property. You can call this method more than once to create a merged set of items.

## See Also

### Invalidating Specific Items

- [invalidateSupplementaryElements(ofKind:at:)](invalidatesupplementaryelements%28ofkind_at_%29.md): Marks the specified supplementary views as invalid so that their layout information can be updated.
- [invalidateDecorationElements(ofKind:at:)](invalidatedecorationelements%28ofkind_at_%29.md): Marks the specified decoration views as invalid so that their layout information can be updated.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): The set of items whose layout attributes are invalid.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary containing the supplementary views whose layout attributes are invalid.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary containing the decoration views whose layout attributes are invalid.

# invalidateItemsAtIndexPaths: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Marks the specified items as invalid so that their layout information can be updated.

## Declaration

```objectivec
- (void) invalidateItemsAtIndexPaths:(NSSet<NSIndexPath *> *) indexPaths;
```

## Parameters

- `indexPaths`: A set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects. Each index path represents an item whose layout needs to be recomputed.

<a id="Discussion"></a>

## Discussion

Call this method when you want the layout object to recompute attributes for a specific set of items. The items you provide are added to the [invalidatedItemIndexPaths](invalidateditemindexpaths.md) property. You can call this method more than once to create a merged set of items.

## See Also

### Invalidating Specific Items

- [invalidateSupplementaryElementsOfKind:atIndexPaths:](invalidatesupplementaryelements%28ofkind_at_%29.md): Marks the specified supplementary views as invalid so that their layout information can be updated.
- [invalidateDecorationElementsOfKind:atIndexPaths:](invalidatedecorationelements%28ofkind_at_%29.md): Marks the specified decoration views as invalid so that their layout information can be updated.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): The set of items whose layout attributes are invalid.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary containing the supplementary views whose layout attributes are invalid.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary containing the decoration views whose layout attributes are invalid.
