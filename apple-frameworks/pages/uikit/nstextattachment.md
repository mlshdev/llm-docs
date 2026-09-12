> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachment](https://developer.apple.com/documentation/uikit/nstextattachment)

# NSTextAttachment (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The values for the attachment characteristics of attributed strings and related objects.

## Declaration

```swift
class NSTextAttachment
```

<a id="overview"></a>

## Overview

The [NSAttributedString](../foundation/nsattributedstring.md) class uses text attachment objects as the values for attachment attributes (stored in the attributed string under the [attachment](../foundation/nsattributedstring/key/attachment.md) key in Swift or the [NSAttachmentAttributeName](nsattachmentattributename.md) key in Objective-C).

A text attachment object contains either an [NSData](../foundation/nsdata.md) object or an [FileWrapper](../foundation/filewrapper.md) object, which in turn holds the contents of the attached file. The properties of this class configure the appearance of the text attachment in your interface. In macOS, the text attachment also uses a cell object that conforms to the [NSTextAttachmentCellProtocol](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol) protocol to draw the image that represents the text and handles mouse events. For more information about text attachments, see the [NSAttributedString](../foundation/nsattributedstring.md) and [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

In macOS 12 and iOS 15 and later, [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md) and [NSTextAttachmentLayout](nstextattachmentlayout.md) provide additional capabilities to represent document locations in terms of an [NSTextLocation](nstextlocation.md) or an [NSTextRange](nstextrange.md), and provide support for view-based text attachments.

## Topics

### Initializing a text attachment

- [init(fileWrapper:)](https://developer.apple.com/documentation/appkit/nstextattachment/init%28filewrapper:%29): Creates a text attachment object to contain the specified file wrapper.
- [init(data:ofType:)](nstextattachment/init%28data_oftype_%29.md): Creates a text attachment object with the specified data.
- [init(image:)](nstextattachment/init%28image_%29.md): Creates a text attachment object to contain the specified image.

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

- [attachmentCell](https://developer.apple.com/documentation/appkit/nstextattachment/attachmentcell): The object that draws the icon for the text attachment and handles mouse events.

### Constants

- [character](nstextattachment/character.md): Specifies a character that denotes an attachment.

### Convenience methods

- [registerViewProviderClass(\_:forFileType:)](nstextattachment/registerviewproviderclass%28__forfiletype_%29.md): Registers a specific file type with the attachment view provider.
- [textAttachmentViewProviderClass(forFileType:)](nstextattachment/textattachmentviewproviderclass%28forfiletype_%29.md): Returns the text attachment view provider class, if any, for the file type you specify.

### Initializers

- [init(coder:)](nstextattachment/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSTextAttachmentContainer](nstextattachmentcontainer.md)
- [NSTextAttachmentLayout](nstextattachmentlayout.md)
- [UIAccessibilityContentSizeCategoryImageAdjusting](uiaccessibilitycontentsizecategoryimageadjusting.md)

## See Also

### Attachments

- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.

# NSTextAttachment (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The values for the attachment characteristics of attributed strings and related objects.

## Declaration

```objectivec
@interface NSTextAttachment : NSObject
```

<a id="overview"></a>

## Overview

The [NSAttributedString](../foundation/nsattributedstring.md) class uses text attachment objects as the values for attachment attributes (stored in the attributed string under the [attachment](../foundation/nsattributedstring/key/attachment.md) key in Swift or the [NSAttachmentAttributeName](nsattachmentattributename.md) key in Objective-C).

A text attachment object contains either an [NSData](../foundation/nsdata.md) object or an [NSFileWrapper](../foundation/filewrapper.md) object, which in turn holds the contents of the attached file. The properties of this class configure the appearance of the text attachment in your interface. In macOS, the text attachment also uses a cell object that conforms to the [NSTextAttachmentCell](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol) protocol to draw the image that represents the text and handles mouse events. For more information about text attachments, see the [NSAttributedString](../foundation/nsattributedstring.md) and [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

In macOS 12 and iOS 15 and later, [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md) and [NSTextAttachmentLayout](nstextattachmentlayout.md) provide additional capabilities to represent document locations in terms of an [NSTextLocation](nstextlocation.md) or an [NSTextRange](nstextrange.md), and provide support for view-based text attachments.

## Topics

### Initializing a text attachment

- [initWithFileWrapper:](https://developer.apple.com/documentation/appkit/nstextattachment/init%28filewrapper:%29): Creates a text attachment object to contain the specified file wrapper.
- [initWithData:ofType:](nstextattachment/init%28data_oftype_%29.md): Creates a text attachment object with the specified data.
- [textAttachmentWithImage:](nstextattachment/init%28image_%29.md): Creates a text attachment object to contain the specified image.

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

- [attachmentCell](https://developer.apple.com/documentation/appkit/nstextattachment/attachmentcell): The object that draws the icon for the text attachment and handles mouse events.

### Constants

- [NSAttachmentCharacter](nstextattachment/character.md): Specifies a character that denotes an attachment.

### Convenience methods

- [registerTextAttachmentViewProviderClass:forFileType:](nstextattachment/registerviewproviderclass%28__forfiletype_%29.md): Registers a specific file type with the attachment view provider.
- [textAttachmentViewProviderClassForFileType:](nstextattachment/textattachmentviewproviderclass%28forfiletype_%29.md): Returns the text attachment view provider class, if any, for the file type you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSTextAttachmentContainer](nstextattachmentcontainer.md)
- [NSTextAttachmentLayout](nstextattachmentlayout.md)
- [UIAccessibilityContentSizeCategoryImageAdjusting](uiaccessibilitycontentsizecategoryimageadjusting.md)

## See Also

### Attachments

- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
