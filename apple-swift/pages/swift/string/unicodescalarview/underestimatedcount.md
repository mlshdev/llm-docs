> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/unicodescalarview/underestimatedcount](https://developer.apple.com/documentation/swift/string/unicodescalarview/underestimatedcount)

# underestimatedCount

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value less than or equal to the number of elements in the collection.

## Declaration

```swift
var underestimatedCount: Int { get }
```

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*n*), where *n* is the length of the collection.
