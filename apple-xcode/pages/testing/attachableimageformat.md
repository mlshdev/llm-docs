> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachableimageformat](https://developer.apple.com/documentation/testing/attachableimageformat)

# AttachableImageFormat

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** Swift 6.3+ · Xcode 26.4+

A type describing image formats supported by the system that can be used when attaching an image to a test.

## Declaration

```swift
struct AttachableImageFormat
```

<a id="overview"></a>

## Overview

When you attach an image to a test, you can pass an instance of this type to [record(\_:named:as:sourceLocation:)](attachment/record%28__named_as_sourcelocation_%29.md) so that the testing library knows the image format you’d like to use. If you don’t pass an instance of this type, the testing library infers which format to use based on the attachment’s preferred name.

The testing library always supports the PNG and JPEG image formats. The set of additional supported image formats is platform-specific:

- On Apple platforms, you can use [CGImageDestinationCopyTypeIdentifiers()](https://developer.apple.com/documentation/imageio/cgimagedestinationcopytypeidentifiers%28%29) from the [Image I/O framework](https://developer.apple.com/documentation/imageio) to determine which formats are supported.
- On Windows, you can use [IWICImagingFactory.CreateComponentEnumerator()](https://learn.microsoft.com/en-us/windows/win32/api/wincodec/nf-wincodec-iwicimagingfactory-createcomponentenumerator) to enumerate the available image encoders.

## Topics

### Initializers

- [init(contentType:encodingQuality:)](attachableimageformat/init%28contenttype_encodingquality_%29.md): Initialize an instance of this type with the given content type and encoding quality.
- [init(pathExtension:encodingQuality:)](attachableimageformat/init%28pathextension_encodingquality_%29.md): Construct an instance of this type with the given path extension and encoding quality.

### Instance Properties

- [contentType](attachableimageformat/contenttype.md): The content type corresponding to this image format.
- [encodingQuality](attachableimageformat/encodingquality.md): The encoding quality to use for this image format.

### Type Properties

- [jpeg](attachableimageformat/jpeg.md): The JPEG image format with maximum encoding quality.
- [png](attachableimageformat/png.md): The PNG image format.

### Type Methods

- [jpeg(withEncodingQuality:)](attachableimageformat/jpeg%28withencodingquality_%29.md): The JPEG image format.

### Default Implementations

- [CustomDebugStringConvertible Implementations](attachableimageformat/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](attachableimageformat/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Attaching images to tests

- [AttachableAsImage](attachableasimage.md): A protocol describing images that can be converted to instances of [Attachment](https://developer.apple.com/documentation/testing/attachment).
- [init(\_:named:as:sourceLocation:)](attachment/init%28__named_as_sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Initialize an instance of this type that encloses the given image.
- [record(\_:named:as:sourceLocation:)](attachment/record%28__named_as_sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Attach an image to the current test.
