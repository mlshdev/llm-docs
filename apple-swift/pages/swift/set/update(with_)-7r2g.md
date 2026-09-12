> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/update(with:)-7r2g](https://developer.apple.com/documentation/swift/set/update(with:)-7r2g)

# update(with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
@discardableResult mutating func update<ConcreteElement>(with newMember: ConcreteElement) -> ConcreteElement? where ConcreteElement : Hashable
```

## See Also

### Adding Elements

- [insert(\_:)](insert%28__%29-nads.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element in the set if it is not already present.
- [insert(\_:)](insert%28__%29-yar4.md): Conforms when `Element` is `AnyHashable`.
- [update(with:)](update%28with_%29-2n6tk.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element into the set unconditionally.
- [reserveCapacity(\_:)](reservecapacity%28__%29.md): Conforms when `Element` conforms to `Hashable`. Reserves enough space to store the specified number of elements.
