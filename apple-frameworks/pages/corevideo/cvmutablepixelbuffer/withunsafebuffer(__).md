> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/withunsafebuffer(_:)

# withUnsafeBuffer(\_:)

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func withUnsafeBuffer<R>(_ body: (CVPixelBuffer) throws -> sending R) rethrows -> sending R
```
