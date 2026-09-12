> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/insert(_:)-yar4](https://developer.apple.com/documentation/swift/set/insert(_:)-yar4)

# insert(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
@discardableResult mutating func insert<ConcreteElement>(_ newMember: ConcreteElement) -> (inserted: Bool, memberAfterInsert: ConcreteElement) where ConcreteElement : Hashable
```

## See Also

### Adding Elements

- [insert(\_:)](insert%28__%29-nads.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element in the set if it is not already present.
- [update(with:)](update%28with_%29-2n6tk.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element into the set unconditionally.
- [update(with:)](update%28with_%29-7r2g.md): Conforms when `Element` is `AnyHashable`.
- [reserveCapacity(\_:)](reservecapacity%28__%29.md): Conforms when `Element` conforms to `Hashable`. Reserves enough space to store the specified number of elements.
