> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentviewprovider](https://developer.apple.com/documentation/appkit/nstextattachmentviewprovider)

# NSTextAttachmentViewProvider (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

A container object that associates a text attachment at a particular document location with a view object.

## Declaration

```swift
class NSTextAttachmentViewProvider
```

<a id="overview"></a>

## Overview

Use `NSTextAttachmentViewProvider` when you need to represent document locations in terms of an [NSTextLocation](nstextlocation.md) or an [NSTextRange](nstextrange.md) or you want to support view-based text attachments. The view provider controls the view placement and layout without requiring view classes to be aware of the text attachment coordination using a [NSTextLayoutManager](nstextlayoutmanager.md) in macOS 12 or iOS 15 and later.

## Topics

### Initializing a text attachment view

- [init(textAttachment:parentView:textLayoutManager:location:)](nstextattachmentviewprovider/init%28textattachment_parentview_textlayoutmanager_location_%29.md): Creates a new text attachment view whose content starts at the location you provide.

### Defining the contents

- [location](nstextattachmentviewprovider/location.md): The location that indicates the start of the text attachment.
- [textAttachment](nstextattachmentviewprovider/textattachment.md): The text attachment for this view.
- [textLayoutManager](nstextattachmentviewprovider/textlayoutmanager.md): The text layout manager for this view.
- [tracksTextAttachmentViewBounds](nstextattachmentviewprovider/trackstextattachmentviewbounds.md): A Boolean value that determines the text attachment’s bounds policy.
- [view](nstextattachmentviewprovider/view.md): The text attachment’s view.

### Defining a custom view hierarchy

- [loadView()](nstextattachmentviewprovider/loadview%28%29.md): Draws the custom view hierarchy that text attachment view subclasses implement.

### Determining the Attachment’s Bounds

- [attachmentBounds(for:location:textContainer:proposedLineFragment:position:)](nstextattachmentviewprovider/attachmentbounds%28for_location_textcontainer_proposedlinefragment_position_%29.md): Returns the layout bounds for an attachment at a specific text location that contains the text attributes you specify.

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

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProviderReusePolicy](nstextattachmentviewproviderreusepolicy.md)
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.
- [NSTextAttachmentCellProtocol](nstextattachmentcellprotocol.md): A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.

# NSTextAttachmentViewProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

A container object that associates a text attachment at a particular document location with a view object.

## Declaration

```objectivec
@interface NSTextAttachmentViewProvider : NSObject
```

<a id="overview"></a>

## Overview

Use `NSTextAttachmentViewProvider` when you need to represent document locations in terms of an [NSTextLocation](nstextlocation.md) or an [NSTextRange](nstextrange.md) or you want to support view-based text attachments. The view provider controls the view placement and layout without requiring view classes to be aware of the text attachment coordination using a [NSTextLayoutManager](nstextlayoutmanager.md) in macOS 12 or iOS 15 and later.

## Topics

### Initializing a text attachment view

- [initWithTextAttachment:parentView:textLayoutManager:location:](nstextattachmentviewprovider/init%28textattachment_parentview_textlayoutmanager_location_%29.md): Creates a new text attachment view whose content starts at the location you provide.

### Defining the contents

- [location](nstextattachmentviewprovider/location.md): The location that indicates the start of the text attachment.
- [textAttachment](nstextattachmentviewprovider/textattachment.md): The text attachment for this view.
- [textLayoutManager](nstextattachmentviewprovider/textlayoutmanager.md): The text layout manager for this view.
- [tracksTextAttachmentViewBounds](nstextattachmentviewprovider/trackstextattachmentviewbounds.md): A Boolean value that determines the text attachment’s bounds policy.
- [view](nstextattachmentviewprovider/view.md): The text attachment’s view.

### Defining a custom view hierarchy

- [loadView](nstextattachmentviewprovider/loadview%28%29.md): Draws the custom view hierarchy that text attachment view subclasses implement.

### Determining the Attachment’s Bounds

- [attachmentBoundsForAttributes:location:textContainer:proposedLineFragment:position:](nstextattachmentviewprovider/attachmentbounds%28for_location_textcontainer_proposedlinefragment_position_%29.md): Returns the layout bounds for an attachment at a specific text location that contains the text attributes you specify.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProviderReusePolicy](nstextattachmentviewproviderreusepolicy.md)
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.
- [NSTextAttachmentCell](nstextattachmentcellprotocol.md): A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.
