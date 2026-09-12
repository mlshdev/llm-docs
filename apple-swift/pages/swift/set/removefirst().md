> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/removefirst()](https://developer.apple.com/documentation/swift/set/removefirst())

# removeFirst()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the first element of the set.

## Declaration

```swift
@discardableResult mutating func removeFirst() -> Element
```

<a id="return-value"></a>

## Return Value

A member of the set.

<a id="discussion"></a>

## Discussion

Because a set is not an ordered collection, the “first” element may not be the first element that was added to the set. The set must not be empty.

> **Complexity**

> Amortized O(1) if the set does not wrap a bridged `NSSet`. If the set wraps a bridged `NSSet`, the performance is unspecified.

## See Also

### Removing Elements

- [filter(\_:)](filter%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of the set that satisfy the given predicate.
- [remove(\_:)](remove%28__%29-8p2tv.md): Conforms when `Element` conforms to `Hashable`. Removes the specified element from the set.
- [remove(\_:)](remove%28__%29-4d3i1.md): Conforms when `Element` is `AnyHashable`.
- [remove(at:)](remove%28at_%29.md): Conforms when `Element` conforms to `Hashable`. Removes the element at the given index of the set.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Conforms when `Element` conforms to `Hashable`. Removes all members from the set.
