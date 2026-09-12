> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsaferawbufferpointer/subscript(_:)-58r3z](https://developer.apple.com/documentation/swift/unsaferawbufferpointer/subscript(_:)-58r3z)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the bytes in the specified memory region.

## Declaration

```swift
subscript(bounds: Range<Int>) -> UnsafeRawBufferPointer.SubSequence { get }
```

## Parameters

- `bounds`: The range of byte offsets to access. The upper and lower bounds of the range must be in the range `0...count`.
