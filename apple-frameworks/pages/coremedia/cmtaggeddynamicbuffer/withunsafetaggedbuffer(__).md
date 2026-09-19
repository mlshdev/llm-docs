> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtaggeddynamicbuffer/withunsafetaggedbuffer(_:)

# withUnsafeTaggedBuffer(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func withUnsafeTaggedBuffer<R>(_ body: (CMTaggedBuffer) throws -> sending R) rethrows -> sending R
```
