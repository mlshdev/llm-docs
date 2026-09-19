> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/acceleratemutablebuffer/withunsafemutablebufferpointer(_:)-5wvde

# withUnsafeMutableBufferPointer(\_:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

## Declaration

```swift
mutating func withUnsafeMutableBufferPointer<R>(_ body: (inout UnsafeMutableBufferPointer<Self.Element>) throws -> R) rethrows -> R
```
