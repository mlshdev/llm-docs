> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutgroupcustomitemprovider](https://developer.apple.com/documentation/appkit/nscollectionlayoutgroupcustomitemprovider)

# NSCollectionLayoutGroupCustomItemProvider (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure that creates and returns each of the custom group’s items.

## Declaration

```swift
typealias NSCollectionLayoutGroupCustomItemProvider = (any NSCollectionLayoutEnvironment) -> [NSCollectionLayoutGroupCustomItem]
```

<a id="Discussion"></a>

## Discussion

You use a custom item provider to supply the item arrangement when creating a group using the [custom(layoutSize:itemProvider:)](nscollectionlayoutgroup/custom%28layoutsize_itemprovider_%29.md) initializer.

## See Also

### Advanced layouts

- [NSCollectionLayoutGroupCustomItem](nscollectionlayoutgroupcustomitem.md): An item used in a group with a custom layout arrangement.

# NSCollectionLayoutGroupCustomItemProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure that creates and returns each of the custom group’s items.

## Declaration

```objectivec
typedef NSArray<NSCollectionLayoutGroupCustomItem *> *(^)(id<NSCollectionLayoutEnvironment>) NSCollectionLayoutGroupCustomItemProvider;
```

<a id="Discussion"></a>

## Discussion

You use a custom item provider to supply the item arrangement when creating a group using the [customGroupWithLayoutSize:itemProvider:](nscollectionlayoutgroup/custom%28layoutsize_itemprovider_%29.md) initializer.

## See Also

### Advanced layouts

- [NSCollectionLayoutGroupCustomItem](nscollectionlayoutgroupcustomitem.md): An item used in a group with a custom layout arrangement.
