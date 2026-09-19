> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/acceleratemutablebuffer/withunsafepixelbuffer(body:)-9vr8y

# withUnsafePixelBuffer(body:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

## Declaration

```swift
mutating func withUnsafePixelBuffer<R>(body: (vImage.PixelBuffer<vImage.PlanarF>) throws -> R) rethrows -> R
```
