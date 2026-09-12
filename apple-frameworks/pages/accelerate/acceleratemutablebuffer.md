> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/acceleratemutablebuffer](https://developer.apple.com/documentation/accelerate/acceleratemutablebuffer)

# AccelerateMutableBuffer

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A type that represents a mutable buffer.

## Declaration

```swift
protocol AccelerateMutableBuffer<Element> : AccelerateBuffer
```

<a id="overview"></a>

## Overview

If you implement your own type that conforms to [AccelerateMutableBuffer](acceleratemutablebuffer.md) and uses the default implementation of [withUnsafeMutableBufferPointer(\_:)](acceleratemutablebuffer/withunsafemutablebufferpointer%28__%29.md), your type needs to return a nonnil result from [withContiguousMutableStorageIfAvailable(\_:)](https://developer.apple.com/documentation/swift/contiguousarray/withcontiguousmutablestorageifavailable%28_:%29).

## Topics

### Instance Methods

- [withUnsafeMutableBufferPointer(\_:)](acceleratemutablebuffer/withunsafemutablebufferpointer%28__%29.md): Calls the given closure with a pointer to the object’s mutable contiguous storage.
- [withUnsafePixelBuffer(body:)](acceleratemutablebuffer/withunsafepixelbuffer%28body_%29-3k58x.md): Conforms when `Element` is `UInt16`.
- [withUnsafePixelBuffer(body:)](acceleratemutablebuffer/withunsafepixelbuffer%28body_%29-5n3lj.md): Conforms when `Element` is `Float16`.
- [withUnsafePixelBuffer(body:)](acceleratemutablebuffer/withunsafepixelbuffer%28body_%29-9vr8y.md): Conforms when `Element` is `Float`.
- [withUnsafePixelBuffer(body:)](acceleratemutablebuffer/withunsafepixelbuffer%28body_%29-aa26.md): Conforms when `Element` is `UInt8`.

## Relationships

### Inherits From

- [AccelerateBuffer](acceleratebuffer.md)

### Conforming Types

- [vImage.PixelBuffer](vimage/pixelbuffer.md)

## See Also

### Essentials

- [AccelerateBuffer](acceleratebuffer.md): A type that represents an immutable buffer.
- [AccelerateMatrixBuffer](acceleratematrixbuffer.md)
- [AccelerateMutableMatrixBuffer](acceleratemutablematrixbuffer.md)
- [AccelerateMatrixOrder](acceleratematrixorder.md)
