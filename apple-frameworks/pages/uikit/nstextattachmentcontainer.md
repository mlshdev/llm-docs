> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachmentcontainer](https://developer.apple.com/documentation/uikit/nstextattachmentcontainer)

# NSTextAttachmentContainer (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

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

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSTextAttachment](nstextattachment.md)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.

# NSTextAttachmentContainer (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

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

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSTextAttachment](nstextattachment.md)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
