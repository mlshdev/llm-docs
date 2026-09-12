> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsadaptiveimageglyph](https://developer.apple.com/documentation/uikit/nsadaptiveimageglyph)

# NSAdaptiveImageGlyph (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A data object for an emoji-like image that can appear in attributed text.

## Declaration

```swift
class NSAdaptiveImageGlyph
```

<a id="overview"></a>

## Overview

An [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) contains an image that automatically adapts to different sizes and resolutions. The text system creates instances of this type to represent custom emojis that people create using the system interfaces. This type manages multiple images, along with metadata describing how to adapt those images correctly to different fonts and font attributes.

Typically, you receive new [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) objects only from the text-input system. When someone creates a new emoji and inserts it into their text, TextKit creates an instance of this type to represent it. If your app examines or changes the attributes of attributed strings, preserve the [adaptiveImageGlyph](../foundation/nsattributedstring/key/adaptiveimageglyph.md) attribute in Swift or the [NSAdaptiveImageGlyphAttributeName](nsadaptiveimageglyphattributename.md) attribute in Objective-C when making any changes. For example, if you filter unknown attributes in a custom text-storage object, update your code to preserve this attribute. The value of the attribute is an [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) containing the emoji data. You can save the image data with the rest of your content and use the data to recreate the type later.

## Topics

### Creating an adaptive image glyph

- [init(imageContent:)](nsadaptiveimageglyph/init%28imagecontent_%29.md): Create an adaptive image glyph from previously saved data.
- [init(coder:)](nsadaptiveimageglyph/init%28coder_%29.md)

### Getting the image data

- [imageContent](nsadaptiveimageglyph/imagecontent.md): The raw data for the image.

### Getting the content metadata

- [contentIdentifier](nsadaptiveimageglyph/contentidentifier.md): A unique identifier for this image.
- [contentDescription](nsadaptiveimageglyph/contentdescription.md): An alternate textual description of the image contents.
- [contentType](nsadaptiveimageglyph/contenttype.md): The image data format to use for this image type.

### Examining attributed strings

- [adaptiveImageGlyph](../foundation/nsattributedstring/key/adaptiveimageglyph.md): The adaptive image glyph for the text.

### Initializers

- [init(\_:)](nsadaptiveimageglyph/init%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CTAdaptiveImageProviding](../coretext/ctadaptiveimageproviding.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.

# NSAdaptiveImageGlyph (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A data object for an emoji-like image that can appear in attributed text.

## Declaration

```objectivec
@interface NSAdaptiveImageGlyph : NSObject
```

<a id="overview"></a>

## Overview

An [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) contains an image that automatically adapts to different sizes and resolutions. The text system creates instances of this type to represent custom emojis that people create using the system interfaces. This type manages multiple images, along with metadata describing how to adapt those images correctly to different fonts and font attributes.

Typically, you receive new [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) objects only from the text-input system. When someone creates a new emoji and inserts it into their text, TextKit creates an instance of this type to represent it. If your app examines or changes the attributes of attributed strings, preserve the [adaptiveImageGlyph](../foundation/nsattributedstring/key/adaptiveimageglyph.md) attribute in Swift or the [NSAdaptiveImageGlyphAttributeName](nsadaptiveimageglyphattributename.md) attribute in Objective-C when making any changes. For example, if you filter unknown attributes in a custom text-storage object, update your code to preserve this attribute. The value of the attribute is an [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md) containing the emoji data. You can save the image data with the rest of your content and use the data to recreate the type later.

## Topics

### Creating an adaptive image glyph

- [initWithImageContent:](nsadaptiveimageglyph/init%28imagecontent_%29.md): Create an adaptive image glyph from previously saved data.
- [initWithCoder:](nsadaptiveimageglyph/init%28coder_%29.md)

### Getting the image data

- [imageContent](nsadaptiveimageglyph/imagecontent.md): The raw data for the image.

### Getting the content metadata

- [contentIdentifier](nsadaptiveimageglyph/contentidentifier.md): A unique identifier for this image.
- [contentDescription](nsadaptiveimageglyph/contentdescription.md): An alternate textual description of the image contents.
- [contentType](nsadaptiveimageglyph/contenttype.md): The image data format to use for this image type.

### Examining attributed strings

- [NSAdaptiveImageGlyphAttributeName](nsadaptiveimageglyphattributename.md): The adaptive image glyph for the text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CTAdaptiveImageProviding](../coretext/ctadaptiveimageproviding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
