> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/acceleratemutablebuffer/withunsafepixelbuffer(body:)-5n3lj](https://developer.apple.com/documentation/accelerate/acceleratemutablebuffer/withunsafepixelbuffer(body:)-5n3lj)

# withUnsafePixelBuffer(body:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

## Declaration

```swift
mutating func withUnsafePixelBuffer<R>(body: (vImage.PixelBuffer<vImage.Planar16F>) throws -> R) rethrows -> R
```
