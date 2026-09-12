> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutinvalidationcontext](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutinvalidationcontext)

# UICollectionViewLayoutInvalidationContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A context object that declares which parts of your layout need to be updated when the layout is invalidated.

## Declaration

```swift
@MainActor class UICollectionViewLayoutInvalidationContext
```

<a id="overview"></a>

## Overview

Layout objects that are designed to support invalidation contexts can use the information in a [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md) object to optimize their behavior during the invalidation cycle. You can create an invalidation context object as a precursor to invalidating a layout object. After configuring the invalidation context object, pass it to the layout object’s [invalidateLayout(with:)](uicollectionviewlayout/invalidatelayout%28with_%29.md) method, which is responsible for using the context object to update the layout efficiently. The collection view also creates invalidation contexts in response to specific changes. For example, it creates an invalidation context when you change the layout or data source object, when you insert or delete items, and when you call the [reloadData()](uicollectionview/reloaddata%28%29.md) method.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If you create your own custom layout objects, you can subclass `UICollectionViewLayoutInvalidationContext` and add properties to specify which aspects of your layout data can be invalidated separately. You must then design your layout object to check for these properties and update the layout appropriately.

For more information about how to support custom invalidation contexts in your layout objects, see [UICollectionViewLayout](uicollectionviewlayout.md).

## Topics

### Invalidating the Collection View Data

- [invalidateEverything](uicollectionviewlayoutinvalidationcontext/invalidateeverything.md): A Boolean that indicates that all layout data should be marked as invalid.
- [invalidateDataSourceCounts](uicollectionviewlayoutinvalidationcontext/invalidatedatasourcecounts.md): A Boolean that indicates whether the layout should ask for new section and item counts.

### Invalidating the Content Area

- [contentOffsetAdjustment](uicollectionviewlayoutinvalidationcontext/contentoffsetadjustment.md): The delta value to be applied to the collection view’s content offset.
- [contentSizeAdjustment](uicollectionviewlayoutinvalidationcontext/contentsizeadjustment.md): The delta value to be applied to the collection view’s content size.

### Invalidating Specific Items

- [invalidateItems(at:)](uicollectionviewlayoutinvalidationcontext/invalidateitems%28at_%29.md): Adds the cells at the specified index paths to the list of invalid items.
- [invalidateSupplementaryElements(ofKind:at:)](uicollectionviewlayoutinvalidationcontext/invalidatesupplementaryelements%28ofkind_at_%29.md): Adds the supplementary views at the specified index paths to the list of invalid items.
- [invalidateDecorationElements(ofKind:at:)](uicollectionviewlayoutinvalidationcontext/invalidatedecorationelements%28ofkind_at_%29.md): Adds the decoration views at the specified index paths to the list of invalid items.
- [invalidatedItemIndexPaths](uicollectionviewlayoutinvalidationcontext/invalidateditemindexpaths.md): An array of index paths representing the cells that were invalidated.
- [invalidatedSupplementaryIndexPaths](uicollectionviewlayoutinvalidationcontext/invalidatedsupplementaryindexpaths.md): A dictionary that identifies the supplementary views that were invalidated.
- [invalidatedDecorationIndexPaths](uicollectionviewlayoutinvalidationcontext/invalidateddecorationindexpaths.md): A dictionary that identifies the decoration views that were invalidated.

### Invalidating the Order of Items

- [previousIndexPathsForInteractivelyMovingItems](uicollectionviewlayoutinvalidationcontext/previousindexpathsforinteractivelymovingitems.md): An array of index paths representing the previous location of moving items in the collection view.
- [targetIndexPathsForInteractivelyMovingItems](uicollectionviewlayoutinvalidationcontext/targetindexpathsforinteractivelymovingitems.md): An array of index paths representing the new location of moving items in the collection view.
- [interactiveMovementTarget](uicollectionviewlayoutinvalidationcontext/interactivemovementtarget.md): The current point used to determine the placement of moving items.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICollectionViewFlowLayoutInvalidationContext](uicollectionviewflowlayoutinvalidationcontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Layout updates

- [NSCollectionLayoutVisibleItem](nscollectionlayoutvisibleitem.md): An item that’s currently visible within the bounds of a section.
- [NSCollectionLayoutSectionVisibleItemsInvalidationHandler](nscollectionlayoutsectionvisibleitemsinvalidationhandler.md): A closure called before each layout cycle to allow modification of items in a section immediately before they’re displayed.
- [UICollectionViewUpdateItem](uicollectionviewupdateitem.md): An object that describes a single change to make to an item in a collection view.
- [UICollectionViewFocusUpdateContext](uicollectionviewfocusupdatecontext.md): A context object that stores information specific to a focus update in a collection view.

# UICollectionViewLayoutInvalidationContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A context object that declares which parts of your layout need to be updated when the layout is invalidated.

## Declaration

```objectivec
@interface UICollectionViewLayoutInvalidationContext : NSObject
```

<a id="overview"></a>

## Overview

Layout objects that are designed to support invalidation contexts can use the information in a [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md) object to optimize their behavior during the invalidation cycle. You can create an invalidation context object as a precursor to invalidating a layout object. After configuring the invalidation context object, pass it to the layout object’s [invalidateLayoutWithContext:](uicollectionviewlayout/invalidatelayout%28with_%29.md) method, which is responsible for using the context object to update the layout efficiently. The collection view also creates invalidation contexts in response to specific changes. For example, it creates an invalidation context when you change the layout or data source object, when you insert or delete items, and when you call the [reloadData](uicollectionview/reloaddata%28%29.md) method.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If you create your own custom layout objects, you can subclass `UICollectionViewLayoutInvalidationContext` and add properties to specify which aspects of your layout data can be invalidated separately. You must then design your layout object to check for these properties and update the layout appropriately.

For more information about how to support custom invalidation contexts in your layout objects, see [UICollectionViewLayout](uicollectionviewlayout.md).

## Topics

### Invalidating the Collection View Data

- [invalidateEverything](uicollectionviewlayoutinvalidationcontext/invalidateeverything.md): A Boolean that indicates that all layout data should be marked as invalid.
- [invalidateDataSourceCounts](uicollectionviewlayoutinvalidationcontext/invalidatedatasourcecounts.md): A Boolean that indicates whether the layout should ask for new section and item counts.

### Invalidating the Content Area

- [contentOffsetAdjustment](uicollectionviewlayoutinvalidationcontext/contentoffsetadjustment.md): The delta value to be applied to the collection view’s content offset.
- [contentSizeAdjustment](uicollectionviewlayoutinvalidationcontext/contentsizeadjustment.md): The delta value to be applied to the collection view’s content size.

### Invalidating Specific Items

- [invalidateItemsAtIndexPaths:](uicollectionviewlayoutinvalidationcontext/invalidateitems%28at_%29.md): Adds the cells at the specified index paths to the list of invalid items.
- [invalidateSupplementaryElementsOfKind:atIndexPaths:](uicollectionviewlayoutinvalidationcontext/invalidatesupplementaryelements%28ofkind_at_%29.md): Adds the supplementary views at the specified index paths to the list of invalid items.
- [invalidateDecorationElementsOfKind:atIndexPaths:](uicollectionviewlayoutinvalidationcontext/invalidatedecorationelements%28ofkind_at_%29.md): Adds the decoration views at the specified index paths to the list of invalid items.
- [invalidatedItemIndexPaths](uicollectionviewlayoutinvalidationcontext/invalidateditemindexpaths.md): An array of index paths representing the cells that were invalidated.
- [invalidatedSupplementaryIndexPaths](uicollectionviewlayoutinvalidationcontext/invalidatedsupplementaryindexpaths.md): A dictionary that identifies the supplementary views that were invalidated.
- [invalidatedDecorationIndexPaths](uicollectionviewlayoutinvalidationcontext/invalidateddecorationindexpaths.md): A dictionary that identifies the decoration views that were invalidated.

### Invalidating the Order of Items

- [previousIndexPathsForInteractivelyMovingItems](uicollectionviewlayoutinvalidationcontext/previousindexpathsforinteractivelymovingitems.md): An array of index paths representing the previous location of moving items in the collection view.
- [targetIndexPathsForInteractivelyMovingItems](uicollectionviewlayoutinvalidationcontext/targetindexpathsforinteractivelymovingitems.md): An array of index paths representing the new location of moving items in the collection view.
- [interactiveMovementTarget](uicollectionviewlayoutinvalidationcontext/interactivemovementtarget.md): The current point used to determine the placement of moving items.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICollectionViewFlowLayoutInvalidationContext](uicollectionviewflowlayoutinvalidationcontext.md)

## See Also

### Layout updates

- [NSCollectionLayoutVisibleItem](nscollectionlayoutvisibleitem.md): An item that’s currently visible within the bounds of a section.
- [NSCollectionLayoutSectionVisibleItemsInvalidationHandler](nscollectionlayoutsectionvisibleitemsinvalidationhandler.md): A closure called before each layout cycle to allow modification of items in a section immediately before they’re displayed.
- [UICollectionViewUpdateItem](uicollectionviewupdateitem.md): An object that describes a single change to make to an item in a collection view.
- [UICollectionViewFocusUpdateContext](uicollectionviewfocusupdatecontext.md): A context object that stores information specific to a focus update in a collection view.
