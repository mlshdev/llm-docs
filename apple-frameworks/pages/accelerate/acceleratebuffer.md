> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/acceleratebuffer](https://developer.apple.com/documentation/accelerate/acceleratebuffer)

# AccelerateBuffer

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A type that represents an immutable buffer.

## Declaration

```swift
protocol AccelerateBuffer<Element>
```

<a id="overview"></a>

## Overview

If you implement your own type that conforms to [AccelerateBuffer](acceleratebuffer.md) and uses the default implementation of [withUnsafeBufferPointer(\_:)](acceleratebuffer/withunsafebufferpointer%28__%29.md), your type needs to return a nonnil result from [withContiguousStorageIfAvailable(\_:)](https://developer.apple.com/documentation/swift/sequence/withcontiguousstorageifavailable%28_:%29).

## Topics

### Associated Types

- [Element](acceleratebuffer/element.md): The buffer’s element type.

### Instance Properties

- [count](acceleratebuffer/count.md): The number of elements in the buffer.

### Instance Methods

- [withUnsafeBufferPointer(\_:)](acceleratebuffer/withunsafebufferpointer%28__%29.md): Calls a closure with a pointer to the object’s contiguous storage.

## Relationships

### Inherited By

- [AccelerateMutableBuffer](acceleratemutablebuffer.md)

### Conforming Types

- [vImage.PixelBuffer](vimage/pixelbuffer.md)

## See Also

### Essentials

- [AccelerateMutableBuffer](acceleratemutablebuffer.md): A type that represents a mutable buffer.
- [AccelerateMatrixBuffer](acceleratematrixbuffer.md)
- [AccelerateMutableMatrixBuffer](acceleratemutablematrixbuffer.md)
- [AccelerateMatrixOrder](acceleratematrixorder.md)
