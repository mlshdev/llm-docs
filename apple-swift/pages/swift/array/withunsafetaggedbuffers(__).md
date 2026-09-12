> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/withunsafetaggedbuffers(_:)](https://developer.apple.com/documentation/swift/array/withunsafetaggedbuffers(_:))

# withUnsafeTaggedBuffers(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access the underlying CMTaggedBuffers.

## Declaration

```swift
func withUnsafeTaggedBuffers<R>(_ body: ([CMTaggedBuffer]) throws -> sending R) rethrows -> sending R where R : ~Copyable
```
