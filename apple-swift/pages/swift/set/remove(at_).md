> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/remove(at:)](https://developer.apple.com/documentation/swift/set/remove(at:))

# remove(at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the element at the given index of the set.

## Declaration

```swift
@discardableResult mutating func remove(at position: Set<Element>.Index) -> Element
```

## Parameters

- `position`: The index of the member to remove. `position` must be a valid index of the set, and must not be equal to the set’s end index.

<a id="return-value"></a>

## Return Value

The element that was removed from the set.

## See Also

### Removing Elements

- [filter(\_:)](filter%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of the set that satisfy the given predicate.
- [remove(\_:)](remove%28__%29-8p2tv.md): Conforms when `Element` conforms to `Hashable`. Removes the specified element from the set.
- [remove(\_:)](remove%28__%29-4d3i1.md): Conforms when `Element` is `AnyHashable`.
- [removeFirst()](removefirst%28%29.md): Conforms when `Element` conforms to `Hashable`. Removes the first element of the set.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Conforms when `Element` conforms to `Hashable`. Removes all members from the set.
