> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayout/sectioninset](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout/sectioninset)

# sectionInset (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The margins used to lay out content in a section.

## Declaration

```swift
var sectionInset: UIEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

If the delegate object does not implement the [collectionView(\_:layout:insetForSectionAt:)](../uicollectionviewdelegateflowlayout/collectionview%28__layout_insetforsectionat_%29.md) method, the flow layout uses the value in this property to set the margins for each section.

Section insets reflect the spacing at the outer edges of the section. The margins affect the initial position of the header view, the minimum space on either side of each line of items, and the distance from the last line to the footer view. The margin insets do not affect the size of the header and footer views in the non scrolling direction.

The default edge insets are all set to `0`.

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [itemSize](itemsize.md): The default size to use for cells.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [automaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.
- [UICollectionViewFlowLayout.SectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.

# sectionInset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The margins used to lay out content in a section.

## Declaration

```objectivec
@property (nonatomic) UIEdgeInsets sectionInset;
```

<a id="Discussion"></a>

## Discussion

If the delegate object does not implement the [collectionView:layout:insetForSectionAtIndex:](../uicollectionviewdelegateflowlayout/collectionview%28__layout_insetforsectionat_%29.md) method, the flow layout uses the value in this property to set the margins for each section.

Section insets reflect the spacing at the outer edges of the section. The margins affect the initial position of the header view, the minimum space on either side of each line of items, and the distance from the last line to the footer view. The margin insets do not affect the size of the header and footer views in the non scrolling direction.

The default edge insets are all set to `0`.

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [itemSize](itemsize.md): The default size to use for cells.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [UICollectionViewFlowLayoutAutomaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.
- [UICollectionViewFlowLayoutSectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.
