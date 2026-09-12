> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutvisibleitem](https://developer.apple.com/documentation/appkit/nscollectionlayoutvisibleitem)

# NSCollectionLayoutVisibleItem (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.15+

An item that’s currently visible within the bounds of a section.

## Declaration

```swift
@MainActor protocol NSCollectionLayoutVisibleItem : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A visible item represents an item in a collection view that’s currently visible onscreen, such as a cell, supplementary view, or decoration. You access a specific section’s visible items in its visible item invalidation handler ([NSCollectionLayoutSectionVisibleItemsInvalidationHandler](nscollectionlayoutsectionvisibleitemsinvalidationhandler.md)), stored in the [visibleItemsInvalidationHandler](nscollectionlayoutsection/visibleitemsinvalidationhandler.md) property. The handler is called before each layout cycle, any time an animation occurs in that section due to changes such as adding or removing items, scrolling the section, or rotating the device.

## Topics

### Identifying the item

- [name](nscollectionlayoutvisibleitem/name.md): The name of the item.
- [representedElementKind](nscollectionlayoutvisibleitem/representedelementkind.md): A string that identifies the type of item.
- [representedElementCategory](nscollectionlayoutvisibleitem/representedelementcategory.md): A category that identifies the item, such as decoration or supplementary view.

### Getting the index path

- [indexPath](nscollectionlayoutvisibleitem/indexpath.md): The index path of the item.

### Configuring appearance

- [alpha](nscollectionlayoutvisibleitem/alpha.md): The transparency of the item.
- [isHidden](nscollectionlayoutvisibleitem/ishidden.md): A Boolean value that determines whether the item is hidden.

### Configuring position

- [frame](nscollectionlayoutvisibleitem/frame.md): The frame rectangle, which describes the item’s location and size in its section’s coordinate system.
- [bounds](nscollectionlayoutvisibleitem/bounds.md): The bounds rectangle, which describes the item’s location and size in its own coordinate system.
- [center](nscollectionlayoutvisibleitem/center.md): The center point of the item’s frame rectangle.

### Specifying stacking order

- [zIndex](nscollectionlayoutvisibleitem/zindex.md): The vertical stacking order of the item in relation to other items in the section.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Layout updates

- [NSCollectionLayoutSectionVisibleItemsInvalidationHandler](nscollectionlayoutsectionvisibleitemsinvalidationhandler.md): A closure called before each layout cycle to allow modification of items in a section immediately before they’re displayed.

# NSCollectionLayoutVisibleItem (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.15+

An item that’s currently visible within the bounds of a section.

## Declaration

```objectivec
@protocol NSCollectionLayoutVisibleItem <NSObject>
```

<a id="overview"></a>

## Overview

A visible item represents an item in a collection view that’s currently visible onscreen, such as a cell, supplementary view, or decoration. You access a specific section’s visible items in its visible item invalidation handler ([NSCollectionLayoutSectionVisibleItemsInvalidationHandler](nscollectionlayoutsectionvisibleitemsinvalidationhandler.md)), stored in the [visibleItemsInvalidationHandler](nscollectionlayoutsection/visibleitemsinvalidationhandler.md) property. The handler is called before each layout cycle, any time an animation occurs in that section due to changes such as adding or removing items, scrolling the section, or rotating the device.

## Topics

### Identifying the item

- [name](nscollectionlayoutvisibleitem/name.md): The name of the item.
- [representedElementKind](nscollectionlayoutvisibleitem/representedelementkind.md): A string that identifies the type of item.
- [representedElementCategory](nscollectionlayoutvisibleitem/representedelementcategory.md): A category that identifies the item, such as decoration or supplementary view.

### Getting the index path

- [indexPath](nscollectionlayoutvisibleitem/indexpath.md): The index path of the item.

### Configuring appearance

- [alpha](nscollectionlayoutvisibleitem/alpha.md): The transparency of the item.
- [hidden](nscollectionlayoutvisibleitem/ishidden.md): A Boolean value that determines whether the item is hidden.

### Configuring position

- [frame](nscollectionlayoutvisibleitem/frame.md): The frame rectangle, which describes the item’s location and size in its section’s coordinate system.
- [bounds](nscollectionlayoutvisibleitem/bounds.md): The bounds rectangle, which describes the item’s location and size in its own coordinate system.
- [center](nscollectionlayoutvisibleitem/center.md): The center point of the item’s frame rectangle.

### Specifying stacking order

- [zIndex](nscollectionlayoutvisibleitem/zindex.md): The vertical stacking order of the item in relation to other items in the section.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Layout updates

- [NSCollectionLayoutSectionVisibleItemsInvalidationHandler](nscollectionlayoutsectionvisibleitemsinvalidationhandler.md): A closure called before each layout cycle to allow modification of items in a section immediately before they’re displayed.
