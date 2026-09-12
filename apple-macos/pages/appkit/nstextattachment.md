> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachment](https://developer.apple.com/documentation/appkit/nstextattachment)

# NSTextAttachment (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

The values for the attachment characteristics of attributed strings and related objects.

## Declaration

```swift
class NSTextAttachment
```

<a id="overview"></a>

## Overview

The [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) class uses text attachment objects as the values for attachment attributes (stored in the attributed string under the [attachment](https://developer.apple.com/documentation/foundation/nsattributedstring/key/attachment) key).

A text attachment object contains either an [NSData](https://developer.apple.com/documentation/foundation/nsdata) object or an [FileWrapper](https://developer.apple.com/documentation/foundation/filewrapper) object, which in turn holds the contents of the attached file. The properties of this class configure the appearance of the text attachment in your interface. In macOS, the text attachment also uses a cell object that conforms to the [NSTextAttachmentCellProtocol](nstextattachmentcellprotocol.md) protocol to draw the image that represents the text and handles mouse events. For more information about text attachments, see the [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) and [NSTextView](nstextview.md).

In macOS 12 and iOS 15 and later, [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md) and [NSTextAttachmentLayout](nstextattachmentlayout.md) provide additional capabilities to represent document locations in terms of an [NSTextLocation](nstextlocation.md) or an [NSTextRange](nstextrange.md), and provide support for view-based text attachments.

## Topics

### Initializing a text attachment

- [init(fileWrapper:)](nstextattachment/init%28filewrapper_%29.md): Creates a text attachment object to contain the specified file wrapper.
- [init(data:ofType:)](nstextattachment/init%28data_oftype_%29.md): Creates a text attachment object with the specified data.

### Defining the attachment’s contents

- [bounds](nstextattachment/bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [contents](nstextattachment/contents.md): The contents for the text attachment.
- [fileType](nstextattachment/filetype.md): The file type of the contents for the text attachment.
- [image](nstextattachment/image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [fileWrapper](nstextattachment/filewrapper.md): The text attachment’s file wrapper.
- [allowsTextAttachmentView](nstextattachment/allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](nstextattachment/usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](nstextattachment/linelayoutpadding.md): The layout padding before and after the text attachment bounds.

### Setting the attachment cell

- [attachmentCell](nstextattachment/attachmentcell.md): The object that draws the icon for the text attachment and handles mouse events.

### Constants

- [Attachment Character](attachment-character.md): A character that denotes an attachment.

### Convenience methods

- [registerViewProviderClass(\_:forFileType:)](nstextattachment/registerviewproviderclass%28__forfiletype_%29.md): Registers a specific file type with the attachment view provider.
- [textAttachmentViewProviderClass(forFileType:)](nstextattachment/textattachmentviewproviderclass%28forfiletype_%29.md): Returns the text attachment view provider class, if any, for the file type you specify.

### Initializers

- [init(coder:)](nstextattachment/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [NSTextAttachmentContainer](nstextattachmentcontainer.md)
- [NSTextAttachmentLayout](nstextattachmentlayout.md)

## See Also

### Attachments

- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSTextAttachmentViewProviderReusePolicy](nstextattachmentviewproviderreusepolicy.md)
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.
- [NSTextAttachmentCellProtocol](nstextattachmentcellprotocol.md): A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.

# NSTextAttachment (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

The values for the attachment characteristics of attributed strings and related objects.

## Declaration

```objectivec
@interface NSTextAttachment : NSObject
```

<a id="overview"></a>

## Overview

The [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) class uses text attachment objects as the values for attachment attributes (stored in the attributed string under the [attachment](https://developer.apple.com/documentation/foundation/nsattributedstring/key/attachment) key).

A text attachment object contains either an [NSData](https://developer.apple.com/documentation/foundation/nsdata) object or an [NSFileWrapper](https://developer.apple.com/documentation/foundation/filewrapper) object, which in turn holds the contents of the attached file. The properties of this class configure the appearance of the text attachment in your interface. In macOS, the text attachment also uses a cell object that conforms to the [NSTextAttachmentCell](nstextattachmentcellprotocol.md) protocol to draw the image that represents the text and handles mouse events. For more information about text attachments, see the [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) and [NSTextView](nstextview.md).

In macOS 12 and iOS 15 and later, [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md) and [NSTextAttachmentLayout](nstextattachmentlayout.md) provide additional capabilities to represent document locations in terms of an [NSTextLocation](nstextlocation.md) or an [NSTextRange](nstextrange.md), and provide support for view-based text attachments.

## Topics

### Initializing a text attachment

- [initWithFileWrapper:](nstextattachment/init%28filewrapper_%29.md): Creates a text attachment object to contain the specified file wrapper.
- [initWithData:ofType:](nstextattachment/init%28data_oftype_%29.md): Creates a text attachment object with the specified data.

### Defining the attachment’s contents

- [bounds](nstextattachment/bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [contents](nstextattachment/contents.md): The contents for the text attachment.
- [fileType](nstextattachment/filetype.md): The file type of the contents for the text attachment.
- [image](nstextattachment/image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [fileWrapper](nstextattachment/filewrapper.md): The text attachment’s file wrapper.
- [allowsTextAttachmentView](nstextattachment/allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](nstextattachment/usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](nstextattachment/linelayoutpadding.md): The layout padding before and after the text attachment bounds.

### Setting the attachment cell

- [attachmentCell](nstextattachment/attachmentcell.md): The object that draws the icon for the text attachment and handles mouse events.

### Constants

- [Attachment Character](attachment-character.md): A character that denotes an attachment.

### Convenience methods

- [registerTextAttachmentViewProviderClass:forFileType:](nstextattachment/registerviewproviderclass%28__forfiletype_%29.md): Registers a specific file type with the attachment view provider.
- [textAttachmentViewProviderClassForFileType:](nstextattachment/textattachmentviewproviderclass%28forfiletype_%29.md): Returns the text attachment view provider class, if any, for the file type you specify.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [NSTextAttachmentContainer](nstextattachmentcontainer.md)
- [NSTextAttachmentLayout](nstextattachmentlayout.md)

## See Also

### Attachments

- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSTextAttachmentViewProviderReusePolicy](nstextattachmentviewproviderreusepolicy.md)
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.
- [NSTextAttachmentCell](nstextattachmentcellprotocol.md): A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.
