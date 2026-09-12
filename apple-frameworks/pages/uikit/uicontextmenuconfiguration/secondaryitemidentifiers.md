> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuconfiguration/secondaryitemidentifiers](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration/secondaryitemidentifiers)

# secondaryItemIdentifiers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A set of identifiers corresponding to each item other than the primary item in a multiple-item interaction.

## Declaration

```swift
var secondaryItemIdentifiers: Set<AnyHashable> { get set }
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

When the context menu acts on multiple items, you can use this property to include the identifiers of the secondary items in the configuration. You don’t need to set this property when you create a configuration that originates from a multiple-item interaction in a collection view, such as in [collectionView(\_:contextMenuConfigurationForItemsAt:point:)](../uicollectionviewdelegate/collectionview%28__contextmenuconfigurationforitemsat_point_%29.md).

## See Also

### Handling multiple-item interactions

- [badgeCount](badgecount.md): The number of items in a multiple-item interaction.

# secondaryItemIdentifiers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A set of identifiers corresponding to each item other than the primary item in a multiple-item interaction.

## Declaration

```objectivec
@property (nonatomic, copy) NSSet<id<NSCopying>> * secondaryItemIdentifiers;
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

When the context menu acts on multiple items, you can use this property to include the identifiers of the secondary items in the configuration. You don’t need to set this property when you create a configuration that originates from a multiple-item interaction in a collection view, such as in [collectionView:contextMenuConfigurationForItemsAtIndexPaths:point:](../uicollectionviewdelegate/collectionview%28__contextmenuconfigurationforitemsat_point_%29.md).

## See Also

### Handling multiple-item interactions

- [badgeCount](badgecount.md): The number of items in a multiple-item interaction.
