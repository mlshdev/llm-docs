> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout](https://developer.apple.com/documentation/uikit/uicollectionviewlayout)

# UICollectionViewLayout (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An abstract base class for generating layout information for a collection view.

## Declaration

```swift
@MainActor class UICollectionViewLayout
```

<a id="overview"></a>

## Overview

A layout object determines the placement of cells, supplementary views, and decoration views inside the collection view’s bounds and reports that information to the collection view. The collection view then applies the provided layout information to the corresponding views so that they can be presented onscreen.

You must subclass [UICollectionViewLayout](uicollectionviewlayout.md) in order to use it. Before you consider subclassing, however, consider whether you can adapt [UICollectionViewCompositionalLayout](uicollectionviewcompositionallayout.md) to your layout needs.

<a id="Subclassing-notes"></a>

### Subclassing notes

The layout object defines the position, size, and visual state of items in the collection view, based on the design of the layout. The views for the layout are created by the collection view’s data source.

You lay out three types of visual elements in a collection view:

- *Cells* are the main elements positioned by the layout. Each cell represents a single data item in the collection. You can make cells interactive so that a user can perform actions like selecting, dragging, and reordering the cells. A collection view can have a single group of cells, or you can divide those cells into multiple sections. The layout object arranges the cells in the collection view’s content area.
- *Supplementary views* present data but can’t be selected by the user. You use supplementary views to implement things like header and footer views for a given section or for the entire collection view. Supplementary views are optional and their use and placement is defined by the layout object.
- *Decoration views* are visual adornments, like badges, that can’t be selected and aren’t inherently tied to the data of the collection view. Decoration views are another type of supplementary view. Like supplementary views, they’re optional and their use and placement is defined by the layout object.

The collection view asks its layout object to provide layout information for these elements at many different times. Every cell and view that appears on screen is positioned using information from the layout object. Similarly, every time items are inserted into or deleted from the collection view, an additional layout pass occurs for the items being added or removed. However, the collection view always limits layout to the objects that are visible onscreen.

<a id="Methods-to-override"></a>

#### Methods to override

Every layout object should implement the following methods:

- [collectionViewContentSize](uicollectionviewlayout/collectionviewcontentsize.md)
- [layoutAttributesForElements(in:)](uicollectionviewlayout/layoutattributesforelements%28in_%29.md)
- [layoutAttributesForItem(at:)](uicollectionviewlayout/layoutattributesforitem%28at_%29.md)
- [layoutAttributesForSupplementaryView(ofKind:at:)](uicollectionviewlayout/layoutattributesforsupplementaryview%28ofkind_at_%29.md) (if your layout supports supplementary views)
- [layoutAttributesForDecorationView(ofKind:at:)](uicollectionviewlayout/layoutattributesfordecorationview%28ofkind_at_%29.md) (if your layout supports decoration views)
- [shouldInvalidateLayout(forBoundsChange:)](uicollectionviewlayout/shouldinvalidatelayout%28forboundschange_%29.md)

These methods provide the fundamental layout information that the collection view needs to place contents on the screen. If your layout doesn’t support supplementary or decoration views, don’t implement the corresponding methods.

When the data in the collection view changes and items are to be inserted or deleted, the collection view asks its layout object to update the layout information. Specifically, any item that’s moved, added, or deleted must have its layout information updated to reflect its new location. For moved items, the collection view uses the standard methods to retrieve the item’s updated layout attributes. For items being inserted or deleted, the collection view calls some different methods, which you should override to provide the appropriate layout information:

- [initialLayoutAttributesForAppearingItem(at:)](uicollectionviewlayout/initiallayoutattributesforappearingitem%28at_%29.md)
- [initialLayoutAttributesForAppearingSupplementaryElement(ofKind:at:)](uicollectionviewlayout/initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md)
- [initialLayoutAttributesForAppearingDecorationElement(ofKind:at:)](uicollectionviewlayout/initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md)
- [finalLayoutAttributesForDisappearingItem(at:)](uicollectionviewlayout/finallayoutattributesfordisappearingitem%28at_%29.md)
- [finalLayoutAttributesForDisappearingSupplementaryElement(ofKind:at:)](uicollectionviewlayout/finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md)
- [finalLayoutAttributesForDisappearingDecorationElement(ofKind:at:)](uicollectionviewlayout/finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md)

In addition to these methods, you can also override the [prepare(forCollectionViewUpdates:)](uicollectionviewlayout/prepare%28forcollectionviewupdates_%29.md) to handle any layout-related preparation. You can also override the [finalizeCollectionViewUpdates()](uicollectionviewlayout/finalizecollectionviewupdates%28%29.md) method and use it to add animations to the overall animation block or to implement any final layout-related tasks.

<a id="Optimizing-layout-performance-using-invalidation-contexts"></a>

#### Optimizing layout performance using invalidation contexts

When designing your custom layouts, you can improve performance by invalidating only those parts of your layout that actually changed. When you change items, calling the [invalidateLayout()](uicollectionviewlayout/invalidatelayout%28%29.md) method forces the collection view to recompute all of its layout information and reapply it. A better solution is to recompute only the layout information that changed, which is exactly what invalidation contexts allow you to do. An invalidation context lets you specify which parts of the layout changed. The layout object can then use that information to minimize the amount of data it recomputes.

To define a custom invalidation context for your layout, subclass the [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md) class. In your subclass, define custom properties that represent the parts of your layout data that can be recomputed independently. When you need to invalidate your layout at runtime, create an instance of your invalidation context subclass, configure the custom properties based on what layout information changed, and pass that object to your layout’s [invalidateLayout(with:)](uicollectionviewlayout/invalidatelayout%28with_%29.md) method. Your custom implementation of that method can use the information in the invalidation context to recompute only the portions of your layout that changed.

If you define a custom invalidation context class for your layout object, you should also override the [invalidationContextClass](uicollectionviewlayout/invalidationcontextclass.md) method and return your custom class. The collection view always creates an instance of the class you specify when it needs an invalidation context. Returning your custom subclass from this method ensures that your layout object always has the invalidation context it expects.

## Topics

### Creating the collection view layout

- [init()](uicollectionviewlayout/init%28%29.md): Creates a collection view layout object.
- [init(coder:)](uicollectionviewlayout/init%28coder_%29.md): Creates a collection view layout object from data in a given unarchiver.

### Getting the collection view information

- [collectionView](uicollectionviewlayout/collectionview.md): The collection view object currently using this layout object.
- [collectionViewContentSize](uicollectionviewlayout/collectionviewcontentsize.md): The width and height of the collection view’s contents.

### Providing layout attributes

- [layoutAttributesClass](uicollectionviewlayout/layoutattributesclass.md): The class to use when creating layout attributes objects.
- [prepare()](uicollectionviewlayout/prepare%28%29.md): Tells the layout object to update the current layout.
- [layoutAttributesForElements(in:)](uicollectionviewlayout/layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItem(at:)](uicollectionviewlayout/layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForInteractivelyMovingItem(at:withTargetPosition:)](uicollectionviewlayout/layoutattributesforinteractivelymovingitem%28at_withtargetposition_%29.md): Retrieves the layout attributes of an item when it is being moved interactively by the user.
- [layoutAttributesForSupplementaryView(ofKind:at:)](uicollectionviewlayout/layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [layoutAttributesForDecorationView(ofKind:at:)](uicollectionviewlayout/layoutattributesfordecorationview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified decoration view.
- [targetContentOffset(forProposedContentOffset:)](uicollectionviewlayout/targetcontentoffset%28forproposedcontentoffset_%29.md): Retrieves the content offset to use after an animated layout update or change.
- [targetContentOffset(forProposedContentOffset:withScrollingVelocity:)](uicollectionviewlayout/targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Retrieves the point at which to stop scrolling.

### Responding to collection view updates

- [prepare(forCollectionViewUpdates:)](uicollectionviewlayout/prepare%28forcollectionviewupdates_%29.md): Notifies the layout object that the contents of the collection view are about to change.
- [finalizeCollectionViewUpdates()](uicollectionviewlayout/finalizecollectionviewupdates%28%29.md): Performs any additional animations or clean up needed during a collection view update.
- [indexPathsToInsertForSupplementaryView(ofKind:)](uicollectionviewlayout/indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths for the supplementary views you want to add to the layout.
- [indexPathsToInsertForDecorationView(ofKind:)](uicollectionviewlayout/indexpathstoinsertfordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to add.
- [initialLayoutAttributesForAppearingItem(at:)](uicollectionviewlayout/initiallayoutattributesforappearingitem%28at_%29.md): Retrieves the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingSupplementaryElement(ofKind:at:)](uicollectionviewlayout/initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md): Retrieves the starting layout information for a supplementary view being inserted into the collection view.
- [initialLayoutAttributesForAppearingDecorationElement(ofKind:at:)](uicollectionviewlayout/initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md): Retrieves the starting layout information for a decoration view being inserted into the collection view.
- [indexPathsToDeleteForSupplementaryView(ofKind:)](uicollectionviewlayout/indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths representing the supplementary views to remove.
- [indexPathsToDeleteForDecorationView(ofKind:)](uicollectionviewlayout/indexpathstodeletefordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to remove.
- [finalLayoutAttributesForDisappearingItem(at:)](uicollectionviewlayout/finallayoutattributesfordisappearingitem%28at_%29.md): Retrieves the final layout information for an item that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElement(ofKind:at:)](uicollectionviewlayout/finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Retrieves the final layout information for a supplementary view that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElement(ofKind:at:)](uicollectionviewlayout/finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Retrieves the final layout information for a decoration view that is about to be removed from the collection view.
- [targetIndexPath(forInteractivelyMovingItem:withPosition:)](uicollectionviewlayout/targetindexpath%28forinteractivelymovingitem_withposition_%29.md): Retrieves the index path to for an item when it is at the specified location in the collection view’s bounds.

### Invalidating the layout

- [invalidateLayout()](uicollectionviewlayout/invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidateLayout(with:)](uicollectionviewlayout/invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](uicollectionviewlayout/invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayout(forBoundsChange:)](uicollectionviewlayout/shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [invalidationContext(forBoundsChange:)](uicollectionviewlayout/invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [shouldInvalidateLayout(forPreferredLayoutAttributes:withOriginalAttributes:)](uicollectionviewlayout/shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContext(forPreferredLayoutAttributes:withOriginalAttributes:)](uicollectionviewlayout/invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContext(forInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:)](uicollectionviewlayout/invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItems(toFinalIndexPaths:previousIndexPaths:movementCancelled:)](uicollectionviewlayout/invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved

### Coordinating animated changes

- [prepare(forAnimatedBoundsChange:)](uicollectionviewlayout/prepare%28foranimatedboundschange_%29.md): Prepares the layout object for animated changes to the view’s bounds or the insertion or deletion of items.
- [finalizeAnimatedBoundsChange()](uicollectionviewlayout/finalizeanimatedboundschange%28%29.md): Cleans up after any animated changes to the view’s bounds or after the insertion or deletion of items.

### Transitioning between layouts

- [prepareForTransition(from:)](uicollectionviewlayout/preparefortransition%28from_%29.md): Tells the layout object to prepare to be installed as the layout for the collection view.
- [prepareForTransition(to:)](uicollectionviewlayout/preparefortransition%28to_%29.md): Tells the layout object that it is about to be removed as the layout for the collection view.
- [finalizeLayoutTransition()](uicollectionviewlayout/finalizelayouttransition%28%29.md): Tells the layout object to perform any final steps before the transition animations occur.

### Registering decoration views

- [register(\_:forDecorationViewOfKind:)](uicollectionviewlayout/register%28__fordecorationviewofkind_%29-361k6.md): Registers a class for use in creating decoration views for a collection view.
- [register(\_:forDecorationViewOfKind:)](uicollectionviewlayout/register%28__fordecorationviewofkind_%29-35jf9.md): Deprecated. Registers a nib file for use in creating decoration views for a collection view.

### Supporting right-to-left layouts

- [developmentLayoutDirection](uicollectionviewlayout/developmentlayoutdirection.md): The direction of the language you used when designing your custom layout.
- [flipsHorizontallyInOppositeLayoutDirection](uicollectionviewlayout/flipshorizontallyinoppositelayoutdirection.md): A Boolean value that indicates whether the horizontal coordinate system is automatically flipped at appropriate times.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICollectionViewCompositionalLayout](uicollectionviewcompositionallayout.md)
- [UICollectionViewFlowLayout](uicollectionviewflowlayout.md)
- [UICollectionViewTransitionLayout](uicollectionviewtransitionlayout.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Manual layouts

- [Customizing collection view layouts](customizing-collection-view-layouts.md): Customize a view layout by changing the size of cells in the flow or implementing a mosaic style.
- [UICollectionViewFlowLayout](uicollectionviewflowlayout.md): A layout object that organizes items into a grid with optional header and footer views for each section.
- [UICollectionViewTransitionLayout](uicollectionviewtransitionlayout.md): A special type of layout object that lets you implement behaviors when changing from one layout to another in your collection view.
- [UICollectionViewLayoutAttributes](uicollectionviewlayoutattributes.md): A layout object that manages the layout-related attributes for a given item in a collection view.
- [UICollectionViewFlowLayoutInvalidationContext](uicollectionviewflowlayoutinvalidationcontext.md): A set of properties for determining whether to recompute the size of items or their position in the layout.

# UICollectionViewLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An abstract base class for generating layout information for a collection view.

## Declaration

```objectivec
@interface UICollectionViewLayout : NSObject
```

<a id="overview"></a>

## Overview

A layout object determines the placement of cells, supplementary views, and decoration views inside the collection view’s bounds and reports that information to the collection view. The collection view then applies the provided layout information to the corresponding views so that they can be presented onscreen.

You must subclass [UICollectionViewLayout](uicollectionviewlayout.md) in order to use it. Before you consider subclassing, however, consider whether you can adapt [UICollectionViewCompositionalLayout](uicollectionviewcompositionallayout.md) to your layout needs.

<a id="Subclassing-notes"></a>

### Subclassing notes

The layout object defines the position, size, and visual state of items in the collection view, based on the design of the layout. The views for the layout are created by the collection view’s data source.

You lay out three types of visual elements in a collection view:

- *Cells* are the main elements positioned by the layout. Each cell represents a single data item in the collection. You can make cells interactive so that a user can perform actions like selecting, dragging, and reordering the cells. A collection view can have a single group of cells, or you can divide those cells into multiple sections. The layout object arranges the cells in the collection view’s content area.
- *Supplementary views* present data but can’t be selected by the user. You use supplementary views to implement things like header and footer views for a given section or for the entire collection view. Supplementary views are optional and their use and placement is defined by the layout object.
- *Decoration views* are visual adornments, like badges, that can’t be selected and aren’t inherently tied to the data of the collection view. Decoration views are another type of supplementary view. Like supplementary views, they’re optional and their use and placement is defined by the layout object.

The collection view asks its layout object to provide layout information for these elements at many different times. Every cell and view that appears on screen is positioned using information from the layout object. Similarly, every time items are inserted into or deleted from the collection view, an additional layout pass occurs for the items being added or removed. However, the collection view always limits layout to the objects that are visible onscreen.

<a id="Methods-to-override"></a>

#### Methods to override

Every layout object should implement the following methods:

- [collectionViewContentSize](uicollectionviewlayout/collectionviewcontentsize.md)
- [layoutAttributesForElementsInRect:](uicollectionviewlayout/layoutattributesforelements%28in_%29.md)
- [layoutAttributesForItemAtIndexPath:](uicollectionviewlayout/layoutattributesforitem%28at_%29.md)
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](uicollectionviewlayout/layoutattributesforsupplementaryview%28ofkind_at_%29.md) (if your layout supports supplementary views)
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](uicollectionviewlayout/layoutattributesfordecorationview%28ofkind_at_%29.md) (if your layout supports decoration views)
- [shouldInvalidateLayoutForBoundsChange:](uicollectionviewlayout/shouldinvalidatelayout%28forboundschange_%29.md)

These methods provide the fundamental layout information that the collection view needs to place contents on the screen. If your layout doesn’t support supplementary or decoration views, don’t implement the corresponding methods.

When the data in the collection view changes and items are to be inserted or deleted, the collection view asks its layout object to update the layout information. Specifically, any item that’s moved, added, or deleted must have its layout information updated to reflect its new location. For moved items, the collection view uses the standard methods to retrieve the item’s updated layout attributes. For items being inserted or deleted, the collection view calls some different methods, which you should override to provide the appropriate layout information:

- [initialLayoutAttributesForAppearingItemAtIndexPath:](uicollectionviewlayout/initiallayoutattributesforappearingitem%28at_%29.md)
- [initialLayoutAttributesForAppearingSupplementaryElementOfKind:atIndexPath:](uicollectionviewlayout/initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md)
- [initialLayoutAttributesForAppearingDecorationElementOfKind:atIndexPath:](uicollectionviewlayout/initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md)
- [finalLayoutAttributesForDisappearingItemAtIndexPath:](uicollectionviewlayout/finallayoutattributesfordisappearingitem%28at_%29.md)
- [finalLayoutAttributesForDisappearingSupplementaryElementOfKind:atIndexPath:](uicollectionviewlayout/finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md)
- [finalLayoutAttributesForDisappearingDecorationElementOfKind:atIndexPath:](uicollectionviewlayout/finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md)

In addition to these methods, you can also override the [prepareForCollectionViewUpdates:](uicollectionviewlayout/prepare%28forcollectionviewupdates_%29.md) to handle any layout-related preparation. You can also override the [finalizeCollectionViewUpdates](uicollectionviewlayout/finalizecollectionviewupdates%28%29.md) method and use it to add animations to the overall animation block or to implement any final layout-related tasks.

<a id="Optimizing-layout-performance-using-invalidation-contexts"></a>

#### Optimizing layout performance using invalidation contexts

When designing your custom layouts, you can improve performance by invalidating only those parts of your layout that actually changed. When you change items, calling the [invalidateLayout](uicollectionviewlayout/invalidatelayout%28%29.md) method forces the collection view to recompute all of its layout information and reapply it. A better solution is to recompute only the layout information that changed, which is exactly what invalidation contexts allow you to do. An invalidation context lets you specify which parts of the layout changed. The layout object can then use that information to minimize the amount of data it recomputes.

To define a custom invalidation context for your layout, subclass the [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md) class. In your subclass, define custom properties that represent the parts of your layout data that can be recomputed independently. When you need to invalidate your layout at runtime, create an instance of your invalidation context subclass, configure the custom properties based on what layout information changed, and pass that object to your layout’s [invalidateLayoutWithContext:](uicollectionviewlayout/invalidatelayout%28with_%29.md) method. Your custom implementation of that method can use the information in the invalidation context to recompute only the portions of your layout that changed.

If you define a custom invalidation context class for your layout object, you should also override the [invalidationContextClass](uicollectionviewlayout/invalidationcontextclass.md) method and return your custom class. The collection view always creates an instance of the class you specify when it needs an invalidation context. Returning your custom subclass from this method ensures that your layout object always has the invalidation context it expects.

## Topics

### Creating the collection view layout

- [init](uicollectionviewlayout/init%28%29.md): Creates a collection view layout object.
- [initWithCoder:](uicollectionviewlayout/init%28coder_%29.md): Creates a collection view layout object from data in a given unarchiver.

### Getting the collection view information

- [collectionView](uicollectionviewlayout/collectionview.md): The collection view object currently using this layout object.
- [collectionViewContentSize](uicollectionviewlayout/collectionviewcontentsize.md): The width and height of the collection view’s contents.

### Providing layout attributes

- [layoutAttributesClass](uicollectionviewlayout/layoutattributesclass.md): The class to use when creating layout attributes objects.
- [prepareLayout](uicollectionviewlayout/prepare%28%29.md): Tells the layout object to update the current layout.
- [layoutAttributesForElementsInRect:](uicollectionviewlayout/layoutattributesforelements%28in_%29.md): Retrieves the layout attributes for all of the cells and views in the specified rectangle.
- [layoutAttributesForItemAtIndexPath:](uicollectionviewlayout/layoutattributesforitem%28at_%29.md): Retrieves layout information for an item at the specified index path with a corresponding cell.
- [layoutAttributesForInteractivelyMovingItemAtIndexPath:withTargetPosition:](uicollectionviewlayout/layoutattributesforinteractivelymovingitem%28at_withtargetposition_%29.md): Retrieves the layout attributes of an item when it is being moved interactively by the user.
- [layoutAttributesForSupplementaryViewOfKind:atIndexPath:](uicollectionviewlayout/layoutattributesforsupplementaryview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified supplementary view.
- [layoutAttributesForDecorationViewOfKind:atIndexPath:](uicollectionviewlayout/layoutattributesfordecorationview%28ofkind_at_%29.md): Retrieves the layout attributes for the specified decoration view.
- [targetContentOffsetForProposedContentOffset:](uicollectionviewlayout/targetcontentoffset%28forproposedcontentoffset_%29.md): Retrieves the content offset to use after an animated layout update or change.
- [targetContentOffsetForProposedContentOffset:withScrollingVelocity:](uicollectionviewlayout/targetcontentoffset%28forproposedcontentoffset_withscrollingvelocity_%29.md): Retrieves the point at which to stop scrolling.

### Responding to collection view updates

- [prepareForCollectionViewUpdates:](uicollectionviewlayout/prepare%28forcollectionviewupdates_%29.md): Notifies the layout object that the contents of the collection view are about to change.
- [finalizeCollectionViewUpdates](uicollectionviewlayout/finalizecollectionviewupdates%28%29.md): Performs any additional animations or clean up needed during a collection view update.
- [indexPathsToInsertForSupplementaryViewOfKind:](uicollectionviewlayout/indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths for the supplementary views you want to add to the layout.
- [indexPathsToInsertForDecorationViewOfKind:](uicollectionviewlayout/indexpathstoinsertfordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to add.
- [initialLayoutAttributesForAppearingItemAtIndexPath:](uicollectionviewlayout/initiallayoutattributesforappearingitem%28at_%29.md): Retrieves the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingSupplementaryElementOfKind:atIndexPath:](uicollectionviewlayout/initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md): Retrieves the starting layout information for a supplementary view being inserted into the collection view.
- [initialLayoutAttributesForAppearingDecorationElementOfKind:atIndexPath:](uicollectionviewlayout/initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md): Retrieves the starting layout information for a decoration view being inserted into the collection view.
- [indexPathsToDeleteForSupplementaryViewOfKind:](uicollectionviewlayout/indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths representing the supplementary views to remove.
- [indexPathsToDeleteForDecorationViewOfKind:](uicollectionviewlayout/indexpathstodeletefordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to remove.
- [finalLayoutAttributesForDisappearingItemAtIndexPath:](uicollectionviewlayout/finallayoutattributesfordisappearingitem%28at_%29.md): Retrieves the final layout information for an item that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElementOfKind:atIndexPath:](uicollectionviewlayout/finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Retrieves the final layout information for a supplementary view that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElementOfKind:atIndexPath:](uicollectionviewlayout/finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Retrieves the final layout information for a decoration view that is about to be removed from the collection view.
- [targetIndexPathForInteractivelyMovingItem:withPosition:](uicollectionviewlayout/targetindexpath%28forinteractivelymovingitem_withposition_%29.md): Retrieves the index path to for an item when it is at the specified location in the collection view’s bounds.

### Invalidating the layout

- [invalidateLayout](uicollectionviewlayout/invalidatelayout%28%29.md): Invalidates the current layout and triggers a layout update.
- [invalidateLayoutWithContext:](uicollectionviewlayout/invalidatelayout%28with_%29.md): Invalidates the current layout using the information in the provided context object.
- [invalidationContextClass](uicollectionviewlayout/invalidationcontextclass.md): Returns the class to use when creating an invalidation context for the layout.
- [shouldInvalidateLayoutForBoundsChange:](uicollectionviewlayout/shouldinvalidatelayout%28forboundschange_%29.md): Asks the layout object if the new bounds require a layout update.
- [invalidationContextForBoundsChange:](uicollectionviewlayout/invalidationcontext%28forboundschange_%29.md): Retrieves a context object that defines the portions of the layout that should change when a bounds change occurs.
- [shouldInvalidateLayoutForPreferredLayoutAttributes:withOriginalAttributes:](uicollectionviewlayout/shouldinvalidatelayout%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Asks the layout object if changes to a self-sizing cell require a layout update.
- [invalidationContextForPreferredLayoutAttributes:withOriginalAttributes:](uicollectionviewlayout/invalidationcontext%28forpreferredlayoutattributes_withoriginalattributes_%29.md): Retrieves a context object that identifies the portions of the layout that should change in response to dynamic cell changes.
- [invalidationContextForInteractivelyMovingItems:withTargetPosition:previousIndexPaths:previousPosition:](uicollectionviewlayout/invalidationcontext%28forinteractivelymovingitems_withtargetposition_previousindexpaths_previousposition_%29.md): Retrieves a context object that identifies the items that are being interactively moved in the layout.
- [invalidationContextForEndingInteractiveMovementOfItemsToFinalIndexPaths:previousIndexPaths:movementCancelled:](uicollectionviewlayout/invalidationcontextforendinginteractivemovementofitems%28tofinalindexpaths_previousindexpaths_movementcancelled_%29.md): Retrieves a context object that identifies the items that were moved

### Coordinating animated changes

- [prepareForAnimatedBoundsChange:](uicollectionviewlayout/prepare%28foranimatedboundschange_%29.md): Prepares the layout object for animated changes to the view’s bounds or the insertion or deletion of items.
- [finalizeAnimatedBoundsChange](uicollectionviewlayout/finalizeanimatedboundschange%28%29.md): Cleans up after any animated changes to the view’s bounds or after the insertion or deletion of items.

### Transitioning between layouts

- [prepareForTransitionFromLayout:](uicollectionviewlayout/preparefortransition%28from_%29.md): Tells the layout object to prepare to be installed as the layout for the collection view.
- [prepareForTransitionToLayout:](uicollectionviewlayout/preparefortransition%28to_%29.md): Tells the layout object that it is about to be removed as the layout for the collection view.
- [finalizeLayoutTransition](uicollectionviewlayout/finalizelayouttransition%28%29.md): Tells the layout object to perform any final steps before the transition animations occur.

### Registering decoration views

- [registerClass:forDecorationViewOfKind:](uicollectionviewlayout/register%28__fordecorationviewofkind_%29-361k6.md): Registers a class for use in creating decoration views for a collection view.
- [registerNib:forDecorationViewOfKind:](uicollectionviewlayout/register%28__fordecorationviewofkind_%29-35jf9.md): Deprecated. Registers a nib file for use in creating decoration views for a collection view.

### Supporting right-to-left layouts

- [developmentLayoutDirection](uicollectionviewlayout/developmentlayoutdirection.md): The direction of the language you used when designing your custom layout.
- [flipsHorizontallyInOppositeLayoutDirection](uicollectionviewlayout/flipshorizontallyinoppositelayoutdirection.md): A Boolean value that indicates whether the horizontal coordinate system is automatically flipped at appropriate times.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICollectionViewCompositionalLayout](uicollectionviewcompositionallayout.md)
- [UICollectionViewFlowLayout](uicollectionviewflowlayout.md)
- [UICollectionViewTransitionLayout](uicollectionviewtransitionlayout.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

## See Also

### Manual layouts

- [Customizing collection view layouts](customizing-collection-view-layouts.md): Customize a view layout by changing the size of cells in the flow or implementing a mosaic style.
- [UICollectionViewFlowLayout](uicollectionviewflowlayout.md): A layout object that organizes items into a grid with optional header and footer views for each section.
- [UICollectionViewTransitionLayout](uicollectionviewtransitionlayout.md): A special type of layout object that lets you implement behaviors when changing from one layout to another in your collection view.
- [UICollectionViewLayoutAttributes](uicollectionviewlayoutattributes.md): A layout object that manages the layout-related attributes for a given item in a collection view.
- [UICollectionViewFlowLayoutInvalidationContext](uicollectionviewflowlayoutinvalidationcontext.md): A set of properties for determining whether to recompute the size of items or their position in the layout.
