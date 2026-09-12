> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcontainer](https://developer.apple.com/documentation/appkit/nstextattachmentcontainer)

# NSTextAttachmentContainer (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.11+

A set of methods that defines the interface to text attachment objects from a layout manager.

## Declaration

```swift
protocol NSTextAttachmentContainer : NSObjectProtocol
```

## Topics

### Getting the bounds

- [attachmentBounds(for:proposedLineFragment:glyphPosition:characterIndex:)](nstextattachmentcontainer/attachmentbounds%28for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the layout bounds of the text attachment to the layout manager.

### Getting the image

- [image(forBounds:textContainer:characterIndex:)](nstextattachmentcontainer/image%28forbounds_textcontainer_characterindex_%29.md): Returns the image object that the layout manager renders in the specified image bounds rectangle inside the text container.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextAttachment](nstextattachment.md)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSTextAttachmentViewProviderReusePolicy](nstextattachmentviewproviderreusepolicy.md)
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.
- [NSTextAttachmentCellProtocol](nstextattachmentcellprotocol.md): A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.

# NSTextAttachmentContainer (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.11+

A set of methods that defines the interface to text attachment objects from a layout manager.

## Declaration

```objectivec
@protocol NSTextAttachmentContainer <NSObject>
```

## Topics

### Getting the bounds

- [attachmentBoundsForTextContainer:proposedLineFragment:glyphPosition:characterIndex:](nstextattachmentcontainer/attachmentbounds%28for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the layout bounds of the text attachment to the layout manager.

### Getting the image

- [imageForBounds:textContainer:characterIndex:](nstextattachmentcontainer/image%28forbounds_textcontainer_characterindex_%29.md): Returns the image object that the layout manager renders in the specified image bounds rectangle inside the text container.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextAttachment](nstextattachment.md)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSTextAttachmentViewProviderReusePolicy](nstextattachmentviewproviderreusepolicy.md)
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.
- [NSTextAttachmentCell](nstextattachmentcellprotocol.md): A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.
