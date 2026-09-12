> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayout/sectioninsetreference-swift.enum](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout/sectioninsetreference-swift.enum)

# UICollectionViewFlowLayout.SectionInsetReference (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that describe the reference point of the section insets.

## Declaration

```swift
enum SectionInsetReference
```

## Topics

### Constants

- [UICollectionViewFlowLayout.SectionInsetReference.fromContentInset](sectioninsetreference-swift.enum/fromcontentinset.md): Section insets are defined in relation to the collection view’s content inset.
- [UICollectionViewFlowLayout.SectionInsetReference.fromLayoutMargins](sectioninsetreference-swift.enum/fromlayoutmargins.md): Section insets are defined in relation to the margins of the layout.
- [UICollectionViewFlowLayout.SectionInsetReference.fromSafeArea](sectioninsetreference-swift.enum/fromsafearea.md): Section insets are defined in relation to the safe area of the layout.

### Initializers

- [init(rawValue:)](sectioninsetreference-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [itemSize](itemsize.md): The default size to use for cells.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [automaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.

# UICollectionViewFlowLayoutSectionInsetReference (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that describe the reference point of the section insets.

## Declaration

```objectivec
enum UICollectionViewFlowLayoutSectionInsetReference : NSInteger;
```

## Topics

### Constants

- [UICollectionViewFlowLayoutSectionInsetFromContentInset](sectioninsetreference-swift.enum/fromcontentinset.md): Section insets are defined in relation to the collection view’s content inset.
- [UICollectionViewFlowLayoutSectionInsetFromLayoutMargins](sectioninsetreference-swift.enum/fromlayoutmargins.md): Section insets are defined in relation to the margins of the layout.
- [UICollectionViewFlowLayoutSectionInsetFromSafeArea](sectioninsetreference-swift.enum/fromsafearea.md): Section insets are defined in relation to the safe area of the layout.

## See Also

### Configuring item spacing

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing to use between lines of items in the grid.
- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing to use between items in the same row.
- [itemSize](itemsize.md): The default size to use for cells.
- [estimatedItemSize](estimateditemsize.md): The estimated size of cells in the collection view.
- [UICollectionViewFlowLayoutAutomaticSize](automaticsize.md): A placeholder size for self-sizing cells.
- [sectionInset](sectioninset.md): The margins used to lay out content in a section.
- [sectionInsetReference](sectioninsetreference-swift.property.md): The boundary that section insets are defined in relation to.
