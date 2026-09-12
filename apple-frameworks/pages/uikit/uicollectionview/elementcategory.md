> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/elementcategory](https://developer.apple.com/documentation/uikit/uicollectionview/elementcategory)

# UICollectionView.ElementCategory (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants specifying the type of view.

## Declaration

```swift
enum ElementCategory
```

## Topics

### Constants

- [UICollectionView.ElementCategory.cell](elementcategory/cell.md): The view is a cell.
- [UICollectionView.ElementCategory.supplementaryView](elementcategory/supplementaryview.md): The view is a supplementary view.
- [UICollectionView.ElementCategory.decorationView](elementcategory/decorationview.md): The view is a decoration view.

### Initializers

- [init(rawValue:)](elementcategory/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying collection view elements

- [elementKindSectionFooter](elementkindsectionfooter.md): A supplementary view that identifies the footer for a given section.
- [elementKindSectionHeader](elementkindsectionheader.md): A supplementary view that identifies the header for a given section.

# UICollectionElementCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants specifying the type of view.

## Declaration

```objectivec
enum UICollectionElementCategory : NSUInteger;
```

## Topics

### Constants

- [UICollectionElementCategoryCell](elementcategory/cell.md): The view is a cell.
- [UICollectionElementCategorySupplementaryView](elementcategory/supplementaryview.md): The view is a supplementary view.
- [UICollectionElementCategoryDecorationView](elementcategory/decorationview.md): The view is a decoration view.

## See Also

### Identifying collection view elements

- [UICollectionElementKindSectionFooter](elementkindsectionfooter.md): A supplementary view that identifies the footer for a given section.
- [UICollectionElementKindSectionHeader](elementkindsectionheader.md): A supplementary view that identifies the header for a given section.
