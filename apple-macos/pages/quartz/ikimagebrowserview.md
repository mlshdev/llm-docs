> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview](https://developer.apple.com/documentation/quartz/ikimagebrowserview)

# IKImageBrowserView (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.5+ (deprecated in 10.14)

A view for displaying and browsing a large collection of images and movies.

> Deprecated - Please use NSCollectionView instead

## Declaration

```swift
class IKImageBrowserView
```

<a id="overview"></a>

## Overview

The [IKImageBrowserView](ikimagebrowserview.md) class is a view for displaying and browsing a large amount of images and movies efficiently. This class will be deprecated in a future release. Please switch to [NSCollectionView](../appkit/nscollectionview.md) instead.

You must set a datasource for the view and implement, at a minimum, the [numberOfItems(inImageBrowser:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/numberofitems%28inimagebrowser:%29) and [imageBrowser(\_:itemAt:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:itemat:%29) described in [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md). The items must conform to the IKImageBrowserItem Protocol protocol.

The class’s delegate object must conform to IKImageBrowserDelegate Protocol protocol. It receives notification of changes in selection, as well as mouse events in the cells.

> **Core Animation Integration**

>  The image browser supports either being hosted in a layer-backed view or using custom layers for its own appearance. Custom layers on the image browser are not supported when the image browser is itself backed by a layer.

## Topics

### Updating the Display of the Content

- [reloadData()](ikimagebrowserview/reloaddata%28%29.md): Marks the receiver as needing its data reloaded.

### Getting and Setting the Delegate

- [delegate](ikimagebrowserview/delegate.md): Returns the delegate of the receiver.

### Getting and Setting the Data Source

- [dataSource](ikimagebrowserview/datasource.md): Returns the data source of the receiver.

### Setting the Appearance

- [setCellsStyleMask(\_:)](ikimagebrowserview/setcellsstylemask%28__%29.md): Defines the appearance style of the cells.
- [cellsStyleMask()](ikimagebrowserview/cellsstylemask%28%29.md): Returns the appearance style mask for the cell.
- [setConstrainsToOriginalSize(\_:)](ikimagebrowserview/setconstrainstooriginalsize%28__%29.md): Sets whether the receiver constrains the cell’s image to its original size.
- [constrainsToOriginalSize()](ikimagebrowserview/constrainstooriginalsize%28%29.md): Returns whether the receiver constrains the cell’s image to its original size.
- [setIntercellSpacing(\_:)](ikimagebrowserview/setintercellspacing%28__%29.md): Sets the spacing between cells in the view.
- [intercellSpacing()](ikimagebrowserview/intercellspacing%28%29.md): Returns the spacing between cells in the view.

### Creating a Custom Cell for an Item

- [newCell(forRepresentedItem:)](ikimagebrowserview/newcell%28forrepresenteditem_%29.md): Returns the cell to use for the specified item.

### Zooming and Resizing

- [setZoomValue(\_:)](ikimagebrowserview/setzoomvalue%28__%29.md): Sets the zoom value.
- [zoomValue()](ikimagebrowserview/zoomvalue%28%29.md): Returns the current zoom value.
- [setContentResizingMask(\_:)](ikimagebrowserview/setcontentresizingmask%28__%29.md): Determines how the receiver resizes its content when zooming.
- [contentResizingMask()](ikimagebrowserview/contentresizingmask%28%29.md): Returns the receiver’s content resizing mask, which determines how its content is resized while zooming.

### Scrolling

- [scrollIndexToVisible(\_:)](ikimagebrowserview/scrollindextovisible%28__%29.md): Scrolls the receiver to the item at the specified index.

### Setting and Getting Cell Size

- [setCellSize(\_:)](ikimagebrowserview/setcellsize%28__%29.md): Sets the cell size.
- [cellSize()](ikimagebrowserview/cellsize%28%29.md): Returns the cell size.

### Getting Item Information

- [indexOfItem(at:)](ikimagebrowserview/indexofitem%28at_%29.md): Returns the index of the item at the specified location.
- [itemFrame(at:)](ikimagebrowserview/itemframe%28at_%29.md): Returns the frame rectangle for the item located at the specified index.
- [visibleItemIndexes()](ikimagebrowserview/visibleitemindexes%28%29.md): Returns the indexes of the view’s currently visible items.
- [cellForItem(at:)](ikimagebrowserview/cellforitem%28at_%29.md): Returns the browser cell for the item at the specified index.

### Reordering and Groups Items

- [selectionIndexes()](ikimagebrowserview/selectionindexes%28%29.md): Returns the indexes of the selected cells.
- [setSelectionIndexes(\_:byExtendingSelection:)](ikimagebrowserview/setselectionindexes%28__byextendingselection_%29.md): Selects cells at the specified indexes.
- [setAllowsMultipleSelection(\_:)](ikimagebrowserview/setallowsmultipleselection%28__%29.md): Controls whether the user can select more than one cell at a time.
- [allowsMultipleSelection()](ikimagebrowserview/allowsmultipleselection%28%29.md): Returns whether multiple selections are allowed.
- [setAllowsEmptySelection(\_:)](ikimagebrowserview/setallowsemptyselection%28__%29.md): Controls whether an empty selection is allowed.
- [allowsEmptySelection()](ikimagebrowserview/allowsemptyselection%28%29.md): Returns whether an empty selection is allowed.
- [setAllowsReordering(\_:)](ikimagebrowserview/setallowsreordering%28__%29.md): Controls whether the user can reorder items.
- [allowsReordering()](ikimagebrowserview/allowsreordering%28%29.md): Returns whether the user can reorder items.
- [setAnimates(\_:)](ikimagebrowserview/setanimates%28__%29.md): Controls whether the receiver animates reordering and changes of the data source.
- [animates()](ikimagebrowserview/animates%28%29.md): Returns whether the receiver animates reordering and changes of the data source.
- [expandGroup(at:)](ikimagebrowserview/expandgroup%28at_%29.md): Expands a group at the specified index.
- [collapseGroup(at:)](ikimagebrowserview/collapsegroup%28at_%29.md): Collapses a group at the specified index.
- [isGroupExpanded(at:)](ikimagebrowserview/isgroupexpanded%28at_%29.md): Returns whether the group at the provided index is expanded.

### Supporting Drag and Drop

- [setDraggingDestinationDelegate(\_:)](ikimagebrowserview/setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate()](ikimagebrowserview/draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDrop(\_:dropOperation:)](ikimagebrowserview/setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem()](ikimagebrowserview/indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems(\_:)](ikimagebrowserview/setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems()](ikimagebrowserview/allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation()](ikimagebrowserview/dropoperation%28%29.md): Returns the current drop operation.

### Core Animation Layer Integration

- [setForegroundLayer(\_:)](ikimagebrowserview/setforegroundlayer%28__%29.md): The Core Animation layer used as the foreground overlay.
- [foregroundLayer()](ikimagebrowserview/foregroundlayer%28%29.md): Returns the foreground Core Animation layer
- [setBackgroundLayer(\_:)](ikimagebrowserview/setbackgroundlayer%28__%29.md): The Core Animation layer used as the view’s background.
- [backgroundLayer()](ikimagebrowserview/backgroundlayer%28%29.md): Returns the foreground Core Animation layer

### QuickLook Support

- [setCanControlQuickLookPanel(\_:)](ikimagebrowserview/setcancontrolquicklookpanel%28__%29.md): Specifies whether the view can automatically take control of the QuickLook panel.
- [canControlQuickLookPanel()](ikimagebrowserview/cancontrolquicklookpanel%28%29.md): Returns whether the view can automatically take control of the QuickLook panel.

### Getting Columns and Rows Information

- [numberOfColumns()](ikimagebrowserview/numberofcolumns%28%29.md): Returns the current number of columns.
- [numberOfRows()](ikimagebrowserview/numberofrows%28%29.md): Returns the current number of rows.
- [rect(ofColumn:)](ikimagebrowserview/rect%28ofcolumn_%29.md): Returns the rectangle containing the specified column.
- [columnIndexes(in:)](ikimagebrowserview/columnindexes%28in_%29.md): Returns the column indexes in the specified rectangle.
- [rect(ofRow:)](ikimagebrowserview/rect%28ofrow_%29.md): Returns the rectangle containing the specified row.
- [rowIndexes(in:)](ikimagebrowserview/rowindexes%28in_%29.md): Returns the row indexes in the specified rectangle.

### Constants

- [Cell Appearance Style Masks](1564248-cell-appearance-style-masks.md): Masks for the appearance style bit field.
- [Group Style Attributes](1564247-group-style-attributes.md): Attributes for the group style. Used by the
- [View Options Keys](view-options-keys.md): Keys for image browser view options. You set and retrieve values for these keys by sending the view `setValue:forKey` and `valueForKey:` messages.
- [Group Keys](group-keys.md): Keys for group attributes.
- [IKImageBrowserDropOperation](ikimagebrowserdropoperation.md): These constants specify the locations for dropping items onto the browser view. Used by the method [setDrop(\_:dropOperation:)](ikimagebrowserview/setdrop%28__dropoperation_%29.md).

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](../appkit/nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](../appkit/nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](../appkit/nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](../appkit/nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](../appkit/nsdraggingdestination.md)
- [NSDraggingSource](../appkit/nsdraggingsource.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# IKImageBrowserView (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.5+ (deprecated in 10.14)

A view for displaying and browsing a large collection of images and movies.

> Deprecated - Please use NSCollectionView instead

## Declaration

```objectivec
@interface IKImageBrowserView : NSView
```

<a id="overview"></a>

## Overview

The [IKImageBrowserView](ikimagebrowserview.md) class is a view for displaying and browsing a large amount of images and movies efficiently. This class will be deprecated in a future release. Please switch to [NSCollectionView](../appkit/nscollectionview.md) instead.

You must set a datasource for the view and implement, at a minimum, the [numberOfItemsInImageBrowser:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/numberofitems%28inimagebrowser:%29) and [imageBrowser:itemAtIndex:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:itemat:%29) described in [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md). The items must conform to the IKImageBrowserItem Protocol protocol.

The class’s delegate object must conform to IKImageBrowserDelegate Protocol protocol. It receives notification of changes in selection, as well as mouse events in the cells.

> **Core Animation Integration**

>  The image browser supports either being hosted in a layer-backed view or using custom layers for its own appearance. Custom layers on the image browser are not supported when the image browser is itself backed by a layer.

## Topics

### Initializing and Setting Up an Image Browser View

- [initWithFrame:](ikimagebrowserview/initwithframe_.md): Initializes a newly allocated image browser view with the provided frame rectangle.

### Updating the Display of the Content

- [reloadData](ikimagebrowserview/reloaddata%28%29.md): Marks the receiver as needing its data reloaded.

### Getting and Setting the Delegate

- [delegate](ikimagebrowserview/delegate.md): Returns the delegate of the receiver.

### Getting and Setting the Data Source

- [dataSource](ikimagebrowserview/datasource.md): Returns the data source of the receiver.

### Setting the Appearance

- [setCellsStyleMask:](ikimagebrowserview/setcellsstylemask%28__%29.md): Defines the appearance style of the cells.
- [cellsStyleMask](ikimagebrowserview/cellsstylemask%28%29.md): Returns the appearance style mask for the cell.
- [setConstrainsToOriginalSize:](ikimagebrowserview/setconstrainstooriginalsize%28__%29.md): Sets whether the receiver constrains the cell’s image to its original size.
- [constrainsToOriginalSize](ikimagebrowserview/constrainstooriginalsize%28%29.md): Returns whether the receiver constrains the cell’s image to its original size.
- [setIntercellSpacing:](ikimagebrowserview/setintercellspacing%28__%29.md): Sets the spacing between cells in the view.
- [intercellSpacing](ikimagebrowserview/intercellspacing%28%29.md): Returns the spacing between cells in the view.

### Creating a Custom Cell for an Item

- [newCellForRepresentedItem:](ikimagebrowserview/newcell%28forrepresenteditem_%29.md): Returns the cell to use for the specified item.

### Zooming and Resizing

- [setZoomValue:](ikimagebrowserview/setzoomvalue%28__%29.md): Sets the zoom value.
- [zoomValue](ikimagebrowserview/zoomvalue%28%29.md): Returns the current zoom value.
- [setContentResizingMask:](ikimagebrowserview/setcontentresizingmask%28__%29.md): Determines how the receiver resizes its content when zooming.
- [contentResizingMask](ikimagebrowserview/contentresizingmask%28%29.md): Returns the receiver’s content resizing mask, which determines how its content is resized while zooming.

### Scrolling

- [scrollIndexToVisible:](ikimagebrowserview/scrollindextovisible%28__%29.md): Scrolls the receiver to the item at the specified index.

### Setting and Getting Cell Size

- [setCellSize:](ikimagebrowserview/setcellsize%28__%29.md): Sets the cell size.
- [cellSize](ikimagebrowserview/cellsize%28%29.md): Returns the cell size.

### Getting Item Information

- [indexOfItemAtPoint:](ikimagebrowserview/indexofitem%28at_%29.md): Returns the index of the item at the specified location.
- [itemFrameAtIndex:](ikimagebrowserview/itemframe%28at_%29.md): Returns the frame rectangle for the item located at the specified index.
- [visibleItemIndexes](ikimagebrowserview/visibleitemindexes%28%29.md): Returns the indexes of the view’s currently visible items.
- [cellForItemAtIndex:](ikimagebrowserview/cellforitem%28at_%29.md): Returns the browser cell for the item at the specified index.

### Reordering and Groups Items

- [selectionIndexes](ikimagebrowserview/selectionindexes%28%29.md): Returns the indexes of the selected cells.
- [setSelectionIndexes:byExtendingSelection:](ikimagebrowserview/setselectionindexes%28__byextendingselection_%29.md): Selects cells at the specified indexes.
- [setAllowsMultipleSelection:](ikimagebrowserview/setallowsmultipleselection%28__%29.md): Controls whether the user can select more than one cell at a time.
- [allowsMultipleSelection](ikimagebrowserview/allowsmultipleselection%28%29.md): Returns whether multiple selections are allowed.
- [setAllowsEmptySelection:](ikimagebrowserview/setallowsemptyselection%28__%29.md): Controls whether an empty selection is allowed.
- [allowsEmptySelection](ikimagebrowserview/allowsemptyselection%28%29.md): Returns whether an empty selection is allowed.
- [setAllowsReordering:](ikimagebrowserview/setallowsreordering%28__%29.md): Controls whether the user can reorder items.
- [allowsReordering](ikimagebrowserview/allowsreordering%28%29.md): Returns whether the user can reorder items.
- [setAnimates:](ikimagebrowserview/setanimates%28__%29.md): Controls whether the receiver animates reordering and changes of the data source.
- [animates](ikimagebrowserview/animates%28%29.md): Returns whether the receiver animates reordering and changes of the data source.
- [expandGroupAtIndex:](ikimagebrowserview/expandgroup%28at_%29.md): Expands a group at the specified index.
- [collapseGroupAtIndex:](ikimagebrowserview/collapsegroup%28at_%29.md): Collapses a group at the specified index.
- [isGroupExpandedAtIndex:](ikimagebrowserview/isgroupexpanded%28at_%29.md): Returns whether the group at the provided index is expanded.

### Supporting Drag and Drop

- [setDraggingDestinationDelegate:](ikimagebrowserview/setdraggingdestinationdelegate%28__%29.md): Sets the dragging destination delegate of the receiver.
- [draggingDestinationDelegate](ikimagebrowserview/draggingdestinationdelegate%28%29.md): Returns the dragging destination delegate of the receiver.
- [setDropIndex:dropOperation:](ikimagebrowserview/setdrop%28__dropoperation_%29.md): Allows the class to retarget the drop action.
- [indexAtLocationOfDroppedItem](ikimagebrowserview/indexatlocationofdroppeditem%28%29.md): Returns the index of the cell where the drop operation occurred.
- [setAllowsDroppingOnItems:](ikimagebrowserview/setallowsdroppingonitems%28__%29.md): Specifies whether the user can drop on items.
- [allowsDroppingOnItems](ikimagebrowserview/allowsdroppingonitems%28%29.md): Returns whether the user can drop on items.
- [dropOperation](ikimagebrowserview/dropoperation%28%29.md): Returns the current drop operation.

### Core Animation Layer Integration

- [setForegroundLayer:](ikimagebrowserview/setforegroundlayer%28__%29.md): The Core Animation layer used as the foreground overlay.
- [foregroundLayer](ikimagebrowserview/foregroundlayer%28%29.md): Returns the foreground Core Animation layer
- [setBackgroundLayer:](ikimagebrowserview/setbackgroundlayer%28__%29.md): The Core Animation layer used as the view’s background.
- [backgroundLayer](ikimagebrowserview/backgroundlayer%28%29.md): Returns the foreground Core Animation layer

### QuickLook Support

- [setCanControlQuickLookPanel:](ikimagebrowserview/setcancontrolquicklookpanel%28__%29.md): Specifies whether the view can automatically take control of the QuickLook panel.
- [canControlQuickLookPanel](ikimagebrowserview/cancontrolquicklookpanel%28%29.md): Returns whether the view can automatically take control of the QuickLook panel.

### Getting Columns and Rows Information

- [numberOfColumns](ikimagebrowserview/numberofcolumns%28%29.md): Returns the current number of columns.
- [numberOfRows](ikimagebrowserview/numberofrows%28%29.md): Returns the current number of rows.
- [rectOfColumn:](ikimagebrowserview/rect%28ofcolumn_%29.md): Returns the rectangle containing the specified column.
- [columnIndexesInRect:](ikimagebrowserview/columnindexes%28in_%29.md): Returns the column indexes in the specified rectangle.
- [rectOfRow:](ikimagebrowserview/rect%28ofrow_%29.md): Returns the rectangle containing the specified row.
- [rowIndexesInRect:](ikimagebrowserview/rowindexes%28in_%29.md): Returns the row indexes in the specified rectangle.

### Constants

- [Cell Appearance Style Masks](1564248-cell-appearance-style-masks.md): Masks for the appearance style bit field.
- [Group Style Attributes](1564247-group-style-attributes.md): Attributes for the group style. Used by the
- [View Options Keys](view-options-keys.md): Keys for image browser view options. You set and retrieve values for these keys by sending the view `setValue:forKey` and `valueForKey:` messages.
- [Group Keys](group-keys.md): Keys for group attributes.
- [IKImageBrowserDropOperation](ikimagebrowserdropoperation.md): These constants specify the locations for dropping items onto the browser view. Used by the method [setDropIndex:dropOperation:](ikimagebrowserview/setdrop%28__dropoperation_%29.md).

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

### Conforms To

- [NSDraggingSource](../appkit/nsdraggingsource.md)
