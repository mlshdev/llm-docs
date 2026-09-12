> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdatasource/outlineview(_:draggingsession:endedat:operation:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdatasource/outlineview(_:draggingsession:endedat:operation:))

# outlineView(\_:draggingSession:endedAt:operation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implement this method to know when the given dragging session has ended.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, draggingSession session: NSDraggingSession, endedAt screenPoint: NSPoint, operation: NSDragOperation)
```

## Parameters

- `outlineView`: The outline view in which the drag began.
- `session`: The dragging session that ended.
- `screenPoint`: The point onscreen at which the drag ended.
- `operation`: A mask specifying the types of drag operations permitted by the dragging source.

<a id="Discussion"></a>

## Discussion

You can implement this optional delegate method to know when the dragging source operation ended at a specific location, such as the trash (by checking for an operation of [delete](../nsdragoperation/delete.md)).

## See Also

### Instance Methods

- [outlineView(\_:acceptDrop:item:childIndex:)](outlineview%28__acceptdrop_item_childindex_%29.md): Returns a Boolean value that indicates whether a drop operation was successful.
- [outlineView(\_:child:ofItem:)](outlineview%28__child_ofitem_%29.md): Returns the child item at the specified index of a given item.
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
- [outlineView(\_:validateDrop:proposedItem:proposedChildIndex:)](outlineview%28__validatedrop_proposeditem_proposedchildindex_%29.md): Used by an outline view to determine a valid drop target.
- [outlineView(\_:writeItems:to:)](outlineview%28__writeitems_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.

# outlineView:draggingSession:endedAtPoint:operation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implement this method to know when the given dragging session has ended.

## Declaration

```objectivec
- (void) outlineView:(NSOutlineView *) outlineView draggingSession:(NSDraggingSession *) session endedAtPoint:(NSPoint) screenPoint operation:(NSDragOperation) operation;
```

## Parameters

- `outlineView`: The outline view in which the drag began.
- `session`: The dragging session that ended.
- `screenPoint`: The point onscreen at which the drag ended.
- `operation`: A mask specifying the types of drag operations permitted by the dragging source.

<a id="Discussion"></a>

## Discussion

You can implement this optional delegate method to know when the dragging source operation ended at a specific location, such as the trash (by checking for an operation of [NSDragOperationDelete](../nsdragoperation/delete.md)).

## See Also

### Instance Methods

- [outlineView:acceptDrop:item:childIndex:](outlineview%28__acceptdrop_item_childindex_%29.md): Returns a Boolean value that indicates whether a drop operation was successful.
- [outlineView:child:ofItem:](outlineview%28__child_ofitem_%29.md): Returns the child item at the specified index of a given item.
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
- [outlineView:validateDrop:proposedItem:proposedChildIndex:](outlineview%28__validatedrop_proposeditem_proposedchildindex_%29.md): Used by an outline view to determine a valid drop target.
- [outlineView:writeItems:toPasteboard:](outlineview%28__writeitems_to_%29.md): Deprecated. Returns a Boolean value that indicates whether a drag operation is allowed.
