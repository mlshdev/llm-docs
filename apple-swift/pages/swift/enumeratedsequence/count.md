> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/enumeratedsequence/count](https://developer.apple.com/documentation/swift/enumeratedsequence/count)

# count

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The number of elements in the collection.

## Declaration

```swift
var count: Int { get }
```

<a id="discussion"></a>

## Discussion

To check whether a collection is empty, use its `isEmpty` property instead of comparing `count` to zero. Unless the collection guarantees random-access performance, calculating `count` can be an O(*n*) operation.

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*n*), where *n* is the length of the collection.
