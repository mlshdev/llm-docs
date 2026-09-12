> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayout/estimateditemsize](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout/estimateditemsize)

# estimatedItemSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The estimated size of cells in the collection view.

## Declaration

```swift
var estimatedItemSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

Providing an estimated cell size can improve the performance of the collection view when the cells adjust their size dynamically. The estimated value lets the collection view defer some calculations to determine the actual size of its content. Cells that aren’t onscreen are assumed to be the estimated height.

The default value of this property is [CGSizeZero](../../coregraphics/cgsizezero.md). Setting it to any other value, like [automaticSize](automaticsize.md), causes the collection view to query each cell for its actual size using the cell’s [preferredLayoutAttributesFitting(\_:)](../uicollectionreusableview/preferredlayoutattributesfitting%28__%29.md) method.

If all of your cells are the same size, use the [itemSize](itemsize.md) property, instead of this property, to specify the cell size instead.

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [itemSize](itemsize.md): The default size to use for cells.
- [automaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.
- [UICollectionViewFlowLayout.SectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.

# estimatedItemSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The estimated size of cells in the collection view.

## Declaration

```objectivec
@property (nonatomic) CGSize estimatedItemSize;
```

<a id="Discussion"></a>

## Discussion

Providing an estimated cell size can improve the performance of the collection view when the cells adjust their size dynamically. The estimated value lets the collection view defer some calculations to determine the actual size of its content. Cells that aren’t onscreen are assumed to be the estimated height.

The default value of this property is [CGSizeZero](../../coregraphics/cgsizezero.md). Setting it to any other value, like [UICollectionViewFlowLayoutAutomaticSize](automaticsize.md), causes the collection view to query each cell for its actual size using the cell’s [preferredLayoutAttributesFittingAttributes:](../uicollectionreusableview/preferredlayoutattributesfitting%28__%29.md) method.

If all of your cells are the same size, use the [itemSize](itemsize.md) property, instead of this property, to specify the cell size instead.

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [itemSize](itemsize.md): The default size to use for cells.
- [UICollectionViewFlowLayoutAutomaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.
- [UICollectionViewFlowLayoutSectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.
