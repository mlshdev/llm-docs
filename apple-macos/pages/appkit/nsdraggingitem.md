> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingitem](https://developer.apple.com/documentation/appkit/nsdraggingitem)

# NSDraggingItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

A single dragged item within a dragging session.

## Declaration

```swift
class NSDraggingItem
```

<a id="overview"></a>

## Overview

[NSDraggingItem](nsdraggingitem.md) objects have extremely limited lifetimes. Don’t retain these items because changing outside of the prescribed lifetimes has no impact on the drag.

When you call the [NSDraggingSession](nsdraggingsession.md) method [beginDraggingSession(with:event:source:)](nsview/begindraggingsession%28with_event_source_%29.md), the system immediately consumes the dragging items that pass to the method, and doesn’t retain them. Any further changes to the dragging item associated with the returned [NSDraggingSession](nsdraggingsession.md) must occur with the enumeration method [enumerateDraggingItems(options:for:classes:searchOptions:using:)](nsdraggingsession/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md). When enumerating, the system creates `NSDraggingItem` instances right before giving them to the enumeration block. After returning from the block, the dragging item is no longer valid.

## Topics

### Initializing a dragging item

- [init(pasteboardWriter:)](nsdraggingitem/init%28pasteboardwriter_%29.md): Creates and returns a dragging item using the specified content.

### Dragging frame

- [setDraggingFrame(\_:contents:)](nsdraggingitem/setdraggingframe%28__contents_%29.md): Sets the item’s dragging frame and contents.
- [draggingFrame](nsdraggingitem/draggingframe.md): The frame of the dragging item.

### Drag image components

- [imageComponents](nsdraggingitem/imagecomponents.md): An array of dragging image components to use to create the drag image.
- [imageComponentsProvider](nsdraggingitem/imagecomponentsprovider.md): An array of blocks that provide the dragging image components.
- [NSDraggingItem.ImageComponentKey](nsdraggingitem/imagecomponentkey.md): Keys that identify components of a dragging image.
- [item](nsdraggingitem/item.md): The pasteboard reader or writer object dependent on the context where you use the dragging item.

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
- [NSDraggingSession](nsdraggingsession.md): An object that encapsulates a drag-and-drop action.
- [NSDraggingImageComponent](nsdraggingimagecomponent.md): A single object in a dragging item.

# NSDraggingItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

A single dragged item within a dragging session.

## Declaration

```objectivec
@interface NSDraggingItem : NSObject
```

<a id="overview"></a>

## Overview

[NSDraggingItem](nsdraggingitem.md) objects have extremely limited lifetimes. Don’t retain these items because changing outside of the prescribed lifetimes has no impact on the drag.

When you call the [NSDraggingSession](nsdraggingsession.md) method [beginDraggingSessionWithItems:event:source:](nsview/begindraggingsession%28with_event_source_%29.md), the system immediately consumes the dragging items that pass to the method, and doesn’t retain them. Any further changes to the dragging item associated with the returned [NSDraggingSession](nsdraggingsession.md) must occur with the enumeration method [enumerateDraggingItemsWithOptions:forView:classes:searchOptions:usingBlock:](nsdraggingsession/enumeratedraggingitems%28options_for_classes_searchoptions_using_%29.md). When enumerating, the system creates `NSDraggingItem` instances right before giving them to the enumeration block. After returning from the block, the dragging item is no longer valid.

## Topics

### Initializing a dragging item

- [initWithPasteboardWriter:](nsdraggingitem/init%28pasteboardwriter_%29.md): Creates and returns a dragging item using the specified content.

### Dragging frame

- [setDraggingFrame:contents:](nsdraggingitem/setdraggingframe%28__contents_%29.md): Sets the item’s dragging frame and contents.
- [draggingFrame](nsdraggingitem/draggingframe.md): The frame of the dragging item.

### Drag image components

- [imageComponents](nsdraggingitem/imagecomponents.md): An array of dragging image components to use to create the drag image.
- [imageComponentsProvider](nsdraggingitem/imagecomponentsprovider.md): An array of blocks that provide the dragging image components.
- [NSDraggingImageComponentKey](nsdraggingitem/imagecomponentkey.md): Keys that identify components of a dragging image.
- [item](nsdraggingitem/item.md): The pasteboard reader or writer object dependent on the context where you use the dragging item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Drag Sources

- [NSDraggingSource](nsdraggingsource.md): A set of methods that are implemented by the source object in a dragging session.
- [NSDraggingSession](nsdraggingsession.md): An object that encapsulates a drag-and-drop action.
- [NSDraggingImageComponent](nsdraggingimagecomponent.md): A single object in a dragging item.
