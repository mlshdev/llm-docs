> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/removeall(keepingcapacity:)](https://developer.apple.com/documentation/swift/set/removeall(keepingcapacity:))

# removeAll(keepingCapacity:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all members from the set.

## Declaration

```swift
mutating func removeAll(keepingCapacity keepCapacity: Bool = false)
```

## Parameters

- `keepCapacity`: If `true`, the set’s buffer capacity is preserved; if `false`, the underlying buffer is released. The default is `false`.

## See Also

### Removing Elements

- [filter(\_:)](filter%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of the set that satisfy the given predicate.
- [remove(\_:)](remove%28__%29-8p2tv.md): Conforms when `Element` conforms to `Hashable`. Removes the specified element from the set.
- [remove(\_:)](remove%28__%29-4d3i1.md): Conforms when `Element` is `AnyHashable`.
- [removeFirst()](removefirst%28%29.md): Conforms when `Element` conforms to `Hashable`. Removes the first element of the set.
- [remove(at:)](remove%28at_%29.md): Conforms when `Element` conforms to `Hashable`. Removes the element at the given index of the set.
