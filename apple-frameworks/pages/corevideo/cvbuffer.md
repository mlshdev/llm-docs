> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbuffer](https://developer.apple.com/documentation/corevideo/cvbuffer)

# CVBuffer (Swift)

**Framework:** Core Video  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```swift
class CVBuffer
```

<a id="overview"></a>

## Overview

Base type for all CoreVideo buffers

## Topics

### Structures

- [CVBuffer.Attributes](cvbuffer/attributes.md): Deprecated. A partial set of pixel buffer creation attributes. This struct is useful for conveying partial requirements for pixel buffers to clients. This struct makes all properties of `CVPixelBuffer/CreationAttributes` optional.
- [CVBuffer.CreationAttributes](cvbuffer/creationattributes.md): Deprecated. Attributes needed for creating a pixel buffer.

### Type Aliases

- [CVBuffer.OriginPosition](cvbuffer/originposition.md): Deprecated.
- [CVBuffer.Padding](cvbuffer/padding.md): Deprecated.
- [CVBuffer.PlaneProperties](cvbuffer/planeproperties.md): Deprecated.
- [CVBuffer.Size](cvbuffer/size.md): Deprecated.

## Relationships

### Conforms To

- [CMAttachmentBearerProtocol](../coremedia/cmattachmentbearerprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Data types

- [CVAttachmentMode](cvattachmentmode.md): The propagation modes of a Core Video buffer attachment.

# CVBufferRef (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
typedef struct __CVBuffer * CVBufferRef;
```

<a id="overview"></a>

## Overview

Base type for all CoreVideo buffers

## Relationships

### Conforms To

- [CMAttachmentBearerProtocol](../coremedia/cmattachmentbearerprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Data types

- [CVAttachmentMode](cvattachmentmode.md): The propagation modes of a Core Video buffer attachment.
