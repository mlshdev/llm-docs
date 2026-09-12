> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutinvalidationcontext](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutinvalidationcontext)

# NSCollectionViewLayoutInvalidationContext (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that identifies the portions of your layout that need to be updated.

## Declaration

```swift
@MainActor class NSCollectionViewLayoutInvalidationContext
```

<a id="overview"></a>

## Overview

Invalidation contexts are a way to improve the efficiency of layout operations and must be supported explicitly by the layout object. Instead of invalidating the entire layout, you can create an invalidation layout object that specifies only the portions of the layout that changed. You then pass that invalidation context to the [invalidateLayout(with:)](nscollectionviewlayout/invalidatelayout%28with_%29.md) method of the layout object.

Typically, you ask the layout object to create an invalidation context for you. The [NSCollectionViewLayout](nscollectionviewlayout.md) class defines methods for creating a supported invalidation context. If you define a custom layout, you can define additional methods for creating invalidation contexts with custom information. Layout objects may also create invalidation contexts in response to specific changes. For example, layout objects automatically create invalidation contexts when you change the collection view’s data source, when you insert or delete items, and when you reload the collection view’s data.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If you define a custom layout object, you can also subclass `NSCollectionViewLayoutInvalidationContext` and add properties that are specific to your layout object. Creating a custom invalidation context is not required and should only be done when your layout object has additional ways to optimize the layout process.

Fore more information about how to support custom invalidation contexts in your layout objects, see [NSCollectionViewLayout](nscollectionviewlayout.md).

## Topics

### Invalidating the Collection View Data

- [invalidateEverything](nscollectionviewlayoutinvalidationcontext/invalidateeverything.md): A Boolean that indicates whether all layout data should be marked as invalid.
- [invalidateDataSourceCounts](nscollectionviewlayoutinvalidationcontext/invalidatedatasourcecounts.md): A Boolean that indicates whether the layout object should ask for new section and item counts.

### Invalidating the Content Area

- [contentOffsetAdjustment](nscollectionviewlayoutinvalidationcontext/contentoffsetadjustment.md): The delta value to add to the collection view’s content offset.
- [contentSizeAdjustment](nscollectionviewlayoutinvalidationcontext/contentsizeadjustment.md): The delta value to add to the collection view’s content size.

### Invalidating Specific Items

- [invalidateItems(at:)](nscollectionviewlayoutinvalidationcontext/invalidateitems%28at_%29.md): Marks the specified items as invalid so that their layout information can be updated.
- [invalidateSupplementaryElements(ofKind:at:)](nscollectionviewlayoutinvalidationcontext/invalidatesupplementaryelements%28ofkind_at_%29.md): Marks the specified supplementary views as invalid so that their layout information can be updated.
- [invalidateDecorationElements(ofKind:at:)](nscollectionviewlayoutinvalidationcontext/invalidatedecorationelements%28ofkind_at_%29.md): Marks the specified decoration views as invalid so that their layout information can be updated.
- [invalidatedItemIndexPaths](nscollectionviewlayoutinvalidationcontext/invalidateditemindexpaths.md): The set of items whose layout attributes are invalid.
- [invalidatedSupplementaryIndexPaths](nscollectionviewlayoutinvalidationcontext/invalidatedsupplementaryindexpaths.md): A dictionary containing the supplementary views whose layout attributes are invalid.
- [invalidatedDecorationIndexPaths](nscollectionviewlayoutinvalidationcontext/invalidateddecorationindexpaths.md): A dictionary containing the decoration views whose layout attributes are invalid.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSCollectionViewFlowLayoutInvalidationContext](nscollectionviewflowlayoutinvalidationcontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Updates

- [NSCollectionViewUpdateItem](nscollectionviewupdateitem.md): A description of a single change to make to an item in a collection view.
- [NSCollectionViewFlowLayoutInvalidationContext](nscollectionviewflowlayoutinvalidationcontext.md): An object that identifies the portions of a flow layout object that need to be updated.

# NSCollectionViewLayoutInvalidationContext (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that identifies the portions of your layout that need to be updated.

## Declaration

```objectivec
@interface NSCollectionViewLayoutInvalidationContext : NSObject
```

<a id="overview"></a>

## Overview

Invalidation contexts are a way to improve the efficiency of layout operations and must be supported explicitly by the layout object. Instead of invalidating the entire layout, you can create an invalidation layout object that specifies only the portions of the layout that changed. You then pass that invalidation context to the [invalidateLayoutWithContext:](nscollectionviewlayout/invalidatelayout%28with_%29.md) method of the layout object.

Typically, you ask the layout object to create an invalidation context for you. The [NSCollectionViewLayout](nscollectionviewlayout.md) class defines methods for creating a supported invalidation context. If you define a custom layout, you can define additional methods for creating invalidation contexts with custom information. Layout objects may also create invalidation contexts in response to specific changes. For example, layout objects automatically create invalidation contexts when you change the collection view’s data source, when you insert or delete items, and when you reload the collection view’s data.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If you define a custom layout object, you can also subclass `NSCollectionViewLayoutInvalidationContext` and add properties that are specific to your layout object. Creating a custom invalidation context is not required and should only be done when your layout object has additional ways to optimize the layout process.

Fore more information about how to support custom invalidation contexts in your layout objects, see [NSCollectionViewLayout](nscollectionviewlayout.md).

## Topics

### Invalidating the Collection View Data

- [invalidateEverything](nscollectionviewlayoutinvalidationcontext/invalidateeverything.md): A Boolean that indicates whether all layout data should be marked as invalid.
- [invalidateDataSourceCounts](nscollectionviewlayoutinvalidationcontext/invalidatedatasourcecounts.md): A Boolean that indicates whether the layout object should ask for new section and item counts.

### Invalidating the Content Area

- [contentOffsetAdjustment](nscollectionviewlayoutinvalidationcontext/contentoffsetadjustment.md): The delta value to add to the collection view’s content offset.
- [contentSizeAdjustment](nscollectionviewlayoutinvalidationcontext/contentsizeadjustment.md): The delta value to add to the collection view’s content size.

### Invalidating Specific Items

- [invalidateItemsAtIndexPaths:](nscollectionviewlayoutinvalidationcontext/invalidateitems%28at_%29.md): Marks the specified items as invalid so that their layout information can be updated.
- [invalidateSupplementaryElementsOfKind:atIndexPaths:](nscollectionviewlayoutinvalidationcontext/invalidatesupplementaryelements%28ofkind_at_%29.md): Marks the specified supplementary views as invalid so that their layout information can be updated.
- [invalidateDecorationElementsOfKind:atIndexPaths:](nscollectionviewlayoutinvalidationcontext/invalidatedecorationelements%28ofkind_at_%29.md): Marks the specified decoration views as invalid so that their layout information can be updated.
- [invalidatedItemIndexPaths](nscollectionviewlayoutinvalidationcontext/invalidateditemindexpaths.md): The set of items whose layout attributes are invalid.
- [invalidatedSupplementaryIndexPaths](nscollectionviewlayoutinvalidationcontext/invalidatedsupplementaryindexpaths.md): A dictionary containing the supplementary views whose layout attributes are invalid.
- [invalidatedDecorationIndexPaths](nscollectionviewlayoutinvalidationcontext/invalidateddecorationindexpaths.md): A dictionary containing the decoration views whose layout attributes are invalid.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSCollectionViewFlowLayoutInvalidationContext](nscollectionviewflowlayoutinvalidationcontext.md)

## See Also

### Updates

- [NSCollectionViewUpdateItem](nscollectionviewupdateitem.md): A description of a single change to make to an item in a collection view.
- [NSCollectionViewFlowLayoutInvalidationContext](nscollectionviewflowlayoutinvalidationcontext.md): An object that identifies the portions of a flow layout object that need to be updated.
