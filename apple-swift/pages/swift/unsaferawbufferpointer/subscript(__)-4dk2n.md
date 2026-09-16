> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unsaferawbufferpointer/subscript(_:)-4dk2n

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the byte at the given offset in the memory region as a `UInt8` value.

## Declaration

```swift
subscript(i: Int) -> UnsafeRawBufferPointer.Element { get }
```

## Parameters

- `i`: The offset of the byte to access. `i` must be in the range `0..<count`.
