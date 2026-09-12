> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsadaptiveimageglyph](https://developer.apple.com/documentation/appkit/nsadaptiveimageglyph)

# NSAdaptiveImageGlyph (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 15.0+

A data object for an emoji-like image that can appear in attributed text.

## Declaration

```swift
class NSAdaptiveImageGlyph
```

<a id="overview"></a>

## Overview

An [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) contains an image that automatically adapts to different sizes and resolutions. The text system creates instances of this type to represent custom emojis that people create using the system interfaces. This type manages multiple images, along with metadata describing how to adapt those images correctly to different fonts and font attributes.

Typically, you receive new [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) objects only from the text-input system. When someone creates a new emoji and inserts it into their text, TextKit creates an instance of this type to represent it. If your app examines or changes the attributes of attributed strings, preserve the [adaptiveImageGlyph](https://developer.apple.com/documentation/foundation/nsattributedstring/key/adaptiveimageglyph) attribute when making any changes. For example, if you filter unknown attributes in a custom text-storage object, update your code to preserve this attribute. The value of the attribute is an [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) containing the emoji data. You can save the image data with the rest of your content and use the data to recreate the type later.

## Topics

### Creating an adaptive image glyph

- [init(imageContent:)](nsadaptiveimageglyph/init%28imagecontent_%29.md): Create an adaptive image glyph from the previously saved data.
- [init(coder:)](nsadaptiveimageglyph/init%28coder_%29.md)

### Getting the image data

- [imageContent](nsadaptiveimageglyph/imagecontent.md): The raw data for the image.

### Getting the content metadata

- [contentIdentifier](nsadaptiveimageglyph/contentidentifier.md): A unique identifier for this image.
- [contentDescription](nsadaptiveimageglyph/contentdescription.md): An alternate textual description of the image contents.
- [contentType](nsadaptiveimageglyph/contenttype.md): The image data format to use for this image type.

### Initializers

- [init(\_:)](nsadaptiveimageglyph/init%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CTAdaptiveImageProviding](https://developer.apple.com/documentation/coretext/ctadaptiveimageproviding)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSTextAttachmentViewProviderReusePolicy](nstextattachmentviewproviderreusepolicy.md)
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.
- [NSTextAttachmentCellProtocol](nstextattachmentcellprotocol.md): A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.

# NSAdaptiveImageGlyph (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 15.0+

A data object for an emoji-like image that can appear in attributed text.

## Declaration

```objectivec
@interface NSAdaptiveImageGlyph : NSObject
```

<a id="overview"></a>

## Overview

An [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) contains an image that automatically adapts to different sizes and resolutions. The text system creates instances of this type to represent custom emojis that people create using the system interfaces. This type manages multiple images, along with metadata describing how to adapt those images correctly to different fonts and font attributes.

Typically, you receive new [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) objects only from the text-input system. When someone creates a new emoji and inserts it into their text, TextKit creates an instance of this type to represent it. If your app examines or changes the attributes of attributed strings, preserve the [adaptiveImageGlyph](https://developer.apple.com/documentation/foundation/nsattributedstring/key/adaptiveimageglyph) attribute when making any changes. For example, if you filter unknown attributes in a custom text-storage object, update your code to preserve this attribute. The value of the attribute is an [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) containing the emoji data. You can save the image data with the rest of your content and use the data to recreate the type later.

## Topics

### Creating an adaptive image glyph

- [initWithImageContent:](nsadaptiveimageglyph/init%28imagecontent_%29.md): Create an adaptive image glyph from the previously saved data.
- [initWithCoder:](nsadaptiveimageglyph/init%28coder_%29.md)

### Getting the image data

- [imageContent](nsadaptiveimageglyph/imagecontent.md): The raw data for the image.

### Getting the content metadata

- [contentIdentifier](nsadaptiveimageglyph/contentidentifier.md): A unique identifier for this image.
- [contentDescription](nsadaptiveimageglyph/contentdescription.md): An alternate textual description of the image contents.
- [contentType](nsadaptiveimageglyph/contenttype.md): The image data format to use for this image type.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CTAdaptiveImageProviding](https://developer.apple.com/documentation/coretext/ctadaptiveimageproviding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSTextAttachmentViewProviderReusePolicy](nstextattachmentviewproviderreusepolicy.md)
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.
- [NSTextAttachmentCell](nstextattachmentcellprotocol.md): A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.
