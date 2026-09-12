> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutinvalidationcontext/invalidateditemindexpaths](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutinvalidationcontext/invalidateditemindexpaths)

# invalidatedItemIndexPaths (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of index paths representing the cells that were invalidated.

## Declaration

```swift
var invalidatedItemIndexPaths: [IndexPath]? { get }
```

<a id="Discussion"></a>

## Discussion

The array contains zero or more [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which represents a cell whose layout changed.

## See Also

### Invalidating Specific Items

- [invalidateItems(at:)](invalidateitems%28at_%29.md): Adds the cells at the specified index paths to the list of invalid items.
- [invalidateSupplementaryElements(ofKind:at:)](invalidatesupplementaryelements%28ofkind_at_%29.md): Adds the supplementary views at the specified index paths to the list of invalid items.
- [invalidateDecorationElements(ofKind:at:)](invalidatedecorationelements%28ofkind_at_%29.md): Adds the decoration views at the specified index paths to the list of invalid items.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary that identifies the supplementary views that were invalidated.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary that identifies the decoration views that were invalidated.

# invalidatedItemIndexPaths (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of index paths representing the cells that were invalidated.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSIndexPath *> * invalidatedItemIndexPaths;
```

<a id="Discussion"></a>

## Discussion

The array contains zero or more [NSIndexPath](../../foundation/nsindexpath.md) objects, each of which represents a cell whose layout changed.

## See Also

### Invalidating Specific Items

- [invalidateItemsAtIndexPaths:](invalidateitems%28at_%29.md): Adds the cells at the specified index paths to the list of invalid items.
- [invalidateSupplementaryElementsOfKind:atIndexPaths:](invalidatesupplementaryelements%28ofkind_at_%29.md): Adds the supplementary views at the specified index paths to the list of invalid items.
- [invalidateDecorationElementsOfKind:atIndexPaths:](invalidatedecorationelements%28ofkind_at_%29.md): Adds the decoration views at the specified index paths to the list of invalid items.
- [invalidatedSupplementaryIndexPaths](invalidatedsupplementaryindexpaths.md): A dictionary that identifies the supplementary views that were invalidated.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary that identifies the decoration views that were invalidated.
