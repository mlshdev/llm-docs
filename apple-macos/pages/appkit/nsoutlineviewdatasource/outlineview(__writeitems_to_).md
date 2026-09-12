> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdatasource/outlineview(_:writeitems:to:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdatasource/outlineview(_:writeitems:to:))

# outlineView(\_:writeItems:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.15)

Returns a Boolean value that indicates whether a drag operation is allowed.

> Use -outlineView:pasteboardWriterForItem: instead

## Declaration

```swift
optional func outlineView(_ outlineView: NSOutlineView, writeItems items: [Any], to pasteboard: NSPasteboard) -> Bool
```

## Parameters

- `outlineView`: The outline view that invoked the method.
- `items`: An array of the items participating in the drag.
- `pasteboard`: The pasteboard to which to write the drag data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drag operation is allowed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Invoked by `outlineView` after it has been determined that a drag should begin, but before the drag has been started.

To refuse the drag, return [false](https://developer.apple.com/documentation/swift/false). To start a drag, return [true](https://developer.apple.com/documentation/swift/true) and place the drag data onto the `pboard` (data, owner, and so on). The drag image and other drag-related information will be set up and provided by the outline view once this call returns with [true](https://developer.apple.com/documentation/swift/true).

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
- [outlineView(\_:validateDrop:proposedItem:proposedChildIndex:)](outlineview%28__validatedrop_proposeditem_proposedchildindex_%29.md): Used by an outline view to determine a valid drop target.

# outlineView:writeItems:toPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.15)

Returns a Boolean value that indicates whether a drag operation is allowed.

> Use -outlineView:pasteboardWriterForItem: instead

## Declaration

```objectivec
- (BOOL) outlineView:(NSOutlineView *) outlineView writeItems:(NSArray *) items toPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `outlineView`: The outline view that invoked the method.
- `items`: An array of the items participating in the drag.
- `pasteboard`: The pasteboard to which to write the drag data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drag operation is allowed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Invoked by `outlineView` after it has been determined that a drag should begin, but before the drag has been started.

To refuse the drag, return [false](https://developer.apple.com/documentation/swift/false). To start a drag, return [true](https://developer.apple.com/documentation/swift/true) and place the drag data onto the `pboard` (data, owner, and so on). The drag image and other drag-related information will be set up and provided by the outline view once this call returns with [true](https://developer.apple.com/documentation/swift/true).

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
- [outlineView:validateDrop:proposedItem:proposedChildIndex:](outlineview%28__validatedrop_proposeditem_proposedchildindex_%29.md): Used by an outline view to determine a valid drop target.
