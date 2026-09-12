> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anybidirectionalcollection/init(_:)-1hwm5](https://developer.apple.com/documentation/swift/anybidirectionalcollection/init(_:)-1hwm5)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an `AnyBidirectionalCollection` having the same underlying collection as `other`.

## Declaration

```swift
init?(_ other: AnyCollection<Element>)
```

<a id="discussion"></a>

## Discussion

If the underlying collection stored by `other` does not satisfy `BidirectionalCollection`, the result is `nil`.

> **Complexity**

> O(1)
