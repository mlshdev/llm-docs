> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablerawbufferpointer/baseaddress](https://developer.apple.com/documentation/swift/unsafemutablerawbufferpointer/baseaddress)

# baseAddress

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A pointer to the first byte of the buffer.

## Declaration

```swift
var baseAddress: UnsafeMutableRawPointer? { get }
```

<a id="discussion"></a>

## Discussion

If the `baseAddress` of this buffer is `nil`, the count is zero. However, a buffer can have a `count` of zero even with a non-`nil` base address.
