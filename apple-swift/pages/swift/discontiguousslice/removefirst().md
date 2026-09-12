> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discontiguousslice/removefirst()](https://developer.apple.com/documentation/swift/discontiguousslice/removefirst())

# removeFirst()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes and returns the first element of the collection.

## Declaration

```swift
@discardableResult mutating func removeFirst() -> Self.Element
```

<a id="return-value"></a>

## Return Value

The first element of the collection.

<a id="discussion"></a>

## Discussion

The collection must not be empty.

> **Complexity**

> O(1)
