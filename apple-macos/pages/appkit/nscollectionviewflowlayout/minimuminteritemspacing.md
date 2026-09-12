> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewflowlayout/minimuminteritemspacing](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/minimuminteritemspacing)

# minimumInteritemSpacing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum spacing (in points) to use between items in the same row or column.

## Declaration

```swift
var minimumInteritemSpacing: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView(\_:layout:minimumInteritemSpacingForSectionAt:)](../nscollectionviewdelegateflowlayout/collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md) method, the flow layout object uses the value of this property to set the spacing between items in the same line.

For a vertically scrolling layout, the value represents the minimum spacing between items in the same row. For a horizontally scrolling layout, the value represents the minimum spacing between items in the same column. The layout object uses this spacing only to compute how many items can fit in a single row or column. The actual spacing may be increased after the number of items has been determined, as illustrated in [Figure 1](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/1402872-minimuminteritemspacing#1965632).

![](https://developer.apple.com/images/com.apple.appkit/media-1965632@2x.png)

The default value of this property is `10.0`.

## See Also

### Configuring the Item Spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [estimatedItemSize](estimateditemsize.md): The estimated size of items in the collection view.
- [itemSize](itemsize.md): The default size to use for items.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.

# minimumInteritemSpacing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum spacing (in points) to use between items in the same row or column.

## Declaration

```objectivec
@property CGFloat minimumInteritemSpacing;
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView:layout:minimumInteritemSpacingForSectionAtIndex:](../nscollectionviewdelegateflowlayout/collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md) method, the flow layout object uses the value of this property to set the spacing between items in the same line.

For a vertically scrolling layout, the value represents the minimum spacing between items in the same row. For a horizontally scrolling layout, the value represents the minimum spacing between items in the same column. The layout object uses this spacing only to compute how many items can fit in a single row or column. The actual spacing may be increased after the number of items has been determined, as illustrated in [Figure 1](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/1402872-minimuminteritemspacing#1965632).

![](https://developer.apple.com/images/com.apple.appkit/media-1965632@2x.png)

The default value of this property is `10.0`.

## See Also

### Configuring the Item Spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [estimatedItemSize](estimateditemsize.md): The estimated size of items in the collection view.
- [itemSize](itemsize.md): The default size to use for items.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
