> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/acceleratematrixbuffer](https://developer.apple.com/documentation/accelerate/acceleratematrixbuffer)

# AccelerateMatrixBuffer

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

## Declaration

```swift
protocol AccelerateMatrixBuffer<Element>
```

## Topics

### Associated Types

- [Element](acceleratematrixbuffer/element.md)

### Instance Properties

- [accelerateMatrixOrder](acceleratematrixbuffer/acceleratematrixorder.md)
- [columnCount](acceleratematrixbuffer/columncount.md)
- [leadingDimension](acceleratematrixbuffer/leadingdimension.md)
- [rowCount](acceleratematrixbuffer/rowcount.md)

### Instance Methods

- [withUnsafeBufferPointer(\_:)](acceleratematrixbuffer/withunsafebufferpointer%28__%29.md)

## Relationships

### Inherited By

- [AccelerateMutableMatrixBuffer](acceleratemutablematrixbuffer.md)

### Conforming Types

- [vImage.PixelBuffer](vimage/pixelbuffer.md)

## See Also

### Essentials

- [AccelerateBuffer](acceleratebuffer.md): A type that represents an immutable buffer.
- [AccelerateMutableBuffer](acceleratemutablebuffer.md): A type that represents a mutable buffer.
- [AccelerateMutableMatrixBuffer](acceleratemutablematrixbuffer.md)
- [AccelerateMatrixOrder](acceleratematrixorder.md)
