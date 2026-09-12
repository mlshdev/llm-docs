> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutgroup](https://developer.apple.com/documentation/uikit/nscollectionlayoutgroup)

# NSCollectionLayoutGroup (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A container for a set of items that lays out the items along a path.

## Declaration

```swift
@MainActor class NSCollectionLayoutGroup
```

<a id="overview"></a>

## Overview

Groups determine how the items in a collection view lay out in relation to each other. A group might lay out its items in a horizontal row, a vertical column, or a custom arrangement. A group determines the rules for how items are rendered in relation to each other, but in itself doesn’t render any content.

For example, in the Photos app, a group of items is a row of photos. In the App Store app, a group might be a single column of cells (items) arranged in a vertical column.

![Schematic representation of the App Store app on iOS, showing a collection view with a compositional layout. The layout is composed of horizontally-scrolling sections that have different layouts. The top section shows one group with one item visible onscreen, with other groups peeking in from the sides of the screen. The bottom section shows one group that’s a column of three cells, each of those cells being an item. The two different types of groups are highlighted and labeled as groups.](https://developer.apple.com/images/com.apple.uikit/media-3568663@2x.png)

Each group specifies its own size in terms of a width dimension and a height dimension. Groups can express their dimensions relative to their container, as an absolute value, or as an estimated value that might change at runtime, like in response to a change in system font size. For more information, see [NSCollectionLayoutDimension](nscollectionlayoutdimension.md).

Because a group is a subclass of [NSCollectionLayoutItem](nscollectionlayoutitem.md), it behaves like an item. You can combine a group with other items and groups into more complex layouts.

![Illustration of group nesting in a compositional layout. A larger group contains one large item on the leading side and two smaller items stacked vertically in a nested group on the trailing side.](https://developer.apple.com/images/com.apple.uikit/media-3568666@2x.png)

After you configure a group, you must initialize a section ([NSCollectionLayoutSection](nscollectionlayoutsection.md)) of your collection view layout with that group.

## Topics

### Creating a horizontal group

- [horizontal(layoutSize:subitems:)](nscollectionlayoutgroup/horizontal%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a horizontal line.
- [horizontal(layoutSize:repeatingSubitem:count:)](nscollectionlayoutgroup/horizontal%28layoutsize_repeatingsubitem_count_%29.md): Creates a group that repeats the specified subitem a certain number of times along the horizontal axis.

### Creating a vertical group

- [vertical(layoutSize:subitems:)](nscollectionlayoutgroup/vertical%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a vertical line.
- [vertical(layoutSize:repeatingSubitem:count:)](nscollectionlayoutgroup/vertical%28layoutsize_repeatingsubitem_count_%29.md): Creates a group that repeats the specified subitem a certain number of times along the vertical axis.

### Creating a custom group

- [custom(layoutSize:itemProvider:)](nscollectionlayoutgroup/custom%28layoutsize_itemprovider_%29.md): Creates a group of the specified size, with an item provider that creates a custom arrangement for those items.

### Getting the group’s items

- [subitems](nscollectionlayoutgroup/subitems.md): An array of the items contained in the group.
- [supplementaryItems](nscollectionlayoutgroup/supplementaryitems.md): An array of the supplementary items that are anchored to the group.

### Configuring group spacing

- [interItemSpacing](nscollectionlayoutgroup/interitemspacing.md): The amount of space between the items in the group.

### Debugging group layout

- [visualDescription()](nscollectionlayoutgroup/visualdescription%28%29.md): Returns a string with an ASCII representation of the group.

### Deprecated

- [horizontal(layoutSize:subitem:count:)](nscollectionlayoutgroup/horizontal%28layoutsize_subitem_count_%29.md): Deprecated. Creates a group of the specified size, containing an array of equally sized items arranged in a horizontal line up to the number specified by count.
- [horizontalGroup(with:repeatingSubitem:count:)](nscollectionlayoutgroup/horizontalgroup%28with_repeatingsubitem_count_%29.md): Deprecated. Creates a group that repeats the specified subitem a certain number of times along the horizontal axis.
- [vertical(layoutSize:subitem:count:)](nscollectionlayoutgroup/vertical%28layoutsize_subitem_count_%29.md): Deprecated. Creates a group of the specified size, containing an array of equally sized items arranged in a vertical line up to the number specified by count.
- [verticalGroup(with:repeatingSubitem:count:)](nscollectionlayoutgroup/verticalgroup%28with_repeatingsubitem_count_%29.md): Deprecated. Creates a group that repeats the specified subitem a certain number of times along the vertical axis.

## Relationships

### Inherits From

- [NSCollectionLayoutItem](nscollectionlayoutitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Components

- [NSCollectionLayoutItem](nscollectionlayoutitem.md): The most basic component of a collection view’s layout.
- [NSCollectionLayoutSection](nscollectionlayoutsection.md): A container that combines a set of groups into distinct visual groupings.

# NSCollectionLayoutGroup (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A container for a set of items that lays out the items along a path.

## Declaration

```objectivec
@interface NSCollectionLayoutGroup : NSCollectionLayoutItem
```

<a id="overview"></a>

## Overview

Groups determine how the items in a collection view lay out in relation to each other. A group might lay out its items in a horizontal row, a vertical column, or a custom arrangement. A group determines the rules for how items are rendered in relation to each other, but in itself doesn’t render any content.

For example, in the Photos app, a group of items is a row of photos. In the App Store app, a group might be a single column of cells (items) arranged in a vertical column.

![Schematic representation of the App Store app on iOS, showing a collection view with a compositional layout. The layout is composed of horizontally-scrolling sections that have different layouts. The top section shows one group with one item visible onscreen, with other groups peeking in from the sides of the screen. The bottom section shows one group that’s a column of three cells, each of those cells being an item. The two different types of groups are highlighted and labeled as groups.](https://developer.apple.com/images/com.apple.uikit/media-3568663@2x.png)

Each group specifies its own size in terms of a width dimension and a height dimension. Groups can express their dimensions relative to their container, as an absolute value, or as an estimated value that might change at runtime, like in response to a change in system font size. For more information, see [NSCollectionLayoutDimension](nscollectionlayoutdimension.md).

Because a group is a subclass of [NSCollectionLayoutItem](nscollectionlayoutitem.md), it behaves like an item. You can combine a group with other items and groups into more complex layouts.

![Illustration of group nesting in a compositional layout. A larger group contains one large item on the leading side and two smaller items stacked vertically in a nested group on the trailing side.](https://developer.apple.com/images/com.apple.uikit/media-3568666@2x.png)

After you configure a group, you must initialize a section ([NSCollectionLayoutSection](nscollectionlayoutsection.md)) of your collection view layout with that group.

## Topics

### Creating a horizontal group

- [horizontalGroupWithLayoutSize:subitems:](nscollectionlayoutgroup/horizontal%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a horizontal line.
- [horizontalGroupWithLayoutSize:repeatingSubitem:count:](nscollectionlayoutgroup/horizontal%28layoutsize_repeatingsubitem_count_%29.md): Creates a group that repeats the specified subitem a certain number of times along the horizontal axis.

### Creating a vertical group

- [verticalGroupWithLayoutSize:subitems:](nscollectionlayoutgroup/vertical%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a vertical line.
- [verticalGroupWithLayoutSize:repeatingSubitem:count:](nscollectionlayoutgroup/vertical%28layoutsize_repeatingsubitem_count_%29.md): Creates a group that repeats the specified subitem a certain number of times along the vertical axis.

### Creating a custom group

- [customGroupWithLayoutSize:itemProvider:](nscollectionlayoutgroup/custom%28layoutsize_itemprovider_%29.md): Creates a group of the specified size, with an item provider that creates a custom arrangement for those items.

### Getting the group’s items

- [subitems](nscollectionlayoutgroup/subitems.md): An array of the items contained in the group.
- [supplementaryItems](nscollectionlayoutgroup/supplementaryitems.md): An array of the supplementary items that are anchored to the group.

### Configuring group spacing

- [interItemSpacing](nscollectionlayoutgroup/interitemspacing.md): The amount of space between the items in the group.

### Debugging group layout

- [visualDescription](nscollectionlayoutgroup/visualdescription%28%29.md): Returns a string with an ASCII representation of the group.

### Deprecated

- [horizontalGroupWithLayoutSize:subitem:count:](nscollectionlayoutgroup/horizontal%28layoutsize_subitem_count_%29.md): Deprecated. Creates a group of the specified size, containing an array of equally sized items arranged in a horizontal line up to the number specified by count.
- [verticalGroupWithLayoutSize:subitem:count:](nscollectionlayoutgroup/vertical%28layoutsize_subitem_count_%29.md): Deprecated. Creates a group of the specified size, containing an array of equally sized items arranged in a vertical line up to the number specified by count.

## Relationships

### Inherits From

- [NSCollectionLayoutItem](nscollectionlayoutitem.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Components

- [NSCollectionLayoutItem](nscollectionlayoutitem.md): The most basic component of a collection view’s layout.
- [NSCollectionLayoutSection](nscollectionlayoutsection.md): A container that combines a set of groups into distinct visual groupings.
