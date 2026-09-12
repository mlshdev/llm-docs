> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discontiguousslice/removelast()](https://developer.apple.com/documentation/swift/discontiguousslice/removelast())

# removeLast()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes and returns the last element of the collection.

## Declaration

```swift
@discardableResult mutating func removeLast() -> Self.Element
```

<a id="return-value"></a>

## Return Value

The last element of the collection.

<a id="discussion"></a>

## Discussion

The collection must not be empty. To remove the last element of a collection that might be empty, use the `popLast()` method instead.

> **Complexity**

> O(1)
