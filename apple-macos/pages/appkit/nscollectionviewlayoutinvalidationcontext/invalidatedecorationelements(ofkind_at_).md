> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutinvalidationcontext/invalidatedecorationelements(ofkind:at:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutinvalidationcontext/invalidatedecorationelements(ofkind:at:))

# invalidateDecorationElements(ofKind:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Marks the specified decoration views as invalid so that their layout information can be updated.

## Declaration

```swift
func invalidateDecorationElements(ofKind elementKind: NSCollectionView.DecorationElementKind, at indexPaths: Set<IndexPath>)
```

## Parameters

- `elementKind`: A string that identifies the type of the decoration views. This parameter must not be `nil` or an empty string.
- `indexPaths`: A set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects. Each index path contains the section in which the decoration view appears.

<a id="Discussion"></a>

## Discussion

Call this method when you want the layout object to recompute attributes for one or more decoration views. All of the views must be of the type specified by the `elementKind` parameter. The method adds the views you specify to the [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md) property. You can call this method more than once for the specified `elementKind` value.

## See Also

### Invalidating Specific Items

- [invalidateItems(at:)](invalidateitems%28at_%29.md): Marks the specified items as invalid so that their layout information can be updated.
- [invalidateSupplementaryElements(ofKind:at:)](invalidatesupplementaryelements%28ofkind_at_%29.md): Marks the specified supplementary views as invalid so that their layout information can be updated.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): The set of items whose layout attributes are invalid.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary containing the supplementary views whose layout attributes are invalid.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary containing the decoration views whose layout attributes are invalid.

# invalidateDecorationElementsOfKind:atIndexPaths: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Marks the specified decoration views as invalid so that their layout information can be updated.

## Declaration

```objectivec
- (void) invalidateDecorationElementsOfKind:(NSCollectionViewDecorationElementKind) elementKind atIndexPaths:(NSSet<NSIndexPath *> *) indexPaths;
```

## Parameters

- `elementKind`: A string that identifies the type of the decoration views. This parameter must not be `nil` or an empty string.
- `indexPaths`: A set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects. Each index path contains the section in which the decoration view appears.

<a id="Discussion"></a>

## Discussion

Call this method when you want the layout object to recompute attributes for one or more decoration views. All of the views must be of the type specified by the `elementKind` parameter. The method adds the views you specify to the [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md) property. You can call this method more than once for the specified `elementKind` value.

## See Also

### Invalidating Specific Items

- [invalidateItemsAtIndexPaths:](invalidateitems%28at_%29.md): Marks the specified items as invalid so that their layout information can be updated.
- [invalidateSupplementaryElementsOfKind:atIndexPaths:](invalidatesupplementaryelements%28ofkind_at_%29.md): Marks the specified supplementary views as invalid so that their layout information can be updated.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): The set of items whose layout attributes are invalid.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary containing the supplementary views whose layout attributes are invalid.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary containing the decoration views whose layout attributes are invalid.
