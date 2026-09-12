> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutitem/init(layoutsize:supplementaryitems:)](https://developer.apple.com/documentation/appkit/nscollectionlayoutitem/init(layoutsize:supplementaryitems:))

# init(layoutSize:supplementaryItems:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates an item of the specified size with an array of supplementary items to attach to the item.

## Declaration

```swift
convenience init(layoutSize: NSCollectionLayoutSize, supplementaryItems: [NSCollectionLayoutSupplementaryItem])
```

## See Also

### Creating an item

- [init(layoutSize:)](init%28layoutsize_%29.md): Creates an item of the specified size.

# itemWithLayoutSize:supplementaryItems: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates an item of the specified size with an array of supplementary items to attach to the item.

## Declaration

```objectivec
+ (instancetype) itemWithLayoutSize:(NSCollectionLayoutSize *) layoutSize supplementaryItems:(NSArray<NSCollectionLayoutSupplementaryItem *> *) supplementaryItems;
```

## See Also

### Creating an item

- [itemWithLayoutSize:](init%28layoutsize_%29.md): Creates an item of the specified size.
