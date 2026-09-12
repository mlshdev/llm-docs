> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablerawbufferpointer/subscript(_:)-u791](https://developer.apple.com/documentation/swift/unsafemutablerawbufferpointer/subscript(_:)-u791)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the byte at the given offset in the memory region as a `UInt8` value.

## Declaration

```swift
subscript(i: Int) -> UnsafeMutableRawBufferPointer.Element { get nonmutating set }
```

## Parameters

- `i`: The offset of the byte to access. `i` must be in the range `0..<count`.
