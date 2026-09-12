> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbufferrepresentable/withunsafebuffer(_:)](https://developer.apple.com/documentation/corevideo/cvbufferrepresentable/withunsafebuffer(_:))

# withUnsafeBuffer(\_:)

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access the underlying `Buffer` object. This function should be used to bridge existing code that uses the Buffer type.

## Declaration

```swift
func withUnsafeBuffer<R>(_ body: (Self.Buffer) throws -> sending R) rethrows -> sending R where R : ~Copyable
```
