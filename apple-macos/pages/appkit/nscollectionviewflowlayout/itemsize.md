> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewflowlayout/itemsize](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/itemsize)

# itemSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The default size to use for items.

## Declaration

```swift
var itemSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the default size of items. If you do not provide an estimated size or implement the [collectionView(\_:layout:sizeForItemAt:)](../nscollectionviewdelegateflowlayout/collectionview%28__layout_sizeforitemat_%29.md) method in your delegate, the flow layout uses this value for the size of each item. All items are set to the same size. This value applies only to items and not to supplementary views.

The default value of this property is (`50.0`, `50.0`). For more information about how item sizes are determined, see [Understanding How the Flow Layout is Generated](../nscollectionviewflowlayout.md#Understanding-How-the-Flow-Layout-is-Generated).

## See Also

### Configuring the Item Spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [estimatedItemSize](estimateditemsize.md): The estimated size of items in the collection view.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.

# itemSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The default size to use for items.

## Declaration

```objectivec
@property NSSize itemSize;
```

<a id="Discussion"></a>

## Discussion

This property contains the default size of items. If you do not provide an estimated size or implement the [collectionView:layout:sizeForItemAtIndexPath:](../nscollectionviewdelegateflowlayout/collectionview%28__layout_sizeforitemat_%29.md) method in your delegate, the flow layout uses this value for the size of each item. All items are set to the same size. This value applies only to items and not to supplementary views.

The default value of this property is (`50.0`, `50.0`). For more information about how item sizes are determined, see [Understanding How the Flow Layout is Generated](../nscollectionviewflowlayout.md#Understanding-How-the-Flow-Layout-is-Generated).

## See Also

### Configuring the Item Spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [estimatedItemSize](estimateditemsize.md): The estimated size of items in the collection view.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
