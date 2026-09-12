> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutinvalidationcontext/invalidateddecorationindexpaths](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutinvalidationcontext/invalidateddecorationindexpaths)

# invalidatedDecorationIndexPaths (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A dictionary containing the decoration views whose layout attributes are invalid.

## Declaration

```swift
var invalidatedDecorationIndexPaths: [NSCollectionView.DecorationElementKind : Set<IndexPath>]? { get }
```

<a id="Discussion"></a>

## Discussion

The keys in this dictionary are the element kind strings of the decoration views. The value for each key is an [NSSet](https://developer.apple.com/documentation/foundation/nsset) object containing one or more [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects, each of which identifies the section containing the decoration view.

## See Also

### Invalidating Specific Items

- [invalidateItems(at:)](invalidateitems%28at_%29.md): Marks the specified items as invalid so that their layout information can be updated.
- [invalidateSupplementaryElements(ofKind:at:)](invalidatesupplementaryelements%28ofkind_at_%29.md): Marks the specified supplementary views as invalid so that their layout information can be updated.
- [invalidateDecorationElements(ofKind:at:)](invalidatedecorationelements%28ofkind_at_%29.md): Marks the specified decoration views as invalid so that their layout information can be updated.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): The set of items whose layout attributes are invalid.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary containing the supplementary views whose layout attributes are invalid.

# invalidatedDecorationIndexPaths (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A dictionary containing the decoration views whose layout attributes are invalid.

## Declaration

```objectivec
@property (readonly, nullable) NSDictionary<NSString *,NSSet<NSIndexPath *> *> * invalidatedDecorationIndexPaths;
```

<a id="Discussion"></a>

## Discussion

The keys in this dictionary are the element kind strings of the decoration views. The value for each key is an [NSSet](https://developer.apple.com/documentation/foundation/nsset) object containing one or more [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects, each of which identifies the section containing the decoration view.

## See Also

### Invalidating Specific Items

- [invalidateItemsAtIndexPaths:](invalidateitems%28at_%29.md): Marks the specified items as invalid so that their layout information can be updated.
- [invalidateSupplementaryElementsOfKind:atIndexPaths:](invalidatesupplementaryelements%28ofkind_at_%29.md): Marks the specified supplementary views as invalid so that their layout information can be updated.
- [invalidateDecorationElementsOfKind:atIndexPaths:](invalidatedecorationelements%28ofkind_at_%29.md): Marks the specified decoration views as invalid so that their layout information can be updated.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): The set of items whose layout attributes are invalid.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary containing the supplementary views whose layout attributes are invalid.
