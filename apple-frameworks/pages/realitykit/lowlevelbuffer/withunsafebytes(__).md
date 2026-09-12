> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelbuffer/withunsafebytes(_:)](https://developer.apple.com/documentation/realitykit/lowlevelbuffer/withunsafebytes(_:))

# withUnsafeBytes(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Read the buffer synchronously on the CPU. The buffer provided is only valid for the lifetime of the callback.

## Declaration

```swift
final func withUnsafeBytes(_ callback: (UnsafeRawBufferPointer) -> Void)
```
