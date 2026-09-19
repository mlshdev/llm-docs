> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelbuffer/withunsafemutablebytes(_:)

# withUnsafeMutableBytes(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Update the buffer’s contents synchronously on the CPU. The buffer provided is only valid for the lifetime of the callback.

## Declaration

```swift
final func withUnsafeMutableBytes(_ callback: (UnsafeMutableRawBufferPointer) -> Void)
```
