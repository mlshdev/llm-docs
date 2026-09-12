> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferrepresentable/accessunsaferawplanebytes(_:)](https://developer.apple.com/documentation/corevideo/cvpixelbufferrepresentable/accessunsaferawplanebytes(_:))

# accessUnsafeRawPlaneBytes(\_:)

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access the pixels in the planes contained within this buffer. The base address is locked for reading during the execution of the block.

## Declaration

```swift
func accessUnsafeRawPlaneBytes<R>(_ block: ([(properties: CVPixelBufferPlaneProperties, bytes: UnsafeRawBufferPointer)]) throws -> sending R) rethrows -> sending R
```
