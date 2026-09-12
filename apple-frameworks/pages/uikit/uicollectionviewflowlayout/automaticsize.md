> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayout/automaticsize](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout/automaticsize)

# automaticSize (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A placeholder size for self-sizing cells.

## Declaration

```swift
class let automaticSize: CGSize
```

<a id="Discussion"></a>

## Discussion

Set this constant as the value for the [estimatedItemSize](estimateditemsize.md) property to enable self-sizing cells for your collection view. This is a non-zero, placeholder value that tells the collection view to query each cell for its actual size using the cell’s [preferredLayoutAttributesFitting(\_:)](../uicollectionreusableview/preferredlayoutattributesfitting%28__%29.md) method.

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [itemSize](itemsize.md): The default size to use for cells.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.
- [UICollectionViewFlowLayout.SectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.

# UICollectionViewFlowLayoutAutomaticSize (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A placeholder size for self-sizing cells.

## Declaration

```objectivec
extern const CGSize UICollectionViewFlowLayoutAutomaticSize;
```

<a id="Discussion"></a>

## Discussion

Set this constant as the value for the [estimatedItemSize](estimateditemsize.md) property to enable self-sizing cells for your collection view. This is a non-zero, placeholder value that tells the collection view to query each cell for its actual size using the cell’s [preferredLayoutAttributesFittingAttributes:](../uicollectionreusableview/preferredlayoutattributesfitting%28__%29.md) method.

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [itemSize](itemsize.md): The default size to use for cells.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.
- [UICollectionViewFlowLayoutSectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.
