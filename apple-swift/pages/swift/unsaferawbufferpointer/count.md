> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unsaferawbufferpointer/count

# count

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes in the buffer.

## Declaration

```swift
var count: Int { get }
```

<a id="discussion"></a>

## Discussion

If the `baseAddress` of this buffer is `nil`, the count is zero. However, a buffer can have a `count` of zero even with a non-`nil` base address.
