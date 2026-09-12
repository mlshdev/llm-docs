> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/acceleratemutablebuffer/withunsafemutablebufferpointer(_:)](https://developer.apple.com/documentation/accelerate/acceleratemutablebuffer/withunsafemutablebufferpointer(_:))

# withUnsafeMutableBufferPointer(\_:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calls the given closure with a pointer to the object’s mutable contiguous storage.

## Declaration

```swift
mutating func withUnsafeMutableBufferPointer<R>(_ body: (inout UnsafeMutableBufferPointer<Self.Element>) throws -> R) rethrows -> R
```

## Parameters

- `body`: A closure that receives an [UnsafeMutableBufferPointer](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer) to the sequence’s contiguous storage.

## Default Implementations

### AccelerateMutableBuffer Implementations

- [withUnsafeMutableBufferPointer(\_:)](withunsafemutablebufferpointer%28__%29-5wvde.md): Conforms when `Self` conforms to `MutableCollection`.
