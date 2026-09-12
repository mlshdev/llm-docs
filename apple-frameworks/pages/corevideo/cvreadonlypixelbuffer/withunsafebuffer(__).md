> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvreadonlypixelbuffer/withunsafebuffer(_:)](https://developer.apple.com/documentation/corevideo/cvreadonlypixelbuffer/withunsafebuffer(_:))

# withUnsafeBuffer(\_:)

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
final func withUnsafeBuffer<R>(_ body: (CVPixelBuffer) throws -> sending R) rethrows -> sending R
```
