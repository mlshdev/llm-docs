> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdatasource/outlineview(_:validatedrop:proposeditem:proposedchildindex:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdatasource/outlineview(_:validatedrop:proposeditem:proposedchildindex:))

# outlineView(\_:validateDrop:proposedItem:proposedChildIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Used by an outline view to determine a valid drop target.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, validateDrop info: any NSDraggingInfo, proposedItem item: Any?, proposedChildIndex index: Int) -> NSDragOperation
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `info`: An object that contains more information about this dragging operation.
- `item`: The proposed parent.
- `index`: The proposed child location.

<a id="return-value"></a>

## Return Value

A value that indicates which dragging operation the data source will perform.

<a id="Discussion"></a>

## Discussion

Based on the mouse position, the outline view will suggest a proposed drop location. The data source may “retarget” a drop if desired by calling [setDropItem(\_:dropChildIndex:)](../nsoutlineview/setdropitem%28__dropchildindex_%29.md) and returning something other than `NSDragOperationNone`. You may choose to retarget for various reasons (for example, for better visual feedback when inserting into a sorted position).

Implementation of this method is optional.

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
- [outlineView(\_:objectValueFor:byItem:)](outlineview%28__objectvaluefor_byitem_%29.md): Invoked by `outlineView` to return the data object associated with the specified `item`.
- [outlineView(\_:pasteboardWriterForItem:)](outlineview%28__pasteboardwriterforitem_%29.md): Implement this method to enable the table to be an `NSDraggingSource` that supports dragging multiple items.
- [outlineView(\_:persistentObjectForItem:)](outlineview%28__persistentobjectforitem_%29.md): Invoked by `outlineView` to return an archived object for `item`.
- [outlineView(\_:setObjectValue:for:byItem:)](outlineview%28__setobjectvalue_for_byitem_%29.md): Set the data object for a given item in a given column.
- [outlineView(\_:sortDescriptorsDidChange:)](outlineview%28__sortdescriptorsdidchange_%29.md): Invoked by an outline view to notify the data source that the descriptors changed and the data may need to be resorted.
- [outlineView(\_:updateDraggingItemsForDrag:)](outlineview%28__updatedraggingitemsfordrag_%29.md): Implement this method to enable the table to update dragging items as they are dragged over the view.
- [outlineView(\_:writeItems:to:)](outlineview%28__writeitems_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.

# outlineView:validateDrop:proposedItem:proposedChildIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Used by an outline view to determine a valid drop target.

## Declaration

```objectivec
- (NSDragOperation) outlineView:(NSOutlineView *) outlineView validateDrop:(id<NSDraggingInfo>) info proposedItem:(id) item proposedChildIndex:(NSInteger) index;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `info`: An object that contains more information about this dragging operation.
- `item`: The proposed parent.
- `index`: The proposed child location.

<a id="return-value"></a>

## Return Value

A value that indicates which dragging operation the data source will perform.

<a id="Discussion"></a>

## Discussion

Based on the mouse position, the outline view will suggest a proposed drop location. The data source may “retarget” a drop if desired by calling [setDropItem:dropChildIndex:](../nsoutlineview/setdropitem%28__dropchildindex_%29.md) and returning something other than `NSDragOperationNone`. You may choose to retarget for various reasons (for example, for better visual feedback when inserting into a sorted position).

Implementation of this method is optional.

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
- [outlineView:objectValueForTableColumn:byItem:](outlineview%28__objectvaluefor_byitem_%29.md): Invoked by `outlineView` to return the data object associated with the specified `item`.
- [outlineView:pasteboardWriterForItem:](outlineview%28__pasteboardwriterforitem_%29.md): Implement this method to enable the table to be an `NSDraggingSource` that supports dragging multiple items.
- [outlineView:persistentObjectForItem:](outlineview%28__persistentobjectforitem_%29.md): Invoked by `outlineView` to return an archived object for `item`.
- [outlineView:setObjectValue:forTableColumn:byItem:](outlineview%28__setobjectvalue_for_byitem_%29.md): Set the data object for a given item in a given column.
- [outlineView:sortDescriptorsDidChange:](outlineview%28__sortdescriptorsdidchange_%29.md): Invoked by an outline view to notify the data source that the descriptors changed and the data may need to be resorted.
- [outlineView:updateDraggingItemsForDrag:](outlineview%28__updatedraggingitemsfordrag_%29.md): Implement this method to enable the table to update dragging items as they are dragged over the view.
- [outlineView:writeItems:toPasteboard:](outlineview%28__writeitems_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
