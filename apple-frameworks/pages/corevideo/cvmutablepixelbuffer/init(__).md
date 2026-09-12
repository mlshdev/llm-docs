> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer/init(_:)](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/init(_:))

# init(\_:)

**Framework:** Core Video  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a CVPixelBuffer with given attributes. It allocates the necessary memory based on the dimensions, pixel format and extended pixels described in the `CVPixelBuffer/Attributes`.

## Declaration

```swift
init(_ attributes: CVPixelBufferCreationAttributes) throws
```

<a id="discussion"></a>

## Discussion

It is preferable to use [CVMutablePixelBuffer.Pool](pool.md) for allocating pixel buffers in an environment that creates and releases pixel buffers of the same type, i.e., matching Attributes, repeatedly. The pool efficiently reuses the pixel buffer memory and reduces memory fragmentation.
