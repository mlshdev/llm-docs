> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview](https://developer.apple.com/documentation/appkit/nsoutlineview)

# NSOutlineView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A view that uses a row-and-column format to display hierarchical data like directories and files that can be expanded and collapsed.

## Declaration

```swift
class NSOutlineView
```

<a id="overview"></a>

## Overview

Like a table view, an outline view does not store its own data, instead it retrieves data values as needed from a data source to which it has a weak reference (see [Delegates and Data Sources](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/DelegatesandDataSources/DelegatesandDataSources.html#//apple_ref/doc/uid/TP40010810-CH11)). See [NSOutlineViewDataSource](nsoutlineviewdatasource.md), which declares the methods that an `NSOutlineView` object uses to access the contents of its data source object.

An outline view has the following features:

- A user can expand and collapse rows, edit values, and resize and rearrange columns.
- Each item in the outline view must be unique. In order for the collapsed state to remain consistent between reloads the item’s pointer must remain the same and the item must maintain [isEqual(\_:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isequal%28_:%29) sameness.
- The view gets data from a data source (see [NSOutlineViewDataSource](nsoutlineviewdatasource.md)).
- The view retrieves only the data that needs to be displayed.

> **Important**

>  It is possible that your data source methods for populating the outline view may be called before [awakeFromNib()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/awakefromnib%28%29) if the data source is specified in Interface Builder. You should defend against this by having the data source’s [outlineView(\_:numberOfChildrenOfItem:)](nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md) method return `0` for the number of items when the data source has not yet been configured. In [awakeFromNib()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/awakefromnib%28%29), when the data source is initialized you should always call [reloadData()](nstableview/reloaddata%28%29.md).

For more information about using NSOutlineView in your app, see [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md).

<a id="Subclassing"></a>

### Subclassing

Subclassing `NSOutlineView` is not recommended. Customization can be accomplished in your data source class implementation (conforming to [NSOutlineViewDataSource](nsoutlineviewdatasource.md)) or your delegate class implementation (conforming to [NSOutlineViewDelegate](nsoutlineviewdelegate.md)).

## Topics

### Accessing the Data Source

- [dataSource](nsoutlineview/datasource.md): The object that provides the data displayed by the receiver.
- [stronglyReferencesItems](nsoutlineview/stronglyreferencesitems.md): A Boolean value that indicates whether the outline view retains and releases the objects returned from its data source.

### Working with Expandability

- [isExpandable(\_:)](nsoutlineview/isexpandable%28__%29.md): Returns a Boolean value that indicates whether a given item is expandable.
- [isItemExpanded(\_:)](nsoutlineview/isitemexpanded%28__%29.md): Returns a Boolean value that indicates whether a given item is expanded.

### Expanding and Collapsing the Outline

- [expandItem(\_:)](nsoutlineview/expanditem%28__%29.md): Expands a given item.
- [expandItem(\_:expandChildren:)](nsoutlineview/expanditem%28__expandchildren_%29.md): Expands a specified item and, optionally, its children.
- [collapseItem(\_:)](nsoutlineview/collapseitem%28__%29.md): Collapses a given item.
- [collapseItem(\_:collapseChildren:)](nsoutlineview/collapseitem%28__collapsechildren_%29.md): Collapses a given item and, optionally, its children.

### Redisplaying Information

- [reloadItem(\_:)](nsoutlineview/reloaditem%28__%29.md): Reloads and redisplays the data for the given item.
- [reloadItem(\_:reloadChildren:)](nsoutlineview/reloaditem%28__reloadchildren_%29.md): Reloads a given item and, optionally, its children.

### Converting Between Items and Rows

- [item(atRow:)](nsoutlineview/item%28atrow_%29.md): Returns the item associated with a given row.
- [row(forItem:)](nsoutlineview/row%28foritem_%29.md): Returns the row associated with a given item.

### Working with the Outline Column

- [outlineTableColumn](nsoutlineview/outlinetablecolumn.md): The table column in which hierarchical data is displayed.
- [autoresizesOutlineColumn](nsoutlineview/autoresizesoutlinecolumn.md): A Boolean value that indicates whether the outline view resizes its outline column when the user expands or collapses items.

### Working with Indentation

- [level(forItem:)](nsoutlineview/level%28foritem_%29.md): Returns the indentation level for a given item.
- [level(forRow:)](nsoutlineview/level%28forrow_%29.md): Returns the indentation level for a given row.
- [indentationPerLevel](nsoutlineview/indentationperlevel.md): The per-level indentation, measured in points.
- [indentationMarkerFollowsCell](nsoutlineview/indentationmarkerfollowscell.md): A Boolean value indicating whether the indentation marker symbol displayed in the outline column should be indented along with the cell contents.

### Working with Persistence

- [autosaveExpandedItems](nsoutlineview/autosaveexpandeditems.md): A Boolean value indicating whether the expanded items are automatically saved across launches of the app.

### Supporting Drag and Drop

- [setDropItem(\_:dropChildIndex:)](nsoutlineview/setdropitem%28__dropchildindex_%29.md): Used to “retarget” a proposed drop.
- [shouldCollapseAutoExpandedItems(forDeposited:)](nsoutlineview/shouldcollapseautoexpandeditems%28fordeposited_%29.md): Returns a Boolean value that indicates whether auto-expanded items should return to their original collapsed state.

### Getting Related Items

- [parent(forItem:)](nsoutlineview/parent%28foritem_%29.md): Returns the parent for a given item.
- [childIndex(forItem:)](nsoutlineview/childindex%28foritem_%29.md): Returns the child index of the specified item within its parent.
- [child(\_:ofItem:)](nsoutlineview/child%28__ofitem_%29.md): Returns the specified child of an item.
- [numberOfChildren(ofItem:)](nsoutlineview/numberofchildren%28ofitem_%29.md): Returns the number of children for the specified parent item.

### Getting the Frame for a Cell

- [frameOfOutlineCell(atRow:)](nsoutlineview/frameofoutlinecell%28atrow_%29.md): Returns the frame of the outline cell for a given row.

### Accessing the Delegate

- [delegate](nsoutlineview/delegate.md): The outline view’s delegate.

### Manipulating Items

- [insertItems(at:inParent:withAnimation:)](nsoutlineview/insertitems%28at_inparent_withanimation_%29.md): Inserts new items at the given indexes in the given parent with the specified optional animations.
- [moveItem(at:inParent:to:inParent:)](nsoutlineview/moveitem%28at_inparent_to_inparent_%29.md): Moves an item at a given index in the given parent to a new index in a new parent.
- [removeItems(at:inParent:withAnimation:)](nsoutlineview/removeitems%28at_inparent_withanimation_%29.md): Removes items at the given indexes in the given parent with the specified optional animations.

### User Interface Layout Direction

- [userInterfaceLayoutDirection](nsoutlineview/userinterfacelayoutdirection.md): The user interface layout direction.

### Constants

- [Drop on Item Index](drop-on-item-index.md): This constant defines an index that allows you to drop an item directly on a target.
- [Outline View Button Keys](outline-view-button-keys.md): These keys are used by the outline view to create disclosure buttons that collapse and expand items.

### Notifications

- [columnDidMoveNotification](nsoutlineview/columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSOutlineView` object.
- [columnDidResizeNotification](nsoutlineview/columndidresizenotification.md): Posted whenever a column is resized in an `NSOutlineView` object.
- [itemDidCollapseNotification](nsoutlineview/itemdidcollapsenotification.md): Posted whenever an item is collapsed in an `NSOutlineView` object.
- [itemDidExpandNotification](nsoutlineview/itemdidexpandnotification.md): Posted whenever an item is expanded in an `NSOutlineView` object.
- [itemWillCollapseNotification](nsoutlineview/itemwillcollapsenotification.md): Posted before an item is collapsed (after the user clicks the arrow but before the item is collapsed).
- [itemWillExpandNotification](nsoutlineview/itemwillexpandnotification.md): Posted before an item is expanded (after the user clicks the arrow but before the item is collapsed).
- [selectionDidChangeNotification](nsoutlineview/selectiondidchangenotification.md): Posted after the outline view’s selection changes.
- [selectionIsChangingNotification](nsoutlineview/selectionischangingnotification.md): Posted as the outline view’s selection changes (while the mouse button is still down).

### Structures

- [NSOutlineView.ColumnDidMoveMessage](nsoutlineview/columndidmovemessage.md)
- [NSOutlineView.ColumnDidResizeMessage](nsoutlineview/columndidresizemessage.md)
- [NSOutlineView.ItemDidCollapseMessage](nsoutlineview/itemdidcollapsemessage.md)
- [NSOutlineView.ItemDidExpandMessage](nsoutlineview/itemdidexpandmessage.md)
- [NSOutlineView.ItemWillCollapseMessage](nsoutlineview/itemwillcollapsemessage.md)
- [NSOutlineView.ItemWillExpandMessage](nsoutlineview/itemwillexpandmessage.md)
- [NSOutlineView.SelectionDidChangeMessage](nsoutlineview/selectiondidchangemessage.md)
- [NSOutlineView.SelectionIsChangingMessage](nsoutlineview/selectionischangingmessage.md)

## Relationships

### Inherits From

- [NSTableView](nstableview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityGroup](nsaccessibilitygroup.md)
- [NSAccessibilityOutline](nsaccessibilityoutline.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAccessibilityTable](nsaccessibilitytable.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSDraggingSource](nsdraggingsource.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTextDelegate](nstextdelegate.md)
- [NSTextViewDelegate](nstextviewdelegate.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### View

- [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md): Build a structured user interface that simplifies navigation in your app.

# NSOutlineView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A view that uses a row-and-column format to display hierarchical data like directories and files that can be expanded and collapsed.

## Declaration

```objectivec
@interface NSOutlineView : NSTableView
```

<a id="overview"></a>

## Overview

Like a table view, an outline view does not store its own data, instead it retrieves data values as needed from a data source to which it has a weak reference (see [Delegates and Data Sources](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/DelegatesandDataSources/DelegatesandDataSources.html#//apple_ref/doc/uid/TP40010810-CH11)). See [NSOutlineViewDataSource](nsoutlineviewdatasource.md), which declares the methods that an `NSOutlineView` object uses to access the contents of its data source object.

An outline view has the following features:

- A user can expand and collapse rows, edit values, and resize and rearrange columns.
- Each item in the outline view must be unique. In order for the collapsed state to remain consistent between reloads the item’s pointer must remain the same and the item must maintain [isEqual:](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isequal%28_:%29) sameness.
- The view gets data from a data source (see [NSOutlineViewDataSource](nsoutlineviewdatasource.md)).
- The view retrieves only the data that needs to be displayed.

> **Important**

>  It is possible that your data source methods for populating the outline view may be called before [awakeFromNib](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/awakefromnib%28%29) if the data source is specified in Interface Builder. You should defend against this by having the data source’s [outlineView:numberOfChildrenOfItem:](nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md) method return `0` for the number of items when the data source has not yet been configured. In [awakeFromNib](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/awakefromnib%28%29), when the data source is initialized you should always call [reloadData](nstableview/reloaddata%28%29.md).

For more information about using NSOutlineView in your app, see [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md).

<a id="Subclassing"></a>

### Subclassing

Subclassing `NSOutlineView` is not recommended. Customization can be accomplished in your data source class implementation (conforming to [NSOutlineViewDataSource](nsoutlineviewdatasource.md)) or your delegate class implementation (conforming to [NSOutlineViewDelegate](nsoutlineviewdelegate.md)).

## Topics

### Accessing the Data Source

- [dataSource](nsoutlineview/datasource.md): The object that provides the data displayed by the receiver.
- [stronglyReferencesItems](nsoutlineview/stronglyreferencesitems.md): A Boolean value that indicates whether the outline view retains and releases the objects returned from its data source.

### Working with Expandability

- [isExpandable:](nsoutlineview/isexpandable%28__%29.md): Returns a Boolean value that indicates whether a given item is expandable.
- [isItemExpanded:](nsoutlineview/isitemexpanded%28__%29.md): Returns a Boolean value that indicates whether a given item is expanded.

### Expanding and Collapsing the Outline

- [expandItem:](nsoutlineview/expanditem%28__%29.md): Expands a given item.
- [expandItem:expandChildren:](nsoutlineview/expanditem%28__expandchildren_%29.md): Expands a specified item and, optionally, its children.
- [collapseItem:](nsoutlineview/collapseitem%28__%29.md): Collapses a given item.
- [collapseItem:collapseChildren:](nsoutlineview/collapseitem%28__collapsechildren_%29.md): Collapses a given item and, optionally, its children.

### Redisplaying Information

- [reloadItem:](nsoutlineview/reloaditem%28__%29.md): Reloads and redisplays the data for the given item.
- [reloadItem:reloadChildren:](nsoutlineview/reloaditem%28__reloadchildren_%29.md): Reloads a given item and, optionally, its children.

### Converting Between Items and Rows

- [itemAtRow:](nsoutlineview/item%28atrow_%29.md): Returns the item associated with a given row.
- [rowForItem:](nsoutlineview/row%28foritem_%29.md): Returns the row associated with a given item.

### Working with the Outline Column

- [outlineTableColumn](nsoutlineview/outlinetablecolumn.md): The table column in which hierarchical data is displayed.
- [autoresizesOutlineColumn](nsoutlineview/autoresizesoutlinecolumn.md): A Boolean value that indicates whether the outline view resizes its outline column when the user expands or collapses items.

### Working with Indentation

- [levelForItem:](nsoutlineview/level%28foritem_%29.md): Returns the indentation level for a given item.
- [levelForRow:](nsoutlineview/level%28forrow_%29.md): Returns the indentation level for a given row.
- [indentationPerLevel](nsoutlineview/indentationperlevel.md): The per-level indentation, measured in points.
- [indentationMarkerFollowsCell](nsoutlineview/indentationmarkerfollowscell.md): A Boolean value indicating whether the indentation marker symbol displayed in the outline column should be indented along with the cell contents.

### Working with Persistence

- [autosaveExpandedItems](nsoutlineview/autosaveexpandeditems.md): A Boolean value indicating whether the expanded items are automatically saved across launches of the app.

### Supporting Drag and Drop

- [setDropItem:dropChildIndex:](nsoutlineview/setdropitem%28__dropchildindex_%29.md): Used to “retarget” a proposed drop.
- [shouldCollapseAutoExpandedItemsForDeposited:](nsoutlineview/shouldcollapseautoexpandeditems%28fordeposited_%29.md): Returns a Boolean value that indicates whether auto-expanded items should return to their original collapsed state.

### Getting Related Items

- [parentForItem:](nsoutlineview/parent%28foritem_%29.md): Returns the parent for a given item.
- [childIndexForItem:](nsoutlineview/childindex%28foritem_%29.md): Returns the child index of the specified item within its parent.
- [child:ofItem:](nsoutlineview/child%28__ofitem_%29.md): Returns the specified child of an item.
- [numberOfChildrenOfItem:](nsoutlineview/numberofchildren%28ofitem_%29.md): Returns the number of children for the specified parent item.

### Getting the Frame for a Cell

- [frameOfOutlineCellAtRow:](nsoutlineview/frameofoutlinecell%28atrow_%29.md): Returns the frame of the outline cell for a given row.

### Accessing the Delegate

- [delegate](nsoutlineview/delegate.md): The outline view’s delegate.

### Manipulating Items

- [insertItemsAtIndexes:inParent:withAnimation:](nsoutlineview/insertitems%28at_inparent_withanimation_%29.md): Inserts new items at the given indexes in the given parent with the specified optional animations.
- [moveItemAtIndex:inParent:toIndex:inParent:](nsoutlineview/moveitem%28at_inparent_to_inparent_%29.md): Moves an item at a given index in the given parent to a new index in a new parent.
- [removeItemsAtIndexes:inParent:withAnimation:](nsoutlineview/removeitems%28at_inparent_withanimation_%29.md): Removes items at the given indexes in the given parent with the specified optional animations.

### User Interface Layout Direction

- [userInterfaceLayoutDirection](nsoutlineview/userinterfacelayoutdirection.md): The user interface layout direction.

### Constants

- [Drop on Item Index](drop-on-item-index.md): This constant defines an index that allows you to drop an item directly on a target.
- [Outline View Button Keys](outline-view-button-keys.md): These keys are used by the outline view to create disclosure buttons that collapse and expand items.

### Notifications

- [NSOutlineViewColumnDidMoveNotification](nsoutlineview/columndidmovenotification.md): Posted whenever a column is moved by user action in an `NSOutlineView` object.
- [NSOutlineViewColumnDidResizeNotification](nsoutlineview/columndidresizenotification.md): Posted whenever a column is resized in an `NSOutlineView` object.
- [NSOutlineViewItemDidCollapseNotification](nsoutlineview/itemdidcollapsenotification.md): Posted whenever an item is collapsed in an `NSOutlineView` object.
- [NSOutlineViewItemDidExpandNotification](nsoutlineview/itemdidexpandnotification.md): Posted whenever an item is expanded in an `NSOutlineView` object.
- [NSOutlineViewItemWillCollapseNotification](nsoutlineview/itemwillcollapsenotification.md): Posted before an item is collapsed (after the user clicks the arrow but before the item is collapsed).
- [NSOutlineViewItemWillExpandNotification](nsoutlineview/itemwillexpandnotification.md): Posted before an item is expanded (after the user clicks the arrow but before the item is collapsed).
- [NSOutlineViewSelectionDidChangeNotification](nsoutlineview/selectiondidchangenotification.md): Posted after the outline view’s selection changes.
- [NSOutlineViewSelectionIsChangingNotification](nsoutlineview/selectionischangingnotification.md): Posted as the outline view’s selection changes (while the mouse button is still down).

## Relationships

### Inherits From

- [NSTableView](nstableview.md)

### Conforms To

- [NSAccessibilityOutline](nsaccessibilityoutline.md)

## See Also

### View

- [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md): Build a structured user interface that simplifies navigation in your app.
