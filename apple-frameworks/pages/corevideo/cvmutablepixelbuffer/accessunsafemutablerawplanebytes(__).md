> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/accessunsafemutablerawplanebytes(_:)

# accessUnsafeMutableRawPlaneBytes(\_:)

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access the pixels in the planes contained within this buffer. The base address is locked for writing during the execution of the block.

## Declaration

```swift
mutating func accessUnsafeMutableRawPlaneBytes<R>(_ block: ([(properties: CVPixelBufferPlaneProperties, bytes: UnsafeMutableRawBufferPointer)]) throws -> sending R) rethrows -> sending R
```
