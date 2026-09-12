> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/removelast(_:)](https://developer.apple.com/documentation/swift/array/removelast(_:))

# removeLast(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the specified number of elements from the end of the collection.

## Declaration

```swift
mutating func removeLast(_ k: Int)
```

## Parameters

- `k`: The number of elements to remove from the collection. `k` must be greater than or equal to zero and must not exceed the number of elements in the collection.

<a id="discussion"></a>

## Discussion

Attempting to remove more elements than exist in the collection triggers a runtime error.

Calling this method may invalidate all saved indices of this collection. Do not rely on a previously stored index value after altering a collection with any operation that can change its length.

> **Complexity**

> O(*k*), where *k* is the specified number of elements.

## See Also

### Removing Elements

- [remove(at:)](remove%28at_%29.md): Removes and returns the element at the specified position.
- [removeFirst()](removefirst%28%29.md): Removes and returns the first element of the collection.
- [removeFirst(\_:)](removefirst%28__%29.md): Removes the specified number of elements from the beginning of the collection.
- [removeLast()](removelast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
- [removeSubrange(\_:)](removesubrange%28__%29-8may1.md): Removes the elements in the specified subrange from the collection.
- [removeSubrange(\_:)](removesubrange%28__%29-9twou.md): Removes the elements in the specified subrange from the collection.
- [removeAll(where:)](removeall%28where_%29-5k61r.md): Removes all the elements that satisfy the given predicate.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Removes all elements from the array.
- [popLast()](poplast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
