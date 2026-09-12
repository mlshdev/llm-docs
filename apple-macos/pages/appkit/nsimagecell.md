> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagecell](https://developer.apple.com/documentation/appkit/nsimagecell)

# NSImageCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An `NSImageCell` object displays a single image (encapsulated in an [NSImage](nsimage.md) object) in a frame. This class provides methods for choosing the frame and for aligning and scaling the image to fit the frame.

## Declaration

```swift
class NSImageCell
```

<a id="overview"></a>

## Overview

The object value of an `NSImageCell` object must be an [NSImage](nsimage.md) object, so if you use the [objectValue](nscell/objectvalue.md) method of [NSCell](nscell.md), be sure to supply an [NSImage](nsimage.md) object as an argument. Because an [NSImage](nsimage.md) object does not need to be converted for display, do not use the [NSCell](nscell.md) methods relating to formatters.

An `NSImageCell` object is usually associated with some kind of control object. For example, an [NSMatrix](nsmatrix.md) or an [NSTableView](nstableview.md).

<a id="Designated-Initializers"></a>

### Designated Initializers

When subclassing `NSImageCell` you must implement all of the designated initializers. Those methods are: init, [init(coder:)](nscell/init%28coder_%29.md), [init(textCell:)](nscell/init%28textcell_%29.md), and [init(imageCell:)](nscell/init%28imagecell_%29.md).

## Topics

### Aligning and Scaling the Image

- [imageAlignment](nsimagecell/imagealignment.md): The alignment of the receiver’s image relative to its frame.
- [imageScaling](nsimagecell/imagescaling.md): The scaling mode used to fit the receiver’s image into the frame.

### Choosing the Frame

- [imageFrameStyle](nsimagecell/imageframestyle.md): The style of the frame that borders the image.

### Constants

- [NSImageAlignment](nsimagealignment.md): Constants used by [imageAlignment](nsimagecell/imagealignment.md) that allow you to specify the location of the image in the frame.
- [NSImageView.FrameStyle](nsimageview/framestyle.md): Constants that allow you to specify the kind of frame bordering the image.

## Relationships

### Inherits From

- [NSCell](nscell.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSImageCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An `NSImageCell` object displays a single image (encapsulated in an [NSImage](nsimage.md) object) in a frame. This class provides methods for choosing the frame and for aligning and scaling the image to fit the frame.

## Declaration

```objectivec
@interface NSImageCell : NSCell
```

<a id="overview"></a>

## Overview

The object value of an `NSImageCell` object must be an [NSImage](nsimage.md) object, so if you use the [objectValue](nscell/objectvalue.md) method of [NSCell](nscell.md), be sure to supply an [NSImage](nsimage.md) object as an argument. Because an [NSImage](nsimage.md) object does not need to be converted for display, do not use the [NSCell](nscell.md) methods relating to formatters.

An `NSImageCell` object is usually associated with some kind of control object. For example, an [NSMatrix](nsmatrix.md) or an [NSTableView](nstableview.md).

<a id="Designated-Initializers"></a>

### Designated Initializers

When subclassing `NSImageCell` you must implement all of the designated initializers. Those methods are: init, [initWithCoder:](nscell/init%28coder_%29.md), [initTextCell:](nscell/init%28textcell_%29.md), and [initImageCell:](nscell/init%28imagecell_%29.md).

## Topics

### Aligning and Scaling the Image

- [imageAlignment](nsimagecell/imagealignment.md): The alignment of the receiver’s image relative to its frame.
- [imageScaling](nsimagecell/imagescaling.md): The scaling mode used to fit the receiver’s image into the frame.

### Choosing the Frame

- [imageFrameStyle](nsimagecell/imageframestyle.md): The style of the frame that borders the image.

### Constants

- [NSImageAlignment](nsimagealignment.md): Constants used by [imageAlignment](nsimagecell/imagealignment.md) that allow you to specify the location of the image in the frame.
- [NSImageFrameStyle](nsimageview/framestyle.md): Constants that allow you to specify the kind of frame bordering the image.

## Relationships

### Inherits From

- [NSCell](nscell.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
