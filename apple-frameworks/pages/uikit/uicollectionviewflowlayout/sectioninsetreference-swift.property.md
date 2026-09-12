> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayout/sectioninsetreference-swift.property](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout/sectioninsetreference-swift.property)

# sectionInsetReference (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The boundary that section insets are defined in relation to.

## Declaration

```swift
var sectionInsetReference: UICollectionViewFlowLayout.SectionInsetReference { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UICollectionViewFlowLayout.SectionInsetReference.fromContentInset](sectioninsetreference-swift.enum/fromcontentinset.md).

The minimum value of this property is always the collection view’s [contentInset](../uiscrollview/contentinset.md). For example, if the value of this property is [UICollectionViewFlowLayout.SectionInsetReference.fromSafeArea](sectioninsetreference-swift.enum/fromsafearea.md), but the adjusted content inset is greater than the combination of the safe area and section insets, then the section’s content is aligned with the content inset instead.

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [itemSize](itemsize.md): The default size to use for cells.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [automaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [UICollectionViewFlowLayout.SectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.

# sectionInsetReference (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The boundary that section insets are defined in relation to.

## Declaration

```objectivec
@property (nonatomic) UICollectionViewFlowLayoutSectionInsetReference sectionInsetReference;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UICollectionViewFlowLayoutSectionInsetFromContentInset](sectioninsetreference-swift.enum/fromcontentinset.md).

The minimum value of this property is always the collection view’s [contentInset](../uiscrollview/contentinset.md). For example, if the value of this property is [UICollectionViewFlowLayoutSectionInsetFromSafeArea](sectioninsetreference-swift.enum/fromsafearea.md), but the adjusted content inset is greater than the combination of the safe area and section insets, then the section’s content is aligned with the content inset instead.

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [itemSize](itemsize.md): The default size to use for cells.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [UICollectionViewFlowLayoutAutomaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [UICollectionViewFlowLayoutSectionInsetReference](sectioninsetreference-swift.enum.md): Constants that describe the reference point of the section insets.
