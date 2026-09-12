> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutinvalidationcontext/invalidatedecorationelements(ofkind:at:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutinvalidationcontext/invalidatedecorationelements(ofkind:at:))

# invalidateDecorationElements(ofKind:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds the decoration views at the specified index paths to the list of invalid items.

## Declaration

```swift
func invalidateDecorationElements(ofKind elementKind: String, at indexPaths: [IndexPath])
```

## Parameters

- `elementKind`: A string that identifies the type of the decoration views. This parameter must not be `nil`.
- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects. Each index path represents a supplementary view of the given kind whose layout needs to be recomputed.

<a id="Discussion"></a>

## Discussion

Call this method to identify the specific decoration views whose layout attributes changed. The views you specify are added to the dictionary in the [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md) property. All of the views you specify should be of the type that you specified in the `elementKind` parameter. If you call this method two or more times with the same value for the `elementKind` parameter, this method merges the new index paths with the ones previously specified.

## See Also

### Invalidating Specific Items

- [invalidateItems(at:)](invalidateitems%28at_%29.md): Adds the cells at the specified index paths to the list of invalid items.
- [invalidateSupplementaryElements(ofKind:at:)](invalidatesupplementaryelements%28ofkind_at_%29.md): Adds the supplementary views at the specified index paths to the list of invalid items.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): An array of index paths representing the cells that were invalidated.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary that identifies the supplementary views that were invalidated.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary that identifies the decoration views that were invalidated.

# invalidateDecorationElementsOfKind:atIndexPaths: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds the decoration views at the specified index paths to the list of invalid items.

## Declaration

```objectivec
- (void) invalidateDecorationElementsOfKind:(NSString *) elementKind atIndexPaths:(NSArray<NSIndexPath *> *) indexPaths;
```

## Parameters

- `elementKind`: A string that identifies the type of the decoration views. This parameter must not be `nil`.
- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects. Each index path represents a supplementary view of the given kind whose layout needs to be recomputed.

<a id="Discussion"></a>

## Discussion

Call this method to identify the specific decoration views whose layout attributes changed. The views you specify are added to the dictionary in the [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md) property. All of the views you specify should be of the type that you specified in the `elementKind` parameter. If you call this method two or more times with the same value for the `elementKind` parameter, this method merges the new index paths with the ones previously specified.

## See Also

### Invalidating Specific Items

- [invalidateItemsAtIndexPaths:](invalidateitems%28at_%29.md): Adds the cells at the specified index paths to the list of invalid items.
- [invalidateSupplementaryElementsOfKind:atIndexPaths:](invalidatesupplementaryelements%28ofkind_at_%29.md): Adds the supplementary views at the specified index paths to the list of invalid items.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): An array of index paths representing the cells that were invalidated.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary that identifies the supplementary views that were invalidated.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary that identifies the decoration views that were invalidated.
