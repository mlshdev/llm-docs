> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo](https://developer.apple.com/documentation/appkit/nsdragginginfo)

# NSDraggingInfo (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that supply information about a dragging session.

## Declaration

```swift
protocol NSDraggingInfo : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You invoke the [NSDraggingInfo](nsdragginginfo.md) protocol methods from within a class’s implementation of [NSDraggingDestination](nsdraggingdestination.md) methods. AppKit automatically passes an object that conforms to the [NSDraggingInfo](nsdragginginfo.md) protocol as the argument to each of the methods that [NSDraggingDestination](nsdraggingdestination.md) defines. Send [NSDraggingInfo](nsdragginginfo.md) messages to this object. You never need to create a class that implements the [NSDraggingInfo](nsdragginginfo.md) protocol.

## Topics

### Obtaining information about the dragging session

- [draggingPasteboard](nsdragginginfo/draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](nsdragginginfo/draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](nsdragginginfo/draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](nsdragginginfo/draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](nsdragginginfo/dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](nsdragginginfo/draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](nsdragginginfo/numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDropped(atDestination:)](nsdragginginfo/namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.

### Getting image information

- [draggedImageLocation](nsdragginginfo/draggedimagelocation.md): The current location of the dragged image’s origin, in the base coordinate system of the destination object’s window.
- [draggedImage](nsdragginginfo/draggedimage.md): Deprecated. The image that represents the dragging item.

### Sliding the image

- [slideDraggedImage(to:)](nsdragginginfo/slidedraggedimage%28to_%29.md): Slides the image to a specified location.
- [animatesToDestination](nsdragginginfo/animatestodestination.md): A Boolean value that indicates whether the dragging formation animates while the drag is over the destination.
- [draggingFormation](nsdragginginfo/draggingformation.md): The formation of the dragging items while the drag is over the destination.

### Enumerate dragged items

- [enumerateDraggingItems(options:for:classes:searchOptions:using:)](nsdragginginfo/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md): Enumerates through each dragging item.

### Implementing spring-loading support

- [springLoadingHighlight](nsdragginginfo/springloadinghighlight.md): A highlighting style for your app’s user interface to display during a spring-loading operation.
- [resetSpringLoading()](nsdragginginfo/resetspringloading%28%29.md): Resets a spring-loading operation to its initial state.

### Constants

- [NSDragOperation](nsdragoperation.md): A group of constants that represent which operations the dragging source can perform on dragging items.
- [NSDraggingItemEnumerationOptions](nsdraggingitemenumerationoptions.md): A group of constants that specify options to use when enumerating dragging items.
- [NSSpringLoadingHighlight](nsspringloadinghighlight.md): A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.
- [NSDraggingFormation](nsdraggingformation.md): Constants that control the visual format of multiple dragging items.
- [NSDraggingContext](nsdraggingcontext.md): Constants that specify whether a drag terminates within or outside the application.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Drop Targets

- [NSDraggingDestination](nsdraggingdestination.md): A set of methods that the destination object (or recipient) of a dragged image must implement.
- [NSSpringLoadingDestination](nsspringloadingdestination.md): A set of methods that the destination object (or recipient) of a dragged object can implement to support spring-loading.

# NSDraggingInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that supply information about a dragging session.

## Declaration

```objectivec
@protocol NSDraggingInfo <NSObject>
```

<a id="overview"></a>

## Overview

You invoke the [NSDraggingInfo](nsdragginginfo.md) protocol methods from within a class’s implementation of [NSDraggingDestination](nsdraggingdestination.md) methods. AppKit automatically passes an object that conforms to the [NSDraggingInfo](nsdragginginfo.md) protocol as the argument to each of the methods that [NSDraggingDestination](nsdraggingdestination.md) defines. Send [NSDraggingInfo](nsdragginginfo.md) messages to this object. You never need to create a class that implements the [NSDraggingInfo](nsdragginginfo.md) protocol.

## Topics

### Obtaining information about the dragging session

- [draggingPasteboard](nsdragginginfo/draggingpasteboard.md): The pasteboard object that holds the dragged data.
- [draggingSequenceNumber](nsdragginginfo/draggingsequencenumber.md): A number that uniquely identifies the dragging session.
- [draggingSource](nsdragginginfo/draggingsource.md): The source, or owner, of the dragged data.
- [draggingSourceOperationMask](nsdragginginfo/draggingsourceoperationmask.md): Information about the dragging operation and the data it contains.
- [draggingLocation](nsdragginginfo/dragginglocation.md): The current location of the mouse pointer in the base coordinate system of the destination object’s window.
- [draggingDestinationWindow](nsdragginginfo/draggingdestinationwindow.md): The destination window for the dragging operation.
- [numberOfValidItemsForDrop](nsdragginginfo/numberofvaliditemsfordrop.md): The number of valid items for a drop operation.
- [namesOfPromisedFilesDroppedAtDestination:](nsdragginginfo/namesofpromisedfilesdropped%28atdestination_%29.md): Deprecated. Sets the drop location for promised files and returns the names of the files that the receiver promises to create there.

### Getting image information

- [draggedImageLocation](nsdragginginfo/draggedimagelocation.md): The current location of the dragged image’s origin, in the base coordinate system of the destination object’s window.
- [draggedImage](nsdragginginfo/draggedimage.md): Deprecated. The image that represents the dragging item.

### Sliding the image

- [slideDraggedImageTo:](nsdragginginfo/slidedraggedimage%28to_%29.md): Slides the image to a specified location.
- [animatesToDestination](nsdragginginfo/animatestodestination.md): A Boolean value that indicates whether the dragging formation animates while the drag is over the destination.
- [draggingFormation](nsdragginginfo/draggingformation.md): The formation of the dragging items while the drag is over the destination.

### Enumerate dragged items

- [enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:](nsdragginginfo/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md): Enumerates through each dragging item.

### Implementing spring-loading support

- [springLoadingHighlight](nsdragginginfo/springloadinghighlight.md): A highlighting style for your app’s user interface to display during a spring-loading operation.
- [resetSpringLoading](nsdragginginfo/resetspringloading%28%29.md): Resets a spring-loading operation to its initial state.

### Constants

- [NSDragOperation](nsdragoperation.md): A group of constants that represent which operations the dragging source can perform on dragging items.
- [NSDraggingItemEnumerationOptions](nsdraggingitemenumerationoptions.md): A group of constants that specify options to use when enumerating dragging items.
- [NSSpringLoadingHighlight](nsspringloadinghighlight.md): A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.
- [NSDraggingFormation](nsdraggingformation.md): Constants that control the visual format of multiple dragging items.
- [NSDraggingContext](nsdraggingcontext.md): Constants that specify whether a drag terminates within or outside the application.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Drop Targets

- [NSDraggingDestination](nsdraggingdestination.md): A set of methods that the destination object (or recipient) of a dragged image must implement.
- [NSSpringLoadingDestination](nsspringloadingdestination.md): A set of methods that the destination object (or recipient) of a dragged object can implement to support spring-loading.
