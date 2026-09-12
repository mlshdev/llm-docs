> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutinvalidationcontext/invalidatedsupplementaryindexpaths](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutinvalidationcontext/invalidatedsupplementaryindexpaths)

# invalidatedSupplementaryIndexPaths (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A dictionary that identifies the supplementary views that were invalidated.

## Declaration

```swift
var invalidatedSupplementaryIndexPaths: [String : [IndexPath]]? { get }
```

<a id="Discussion"></a>

## Discussion

The keys in this dictionary are the element kind strings of the invalid supplementary views. The value for each key is an array of [NSIndexPath](../../foundation/nsindexpath.md) objects indicating which specific supplementary views have layout changes.

## See Also

### Invalidating Specific Items

- [invalidateItems(at:)](invalidateitems%28at_%29.md): Adds the cells at the specified index paths to the list of invalid items.
- [invalidateSupplementaryElements(ofKind:at:)](invalidatesupplementaryelements%28ofkind_at_%29.md): Adds the supplementary views at the specified index paths to the list of invalid items.
- [invalidateDecorationElements(ofKind:at:)](invalidatedecorationelements%28ofkind_at_%29.md): Adds the decoration views at the specified index paths to the list of invalid items.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): An array of index paths representing the cells that were invalidated.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary that identifies the decoration views that were invalidated.

# invalidatedSupplementaryIndexPaths (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A dictionary that identifies the supplementary views that were invalidated.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,NSArray<NSIndexPath *> *> * invalidatedSupplementaryIndexPaths;
```

<a id="Discussion"></a>

## Discussion

The keys in this dictionary are the element kind strings of the invalid supplementary views. The value for each key is an array of [NSIndexPath](../../foundation/nsindexpath.md) objects indicating which specific supplementary views have layout changes.

## See Also

### Invalidating Specific Items

- [invalidateItemsAtIndexPaths:](invalidateitems%28at_%29.md): Adds the cells at the specified index paths to the list of invalid items.
- [invalidateSupplementaryElementsOfKind:atIndexPaths:](invalidatesupplementaryelements%28ofkind_at_%29.md): Adds the supplementary views at the specified index paths to the list of invalid items.
- [invalidateDecorationElementsOfKind:atIndexPaths:](invalidatedecorationelements%28ofkind_at_%29.md): Adds the decoration views at the specified index paths to the list of invalid items.
- [invalidatedItemIndexPaths](invalidateditemindexpaths.md): An array of index paths representing the cells that were invalidated.
- [invalidatedDecorationIndexPaths](invalidateddecorationindexpaths.md): A dictionary that identifies the decoration views that were invalidated.
