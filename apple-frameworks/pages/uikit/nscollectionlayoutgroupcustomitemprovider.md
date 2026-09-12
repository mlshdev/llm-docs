> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutgroupcustomitemprovider](https://developer.apple.com/documentation/uikit/nscollectionlayoutgroupcustomitemprovider)

# NSCollectionLayoutGroupCustomItemProvider (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

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

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

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
