> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/span/count](https://developer.apple.com/documentation/swift/span/count)

# count

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

The number of elements in the span.

## Declaration

```swift
var count: Int { get }
```

<a id="discussion"></a>

## Discussion

To check whether the span is empty, use its `isEmpty` property instead of comparing `count` to zero.

> **Complexity**

> O(1)
