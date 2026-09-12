> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anybidirectionalcollection/count](https://developer.apple.com/documentation/swift/anybidirectionalcollection/count)

# count

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of elements.

## Declaration

```swift
var count: Int { get }
```

<a id="discussion"></a>

## Discussion

To check whether a collection is empty, use its `isEmpty` property instead of comparing `count` to zero. Calculating `count` can be an O(*n*) operation.

> **Complexity**

> O(*n*)
