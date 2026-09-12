> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate)

# NSCollectionViewDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that you use to manage the behavior of a collection view.

## Declaration

```swift
protocol NSCollectionViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You use the methods of this protocol to facilitate the user-initiated selection and highlighting of items, to track changes to the collection view’s visual elements, and to implement drag and drop support. The methods of this protocol are optional, but for some features, you must implement specific methods to support the feature.

Implement the methods of this protocol in an object that you use to manage your collection view. Typically, you implement delegate support in the view controller or window controller that manages the collection view itself, but you can implement these methods in another object if you prefer. Assign your delegate object to the collection view either programmatically (by setting the value of the collection view’s [delegate](nscollectionview/delegate.md) property) or at design time in Interface Builder.

To implement drag and drop support in your collection view, implement the following methods:

- To support the dragging of content from the collection view, implement either the  [collectionView(\_:pasteboardWriterForItemAt:)](nscollectionviewdelegate/collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md) or [collectionView(\_:writeItemsAt:to:)](nscollectionviewdelegate/collectionview%28__writeitemsat_to_%29-23ozm.md) method.
- To support the dropping of content into the collection view, implement the [collectionView(\_:validateDrop:proposedIndexPath:dropOperation:)](nscollectionviewdelegate/collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md) and [collectionView(\_:acceptDrop:indexPath:dropOperation:)](nscollectionviewdelegate/collectionview%28__acceptdrop_indexpath_dropoperation_%29.md) methods.
- To support multi-image drag and drop, you must implement the [collectionView(\_:pasteboardWriterForItemAt:)](nscollectionviewdelegate/collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md) and [collectionView(\_:updateDraggingItemsForDrag:)](nscollectionviewdelegate/collectionview%28__updatedraggingitemsfordrag_%29.md) methods.

For more information about handling drag and drop operations, see [Drag and Drop Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DragandDrop/DragandDrop.html#//apple_ref/doc/uid/10000069i).

<a id="Legacy-Support"></a>

### Legacy Support

Before OS X 10.11, collection views supported only a single section of items organized in a grid layout. The drag and drop methods of this protocol include variants that take a single index or an [NSIndexSet](https://developer.apple.com/documentation/foundation/nsindexset) as a parameter. Although you can use those methods to implement your drag and drop support, it is recommended that you use the newer methods that take [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects instead.

## Topics

### Managing the Selection

- [collectionView(\_:shouldSelectItemsAt:)](nscollectionviewdelegate/collectionview%28__shouldselectitemsat_%29.md): Asks the delegate to approve the pending selection of items.
- [collectionView(\_:didSelectItemsAt:)](nscollectionviewdelegate/collectionview%28__didselectitemsat_%29.md): Notifies the delegate object that one or more items were selected.
- [collectionView(\_:shouldDeselectItemsAt:)](nscollectionviewdelegate/collectionview%28__shoulddeselectitemsat_%29.md): Asks the delegate object to approve the pending deselection of items.
- [collectionView(\_:didDeselectItemsAt:)](nscollectionviewdelegate/collectionview%28__diddeselectitemsat_%29.md): Notifies the delegate object that one or more items were deselected.

### Managing Item Highlighting

- [collectionView(\_:shouldChangeItemsAt:to:)](nscollectionviewdelegate/collectionview%28__shouldchangeitemsat_to_%29.md): Asks the delegate to approve the pending highlighting of the specified items.
- [collectionView(\_:didChangeItemsAt:to:)](nscollectionviewdelegate/collectionview%28__didchangeitemsat_to_%29.md): Notifies the delegate that the highlight state of the specified items changed.

### Tracking the Addition and Removal of Items

- [collectionView(\_:willDisplay:forRepresentedObjectAt:)](nscollectionviewdelegate/collectionview%28__willdisplay_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item is about to be displayed by the collection view.
- [collectionView(\_:didEndDisplaying:forRepresentedObjectAt:)](nscollectionviewdelegate/collectionview%28__didenddisplaying_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item was removed from the collection view.
- [collectionView(\_:willDisplaySupplementaryView:forElementKind:at:)](nscollectionviewdelegate/collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Notifies the delegate that the specified supplementary view is about to be displayed by the collection view.
- [collectionView(\_:didEndDisplayingSupplementaryView:forElementOfKind:at:)](nscollectionviewdelegate/collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Notifies the delegate that the specified supplementary view was removed from the collection view.

### Handling Layout Changes

- [collectionView(\_:transitionLayoutForOldLayout:newLayout:)](nscollectionviewdelegate/collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md): Returns the transition layout object to use when performing an animated change between different layouts.

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView(\_:canDragItemsAt:with:)](nscollectionviewdelegate/collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView(\_:pasteboardWriterForItemAt:)](nscollectionviewdelegate/collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView(\_:writeItemsAt:to:)](nscollectionviewdelegate/collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](nscollectionviewdelegate/collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](nscollectionviewdelegate/collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](nscollectionviewdelegate/collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:draggingSession:endedAt:dragOperation:)](nscollectionviewdelegate/collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView(\_:updateDraggingItemsForDrag:)](nscollectionviewdelegate/collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView(\_:validateDrop:proposedIndexPath:dropOperation:)](nscollectionviewdelegate/collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView(\_:acceptDrop:indexPath:dropOperation:)](nscollectionviewdelegate/collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.

### Legacy Collection View Support

These methods are called only on a collection view that has only one section. They are not called for collection views with two or more sections.

- [collectionView(\_:canDragItemsAt:with:)](nscollectionviewdelegate/collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView(\_:pasteboardWriterForItemAt:)](nscollectionviewdelegate/collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView(\_:writeItemsAt:to:)](nscollectionviewdelegate/collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView(\_:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAt:)](nscollectionviewdelegate/collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView(\_:draggingImageForItemsAt:with:offset:)](nscollectionviewdelegate/collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView(\_:draggingSession:willBeginAt:forItemsAt:)](nscollectionviewdelegate/collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView(\_:validateDrop:proposedIndex:dropOperation:)](nscollectionviewdelegate/collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView(\_:acceptDrop:index:dropOperation:)](nscollectionviewdelegate/collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md)

## See Also

### Data

- [NSCollectionViewDataSource](nscollectionviewdatasource.md): A set of methods that a data source object implements to provide the information and view objects that a collection view requires to present content.
- [NSCollectionViewDiffableDataSource](nscollectionviewdiffabledatasource-axww.md): The object you use to manage data and provide items for a collection view.
- [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshot-swift.struct.md): A representation of the state of the data in a view at a specific point in time.

# NSCollectionViewDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that you use to manage the behavior of a collection view.

## Declaration

```objectivec
@protocol NSCollectionViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

You use the methods of this protocol to facilitate the user-initiated selection and highlighting of items, to track changes to the collection view’s visual elements, and to implement drag and drop support. The methods of this protocol are optional, but for some features, you must implement specific methods to support the feature.

Implement the methods of this protocol in an object that you use to manage your collection view. Typically, you implement delegate support in the view controller or window controller that manages the collection view itself, but you can implement these methods in another object if you prefer. Assign your delegate object to the collection view either programmatically (by setting the value of the collection view’s [delegate](nscollectionview/delegate.md) property) or at design time in Interface Builder.

To implement drag and drop support in your collection view, implement the following methods:

- To support the dragging of content from the collection view, implement either the  [collectionView:pasteboardWriterForItemAtIndexPath:](nscollectionviewdelegate/collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md) or [collectionView:writeItemsAtIndexPaths:toPasteboard:](nscollectionviewdelegate/collectionview%28__writeitemsat_to_%29-23ozm.md) method.
- To support the dropping of content into the collection view, implement the [collectionView:validateDrop:proposedIndexPath:dropOperation:](nscollectionviewdelegate/collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md) and [collectionView:acceptDrop:indexPath:dropOperation:](nscollectionviewdelegate/collectionview%28__acceptdrop_indexpath_dropoperation_%29.md) methods.
- To support multi-image drag and drop, you must implement the [collectionView:pasteboardWriterForItemAtIndexPath:](nscollectionviewdelegate/collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md) and [collectionView:updateDraggingItemsForDrag:](nscollectionviewdelegate/collectionview%28__updatedraggingitemsfordrag_%29.md) methods.

For more information about handling drag and drop operations, see [Drag and Drop Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DragandDrop/DragandDrop.html#//apple_ref/doc/uid/10000069i).

<a id="Legacy-Support"></a>

### Legacy Support

Before OS X 10.11, collection views supported only a single section of items organized in a grid layout. The drag and drop methods of this protocol include variants that take a single index or an [NSIndexSet](https://developer.apple.com/documentation/foundation/nsindexset) as a parameter. Although you can use those methods to implement your drag and drop support, it is recommended that you use the newer methods that take [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects instead.

## Topics

### Managing the Selection

- [collectionView:shouldSelectItemsAtIndexPaths:](nscollectionviewdelegate/collectionview%28__shouldselectitemsat_%29.md): Asks the delegate to approve the pending selection of items.
- [collectionView:didSelectItemsAtIndexPaths:](nscollectionviewdelegate/collectionview%28__didselectitemsat_%29.md): Notifies the delegate object that one or more items were selected.
- [collectionView:shouldDeselectItemsAtIndexPaths:](nscollectionviewdelegate/collectionview%28__shoulddeselectitemsat_%29.md): Asks the delegate object to approve the pending deselection of items.
- [collectionView:didDeselectItemsAtIndexPaths:](nscollectionviewdelegate/collectionview%28__diddeselectitemsat_%29.md): Notifies the delegate object that one or more items were deselected.

### Managing Item Highlighting

- [collectionView:shouldChangeItemsAtIndexPaths:toHighlightState:](nscollectionviewdelegate/collectionview%28__shouldchangeitemsat_to_%29.md): Asks the delegate to approve the pending highlighting of the specified items.
- [collectionView:didChangeItemsAtIndexPaths:toHighlightState:](nscollectionviewdelegate/collectionview%28__didchangeitemsat_to_%29.md): Notifies the delegate that the highlight state of the specified items changed.

### Tracking the Addition and Removal of Items

- [collectionView:willDisplayItem:forRepresentedObjectAtIndexPath:](nscollectionviewdelegate/collectionview%28__willdisplay_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item is about to be displayed by the collection view.
- [collectionView:didEndDisplayingItem:forRepresentedObjectAtIndexPath:](nscollectionviewdelegate/collectionview%28__didenddisplaying_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item was removed from the collection view.
- [collectionView:willDisplaySupplementaryView:forElementKind:atIndexPath:](nscollectionviewdelegate/collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Notifies the delegate that the specified supplementary view is about to be displayed by the collection view.
- [collectionView:didEndDisplayingSupplementaryView:forElementOfKind:atIndexPath:](nscollectionviewdelegate/collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Notifies the delegate that the specified supplementary view was removed from the collection view.

### Handling Layout Changes

- [collectionView:transitionLayoutForOldLayout:newLayout:](nscollectionviewdelegate/collectionview%28__transitionlayoutforoldlayout_newlayout_%29.md): Returns the transition layout object to use when performing an animated change between different layouts.

### Drag and Drop Support

- [Supporting Collection View Drag and Drop Through File Promises](supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [collectionView:canDragItemsAtIndexPaths:withEvent:](nscollectionviewdelegate/collectionview%28__candragitemsat_with_%29-49wix.md): Returns a Boolean indicating whether a drag operation involving the specified items can begin.
- [collectionView:pasteboardWriterForItemAtIndexPath:](nscollectionviewdelegate/collectionview%28__pasteboardwriterforitemat_%29-5eyyl.md): Provides the pasteboard writer for the item at the specified index path.
- [collectionView:writeItemsAtIndexPaths:toPasteboard:](nscollectionviewdelegate/collectionview%28__writeitemsat_to_%29-23ozm.md): Deprecated. Places the data for the drag operation on the pasteboard.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexPaths:](nscollectionviewdelegate/collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-6yag4.md): Deprecated. Returns the names of the promised files that you created for a drag operation.
- [collectionView:draggingImageForItemsAtIndexPaths:withEvent:offset:](nscollectionviewdelegate/collectionview%28__draggingimageforitemsat_with_offset_%29-898js.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexPaths:](nscollectionviewdelegate/collectionview%28__draggingsession_willbeginat_foritemsat_%29-68x2y.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:draggingSession:endedAtPoint:dragOperation:](nscollectionviewdelegate/collectionview%28__draggingsession_endedat_dragoperation_%29.md): Notifies your delegate that a drag session ended.
- [collectionView:updateDraggingItemsForDrag:](nscollectionviewdelegate/collectionview%28__updatedraggingitemsfordrag_%29.md): Asks your delegate to update the dragging items during a drag operation.
- [collectionView:validateDrop:proposedIndexPath:dropOperation:](nscollectionviewdelegate/collectionview%28__validatedrop_proposedindexpath_dropoperation_%29.md): Validates whether a drop operation is possible at the specified location.
- [collectionView:acceptDrop:indexPath:dropOperation:](nscollectionviewdelegate/collectionview%28__acceptdrop_indexpath_dropoperation_%29.md): Incorporates the dropped content into the collection view.

### Legacy Collection View Support

These methods are called only on a collection view that has only one section. They are not called for collection views with two or more sections.

- [collectionView:canDragItemsAtIndexes:withEvent:](nscollectionviewdelegate/collectionview%28__candragitemsat_with_%29-39rjh.md): Returns a Boolean indicating whether the collection view can begin dragging the specified items.
- [collectionView:pasteboardWriterForItemAtIndex:](nscollectionviewdelegate/collectionview%28__pasteboardwriterforitemat_%29-7ldvs.md): Provides the pasteboard writer for the item at the specified index
- [collectionView:writeItemsAtIndexes:toPasteboard:](nscollectionviewdelegate/collectionview%28__writeitemsat_to_%29-a1lk.md): Deprecated. Invoked after it has been determined that a drag should begin, but before the drag has been started.
- [collectionView:namesOfPromisedFilesDroppedAtDestination:forDraggedItemsAtIndexes:](nscollectionviewdelegate/collectionview%28__namesofpromisedfilesdroppedatdestination_fordraggeditemsat_%29-wwec.md): Deprecated. Invoked to return an array of filenames that the receiver promises to create.
- [collectionView:draggingImageForItemsAtIndexes:withEvent:offset:](nscollectionviewdelegate/collectionview%28__draggingimageforitemsat_with_offset_%29-4yvk5.md): Creates and returns a drag image to represent the specified items during a drag.
- [collectionView:draggingSession:willBeginAtPoint:forItemsAtIndexes:](nscollectionviewdelegate/collectionview%28__draggingsession_willbeginat_foritemsat_%29-cpuq.md): Notifies your delegate that a drag session is about to begin.
- [collectionView:validateDrop:proposedIndex:dropOperation:](nscollectionviewdelegate/collectionview%28__validatedrop_proposedindex_dropoperation_%29.md): Validates the specified location to see if it is a valid drop target.
- [collectionView:acceptDrop:index:dropOperation:](nscollectionviewdelegate/collectionview%28__acceptdrop_index_dropoperation_%29.md): Invoked when the mouse is released over a collection view that previously allowed a drop.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md)

## See Also

### Data

- [NSCollectionViewDataSource](nscollectionviewdatasource.md): A set of methods that a data source object implements to provide the information and view objects that a collection view requires to present content.
- [NSCollectionViewDiffableDataSource](nscollectionviewdiffabledatasourcereference.md): The object you use to manage data and provide items for a collection view.
- [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshotreference.md): A representation of the state of the data in a view at a specific point in time.
