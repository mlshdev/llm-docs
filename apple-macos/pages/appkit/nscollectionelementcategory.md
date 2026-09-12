> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionelementcategory](https://developer.apple.com/documentation/appkit/nscollectionelementcategory)

# NSCollectionElementCategory (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ · macOS 10.11+

Constants specifying the type of element in the collection view.

## Declaration

```swift
enum NSCollectionElementCategory
```

## Topics

### Constants

- [NSCollectionElementCategory.item](nscollectionelementcategory/item.md): The element is an item. Items represent the main content of your collection view.
- [NSCollectionElementCategory.supplementaryView](nscollectionelementcategory/supplementaryview.md): The element is a supplementary view. Use supplementary views for single views that contain some data but are associated with an entire section. For example, use them to specify header or footer views for a section.
- [NSCollectionElementCategory.decorationView](nscollectionelementcategory/decorationview.md): The element is a decoration view. Decoration views represent visual adornments that do not contain any data of their own.
- [NSCollectionElementCategory.interItemGap](nscollectionelementcategory/interitemgap.md): The element is an inter-item gap. An inter-item gap element is a custom visual indicator that is displayed between items when dropping items into the collection view.

### Initializers

- [init(rawValue:)](nscollectionelementcategory/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Inter-Item Gap Support](inter-item-gap-support.md): Constant for supporting inter-item gaps.

# NSCollectionElementCategory (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ · macOS 10.11+

Constants specifying the type of element in the collection view.

## Declaration

```objectivec
enum NSCollectionElementCategory : NSInteger;
```

## Topics

### Constants

- [NSCollectionElementCategoryItem](nscollectionelementcategory/item.md): The element is an item. Items represent the main content of your collection view.
- [NSCollectionElementCategorySupplementaryView](nscollectionelementcategory/supplementaryview.md): The element is a supplementary view. Use supplementary views for single views that contain some data but are associated with an entire section. For example, use them to specify header or footer views for a section.
- [NSCollectionElementCategoryDecorationView](nscollectionelementcategory/decorationview.md): The element is a decoration view. Decoration views represent visual adornments that do not contain any data of their own.
- [NSCollectionElementCategoryInterItemGap](nscollectionelementcategory/interitemgap.md): The element is an inter-item gap. An inter-item gap element is a custom visual indicator that is displayed between items when dropping items into the collection view.

## See Also

### Constants

- [Inter-Item Gap Support](inter-item-gap-support.md): Constant for supporting inter-item gaps.
