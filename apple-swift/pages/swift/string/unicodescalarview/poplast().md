> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/unicodescalarview/poplast()](https://developer.apple.com/documentation/swift/string/unicodescalarview/poplast())

# popLast()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes and returns the last element of the collection.

## Declaration

```swift
mutating func popLast() -> Self.Element?
```

<a id="return-value"></a>

## Return Value

The last element of the collection if the collection is not empty; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

Calling this method may invalidate all saved indices of this collection. Do not rely on a previously stored index value after altering a collection with any operation that can change its length.

> **Complexity**

> O(1)
