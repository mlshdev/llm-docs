> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/array/withunsafetaggedbuffers(_:)

# withUnsafeTaggedBuffers(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access the underlying CMTaggedBuffers.

## Declaration

```swift
func withUnsafeTaggedBuffers<R>(_ body: ([CMTaggedBuffer]) throws -> sending R) rethrows -> sending R where R : ~Copyable
```
