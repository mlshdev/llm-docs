> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewflowlayout/sectioninset](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/sectioninset)

# sectionInset (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The margins used to lay out content in a section.

## Declaration

```swift
var sectionInset: NSEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView(\_:layout:insetForSectionAt:)](../nscollectionviewdelegateflowlayout/collectionview%28__layout_insetforsectionat_%29.md) method, the flow layout object uses the value of this property to set the margins for each section.

Section insets reflect the spacing at the outer edges of the section. The margins affect the positioning of the header view, the minimum space on either side of each line of items, and the distance from the last line to the footer view, as shown in [Figure 1](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/1402862-sectioninset#1965633). The margin insets do not affect the size of the header and footer views in the nonscrolling direction.

![](https://developer.apple.com/images/com.apple.appkit/media-1965633@2x.png)

The default insets are all set to `0`.

## See Also

### Configuring the Item Spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [estimatedItemSize](estimateditemsize.md): The estimated size of items in the collection view.
- [itemSize](itemsize.md): The default size to use for items.

# sectionInset (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The margins used to lay out content in a section.

## Declaration

```objectivec
@property NSEdgeInsets sectionInset;
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView:layout:insetForSectionAtIndex:](../nscollectionviewdelegateflowlayout/collectionview%28__layout_insetforsectionat_%29.md) method, the flow layout object uses the value of this property to set the margins for each section.

Section insets reflect the spacing at the outer edges of the section. The margins affect the positioning of the header view, the minimum space on either side of each line of items, and the distance from the last line to the footer view, as shown in [Figure 1](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/1402862-sectioninset#1965633). The margin insets do not affect the size of the header and footer views in the nonscrolling direction.

![](https://developer.apple.com/images/com.apple.appkit/media-1965633@2x.png)

The default insets are all set to `0`.

## See Also

### Configuring the Item Spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [estimatedItemSize](estimateditemsize.md): The estimated size of items in the collection view.
- [itemSize](itemsize.md): The default size to use for items.
