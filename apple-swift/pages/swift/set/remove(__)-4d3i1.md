> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/remove(_:)-4d3i1](https://developer.apple.com/documentation/swift/set/remove(_:)-4d3i1)

# remove(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
@discardableResult mutating func remove<ConcreteElement>(_ member: ConcreteElement) -> ConcreteElement? where ConcreteElement : Hashable
```

## See Also

### Removing Elements

- [filter(\_:)](filter%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of the set that satisfy the given predicate.
- [remove(\_:)](remove%28__%29-8p2tv.md): Conforms when `Element` conforms to `Hashable`. Removes the specified element from the set.
- [removeFirst()](removefirst%28%29.md): Conforms when `Element` conforms to `Hashable`. Removes the first element of the set.
- [remove(at:)](remove%28at_%29.md): Conforms when `Element` conforms to `Hashable`. Removes the element at the given index of the set.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Conforms when `Element` conforms to `Hashable`. Removes all members from the set.
