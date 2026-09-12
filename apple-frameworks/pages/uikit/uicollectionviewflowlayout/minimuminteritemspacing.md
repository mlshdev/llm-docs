> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayout/minimuminteritemspacing](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout/minimuminteritemspacing)

# minimumInteritemSpacing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The minimum spacing to use between items in the same row.

## Declaration

```swift
var minimumInteritemSpacing: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the delegate object does not implement the [collectionView(\_:layout:minimumInteritemSpacingForSectionAt:)](../uicollectionviewdelegateflowlayout/collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md) method, the flow layout uses the value in this property to set the spacing between items in the same line.

For a vertically scrolling grid, this value represents the minimum spacing between items in the same row. For a horizontally scrolling grid, this value represents the minimum spacing between items in the same column. This spacing is used to compute how many items can fit in a single line, but after the number of items is determined, the actual spacing may possibly be adjusted upward.

The default value of this property is 10.0.

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [itemSize](itemsize.md): The default size to use for cells.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [automaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.
- [UICollectionViewFlowLayout.SectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.

# minimumInteritemSpacing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The minimum spacing to use between items in the same row.

## Declaration

```objectivec
@property (nonatomic) CGFloat minimumInteritemSpacing;
```

<a id="Discussion"></a>

## Discussion

If the delegate object does not implement the [collectionView:layout:minimumInteritemSpacingForSectionAtIndex:](../uicollectionviewdelegateflowlayout/collectionview%28__layout_minimuminteritemspacingforsectionat_%29.md) method, the flow layout uses the value in this property to set the spacing between items in the same line.

For a vertically scrolling grid, this value represents the minimum spacing between items in the same row. For a horizontally scrolling grid, this value represents the minimum spacing between items in the same column. This spacing is used to compute how many items can fit in a single line, but after the number of items is determined, the actual spacing may possibly be adjusted upward.

The default value of this property is 10.0.

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [itemSize](itemsize.md): The default size to use for cells.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [UICollectionViewFlowLayoutAutomaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.
- [UICollectionViewFlowLayoutSectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.
