> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewflowlayout/minimumlinespacing](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/minimumlinespacing)

# minimumLineSpacing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum spacing (in points) to use between rows or columns.

## Declaration

```swift
var minimumLineSpacing: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView(\_:layout:minimumLineSpacingForSectionAt:)](../nscollectionviewdelegateflowlayout/collectionview%28__layout_minimumlinespacingforsectionat_%29.md) method, the flow layout object uses the value of this property to set the spacing between rows or columns.

For a vertically scrolling layout, the value represents the minimum spacing between successive rows. For a horizontally scrolling layout, the value represents the minimum spacing between successive columns. This spacing is not applied to the space between the header view and the first line or between the last line and the footer view. [Figure 1](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/1402898-minimumlinespacing#1965631) shows how the line spacing is applied to rows of unevenly sized items, illustrating how the actual spacing between individual items may be greater than the minimum value.

![](https://developer.apple.com/images/com.apple.appkit/media-1965631@2x.png)

The default value of this property is `10.0`.

## See Also

### Configuring the Item Spacing

- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [estimatedItemSize](estimateditemsize.md): The estimated size of items in the collection view.
- [itemSize](itemsize.md): The default size to use for items.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.

# minimumLineSpacing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum spacing (in points) to use between rows or columns.

## Declaration

```objectivec
@property CGFloat minimumLineSpacing;
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView:layout:minimumLineSpacingForSectionAtIndex:](../nscollectionviewdelegateflowlayout/collectionview%28__layout_minimumlinespacingforsectionat_%29.md) method, the flow layout object uses the value of this property to set the spacing between rows or columns.

For a vertically scrolling layout, the value represents the minimum spacing between successive rows. For a horizontally scrolling layout, the value represents the minimum spacing between successive columns. This spacing is not applied to the space between the header view and the first line or between the last line and the footer view. [Figure 1](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayout/1402898-minimumlinespacing#1965631) shows how the line spacing is applied to rows of unevenly sized items, illustrating how the actual spacing between individual items may be greater than the minimum value.

![](https://developer.apple.com/images/com.apple.appkit/media-1965631@2x.png)

The default value of this property is `10.0`.

## See Also

### Configuring the Item Spacing

- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [estimatedItemSize](estimateditemsize.md): The estimated size of items in the collection view.
- [itemSize](itemsize.md): The default size to use for items.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
