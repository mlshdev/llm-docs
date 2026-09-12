> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcellprotocol](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol)

# NSTextAttachmentCellProtocol (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.

## Declaration

```swift
protocol NSTextAttachmentCellProtocol : NSObjectProtocol
```

<a id="overview"></a>

## Overview

With the exceptions of [cellBaselineOffset()](nstextattachmentcellprotocol/cellbaselineoffset%28%29.md), [attachment](nstextattachmentcellprotocol/attachment.md), and [attachment](nstextattachmentcellprotocol/attachment.md), all of these methods are implemented by the [NSCell](nscell.md) class.For general information on text attachments, see [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) and [NSTextView](nstextview.md).

## Topics

### Setting the attachment

- [attachment](nstextattachmentcellprotocol/attachment.md): Returns the text attachment object that owns the cell.
- [attachment](nstextattachmentcellprotocol/attachment.md): Returns the text attachment object that owns the cell.

### Drawing the cell contents

- [draw(withFrame:in:)](nstextattachmentcellprotocol/draw%28withframe_in_%29.md): Draws the cell’s image in the specified rectangle of the currently focused view.
- [draw(withFrame:in:characterIndex:)](nstextattachmentcellprotocol/draw%28withframe_in_characterindex_%29.md): Draws the cell’s image at the specified index point in the view.
- [draw(withFrame:in:characterIndex:layoutManager:)](nstextattachmentcellprotocol/draw%28withframe_in_characterindex_layoutmanager_%29.md): Draws the cell’s image using the specified layout manager.
- [highlight(\_:withFrame:in:)](nstextattachmentcellprotocol/highlight%28__withframe_in_%29.md): Draws the receiver’s image with optional highlighting.

### Providing the cell metrics

- [cellSize()](nstextattachmentcellprotocol/cellsize%28%29.md): Returns the size of the attachment’s icon.
- [cellBaselineOffset()](nstextattachmentcellprotocol/cellbaselineoffset%28%29.md): Returns the text position where you draw the attachment cell’s image, relative to the current point established in the glyph layout.
- [cellFrame(for:proposedLineFragment:glyphPosition:characterIndex:)](nstextattachmentcellprotocol/cellframe%28for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the frame of the cell to draw at the specified position in a text container.

### Responding to mouse events

- [wantsToTrackMouse()](nstextattachmentcellprotocol/wantstotrackmouse%28%29.md): Returns a Boolean value that indicates whether the attachment handles mouse events occurring over its image.
- [wantsToTrackMouse(for:in:of:atCharacterIndex:)](nstextattachmentcellprotocol/wantstotrackmouse%28for_in_of_atcharacterindex_%29.md): Allows an attachment to specify the events for which it tracks the mouse.
- [trackMouse(with:in:of:untilMouseUp:)](nstextattachmentcellprotocol/trackmouse%28with_in_of_untilmouseup_%29.md): Handles a mouse-down event on the cell’s image, and optionally waits until a mouse-up event
- [trackMouse(with:in:of:atCharacterIndex:untilMouseUp:)](nstextattachmentcellprotocol/trackmouse%28with_in_of_atcharacterindex_untilmouseup_%29.md): Handles a mouse-down event on the image at the specified character position.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSTextAttachmentViewProviderReusePolicy](nstextattachmentviewproviderreusepolicy.md)
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.

# NSTextAttachmentCell (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.

## Declaration

```objectivec
@protocol NSTextAttachmentCell <NSObject>
```

<a id="overview"></a>

## Overview

With the exceptions of [cellBaselineOffset](nstextattachmentcellprotocol/cellbaselineoffset%28%29.md), [attachment](nstextattachmentcellprotocol/attachment.md), and [attachment](nstextattachmentcellprotocol/attachment.md), all of these methods are implemented by the [NSCell](nscell.md) class.For general information on text attachments, see [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) and [NSTextView](nstextview.md).

## Topics

### Setting the attachment

- [attachment](nstextattachmentcellprotocol/attachment.md): Returns the text attachment object that owns the cell.
- [attachment](nstextattachmentcellprotocol/attachment.md): Returns the text attachment object that owns the cell.

### Drawing the cell contents

- [drawWithFrame:inView:](nstextattachmentcellprotocol/draw%28withframe_in_%29.md): Draws the cell’s image in the specified rectangle of the currently focused view.
- [drawWithFrame:inView:characterIndex:](nstextattachmentcellprotocol/draw%28withframe_in_characterindex_%29.md): Draws the cell’s image at the specified index point in the view.
- [drawWithFrame:inView:characterIndex:layoutManager:](nstextattachmentcellprotocol/draw%28withframe_in_characterindex_layoutmanager_%29.md): Draws the cell’s image using the specified layout manager.
- [highlight:withFrame:inView:](nstextattachmentcellprotocol/highlight%28__withframe_in_%29.md): Draws the receiver’s image with optional highlighting.

### Providing the cell metrics

- [cellSize](nstextattachmentcellprotocol/cellsize%28%29.md): Returns the size of the attachment’s icon.
- [cellBaselineOffset](nstextattachmentcellprotocol/cellbaselineoffset%28%29.md): Returns the text position where you draw the attachment cell’s image, relative to the current point established in the glyph layout.
- [cellFrameForTextContainer:proposedLineFragment:glyphPosition:characterIndex:](nstextattachmentcellprotocol/cellframe%28for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the frame of the cell to draw at the specified position in a text container.

### Responding to mouse events

- [wantsToTrackMouse](nstextattachmentcellprotocol/wantstotrackmouse%28%29.md): Returns a Boolean value that indicates whether the attachment handles mouse events occurring over its image.
- [wantsToTrackMouseForEvent:inRect:ofView:atCharacterIndex:](nstextattachmentcellprotocol/wantstotrackmouse%28for_in_of_atcharacterindex_%29.md): Allows an attachment to specify the events for which it tracks the mouse.
- [trackMouse:inRect:ofView:untilMouseUp:](nstextattachmentcellprotocol/trackmouse%28with_in_of_untilmouseup_%29.md): Handles a mouse-down event on the cell’s image, and optionally waits until a mouse-up event
- [trackMouse:inRect:ofView:atCharacterIndex:untilMouseUp:](nstextattachmentcellprotocol/trackmouse%28with_in_of_atcharacterindex_untilmouseup_%29.md): Handles a mouse-down event on the image at the specified character position.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSTextAttachmentViewProviderReusePolicy](nstextattachmentviewproviderreusepolicy.md)
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.
