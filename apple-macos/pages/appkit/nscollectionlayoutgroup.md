> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutgroup](https://developer.apple.com/documentation/appkit/nscollectionlayoutgroup)

# NSCollectionLayoutGroup (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

A container for a set of items that lays out the items along a path.

## Declaration

```swift
class NSCollectionLayoutGroup
```

<a id="overview"></a>

## Overview

Groups determine how the items in a collection view lay out in relation to each other. A group might lay out its items in a horizontal row, a vertical column, or a custom arrangement. A group determines the rules for how items are rendered in relation to each other, but in itself doesn’t render any content.

For example, in the Photos app, a group of items is a row of photos. In the App Store app, a group might be a single column of cells (items) arranged in a vertical column.

![Schematic representation of the App Store app on iOS, showing a collection view with a compositional layout. The layout is composed of horizontally-scrolling sections that have different layouts. The top section shows one group with one item visible onscreen, with other groups peeking in from the sides of the screen. The bottom section shows one group that’s a column of three cells, each of those cells being an item. The two different types of groups are highlighted and labeled as groups.](https://developer.apple.com/images/com.apple.appkit/media-3568663@2x.png)

Each group specifies its own size in terms of a width dimension and a height dimension. Groups can express their dimensions relative to their container, as an absolute value, or as an estimated value that might change at runtime, like in response to a change in system font size. For more information, see [NSCollectionLayoutDimension](nscollectionlayoutdimension.md).

Because a group is a subclass of [NSCollectionLayoutItem](nscollectionlayoutitem.md), it behaves like an item. You can combine a group with other items and groups into more complex layouts.

![Illustration of group nesting in a compositional layout. A larger group contains one large item on the leading side and two smaller items stacked vertically in a nested group on the trailing side.](https://developer.apple.com/images/com.apple.appkit/media-3568666@2x.png)

After you configure a group, you must initialize a section ([NSCollectionLayoutSection](nscollectionlayoutsection.md)) of your collection view layout with that group.

## Topics

### Creating a horizontal group

- [horizontal(layoutSize:subitems:)](nscollectionlayoutgroup/horizontal%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a horizontal line.
- [horizontal(layoutSize:subitem:count:)](nscollectionlayoutgroup/horizontal%28layoutsize_subitem_count_%29.md): Creates a group of the specified size, containing an array of equally sized items arranged in a horizontal line up to the number specified by count.

### Creating a vertical group

- [vertical(layoutSize:subitems:)](nscollectionlayoutgroup/vertical%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a vertical line.
- [vertical(layoutSize:subitem:count:)](nscollectionlayoutgroup/vertical%28layoutsize_subitem_count_%29.md): Creates a group of the specified size, containing an array of equally sized items arranged in a vertical line up to the number specified by count.

### Creating a custom group

- [custom(layoutSize:itemProvider:)](nscollectionlayoutgroup/custom%28layoutsize_itemprovider_%29.md): Creates a group of the specified size, with an item provider that creates a custom arrangement for those items.

### Getting the group’s items

- [subitems](nscollectionlayoutgroup/subitems.md): An array of the items contained in the group.
- [supplementaryItems](nscollectionlayoutgroup/supplementaryitems.md): An array of the supplementary items that are anchored to the group.

### Configuring group spacing

- [interItemSpacing](nscollectionlayoutgroup/interitemspacing.md): The amount of space between the items in the group.

### Debugging group layout

- [visualDescription()](nscollectionlayoutgroup/visualdescription%28%29.md): Returns a string with an ASCII representation of the group.

## Relationships

### Inherits From

- [NSCollectionLayoutItem](nscollectionlayoutitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Components

- [NSCollectionLayoutItem](nscollectionlayoutitem.md): The most basic component of a collection view’s layout.
- [NSCollectionLayoutSection](nscollectionlayoutsection.md): A container that combines a set of groups into distinct visual groupings.

# NSCollectionLayoutGroup (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

A container for a set of items that lays out the items along a path.

## Declaration

```objectivec
@interface NSCollectionLayoutGroup : NSCollectionLayoutItem
```

<a id="overview"></a>

## Overview

Groups determine how the items in a collection view lay out in relation to each other. A group might lay out its items in a horizontal row, a vertical column, or a custom arrangement. A group determines the rules for how items are rendered in relation to each other, but in itself doesn’t render any content.

For example, in the Photos app, a group of items is a row of photos. In the App Store app, a group might be a single column of cells (items) arranged in a vertical column.

![Schematic representation of the App Store app on iOS, showing a collection view with a compositional layout. The layout is composed of horizontally-scrolling sections that have different layouts. The top section shows one group with one item visible onscreen, with other groups peeking in from the sides of the screen. The bottom section shows one group that’s a column of three cells, each of those cells being an item. The two different types of groups are highlighted and labeled as groups.](https://developer.apple.com/images/com.apple.appkit/media-3568663@2x.png)

Each group specifies its own size in terms of a width dimension and a height dimension. Groups can express their dimensions relative to their container, as an absolute value, or as an estimated value that might change at runtime, like in response to a change in system font size. For more information, see [NSCollectionLayoutDimension](nscollectionlayoutdimension.md).

Because a group is a subclass of [NSCollectionLayoutItem](nscollectionlayoutitem.md), it behaves like an item. You can combine a group with other items and groups into more complex layouts.

![Illustration of group nesting in a compositional layout. A larger group contains one large item on the leading side and two smaller items stacked vertically in a nested group on the trailing side.](https://developer.apple.com/images/com.apple.appkit/media-3568666@2x.png)

After you configure a group, you must initialize a section ([NSCollectionLayoutSection](nscollectionlayoutsection.md)) of your collection view layout with that group.

## Topics

### Creating a horizontal group

- [horizontalGroupWithLayoutSize:subitems:](nscollectionlayoutgroup/horizontal%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a horizontal line.
- [horizontalGroupWithLayoutSize:subitem:count:](nscollectionlayoutgroup/horizontal%28layoutsize_subitem_count_%29.md): Creates a group of the specified size, containing an array of equally sized items arranged in a horizontal line up to the number specified by count.

### Creating a vertical group

- [verticalGroupWithLayoutSize:subitems:](nscollectionlayoutgroup/vertical%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a vertical line.
- [verticalGroupWithLayoutSize:subitem:count:](nscollectionlayoutgroup/vertical%28layoutsize_subitem_count_%29.md): Creates a group of the specified size, containing an array of equally sized items arranged in a vertical line up to the number specified by count.

### Creating a custom group

- [customGroupWithLayoutSize:itemProvider:](nscollectionlayoutgroup/custom%28layoutsize_itemprovider_%29.md): Creates a group of the specified size, with an item provider that creates a custom arrangement for those items.

### Getting the group’s items

- [subitems](nscollectionlayoutgroup/subitems.md): An array of the items contained in the group.
- [supplementaryItems](nscollectionlayoutgroup/supplementaryitems.md): An array of the supplementary items that are anchored to the group.

### Configuring group spacing

- [interItemSpacing](nscollectionlayoutgroup/interitemspacing.md): The amount of space between the items in the group.

### Debugging group layout

- [visualDescription](nscollectionlayoutgroup/visualdescription%28%29.md): Returns a string with an ASCII representation of the group.

## Relationships

### Inherits From

- [NSCollectionLayoutItem](nscollectionlayoutitem.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Components

- [NSCollectionLayoutItem](nscollectionlayoutitem.md): The most basic component of a collection view’s layout.
- [NSCollectionLayoutSection](nscollectionlayoutsection.md): A container that combines a set of groups into distinct visual groupings.
