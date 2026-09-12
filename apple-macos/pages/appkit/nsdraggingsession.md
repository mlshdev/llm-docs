> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingsession](https://developer.apple.com/documentation/appkit/nsdraggingsession)

# NSDraggingSession (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

An object that encapsulates a drag-and-drop action.

## Declaration

```swift
class NSDraggingSession
```

<a id="overview"></a>

## Overview

You start a new dragging session by calling [beginDraggingSession(with:event:source:)](nsview/begindraggingsession%28with_event_source_%29.md) or [beginDraggingSession(items:gesture:source:)](nsview/begindraggingsession%28items_gesture_source_%29.md) on an `NSView`. The method immediately returns, and the actual drag begins at the next turn of the run loop.

## Topics

### Dragging Pasteboard

- [draggingPasteboard](nsdraggingsession/draggingpasteboard.md): Returns the pasteboard object that contains the data being dragged.

### Dragging Visual Representation

- [animatesToStartingPositionsOnCancelOrFail](nsdraggingsession/animatestostartingpositionsoncancelorfail.md): Controls whether the dragging image animates back to its starting point on a cancelled or failed drag.
- [draggingFormation](nsdraggingsession/draggingformation.md): Controls the dragging formation when the drag is not over the source or a valid destination.

### Identifying the Dragging Session

- [draggingSequenceNumber](nsdraggingsession/draggingsequencenumber.md): Returns a number that uniquely identifies the dragging session.

### Enumerating Dragging Items

- [enumerateDraggingItems(options:for:classes:searchOptions:using:)](nsdraggingsession/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md): Enumerates through each dragging item.

### Dragging Session Location

- [draggingLocation](nsdraggingsession/dragginglocation.md): The current cursor location of the drag in screen coordinates.

### Dragging Item Location

- [draggingLeaderIndex](nsdraggingsession/draggingleaderindex.md): The index of the dragging item under the cursor.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Drag Sources

- [NSDraggingSource](nsdraggingsource.md): A set of methods that are implemented by the source object in a dragging session.
- [NSDraggingItem](nsdraggingitem.md): A single dragged item within a dragging session.
- [NSDraggingImageComponent](nsdraggingimagecomponent.md): A single object in a dragging item.

# NSDraggingSession (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

An object that encapsulates a drag-and-drop action.

## Declaration

```objectivec
@interface NSDraggingSession : NSObject
```

<a id="overview"></a>

## Overview

You start a new dragging session by calling [beginDraggingSessionWithItems:event:source:](nsview/begindraggingsession%28with_event_source_%29.md) or [beginDraggingSessionWithItems:gesture:source:](nsview/begindraggingsession%28items_gesture_source_%29.md) on an `NSView`. The method immediately returns, and the actual drag begins at the next turn of the run loop.

## Topics

### Dragging Pasteboard

- [draggingPasteboard](nsdraggingsession/draggingpasteboard.md): Returns the pasteboard object that contains the data being dragged.

### Dragging Visual Representation

- [animatesToStartingPositionsOnCancelOrFail](nsdraggingsession/animatestostartingpositionsoncancelorfail.md): Controls whether the dragging image animates back to its starting point on a cancelled or failed drag.
- [draggingFormation](nsdraggingsession/draggingformation.md): Controls the dragging formation when the drag is not over the source or a valid destination.

### Identifying the Dragging Session

- [draggingSequenceNumber](nsdraggingsession/draggingsequencenumber.md): Returns a number that uniquely identifies the dragging session.

### Enumerating Dragging Items

- [enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:](nsdraggingsession/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md): Enumerates through each dragging item.

### Dragging Session Location

- [draggingLocation](nsdraggingsession/dragginglocation.md): The current cursor location of the drag in screen coordinates.

### Dragging Item Location

- [draggingLeaderIndex](nsdraggingsession/draggingleaderindex.md): The index of the dragging item under the cursor.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Drag Sources

- [NSDraggingSource](nsdraggingsource.md): A set of methods that are implemented by the source object in a dragging session.
- [NSDraggingItem](nsdraggingitem.md): A single dragged item within a dragging session.
- [NSDraggingImageComponent](nsdraggingimagecomponent.md): A single object in a dragging item.
