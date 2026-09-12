> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/remove(at:)](https://developer.apple.com/documentation/swift/array/remove(at:))

# remove(at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes and returns the element at the specified position.

## Declaration

```swift
@discardableResult mutating func remove(at index: Int) -> Element
```

## Parameters

- `index`: The position of the element to remove. `index` must be a valid index of the array.

<a id="return-value"></a>

## Return Value

The element at the specified index.

<a id="discussion"></a>

## Discussion

All the elements following the specified position are moved up to close the gap.

```swift
var measurements: [Double] = [1.1, 1.5, 2.9, 1.2, 1.5, 1.3, 1.2]
let removed = measurements.remove(at: 2)
print(measurements)
// Prints "[1.1, 1.5, 1.2, 1.5, 1.3, 1.2]"
```

> **Complexity**

> O(*n*), where *n* is the length of the array.

## See Also

### Removing Elements

- [removeFirst()](removefirst%28%29.md): Removes and returns the first element of the collection.
- [removeFirst(\_:)](removefirst%28__%29.md): Removes the specified number of elements from the beginning of the collection.
- [removeLast()](removelast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
- [removeLast(\_:)](removelast%28__%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes the specified number of elements from the end of the collection.
- [removeSubrange(\_:)](removesubrange%28__%29-8may1.md): Removes the elements in the specified subrange from the collection.
- [removeSubrange(\_:)](removesubrange%28__%29-9twou.md): Removes the elements in the specified subrange from the collection.
- [removeAll(where:)](removeall%28where_%29-5k61r.md): Removes all the elements that satisfy the given predicate.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Removes all elements from the array.
- [popLast()](poplast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
