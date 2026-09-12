> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachmentlayout](https://developer.apple.com/documentation/uikit/nstextattachmentlayout)

# NSTextAttachmentLayout (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A set of methods that defines the interface to attachment objects from a text layout manager.

## Declaration

```swift
protocol NSTextAttachmentLayout : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The `NSTextAttachmentLayout` protocol is the interface for working with attachment objects with an [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md) using a [NSTextLayoutManager](nstextlayoutmanager.md) in macOS 12 and iOS 15 and later.

## Topics

### Determining the characteristics of an attachment

- [attachmentBounds(for:location:textContainer:proposedLineFragment:position:)](nstextattachmentlayout/attachmentbounds%28for_location_textcontainer_proposedlinefragment_position_%29.md): Returns the layout bounds of the attachment you specify.
- [image(for:attributes:location:textContainer:)](nstextattachmentlayout/image%28for_attributes_location_textcontainer_%29.md): Returns the image object rendered at the bounds and inside the text container you specify.
- [viewProvider(for:location:textContainer:)](nstextattachmentlayout/viewprovider%28for_location_textcontainer_%29.md): Returns the text attachment view provider corresponding to the file type.

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
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.

# NSTextAttachmentLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A set of methods that defines the interface to attachment objects from a text layout manager.

## Declaration

```objectivec
@protocol NSTextAttachmentLayout <NSObject>
```

<a id="overview"></a>

## Overview

The `NSTextAttachmentLayout` protocol is the interface for working with attachment objects with an [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md) using a [NSTextLayoutManager](nstextlayoutmanager.md) in macOS 12 and iOS 15 and later.

## Topics

### Determining the characteristics of an attachment

- [attachmentBoundsForAttributes:location:textContainer:proposedLineFragment:position:](nstextattachmentlayout/attachmentbounds%28for_location_textcontainer_proposedlinefragment_position_%29.md): Returns the layout bounds of the attachment you specify.
- [imageForBounds:attributes:location:textContainer:](nstextattachmentlayout/image%28for_attributes_location_textcontainer_%29.md): Returns the image object rendered at the bounds and inside the text container you specify.
- [viewProviderForParentView:location:textContainer:](nstextattachmentlayout/viewprovider%28for_location_textcontainer_%29.md): Returns the text attachment view provider corresponding to the file type.

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
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
