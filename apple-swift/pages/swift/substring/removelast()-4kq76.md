> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/removelast()-4kq76](https://developer.apple.com/documentation/swift/substring/removelast()-4kq76)

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

The collection must not be empty.

Calling this method may invalidate all saved indices of this collection. Do not rely on a previously stored index value after altering a collection with any operation that can change its length.

> **Complexity**

> O(1)
