> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingsource](https://developer.apple.com/documentation/appkit/nsdraggingsource)

# NSDraggingSource (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that are implemented by the source object in a dragging session.

## Declaration

```swift
protocol NSDraggingSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

In macOS 10.7 and later `NSDraggingSource` is now a formal protocol and has an updated interface. The OS X v10.6 behavior has been retained, but will be dropped in a future version of the operating system. The methods that are to be deprecated are marked as such.

## Topics

### Dragging Session Operation

- [draggingSession(\_:sourceOperationMaskFor:)](nsdraggingsource/draggingsession%28__sourceoperationmaskfor_%29.md): Declares the types of operations the source allows to be performed.

### Dragging Session Locations

- [draggingSession(\_:willBeginAt:)](nsdraggingsource/draggingsession%28__willbeginat_%29.md): Invoked when the drag will begin.
- [draggingSession(\_:movedTo:)](nsdraggingsource/draggingsession%28__movedto_%29.md): Invoked when the drag moves on the screen.
- [draggingSession(\_:endedAt:operation:)](nsdraggingsource/draggingsession%28__endedat_operation_%29.md): Invoked when the dragging session has completed.

### Dragging Session Modifier Keys

- [ignoreModifierKeys(for:)](nsdraggingsource/ignoremodifierkeys%28for_%29.md): Returns whether the modifier keys will be ignored for this dragging session.

### Dragging Options

- [namesOfPromisedFilesDropped(atDestination:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/namesofpromisedfilesdropped%28atdestination:%29): Deprecated. Returns the names of the files that the receiver promises to create at a specified location.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSCollectionView](nscollectionview.md)
- [NSOutlineView](nsoutlineview.md)
- [NSTableView](nstableview.md)
- [NSTextView](nstextview.md)

## See Also

### Related Documentation

- [Drag and Drop](drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.

### Drag Sources

- [NSDraggingItem](nsdraggingitem.md): A single dragged item within a dragging session.
- [NSDraggingSession](nsdraggingsession.md): An object that encapsulates a drag-and-drop action.
- [NSDraggingImageComponent](nsdraggingimagecomponent.md): A single object in a dragging item.

# NSDraggingSource (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that are implemented by the source object in a dragging session.

## Declaration

```objectivec
@protocol NSDraggingSource <NSObject>
```

<a id="overview"></a>

## Overview

In macOS 10.7 and later `NSDraggingSource` is now a formal protocol and has an updated interface. The OS X v10.6 behavior has been retained, but will be dropped in a future version of the operating system. The methods that are to be deprecated are marked as such.

## Topics

### Dragging Session Operation

- [draggingSession:sourceOperationMaskForDraggingContext:](nsdraggingsource/draggingsession%28__sourceoperationmaskfor_%29.md): Declares the types of operations the source allows to be performed.

### Dragging Session Locations

- [draggingSession:willBeginAtPoint:](nsdraggingsource/draggingsession%28__willbeginat_%29.md): Invoked when the drag will begin.
- [draggingSession:movedToPoint:](nsdraggingsource/draggingsession%28__movedto_%29.md): Invoked when the drag moves on the screen.
- [draggingSession:endedAtPoint:operation:](nsdraggingsource/draggingsession%28__endedat_operation_%29.md): Invoked when the dragging session has completed.

### Dragging Session Modifier Keys

- [ignoreModifierKeysForDraggingSession:](nsdraggingsource/ignoremodifierkeys%28for_%29.md): Returns whether the modifier keys will be ignored for this dragging session.

### Dragging Options

- [namesOfPromisedFilesDroppedAtDestination:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/namesofpromisedfilesdropped%28atdestination:%29): Deprecated. Returns the names of the files that the receiver promises to create at a specified location.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSCollectionView](nscollectionview.md)
- [NSTableView](nstableview.md)
- [NSTextView](nstextview.md)

## See Also

### Related Documentation

- [Drag and Drop](drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.

### Drag Sources

- [NSDraggingItem](nsdraggingitem.md): A single dragged item within a dragging session.
- [NSDraggingSession](nsdraggingsession.md): An object that encapsulates a drag-and-drop action.
- [NSDraggingImageComponent](nsdraggingimagecomponent.md): A single object in a dragging item.
