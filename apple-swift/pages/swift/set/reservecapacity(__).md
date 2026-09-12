> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/reservecapacity(_:)](https://developer.apple.com/documentation/swift/set/reservecapacity(_:))

# reserveCapacity(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reserves enough space to store the specified number of elements.

## Declaration

```swift
mutating func reserveCapacity(_ minimumCapacity: Int)
```

## Parameters

- `minimumCapacity`: The requested number of elements to store.

<a id="discussion"></a>

## Discussion

If you are adding a known number of elements to a set, use this method to avoid multiple reallocations. This method ensures that the set has unique, mutable, contiguous storage, with space allocated for at least the requested number of elements.

Calling the `reserveCapacity(_:)` method on a set with bridged storage triggers a copy to contiguous storage even if the existing storage has room to store `minimumCapacity` elements.

## See Also

### Adding Elements

- [insert(\_:)](insert%28__%29-nads.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element in the set if it is not already present.
- [insert(\_:)](insert%28__%29-yar4.md): Conforms when `Element` is `AnyHashable`.
- [update(with:)](update%28with_%29-2n6tk.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element into the set unconditionally.
- [update(with:)](update%28with_%29-7r2g.md): Conforms when `Element` is `AnyHashable`.
