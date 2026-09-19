> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvpixelbufferrepresentable/planeproperties

# planeProperties

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Properties of all the planes in this pixel buffer. This array will contain at least one element. In case of non-planar pixel buffers, the first value represents the entire pixel data.

## Declaration

```swift
var planeProperties: [CVPixelBufferPlaneProperties] { get }
```
