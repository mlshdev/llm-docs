> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview](https://developer.apple.com/documentation/appkit/nscollectionview)

# NSCollectionView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

An ordered collection of data items displayed in a customizable layout.

## Declaration

```swift
@MainActor class NSCollectionView
```

<a id="overview"></a>

## Overview

The simplest type of collection view displays its items in a grid, but you can define layouts to arrange items however you like. For example, you might create a layout where items are arranged in a circle. You can also change layouts dynamically at runtime whenever you need to present items differently.

You can add collection views to your interface using Interface Builder or create them programmatically in your view controller or window controller code. It is recommended that you configure your collection view with a data source object, which is an object that conforms to the [NSCollectionViewDataSource](nscollectionviewdatasource.md) protocol. Data sources support multiple sections and the modern layout architecture and are the preferred way for specifying your data.

In addition to displaying items, collection views support the display of supplementary and decoration views. Support for supplementary and decoration views is defined by the current layout object, but both types of views add to the visual presentation of your content. Supplementary views are associated with a specific section and can be used to create header and footer views for a related group of items. Decoration views are purely visual adornments and can be used to implement dynamic backgrounds or other types of configurable visual content.

The layout of a collection view can be changed dynamically by assigning a new layout object to the [collectionViewLayout](nscollectionview/collectionviewlayout.md) property. Changing the layout object updates the appearance of the collection view without animating the changes.

<a id="The-Objects-of-a-Collection-View-Interface"></a>

### The Objects of a Collection View Interface

An `NSCollectionView` object itself is a facilitator, taking information from disparate sources and merging them together to create an overall interface:

- The data source object provides both the data and the views used to display that data. You define the data source object by implementing the methods of the [NSCollectionViewDataSource](nscollectionviewdatasource.md) protocol in one of your app’s objects.
- The visual representation of items is provided by the [NSCollectionViewItem](nscollectionviewitem.md) class. Item objects are view controllers and you use their views to display your app’s data. The data source creates items on demand and returns them to the collection view for display.
- The collection view delegate makes decisions about behaviors. The delegate also coordinates the dragging and dropping of items. You define the delegate by implementing the methods of the [NSCollectionViewDelegate](nscollectionviewdelegate.md) protocol in one of your app’s objects.
- The layout object specifies the position and appearance of items onscreen. AppKit defines layout objects that you can use as-is, but you can also define custom layouts by subclassing [NSCollectionViewLayout](nscollectionviewlayout.md).

[Figure 1](nscollectionview.md#1965644) illustrates how the collection view works with its other objects to create its final appearance. The collection view obtains the views for items and supplementary views from its data source, which creates the views and fills them with data. The layout object provides the layout attributes needed to position those items and supplementary views onscreen. The collection view merges the two sets of information to create the final appearance that the user sees onscreen.

![](https://developer.apple.com/images/com.apple.appkit/media-1965644@2x.png)

There are other helper classes and protocols that you can use to customize the layout behavior and other aspects of the collection view interface. For example, when using a flow layout object ([NSCollectionViewFlowLayout](nscollectionviewflowlayout.md)), you can modify the flow layout’s behavior using the methods of the [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md) protocol. When implementing a custom layout, you might also work with [NSCollectionViewUpdateItem](nscollectionviewupdateitem.md) and [NSCollectionViewLayoutInvalidationContext](nscollectionviewlayoutinvalidationcontext.md) objects, which help the layout object manage updates.

<a id="Managing-the-Collection-Views-Content"></a>

### Managing the Collection View’s Content

Data for the collection view is managed by the *data source object*—that is an object that adopts the methods of the [NSCollectionViewDataSource](nscollectionviewdatasource.md) protocol. You are responsible for defining the data source used by your collection view. The data source provides information about the number of sections and items in the collection view and it provides the visual representation of that data. Every data source object is required to implement the following methods:

- [collectionView(\_:numberOfItemsInSection:)](nscollectionviewdatasource/collectionview%28__numberofitemsinsection_%29.md)
- [collectionView(\_:itemForRepresentedObjectAt:)](nscollectionviewdatasource/collectionview%28__itemforrepresentedobjectat_%29.md)

The [NSCollectionViewItem](nscollectionviewitem.md) class defines the visual appearance of items in the collection view. Your data source object vends items from its [collectionView(\_:itemForRepresentedObjectAt:)](nscollectionviewdatasource/collectionview%28__itemforrepresentedobjectat_%29.md) method, creating and configuring the item in one step. Each item is essentially a snapshot of the data it represents. Items are often short-lived because they can be recycled by the collection view and reused to display new data. As a result, never store references to items in your app.

Supplementary views are another way to display data in your interface. Each layout object defines the supplementary views it supports, and different layouts can define supplementary views for different purposes. For example, an [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md) object lets you add header and footer views to each section. Your data source must know enough about the layout to know which supplementary views are supported by the layout object and how those views are displayed. The data source can then provide supplementary views when asked for them.

When your content changes in a way that requires you to update what the collection view displays, call the [reloadData()](nscollectionview/reloaddata%28%29.md), [reloadSections(\_:)](nscollectionview/reloadsections%28__%29.md), or [reloadItems(at:)](nscollectionview/reloaditems%28at_%29.md) method to perform that update. These methods cause the collection view to discard the views currently being used to display your content and ask for new ones. Never try to modify the views associated with your items directly. The collection view does not maintain views for all items, only those that are currently being displayed. Reloading the items ensures that the views are updated correctly.

For more information on defining your data source object, see [NSCollectionViewDataSource](nscollectionviewdatasource.md).

<a id="Inserting-Deleting-and-Moving-Content"></a>

### Inserting, Deleting, and Moving Content

The collection view includes methods for inserting, deleting, and moving items and sections. All of these methods affect only what the collection view displays onscreen; they do not change the data in the associated data source object. As a result, when updating your collection view’s content, always do the following:

1. Update the internal structures of your data source object first.
2. Call the `NSCollectionView` methods to insert, delete, or move items and sections.

When you call methods like [insertItems(at:)](nscollectionview/insertitems%28at_%29.md) or [deleteSections(\_:)](nscollectionview/deletesections%28__%29.md), the collection view fetches any new data from your data source object and then updates the layout. When inserting, moving, or deleting items, the collection view updates the layout for all affected items, which might include items not directly affected by the operation. For example, inserting one item might require adjusting the onscreen position of many other items. When the layout attributes for any visible items changes, the collection view animates those changes into place automatically.

The layout object determines how inserted and deleted items are animated into position. Because newly inserted items are not onscreen initially, the layout object provides the initial layout attributes for those items. Similarly, the layout object provides the final layout attributes for any items that are being deleted. For example, the layout object might specify final layout attributes that are offscreen so that a deleted item animates out of the visible rectangle.

Because individual methods for inserting, deleting, and moving content animate their changes right away, you must use the [performBatchUpdates(\_:completionHandler:)](nscollectionview/performbatchupdates%28__completionhandler_%29.md) method when you want to animate multiple changes together. The [performBatchUpdates(\_:completionHandler:)](nscollectionview/performbatchupdates%28__completionhandler_%29.md) method takes a block containing all of the insert, delete, move, and reload method calls you need to update the collection view. All of those operations are captured and performed as a single animated sequence.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your collection view in your storyboard and nib files. The table below shows the basic collection view attributes. Additional attributes are available based on the selected value for the Layout attribute.

| Attribute | Description |
| --- | --- |
| Layout | The type of layout object to use. The Flow, Grid, and Custom options are preferred because they enable the modern collection view behavior. |
| Colors | The option to specify alternating colors for the collection view’s background. |
| Primary | The primary color to use with the collection view. |
| Secondary | The secondary color to use with the collection view. |
| Selection | The options for selecting items. Use these options to enable or disable selections altogether and to specify whether the collection view supports the selection of multiple items or no items. |

The table below shows the attributes you can configure when you set the Layout attribute to Flow.

| Attribute | Description |
| --- | --- |
| Scroll Direction | The scrolling direction for content. The flow layout allows scrolling in one dimension only. The other dimension is pinned to the size of the collection view itself. For example, when vertical scrolling is selected, the width of the content area is set to the width of the collection view. |
| Item Size | The default size of newly created items. The collection view’s delegate can override the default size values and specify different values for each item. |
| Header Size | The default size of header views. The layout object uses only the dimension that does not match the current scrolling direction. For example, for a vertically scrolling collection view, the layout sets only the width of the footer to the specified value. The collection view’s delegate can override the default size values. |
| Footer Size | The default size of footer views. The layout object uses only the dimension that does not match the current scrolling direction. For example, for a vertically scrolling collection view, the layout sets only the width of the footer to the specified value. The collection view’s delegate can override the default size values using methods of the [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md) protocol. |
| Min Spacing | The minimum spacing between items and lines. The item spacing is the minimum amount of space for items in the same row or column (depending on the scroll direction). The line spacing is the minimum space between rows or columns. The actual amount of space used between items and lines may be greater than the minimum. |
| Section Inset | The margins imposed on each section. Margins set the distance between the header view and the items, between the sides of the collection view and the items, and between the items and the footer view. |

The table below shows the attributes you can configure when you set the Layout attribute to Grid.

| Attribute | Description |
| --- | --- |
| Dimensions | The number of rows and columns to display. Use these attributes to configure the grid dimensions. |
| Min Item Size | The minimum width and height for items. |
| Max Item Size | The maximum width and height for items. |

The table below shows the attributes you can configure when you set the Layout attribute to Custom.

| Attribute | Description |
| --- | --- |
| Class | The name of the [NSCollectionViewLayout](nscollectionviewlayout.md) subclass you want to use. |
| Module | The Swift module containing the class. Leave this attribute blank for classes in the current module. |

The table below shows the attributes you can configure when you set the Layout attribute to Content Array (Legacy).

| Attribute | Description |
| --- | --- |
| Dimensions | The number of rows and columns to display. Use these attributes to configure the grid dimensions. |

<a id="Legacy-Collection-View-Support"></a>

### Legacy Collection View Support

Prior to OS X v10.11, the collection view always displayed its contents in a grid structure that could not be changed. The data for the collection view was stored in the [content](nscollectionview/content.md) property, which was often populated with data using bindings. You specified the visual appearance for the collection view’s data by creating an [NSCollectionViewItem](nscollectionviewitem.md) object and assigning it to the [itemPrototype](nscollectionview/itemprototype.md) property. That item object acted as a template and was used to create all of the items in the collection view.

You are encouraged to use the modern collection view architecture when configuring collection views in macOS 10.11 and later. Use the legacy architecture only for apps that must run in earlier versions of macOS.

For more information about how to configure a collection view using the legacy architecture, see Collection View Programming Guide for macOS.

## Topics

### Providing the Collection View’s Data

- [dataSource](nscollectionview/datasource.md): An object that provides data for the collection view.
- [NSCollectionViewDataSource](nscollectionviewdatasource.md): A set of methods that a data source object implements to provide the information and view objects that a collection view requires to present content.

### Configuring the Collection View

- [delegate](nscollectionview/delegate.md): The collection view’s delegate object.
- [NSCollectionViewDelegate](nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [content](nscollectionview/content.md): An array that provides data for the collection view.
- [backgroundView](nscollectionview/backgroundview.md): The background view placed behind all items and supplementary views.
- [backgroundColors](nscollectionview/backgroundcolors.md): An array containing the collection view’s background colors.
- [backgroundViewScrollsWithContent](nscollectionview/backgroundviewscrollswithcontent.md): A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.

### Creating Collection View Items

- [makeItem(withIdentifier:for:)](nscollectionview/makeitem%28withidentifier_for_%29.md): Creates or returns a reusable item object of the specified type.
- [register(\_:forItemWithIdentifier:)](nscollectionview/register%28__foritemwithidentifier_%29-6s4i.md): Registers a class to use when creating new items in the collection view.
- [register(\_:forItemWithIdentifier:)](nscollectionview/register%28__foritemwithidentifier_%29-90h1i.md): Registers a nib file to use when creating items in the collection view.
- [makeSupplementaryView(ofKind:withIdentifier:for:)](nscollectionview/makesupplementaryview%28ofkind_withidentifier_for_%29.md): Creates or returns a reusable supplementary view of the specified type.
- [register(\_:forSupplementaryViewOfKind:withIdentifier:)](nscollectionview/register%28__forsupplementaryviewofkind_withidentifier_%29-3dqa.md): Registers a class to use when creating new supplementary views in the collection view.
- [register(\_:forSupplementaryViewOfKind:withIdentifier:)](nscollectionview/register%28__forsupplementaryviewofkind_withidentifier_%29-7gvf2.md): Registers a nib file to use when creating supplementary views in the collection view.
- [NSCollectionView.SupplementaryElementKind](nscollectionview/supplementaryelementkind.md)
- [NSUserInterfaceItemIdentifier](nsuserinterfaceitemidentifier.md)

### Changing the Layout

- [collectionViewLayout](nscollectionview/collectionviewlayout.md): The layout object used to organize the collection view’s content.

### Reloading Content

- [reloadData()](nscollectionview/reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadSections(\_:)](nscollectionview/reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.
- [reloadItems(at:)](nscollectionview/reloaditems%28at_%29.md): Reloads only the specified items.

### Prefetching Collection View Cells and Data

- [prefetchDataSource](nscollectionview/prefetchdatasource.md)
- [NSCollectionViewPrefetching](nscollectionviewprefetching.md)

### Getting the State of the Collection View

- [numberOfSections](nscollectionview/numberofsections.md): The number of sections in the collection view.
- [numberOfItems(inSection:)](nscollectionview/numberofitems%28insection_%29.md): Returns the number of items in the specified section.

### Inserting, Moving, and Deleting Items

- [insertItems(at:)](nscollectionview/insertitems%28at_%29.md): Inserts new items into the collection view at the specified locations.
- [moveItem(at:to:)](nscollectionview/moveitem%28at_to_%29.md): Moves an item from one location to another in the collection view.
- [deleteItems(at:)](nscollectionview/deleteitems%28at_%29.md): Deletes the items at the specified index paths.

### Inserting, Moving, Deleting, and Collapsing Sections

- [insertSections(\_:)](nscollectionview/insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [moveSection(\_:toSection:)](nscollectionview/movesection%28__tosection_%29.md): Moves a section from its current location to a new location.
- [deleteSections(\_:)](nscollectionview/deletesections%28__%29.md): Deletes the specified sections and their contained items.
- [toggleSectionCollapse(\_:)](nscollectionview/togglesectioncollapse%28__%29.md): Collapses the section in which the sender resides into a single horizontally scrollable row.

### Managing the Selection

- [isSelectable](nscollectionview/isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](nscollectionview/allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [allowsEmptySelection](nscollectionview/allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectionIndexPaths](nscollectionview/selectionindexpaths.md): The set of index paths representing the currently selected items.
- [selectAll(\_:)](nscollectionview/selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll(\_:)](nscollectionview/deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItems(at:scrollPosition:)](nscollectionview/selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.
- [deselectItems(at:)](nscollectionview/deselectitems%28at_%29.md): Removes the specified items from the current selection.

### Locating Items and Views

- [visibleItems()](nscollectionview/visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems()](nscollectionview/indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViews(ofKind:)](nscollectionview/visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElements(ofKind:)](nscollectionview/indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPath(for:)](nscollectionview/indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItem(at:)](nscollectionview/indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [item(at:)](nscollectionview/item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryView(forElementKind:at:)](nscollectionview/supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItems(at:scrollPosition:)](nscollectionview/scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.

### Getting Layout Information

- [layoutAttributesForItem(at:)](nscollectionview/layoutattributesforitem%28at_%29.md): Returns the layout information for the item at the specified index path.
- [layoutAttributesForSupplementaryElement(ofKind:at:)](nscollectionview/layoutattributesforsupplementaryelement%28ofkind_at_%29.md): Returns the layout information for the supplementary view at the specified index path.

### Animating Multiple Changes

- [performBatchUpdates(\_:completionHandler:)](nscollectionview/performbatchupdates%28__completionhandler_%29.md): Encapsulates multiple insert, delete, reload, and move operations into a single animated operation.

### Working with the Responder Chain

- [isFirstResponder](nscollectionview/isfirstresponder.md): A Boolean value indicating whether the collection view is the first responder.

### Getting a Drag Image

- [draggingImageForItems(at:with:offset:)](nscollectionview/draggingimageforitems%28at_with_offset_%29-7rc4k.md): Returns an image to use for dragging the specified items.

### Legacy Collection View Support

- [itemPrototype](nscollectionview/itemprototype.md): Deprecated. The receiver’s collection view item prototype.
- [newItem(forRepresentedObject:)](nscollectionview/newitem%28forrepresentedobject_%29.md): Deprecated. Returns the collection view item that is used for the specified object.
- [selectionIndexes](nscollectionview/selectionindexes.md): The indexes of the currently selected items.
- [maxNumberOfRows](nscollectionview/maxnumberofrows.md): Deprecated. The maximum number of rows that the collection view displays.
- [maxNumberOfColumns](nscollectionview/maxnumberofcolumns.md): Deprecated. The maximum number of columns that the collection view displays.
- [minItemSize](nscollectionview/minitemsize.md): Deprecated. The minimum size (in points) of items in the collection view grid.
- [maxItemSize](nscollectionview/maxitemsize.md): Deprecated. The maximum size (in points) of items in the collection view grid.
- [item(at:)](nscollectionview/item%28at_%29-80xze.md): Returns the collection view item for the represented object at the specified index.
- [frameForItem(at:)](nscollectionview/frameforitem%28at_%29.md): Returns the frame of the collection view item at the specified index.
- [frameForItem(at:withNumberOfItems:)](nscollectionview/frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [draggingImageForItems(at:with:offset:)](nscollectionview/draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask(\_:forLocal:)](nscollectionview/setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.

### Constants

- [NSCollectionView.DropOperation](nscollectionview/dropoperation.md): These constants specify if acceptance of a drop should be at the item it is dropped on or before the item. These constants are used by the [collectionView(\_:acceptDrop:index:dropOperation:)](nscollectionviewdelegate/collectionview%28__acceptdrop_index_dropoperation_%29.md) and [collectionView(\_:validateDrop:proposedIndex:dropOperation:)](nscollectionviewdelegate/collectionview%28__validatedrop_proposedindex_dropoperation_%29.md) methods in [NSCollectionViewDelegate](nscollectionviewdelegate.md)
- [NSCollectionView.ScrollPosition](nscollectionview/scrollposition.md): Constants indicating the options for scrolling the collection view’s content.

### Type Aliases

- [NSCollectionView.DecorationElementKind](nscollectionview/decorationelementkind.md)

### Type Properties

- [elementKindInterItemGapIndicator](nscollectionview/elementkindinteritemgapindicator.md): The element kind string assigned to the attributes object when it represents an inter-item gap.
- [elementKindSectionFooter](nscollectionview/elementkindsectionfooter.md): A supplementary view that acts as a footer for a given section.
- [elementKindSectionHeader](nscollectionview/elementkindsectionheader.md): A supplementary view that acts as a header for a given section.

### Enumerations

- [NSCollectionView.ScrollDirection](nscollectionview/scrolldirection.md): Constants indicating the scrolling direction for the layout.
- [NSCollectionView.UpdateAction](nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.

### Instance Properties

- [appIntentsDataSource](nscollectionview/appintentsdatasource.md): The object acting as the collection view’s data source for app entity identifiers that make a cell’s content discoverable by Apple Intelligence and Siri.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSDraggingSource](nsdraggingsource.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### View

- [NSCollectionViewSectionHeaderView](nscollectionviewsectionheaderview.md): A protocol that defines a button to control the collapse of a collection view’s section.

# NSCollectionView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

An ordered collection of data items displayed in a customizable layout.

## Declaration

```objectivec
@interface NSCollectionView : NSView
```

<a id="overview"></a>

## Overview

The simplest type of collection view displays its items in a grid, but you can define layouts to arrange items however you like. For example, you might create a layout where items are arranged in a circle. You can also change layouts dynamically at runtime whenever you need to present items differently.

You can add collection views to your interface using Interface Builder or create them programmatically in your view controller or window controller code. It is recommended that you configure your collection view with a data source object, which is an object that conforms to the [NSCollectionViewDataSource](nscollectionviewdatasource.md) protocol. Data sources support multiple sections and the modern layout architecture and are the preferred way for specifying your data.

In addition to displaying items, collection views support the display of supplementary and decoration views. Support for supplementary and decoration views is defined by the current layout object, but both types of views add to the visual presentation of your content. Supplementary views are associated with a specific section and can be used to create header and footer views for a related group of items. Decoration views are purely visual adornments and can be used to implement dynamic backgrounds or other types of configurable visual content.

The layout of a collection view can be changed dynamically by assigning a new layout object to the [collectionViewLayout](nscollectionview/collectionviewlayout.md) property. Changing the layout object updates the appearance of the collection view without animating the changes.

<a id="The-Objects-of-a-Collection-View-Interface"></a>

### The Objects of a Collection View Interface

An `NSCollectionView` object itself is a facilitator, taking information from disparate sources and merging them together to create an overall interface:

- The data source object provides both the data and the views used to display that data. You define the data source object by implementing the methods of the [NSCollectionViewDataSource](nscollectionviewdatasource.md) protocol in one of your app’s objects.
- The visual representation of items is provided by the [NSCollectionViewItem](nscollectionviewitem.md) class. Item objects are view controllers and you use their views to display your app’s data. The data source creates items on demand and returns them to the collection view for display.
- The collection view delegate makes decisions about behaviors. The delegate also coordinates the dragging and dropping of items. You define the delegate by implementing the methods of the [NSCollectionViewDelegate](nscollectionviewdelegate.md) protocol in one of your app’s objects.
- The layout object specifies the position and appearance of items onscreen. AppKit defines layout objects that you can use as-is, but you can also define custom layouts by subclassing [NSCollectionViewLayout](nscollectionviewlayout.md).

[Figure 1](nscollectionview.md#1965644) illustrates how the collection view works with its other objects to create its final appearance. The collection view obtains the views for items and supplementary views from its data source, which creates the views and fills them with data. The layout object provides the layout attributes needed to position those items and supplementary views onscreen. The collection view merges the two sets of information to create the final appearance that the user sees onscreen.

![](https://developer.apple.com/images/com.apple.appkit/media-1965644@2x.png)

There are other helper classes and protocols that you can use to customize the layout behavior and other aspects of the collection view interface. For example, when using a flow layout object ([NSCollectionViewFlowLayout](nscollectionviewflowlayout.md)), you can modify the flow layout’s behavior using the methods of the [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md) protocol. When implementing a custom layout, you might also work with [NSCollectionViewUpdateItem](nscollectionviewupdateitem.md) and [NSCollectionViewLayoutInvalidationContext](nscollectionviewlayoutinvalidationcontext.md) objects, which help the layout object manage updates.

<a id="Managing-the-Collection-Views-Content"></a>

### Managing the Collection View’s Content

Data for the collection view is managed by the *data source object*—that is an object that adopts the methods of the [NSCollectionViewDataSource](nscollectionviewdatasource.md) protocol. You are responsible for defining the data source used by your collection view. The data source provides information about the number of sections and items in the collection view and it provides the visual representation of that data. Every data source object is required to implement the following methods:

- [collectionView:numberOfItemsInSection:](nscollectionviewdatasource/collectionview%28__numberofitemsinsection_%29.md)
- [collectionView:itemForRepresentedObjectAtIndexPath:](nscollectionviewdatasource/collectionview%28__itemforrepresentedobjectat_%29.md)

The [NSCollectionViewItem](nscollectionviewitem.md) class defines the visual appearance of items in the collection view. Your data source object vends items from its [collectionView:itemForRepresentedObjectAtIndexPath:](nscollectionviewdatasource/collectionview%28__itemforrepresentedobjectat_%29.md) method, creating and configuring the item in one step. Each item is essentially a snapshot of the data it represents. Items are often short-lived because they can be recycled by the collection view and reused to display new data. As a result, never store references to items in your app.

Supplementary views are another way to display data in your interface. Each layout object defines the supplementary views it supports, and different layouts can define supplementary views for different purposes. For example, an [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md) object lets you add header and footer views to each section. Your data source must know enough about the layout to know which supplementary views are supported by the layout object and how those views are displayed. The data source can then provide supplementary views when asked for them.

When your content changes in a way that requires you to update what the collection view displays, call the [reloadData](nscollectionview/reloaddata%28%29.md), [reloadSections:](nscollectionview/reloadsections%28__%29.md), or [reloadItemsAtIndexPaths:](nscollectionview/reloaditems%28at_%29.md) method to perform that update. These methods cause the collection view to discard the views currently being used to display your content and ask for new ones. Never try to modify the views associated with your items directly. The collection view does not maintain views for all items, only those that are currently being displayed. Reloading the items ensures that the views are updated correctly.

For more information on defining your data source object, see [NSCollectionViewDataSource](nscollectionviewdatasource.md).

<a id="Inserting-Deleting-and-Moving-Content"></a>

### Inserting, Deleting, and Moving Content

The collection view includes methods for inserting, deleting, and moving items and sections. All of these methods affect only what the collection view displays onscreen; they do not change the data in the associated data source object. As a result, when updating your collection view’s content, always do the following:

1. Update the internal structures of your data source object first.
2. Call the `NSCollectionView` methods to insert, delete, or move items and sections.

When you call methods like [insertItemsAtIndexPaths:](nscollectionview/insertitems%28at_%29.md) or [deleteSections:](nscollectionview/deletesections%28__%29.md), the collection view fetches any new data from your data source object and then updates the layout. When inserting, moving, or deleting items, the collection view updates the layout for all affected items, which might include items not directly affected by the operation. For example, inserting one item might require adjusting the onscreen position of many other items. When the layout attributes for any visible items changes, the collection view animates those changes into place automatically.

The layout object determines how inserted and deleted items are animated into position. Because newly inserted items are not onscreen initially, the layout object provides the initial layout attributes for those items. Similarly, the layout object provides the final layout attributes for any items that are being deleted. For example, the layout object might specify final layout attributes that are offscreen so that a deleted item animates out of the visible rectangle.

Because individual methods for inserting, deleting, and moving content animate their changes right away, you must use the [performBatchUpdates:completionHandler:](nscollectionview/performbatchupdates%28__completionhandler_%29.md) method when you want to animate multiple changes together. The [performBatchUpdates:completionHandler:](nscollectionview/performbatchupdates%28__completionhandler_%29.md) method takes a block containing all of the insert, delete, move, and reload method calls you need to update the collection view. All of those operations are captured and performed as a single animated sequence.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your collection view in your storyboard and nib files. The table below shows the basic collection view attributes. Additional attributes are available based on the selected value for the Layout attribute.

| Attribute | Description |
| --- | --- |
| Layout | The type of layout object to use. The Flow, Grid, and Custom options are preferred because they enable the modern collection view behavior. |
| Colors | The option to specify alternating colors for the collection view’s background. |
| Primary | The primary color to use with the collection view. |
| Secondary | The secondary color to use with the collection view. |
| Selection | The options for selecting items. Use these options to enable or disable selections altogether and to specify whether the collection view supports the selection of multiple items or no items. |

The table below shows the attributes you can configure when you set the Layout attribute to Flow.

| Attribute | Description |
| --- | --- |
| Scroll Direction | The scrolling direction for content. The flow layout allows scrolling in one dimension only. The other dimension is pinned to the size of the collection view itself. For example, when vertical scrolling is selected, the width of the content area is set to the width of the collection view. |
| Item Size | The default size of newly created items. The collection view’s delegate can override the default size values and specify different values for each item. |
| Header Size | The default size of header views. The layout object uses only the dimension that does not match the current scrolling direction. For example, for a vertically scrolling collection view, the layout sets only the width of the footer to the specified value. The collection view’s delegate can override the default size values. |
| Footer Size | The default size of footer views. The layout object uses only the dimension that does not match the current scrolling direction. For example, for a vertically scrolling collection view, the layout sets only the width of the footer to the specified value. The collection view’s delegate can override the default size values using methods of the [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md) protocol. |
| Min Spacing | The minimum spacing between items and lines. The item spacing is the minimum amount of space for items in the same row or column (depending on the scroll direction). The line spacing is the minimum space between rows or columns. The actual amount of space used between items and lines may be greater than the minimum. |
| Section Inset | The margins imposed on each section. Margins set the distance between the header view and the items, between the sides of the collection view and the items, and between the items and the footer view. |

The table below shows the attributes you can configure when you set the Layout attribute to Grid.

| Attribute | Description |
| --- | --- |
| Dimensions | The number of rows and columns to display. Use these attributes to configure the grid dimensions. |
| Min Item Size | The minimum width and height for items. |
| Max Item Size | The maximum width and height for items. |

The table below shows the attributes you can configure when you set the Layout attribute to Custom.

| Attribute | Description |
| --- | --- |
| Class | The name of the [NSCollectionViewLayout](nscollectionviewlayout.md) subclass you want to use. |
| Module | The Swift module containing the class. Leave this attribute blank for classes in the current module. |

The table below shows the attributes you can configure when you set the Layout attribute to Content Array (Legacy).

| Attribute | Description |
| --- | --- |
| Dimensions | The number of rows and columns to display. Use these attributes to configure the grid dimensions. |

<a id="Legacy-Collection-View-Support"></a>

### Legacy Collection View Support

Prior to OS X v10.11, the collection view always displayed its contents in a grid structure that could not be changed. The data for the collection view was stored in the [content](nscollectionview/content.md) property, which was often populated with data using bindings. You specified the visual appearance for the collection view’s data by creating an [NSCollectionViewItem](nscollectionviewitem.md) object and assigning it to the [itemPrototype](nscollectionview/itemprototype.md) property. That item object acted as a template and was used to create all of the items in the collection view.

You are encouraged to use the modern collection view architecture when configuring collection views in macOS 10.11 and later. Use the legacy architecture only for apps that must run in earlier versions of macOS.

For more information about how to configure a collection view using the legacy architecture, see Collection View Programming Guide for macOS.

## Topics

### Providing the Collection View’s Data

- [dataSource](nscollectionview/datasource.md): An object that provides data for the collection view.
- [NSCollectionViewDataSource](nscollectionviewdatasource.md): A set of methods that a data source object implements to provide the information and view objects that a collection view requires to present content.

### Configuring the Collection View

- [delegate](nscollectionview/delegate.md): The collection view’s delegate object.
- [NSCollectionViewDelegate](nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [content](nscollectionview/content.md): An array that provides data for the collection view.
- [backgroundView](nscollectionview/backgroundview.md): The background view placed behind all items and supplementary views.
- [backgroundColors](nscollectionview/backgroundcolors.md): An array containing the collection view’s background colors.
- [backgroundViewScrollsWithContent](nscollectionview/backgroundviewscrollswithcontent.md): A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.

### Creating Collection View Items

- [makeItemWithIdentifier:forIndexPath:](nscollectionview/makeitem%28withidentifier_for_%29.md): Creates or returns a reusable item object of the specified type.
- [registerClass:forItemWithIdentifier:](nscollectionview/register%28__foritemwithidentifier_%29-6s4i.md): Registers a class to use when creating new items in the collection view.
- [registerNib:forItemWithIdentifier:](nscollectionview/register%28__foritemwithidentifier_%29-90h1i.md): Registers a nib file to use when creating items in the collection view.
- [makeSupplementaryViewOfKind:withIdentifier:forIndexPath:](nscollectionview/makesupplementaryview%28ofkind_withidentifier_for_%29.md): Creates or returns a reusable supplementary view of the specified type.
- [registerClass:forSupplementaryViewOfKind:withIdentifier:](nscollectionview/register%28__forsupplementaryviewofkind_withidentifier_%29-3dqa.md): Registers a class to use when creating new supplementary views in the collection view.
- [registerNib:forSupplementaryViewOfKind:withIdentifier:](nscollectionview/register%28__forsupplementaryviewofkind_withidentifier_%29-7gvf2.md): Registers a nib file to use when creating supplementary views in the collection view.
- [NSCollectionViewSupplementaryElementKind](nscollectionview/supplementaryelementkind.md)
- [NSUserInterfaceItemIdentifier](nsuserinterfaceitemidentifier.md)

### Changing the Layout

- [collectionViewLayout](nscollectionview/collectionviewlayout.md): The layout object used to organize the collection view’s content.

### Reloading Content

- [reloadData](nscollectionview/reloaddata%28%29.md): Reloads all of the data for the collection view.
- [reloadSections:](nscollectionview/reloadsections%28__%29.md): Reloads the data in the specified sections of the collection view.
- [reloadItemsAtIndexPaths:](nscollectionview/reloaditems%28at_%29.md): Reloads only the specified items.

### Prefetching Collection View Cells and Data

- [prefetchDataSource](nscollectionview/prefetchdatasource.md)
- [NSCollectionViewPrefetching](nscollectionviewprefetching.md)

### Getting the State of the Collection View

- [numberOfSections](nscollectionview/numberofsections.md): The number of sections in the collection view.
- [numberOfItemsInSection:](nscollectionview/numberofitems%28insection_%29.md): Returns the number of items in the specified section.

### Inserting, Moving, and Deleting Items

- [insertItemsAtIndexPaths:](nscollectionview/insertitems%28at_%29.md): Inserts new items into the collection view at the specified locations.
- [moveItemAtIndexPath:toIndexPath:](nscollectionview/moveitem%28at_to_%29.md): Moves an item from one location to another in the collection view.
- [deleteItemsAtIndexPaths:](nscollectionview/deleteitems%28at_%29.md): Deletes the items at the specified index paths.

### Inserting, Moving, Deleting, and Collapsing Sections

- [insertSections:](nscollectionview/insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [moveSection:toSection:](nscollectionview/movesection%28__tosection_%29.md): Moves a section from its current location to a new location.
- [deleteSections:](nscollectionview/deletesections%28__%29.md): Deletes the specified sections and their contained items.
- [toggleSectionCollapse:](nscollectionview/togglesectioncollapse%28__%29.md): Collapses the section in which the sender resides into a single horizontally scrollable row.

### Managing the Selection

- [selectable](nscollectionview/isselectable.md): A Boolean value that indicates whether the user may select items in the collection view.
- [allowsMultipleSelection](nscollectionview/allowsmultipleselection.md): A Boolean value that indicates whether the user may select more than one item in the collection view.
- [allowsEmptySelection](nscollectionview/allowsemptyselection.md): A Boolean value indicating whether the collection view may have no selected items.
- [selectionIndexPaths](nscollectionview/selectionindexpaths.md): The set of index paths representing the currently selected items.
- [selectAll:](nscollectionview/selectall%28__%29.md): Selects all items in the collection view, if doing so is possible.
- [deselectAll:](nscollectionview/deselectall%28__%29.md): Deselects all items in the collection view.
- [selectItemsAtIndexPaths:scrollPosition:](nscollectionview/selectitems%28at_scrollposition_%29.md): Adds the specified items to the current selection and optionally scrolls the items into position.
- [deselectItemsAtIndexPaths:](nscollectionview/deselectitems%28at_%29.md): Removes the specified items from the current selection.

### Locating Items and Views

- [visibleItems](nscollectionview/visibleitems%28%29.md): Returns an array of the actively managed items in the collection view.
- [indexPathsForVisibleItems](nscollectionview/indexpathsforvisibleitems%28%29.md): Returns the index paths of the currently active items.
- [visibleSupplementaryViewsOfKind:](nscollectionview/visiblesupplementaryviews%28ofkind_%29.md): Returns an array of the actively managed supplementary views in the collection view.
- [indexPathsForVisibleSupplementaryElementsOfKind:](nscollectionview/indexpathsforvisiblesupplementaryelements%28ofkind_%29.md): Returns the index paths of the currently active supplementary views.
- [indexPathForItem:](nscollectionview/indexpath%28for_%29.md): Returns the index path of the specified item.
- [indexPathForItemAtPoint:](nscollectionview/indexpathforitem%28at_%29.md): Returns the index path of the item at the specified point.
- [itemAtIndexPath:](nscollectionview/item%28at_%29-2vx2h.md): Returns the item associated with the specified index path.
- [supplementaryViewForElementKind:atIndexPath:](nscollectionview/supplementaryview%28forelementkind_at_%29.md): Returns the supplementary view associated with the specified index path.
- [scrollToItemsAtIndexPaths:scrollPosition:](nscollectionview/scrolltoitems%28at_scrollposition_%29.md): Scrolls the collection view contents until the specified items are visible.

### Getting Layout Information

- [layoutAttributesForItemAtIndexPath:](nscollectionview/layoutattributesforitem%28at_%29.md): Returns the layout information for the item at the specified index path.
- [layoutAttributesForSupplementaryElementOfKind:atIndexPath:](nscollectionview/layoutattributesforsupplementaryelement%28ofkind_at_%29.md): Returns the layout information for the supplementary view at the specified index path.

### Animating Multiple Changes

- [performBatchUpdates:completionHandler:](nscollectionview/performbatchupdates%28__completionhandler_%29.md): Encapsulates multiple insert, delete, reload, and move operations into a single animated operation.

### Working with the Responder Chain

- [firstResponder](nscollectionview/isfirstresponder.md): A Boolean value indicating whether the collection view is the first responder.

### Getting a Drag Image

- [draggingImageForItemsAtIndexPaths:withEvent:offset:](nscollectionview/draggingimageforitems%28at_with_offset_%29-7rc4k.md): Returns an image to use for dragging the specified items.

### Legacy Collection View Support

- [itemPrototype](nscollectionview/itemprototype.md): Deprecated. The receiver’s collection view item prototype.
- [newItemForRepresentedObject:](nscollectionview/newitem%28forrepresentedobject_%29.md): Deprecated. Returns the collection view item that is used for the specified object.
- [selectionIndexes](nscollectionview/selectionindexes.md): The indexes of the currently selected items.
- [maxNumberOfRows](nscollectionview/maxnumberofrows.md): Deprecated. The maximum number of rows that the collection view displays.
- [maxNumberOfColumns](nscollectionview/maxnumberofcolumns.md): Deprecated. The maximum number of columns that the collection view displays.
- [minItemSize](nscollectionview/minitemsize.md): Deprecated. The minimum size (in points) of items in the collection view grid.
- [maxItemSize](nscollectionview/maxitemsize.md): Deprecated. The maximum size (in points) of items in the collection view grid.
- [itemAtIndex:](nscollectionview/item%28at_%29-80xze.md): Returns the collection view item for the represented object at the specified index.
- [frameForItemAtIndex:](nscollectionview/frameforitem%28at_%29.md): Returns the frame of the collection view item at the specified index.
- [frameForItemAtIndex:withNumberOfItems:](nscollectionview/frameforitem%28at_withnumberofitems_%29.md): Returns the frame of an item based on the number of items in the collection view.
- [draggingImageForItemsAtIndexes:withEvent:offset:](nscollectionview/draggingimageforitems%28at_with_offset_%29-951w7.md): This method computes and returns an image to use for dragging.
- [setDraggingSourceOperationMask:forLocal:](nscollectionview/setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.

### Constants

- [NSCollectionViewDropOperation](nscollectionview/dropoperation.md): These constants specify if acceptance of a drop should be at the item it is dropped on or before the item. These constants are used by the [collectionView:acceptDrop:index:dropOperation:](nscollectionviewdelegate/collectionview%28__acceptdrop_index_dropoperation_%29.md) and [collectionView:validateDrop:proposedIndex:dropOperation:](nscollectionviewdelegate/collectionview%28__validatedrop_proposedindex_dropoperation_%29.md) methods in [NSCollectionViewDelegate](nscollectionviewdelegate.md)
- [NSCollectionViewScrollPosition](nscollectionview/scrollposition.md): Constants indicating the options for scrolling the collection view’s content.

### Type Aliases

- [NSCollectionViewDecorationElementKind](nscollectionview/decorationelementkind.md)

### Type Properties

- [NSCollectionElementKindInterItemGapIndicator](nscollectionview/elementkindinteritemgapindicator.md): The element kind string assigned to the attributes object when it represents an inter-item gap.
- [NSCollectionElementKindSectionFooter](nscollectionview/elementkindsectionfooter.md): A supplementary view that acts as a footer for a given section.
- [NSCollectionElementKindSectionHeader](nscollectionview/elementkindsectionheader.md): A supplementary view that acts as a header for a given section.

### Enumerations

- [NSCollectionViewScrollDirection](nscollectionview/scrolldirection.md): Constants indicating the scrolling direction for the layout.
- [NSCollectionUpdateAction](nscollectionview/updateaction.md): Constants indicating the type of action being performed on an item.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [NSDraggingDestination](nsdraggingdestination.md)
- [NSDraggingSource](nsdraggingsource.md)

## See Also

### View

- [NSCollectionViewSectionHeaderView](nscollectionviewsectionheaderview.md): A protocol that defines a button to control the collapse of a collection view’s section.
