> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer/pool/makemutablepixelbuffer(_:)](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/pool/makemutablepixelbuffer(_:))

# makeMutablePixelBuffer(\_:)

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

This function creates a new CVMutablePixelBuffer using the pixel buffer attributes specified during pool creation.

## Declaration

```swift
final func makeMutablePixelBuffer(_ attributes: CVMutablePixelBuffer.Pool.AllocationAttributes = .init()) throws -> CVMutablePixelBuffer
```

## Parameters

- `attributes`: Attributes which control how pixel buffers are allocated

<a id="discussion"></a>

## Discussion

- Returns A new mutable pixel buffer created with creationAttributes passed to [init(pixelBufferAttributes:configuration:)](init%28pixelbufferattributes_configuration_%29.md)
