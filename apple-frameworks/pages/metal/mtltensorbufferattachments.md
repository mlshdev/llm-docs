> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorbufferattachments](https://developer.apple.com/documentation/metal/mtltensorbufferattachments)

# MTLTensorBufferAttachments (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that associates each plane of a tensor with a buffer and byte offset for buffer-backed tensor creation.

## Declaration

```swift
class MTLTensorBufferAttachments
```

## Topics

### Instance Methods

- [buffer(for:)](mtltensorbufferattachments/buffer%28for_%29.md): Returns the buffer backing the given plane, or `nil` if none has been set.
- [offset(for:)](mtltensorbufferattachments/offset%28for_%29.md): Returns the byte offset into the buffer for the given plane.
- [reset()](mtltensorbufferattachments/reset%28%29.md): Empties the container of all its elements.
- [setBuffer(\_:offset:for:)](mtltensorbufferattachments/setbuffer%28__offset_for_%29.md): Sets the buffer and byte offset to use as backing storage for the given plane.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTLTensorBufferAttachments (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that associates each plane of a tensor with a buffer and byte offset for buffer-backed tensor creation.

## Declaration

```objectivec
@interface MTLTensorBufferAttachments : NSObject
```

## Topics

### Instance Methods

- [bufferForPlane:](mtltensorbufferattachments/buffer%28for_%29.md): Returns the buffer backing the given plane, or `nil` if none has been set.
- [offsetForPlane:](mtltensorbufferattachments/offset%28for_%29.md): Returns the byte offset into the buffer for the given plane.
- [reset](mtltensorbufferattachments/reset%28%29.md): Empties the container of all its elements.
- [setBuffer:offset:forPlane:](mtltensorbufferattachments/setbuffer%28__offset_for_%29.md): Sets the buffer and byte offset to use as backing storage for the given plane.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
