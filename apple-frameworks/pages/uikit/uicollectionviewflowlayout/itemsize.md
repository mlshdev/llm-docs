> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayout/itemsize](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout/itemsize)

# itemSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The default size to use for cells.

## Declaration

```swift
var itemSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView(\_:layout:sizeForItemAt:)](../uicollectionviewdelegateflowlayout/collectionview%28__layout_sizeforitemat_%29.md) method, the flow layout uses the value in this property to set the size of each cell. This results in cells that all have the same size.

The default size value is (50.0, 50.0).

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [automaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.
- [UICollectionViewFlowLayout.SectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.

# itemSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The default size to use for cells.

## Declaration

```objectivec
@property (nonatomic) CGSize itemSize;
```

<a id="Discussion"></a>

## Discussion

If the delegate does not implement the [collectionView:layout:sizeForItemAtIndexPath:](../uicollectionviewdelegateflowlayout/collectionview%28__layout_sizeforitemat_%29.md) method, the flow layout uses the value in this property to set the size of each cell. This results in cells that all have the same size.

The default size value is (50.0, 50.0).

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [UICollectionViewFlowLayoutAutomaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.
- [UICollectionViewFlowLayoutSectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.
