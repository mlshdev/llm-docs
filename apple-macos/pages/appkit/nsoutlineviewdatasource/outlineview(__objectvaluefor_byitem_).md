> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdatasource/outlineview(_:objectvaluefor:byitem:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdatasource/outlineview(_:objectvaluefor:byitem:))

# outlineView(\_:objectValueFor:byItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked by `outlineView` to return the data object associated with the specified `item`.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, objectValueFor tableColumn: NSTableColumn?, byItem item: Any?) -> Any?
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: A column in `outlineView`.
- `item`: An item in the data source in the specified `tableColumn` of the view.

<a id="Discussion"></a>

## Discussion

The item is located in the specified `tableColumn` of the view.

> **Important**

>  While this method is marked as `@optional` in the protocol, **you must implement this method if you are not providing the data for the outline view using Cocoa bindings.**
>
> Do not call [reloadData()](../nstableview/reloaddata%28%29.md) from this method.

## See Also

### Instance Methods

- [outlineView(\_:acceptDrop:item:childIndex:)](outlineview%28__acceptdrop_item_childindex_%29.md): Returns a Boolean value that indicates whether a drop operation was successful.
- [outlineView(\_:child:ofItem:)](outlineview%28__child_ofitem_%29.md): Returns the child item at the specified index of a given item.
- [outlineView(\_:draggingSession:endedAt:operation:)](outlineview%28__draggingsession_endedat_operation_%29.md): Implement this method to know when the given dragging session has ended.
- [outlineView(\_:draggingSession:willBeginAt:forItems:)](outlineview%28__draggingsession_willbeginat_foritems_%29.md): Implement this method know when the given dragging session is about to begin and potentially modify the dragging session.
- [outlineView(\_:isItemExpandable:)](outlineview%28__isitemexpandable_%29.md): Returns a Boolean value that indicates whether the a given item is expandable.
- [outlineView(\_:itemForPersistentObject:)](outlineview%28__itemforpersistentobject_%29.md): Invoked by `outlineView` to return the item for the archived `object`.
- [outlineView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItems:)](outlineview%28__namesofpromisedfilesdroppedatdestination_fordraggeditems_%29.md): Deprecated. Returns an array of filenames for the created files that the receiver promises to create.
- [outlineView(\_:numberOfChildrenOfItem:)](outlineview%28__numberofchildrenofitem_%29.md): Returns the number of child items encompassed by a given item.
- [outlineView(\_:pasteboardWriterForItem:)](outlineview%28__pasteboardwriterforitem_%29.md): Implement this method to enable the table to be an `NSDraggingSource` that supports dragging multiple items.
- [outlineView(\_:persistentObjectForItem:)](outlineview%28__persistentobjectforitem_%29.md): Invoked by `outlineView` to return an archived object for `item`.
- [outlineView(\_:setObjectValue:for:byItem:)](outlineview%28__setobjectvalue_for_byitem_%29.md): Set the data object for a given item in a given column.
- [outlineView(\_:sortDescriptorsDidChange:)](outlineview%28__sortdescriptorsdidchange_%29.md): Invoked by an outline view to notify the data source that the descriptors changed and the data may need to be resorted.
- [outlineView(\_:updateDraggingItemsForDrag:)](outlineview%28__updatedraggingitemsfordrag_%29.md): Implement this method to enable the table to update dragging items as they are dragged over the view.
- [outlineView(\_:validateDrop:proposedItem:proposedChildIndex:)](outlineview%28__validatedrop_proposeditem_proposedchildindex_%29.md): Used by an outline view to determine a valid drop target.
- [outlineView(\_:writeItems:to:)](outlineview%28__writeitems_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.

# outlineView:objectValueForTableColumn:byItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked by `outlineView` to return the data object associated with the specified `item`.

## Declaration

```objectivec
- (id) outlineView:(NSOutlineView *) outlineView objectValueForTableColumn:(NSTableColumn *) tableColumn byItem:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: A column in `outlineView`.
- `item`: An item in the data source in the specified `tableColumn` of the view.

<a id="Discussion"></a>

## Discussion

The item is located in the specified `tableColumn` of the view.

> **Important**

>  While this method is marked as `@optional` in the protocol, **you must implement this method if you are not providing the data for the outline view using Cocoa bindings.**
>
> Do not call [reloadData](../nstableview/reloaddata%28%29.md) from this method.

## See Also

### Instance Methods

- [outlineView:acceptDrop:item:childIndex:](outlineview%28__acceptdrop_item_childindex_%29.md): Returns a Boolean value that indicates whether a drop operation was successful.
- [outlineView:child:ofItem:](outlineview%28__child_ofitem_%29.md): Returns the child item at the specified index of a given item.
- [outlineView:draggingSession:endedAtPoint:operation:](outlineview%28__draggingsession_endedat_operation_%29.md): Implement this method to know when the given dragging session has ended.
- [outlineView:draggingSession:willBeginAtPoint:forItems:](outlineview%28__draggingsession_willbeginat_foritems_%29.md): Implement this method know when the given dragging session is about to begin and potentially modify the dragging session.
- [outlineView:isItemExpandable:](outlineview%28__isitemexpandable_%29.md): Returns a Boolean value that indicates whether the a given item is expandable.
- [outlineView:itemForPersistentObject:](outlineview%28__itemforpersistentobject_%29.md): Invoked by `outlineView` to return the item for the archived `object`.
- [outlineView:namesOfPromisedFilesDroppedAtDestination:forDraggedItems:](outlineview%28__namesofpromisedfilesdroppedatdestination_fordraggeditems_%29.md): Deprecated. Returns an array of filenames for the created files that the receiver promises to create.
- [outlineView:numberOfChildrenOfItem:](outlineview%28__numberofchildrenofitem_%29.md): Returns the number of child items encompassed by a given item.
- [outlineView:pasteboardWriterForItem:](outlineview%28__pasteboardwriterforitem_%29.md): Implement this method to enable the table to be an `NSDraggingSource` that supports dragging multiple items.
- [outlineView:persistentObjectForItem:](outlineview%28__persistentobjectforitem_%29.md): Invoked by `outlineView` to return an archived object for `item`.
- [outlineView:setObjectValue:forTableColumn:byItem:](outlineview%28__setobjectvalue_for_byitem_%29.md): Set the data object for a given item in a given column.
- [outlineView:sortDescriptorsDidChange:](outlineview%28__sortdescriptorsdidchange_%29.md): Invoked by an outline view to notify the data source that the descriptors changed and the data may need to be resorted.
- [outlineView:updateDraggingItemsForDrag:](outlineview%28__updatedraggingitemsfordrag_%29.md): Implement this method to enable the table to update dragging items as they are dragged over the view.
- [outlineView:validateDrop:proposedItem:proposedChildIndex:](outlineview%28__validatedrop_proposeditem_proposedchildindex_%29.md): Used by an outline view to determine a valid drop target.
- [outlineView:writeItems:toPasteboard:](outlineview%28__writeitems_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
