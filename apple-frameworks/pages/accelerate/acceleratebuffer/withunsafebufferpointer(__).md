> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/acceleratebuffer/withunsafebufferpointer(_:)

# withUnsafeBufferPointer(\_:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calls a closure with a pointer to the object’s contiguous storage.

## Declaration

```swift
func withUnsafeBufferPointer<R>(_ body: (UnsafeBufferPointer<Self.Element>) throws -> R) rethrows -> R
```

## Parameters

- `body`: A closure that receives an [UnsafeBufferPointer](https://developer.apple.com/documentation/swift/unsafebufferpointer) to the sequence’s contiguous storage.

## Default Implementations

### AccelerateBuffer Implementations

- [withUnsafeBufferPointer(\_:)](withunsafebufferpointer%28__%29-3oi0a.md): Conforms when `Self` conforms to `Collection`.
