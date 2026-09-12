> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer/pool](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/pool)

# CVMutablePixelBuffer.Pool

**Framework:** Core Video  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Manage and recycle pixel buffer backings.

## Declaration

```swift
final class Pool
```

## Topics

### Structures

- [CVMutablePixelBuffer.Pool.AllocationAttributes](pool/allocationattributes.md): Controls how new pixel buffers are allocated when `CVMutablePixelBuffer/Pool/mutablePixelBuffer(with:)` is called.
- [CVMutablePixelBuffer.Pool.Configuration](pool/configuration.md): Configuration passed to pixel buffer pool on creation.

### Initializers

- [init(pixelBufferAttributes:configuration:)](pool/init%28pixelbufferattributes_configuration_%29.md): Create a new pixel buffer pool which creates pixel buffers using `pixelBufferAttributes`.
- [init(unsafePool:)](pool/init%28unsafepool_%29.md): Initialize a mutable pixel buffer pool by transferring existing CVPixelBufferPool.

### Instance Properties

- [pixelBufferAttributes](pool/pixelbufferattributes.md): Creation attributes for the pixel buffers created by this pool.

### Instance Methods

- [flush(agedOutOnly:)](pool/flush%28agedoutonly_%29.md): Frees as many buffers from the pool as possible.
- [makeMutablePixelBuffer(\_:)](pool/makemutablepixelbuffer%28__%29.md): This function creates a new CVMutablePixelBuffer using the pixel buffer attributes specified during pool creation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
