> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdatasource](https://developer.apple.com/documentation/appkit/nsoutlineviewdatasource)

# NSOutlineViewDataSource (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that an outline view calls to retrieve data and information about it from the data source delegate, and—optionally—to update data values.

## Declaration

```swift
protocol NSOutlineViewDataSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

[NSOutlineView](nsoutlineview.md) objects support a data source delegate in addition to the regular delegate object.

All the methods in the [NSOutlineViewDataSource](nsoutlineviewdatasource.md) protocol are marked as `@optional`. While this is true, there are cases were you must implement some methods to achieve required functionality, specifically when working with conventional data sources rather than data that is provided by Cocoa bindings.

<a id="Required-and-Optional-Methods-Using-Programmatic-Conventions-and-Cocoa-Bindings"></a>

### Required and Optional Methods Using Programmatic Conventions and Cocoa Bindings

If you are using conventional data sources for content you must implement the basic methods that provide the outline view with data: [outlineView(\_:child:ofItem:)](nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md), [outlineView(\_:isItemExpandable:)](nsoutlineviewdatasource/outlineview%28__isitemexpandable_%29.md), [outlineView(\_:numberOfChildrenOfItem:)](nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md), and [outlineView(\_:objectValueFor:byItem:)](nsoutlineviewdatasource/outlineview%28__objectvaluefor_byitem_%29.md). Applications that acquire their data using Cocoa bindings do not need to implement these methods.

Similarly, when using conventional data sources , if you want to allow the user to edit values, you must implement [outlineView(\_:setObjectValue:for:byItem:)](nsoutlineviewdatasource/outlineview%28__setobjectvalue_for_byitem_%29.md). When these methods are invoked by the outline view, `nil` as the `item` refers to the “root” item. `NSOutlineView` requires that each item in the outline view be unique. In order for the collapsed state of an outline view to remain consistent between reloads you must always return the same object for an item. When using Cocoa bindings to provide outline view content, there is no requirement to implement this method.

> **Note**

>  Some of the methods in this `protocol`, such as [outlineView(\_:child:ofItem:)](nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md) and [outlineView(\_:numberOfChildrenOfItem:)](nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md) along with other methods that return data, are called very frequently, so they must be efficient.

## Topics

### Instance Methods

- [outlineView(\_:acceptDrop:item:childIndex:)](nsoutlineviewdatasource/outlineview%28__acceptdrop_item_childindex_%29.md): Returns a Boolean value that indicates whether a drop operation was successful.
- [outlineView(\_:child:ofItem:)](nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md): Returns the child item at the specified index of a given item.
- [outlineView(\_:draggingSession:endedAt:operation:)](nsoutlineviewdatasource/outlineview%28__draggingsession_endedat_operation_%29.md): Implement this method to know when the given dragging session has ended.
- [outlineView(\_:draggingSession:willBeginAt:forItems:)](nsoutlineviewdatasource/outlineview%28__draggingsession_willbeginat_foritems_%29.md): Implement this method know when the given dragging session is about to begin and potentially modify the dragging session.
- [outlineView(\_:isItemExpandable:)](nsoutlineviewdatasource/outlineview%28__isitemexpandable_%29.md): Returns a Boolean value that indicates whether the a given item is expandable.
- [outlineView(\_:itemForPersistentObject:)](nsoutlineviewdatasource/outlineview%28__itemforpersistentobject_%29.md): Invoked by `outlineView` to return the item for the archived `object`.
- [outlineView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItems:)](nsoutlineviewdatasource/outlineview%28__namesofpromisedfilesdroppedatdestination_fordraggeditems_%29.md): Deprecated. Returns an array of filenames for the created files that the receiver promises to create.
- [outlineView(\_:numberOfChildrenOfItem:)](nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md): Returns the number of child items encompassed by a given item.
- [outlineView(\_:objectValueFor:byItem:)](nsoutlineviewdatasource/outlineview%28__objectvaluefor_byitem_%29.md): Invoked by `outlineView` to return the data object associated with the specified `item`.
- [outlineView(\_:pasteboardWriterForItem:)](nsoutlineviewdatasource/outlineview%28__pasteboardwriterforitem_%29.md): Implement this method to enable the table to be an `NSDraggingSource` that supports dragging multiple items.
- [outlineView(\_:persistentObjectForItem:)](nsoutlineviewdatasource/outlineview%28__persistentobjectforitem_%29.md): Invoked by `outlineView` to return an archived object for `item`.
- [outlineView(\_:setObjectValue:for:byItem:)](nsoutlineviewdatasource/outlineview%28__setobjectvalue_for_byitem_%29.md): Set the data object for a given item in a given column.
- [outlineView(\_:sortDescriptorsDidChange:)](nsoutlineviewdatasource/outlineview%28__sortdescriptorsdidchange_%29.md): Invoked by an outline view to notify the data source that the descriptors changed and the data may need to be resorted.
- [outlineView(\_:updateDraggingItemsForDrag:)](nsoutlineviewdatasource/outlineview%28__updatedraggingitemsfordrag_%29.md): Implement this method to enable the table to update dragging items as they are dragged over the view.
- [outlineView(\_:validateDrop:proposedItem:proposedChildIndex:)](nsoutlineviewdatasource/outlineview%28__validatedrop_proposeditem_proposedchildindex_%29.md): Used by an outline view to determine a valid drop target.
- [outlineView(\_:writeItems:to:)](nsoutlineviewdatasource/outlineview%28__writeitems_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Management

- [NSOutlineViewDelegate](nsoutlineviewdelegate.md): A set of optional methods implemented by delegates of [NSOutlineView](nsoutlineview.md) objects.

# NSOutlineViewDataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that an outline view calls to retrieve data and information about it from the data source delegate, and—optionally—to update data values.

## Declaration

```objectivec
@protocol NSOutlineViewDataSource <NSObject>
```

<a id="overview"></a>

## Overview

[NSOutlineView](nsoutlineview.md) objects support a data source delegate in addition to the regular delegate object.

All the methods in the [NSOutlineViewDataSource](nsoutlineviewdatasource.md) protocol are marked as `@optional`. While this is true, there are cases were you must implement some methods to achieve required functionality, specifically when working with conventional data sources rather than data that is provided by Cocoa bindings.

<a id="Required-and-Optional-Methods-Using-Programmatic-Conventions-and-Cocoa-Bindings"></a>

### Required and Optional Methods Using Programmatic Conventions and Cocoa Bindings

If you are using conventional data sources for content you must implement the basic methods that provide the outline view with data: [outlineView:child:ofItem:](nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md), [outlineView:isItemExpandable:](nsoutlineviewdatasource/outlineview%28__isitemexpandable_%29.md), [outlineView:numberOfChildrenOfItem:](nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md), and [outlineView:objectValueForTableColumn:byItem:](nsoutlineviewdatasource/outlineview%28__objectvaluefor_byitem_%29.md). Applications that acquire their data using Cocoa bindings do not need to implement these methods.

Similarly, when using conventional data sources , if you want to allow the user to edit values, you must implement [outlineView:setObjectValue:forTableColumn:byItem:](nsoutlineviewdatasource/outlineview%28__setobjectvalue_for_byitem_%29.md). When these methods are invoked by the outline view, `nil` as the `item` refers to the “root” item. `NSOutlineView` requires that each item in the outline view be unique. In order for the collapsed state of an outline view to remain consistent between reloads you must always return the same object for an item. When using Cocoa bindings to provide outline view content, there is no requirement to implement this method.

> **Note**

>  Some of the methods in this `protocol`, such as [outlineView:child:ofItem:](nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md) and [outlineView:numberOfChildrenOfItem:](nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md) along with other methods that return data, are called very frequently, so they must be efficient.

## Topics

### Instance Methods

- [outlineView:acceptDrop:item:childIndex:](nsoutlineviewdatasource/outlineview%28__acceptdrop_item_childindex_%29.md): Returns a Boolean value that indicates whether a drop operation was successful.
- [outlineView:child:ofItem:](nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md): Returns the child item at the specified index of a given item.
- [outlineView:draggingSession:endedAtPoint:operation:](nsoutlineviewdatasource/outlineview%28__draggingsession_endedat_operation_%29.md): Implement this method to know when the given dragging session has ended.
- [outlineView:draggingSession:willBeginAtPoint:forItems:](nsoutlineviewdatasource/outlineview%28__draggingsession_willbeginat_foritems_%29.md): Implement this method know when the given dragging session is about to begin and potentially modify the dragging session.
- [outlineView:isItemExpandable:](nsoutlineviewdatasource/outlineview%28__isitemexpandable_%29.md): Returns a Boolean value that indicates whether the a given item is expandable.
- [outlineView:itemForPersistentObject:](nsoutlineviewdatasource/outlineview%28__itemforpersistentobject_%29.md): Invoked by `outlineView` to return the item for the archived `object`.
- [outlineView:namesOfPromisedFilesDroppedAtDestination:forDraggedItems:](nsoutlineviewdatasource/outlineview%28__namesofpromisedfilesdroppedatdestination_fordraggeditems_%29.md): Deprecated. Returns an array of filenames for the created files that the receiver promises to create.
- [outlineView:numberOfChildrenOfItem:](nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md): Returns the number of child items encompassed by a given item.
- [outlineView:objectValueForTableColumn:byItem:](nsoutlineviewdatasource/outlineview%28__objectvaluefor_byitem_%29.md): Invoked by `outlineView` to return the data object associated with the specified `item`.
- [outlineView:pasteboardWriterForItem:](nsoutlineviewdatasource/outlineview%28__pasteboardwriterforitem_%29.md): Implement this method to enable the table to be an `NSDraggingSource` that supports dragging multiple items.
- [outlineView:persistentObjectForItem:](nsoutlineviewdatasource/outlineview%28__persistentobjectforitem_%29.md): Invoked by `outlineView` to return an archived object for `item`.
- [outlineView:setObjectValue:forTableColumn:byItem:](nsoutlineviewdatasource/outlineview%28__setobjectvalue_for_byitem_%29.md): Set the data object for a given item in a given column.
- [outlineView:sortDescriptorsDidChange:](nsoutlineviewdatasource/outlineview%28__sortdescriptorsdidchange_%29.md): Invoked by an outline view to notify the data source that the descriptors changed and the data may need to be resorted.
- [outlineView:updateDraggingItemsForDrag:](nsoutlineviewdatasource/outlineview%28__updatedraggingitemsfordrag_%29.md): Implement this method to enable the table to update dragging items as they are dragged over the view.
- [outlineView:validateDrop:proposedItem:proposedChildIndex:](nsoutlineviewdatasource/outlineview%28__validatedrop_proposeditem_proposedchildindex_%29.md): Used by an outline view to determine a valid drop target.
- [outlineView:writeItems:toPasteboard:](nsoutlineviewdatasource/outlineview%28__writeitems_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Management

- [NSOutlineViewDelegate](nsoutlineviewdelegate.md): A set of optional methods implemented by delegates of [NSOutlineView](nsoutlineview.md) objects.
