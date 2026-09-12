> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawspan/bytecount](https://developer.apple.com/documentation/swift/rawspan/bytecount)

# byteCount

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

The number of bytes in the span.

## Declaration

```swift
var byteCount: Int { get }
```

<a id="discussion"></a>

## Discussion

To check whether the span is empty, use its `isEmpty` property instead of comparing `byteCount` to zero.

> **Complexity**

> O(1)
