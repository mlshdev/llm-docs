> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttagclass](https://developer.apple.com/documentation/uniformtypeidentifiers/uttagclass)

# UTTagClass

**Framework:** Uniform Type Identifiers  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents tag classes.

## Declaration

```swift
struct UTTagClass
```

<a id="overview"></a>

## Overview

A tag class is a label that represents the mapping of a [UTType](uttype-swift.struct.md) to another type system; for example, a MIME type or a file system extension.

A tag is a specific instance of a tag class. For example, the tag `txt` is an instance of the tag class [UTTagClassFilenameExtension](uttagclassfilenameextension.md) and represents the type [UTTypePlainText](uttypeplaintext.md).

[UTTagClass](uttagclass.md) uses an untyped `String` or [CFString](../corefoundation/cfstring.md) to refer to a tag class as a string. To get the string representation of a tag class, use its `rawValue-swift.property` property.

## Topics

### Getting a declared types mapping

- [filenameExtension](uttagclass/filenameextension.md): A type property that returns the tag class used to map a type to a filename extension.
- [mimeType](uttagclass/mimetype.md): A type property that returns the tag class used to map a type to a MIME type.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Uniform type identifiers

- [UTType](uttype-swift.struct.md): A structure that represents a type of data to load, send, or receive.
- [UTTypeReference](uttypereference.md): An object that represents a type of data to load, send, or receive.
