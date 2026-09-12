> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachableasimage](https://developer.apple.com/documentation/testing/attachableasimage)

# AttachableAsImage

**Framework:** Swift Testing  
**Kind:** Protocol  
**Availability:** Swift 6.3+ · Xcode 26.4+

A protocol describing images that can be converted to instances of [Attachment](https://developer.apple.com/documentation/testing/attachment).

## Declaration

```swift
protocol AttachableAsImage
```

<a id="overview"></a>

## Overview

Instances of types conforming to this protocol do not themselves conform to [Attachable](https://developer.apple.com/documentation/testing/attachable). Instead, the testing library provides additional initializers on [Attachment](https://developer.apple.com/documentation/testing/attachment) that take instances of such types and handle converting them to image data when needed.

You do not generally need to add your own conformances to this protocol. For a list of types that automatically conform to this protocol, see [Attach images](attachments.md#Attach-images).

## Topics

### Instance Methods

- [withUnsafeBytes(as:\_:)](attachableasimage/withunsafebytes%28as___%29.md): Encode a representation of this image in a given image format.

## See Also

### Attaching images to tests

- [AttachableImageFormat](attachableimageformat.md): A type describing image formats supported by the system that can be used when attaching an image to a test.
- [init(\_:named:as:sourceLocation:)](attachment/init%28__named_as_sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Initialize an instance of this type that encloses the given image.
- [record(\_:named:as:sourceLocation:)](attachment/record%28__named_as_sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Attach an image to the current test.
