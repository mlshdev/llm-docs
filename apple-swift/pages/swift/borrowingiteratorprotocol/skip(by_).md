> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/borrowingiteratorprotocol/skip(by:)](https://developer.apple.com/documentation/swift/borrowingiteratorprotocol/skip(by:))

# skip(by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Advances the position of this iterator by the specified offset, or until the end of the underlying type’s elements.

## Declaration

```swift
mutating func skip(by maxOffset: Int) throws(Self.Failure) -> Int
```

## Parameters

- `maxOffset`: The maximum number of elements to offset the position of this iterator. `maxOffset` must be nonnegative.

<a id="return-value"></a>

## Return Value

The number of items that were skipped. If the returned count is less than `maxOffset`, then the underlying type did not have enough elements left to skip the requested number of items. In that case, the iterator’s position is set to the end of the underlying type.

## Default Implementations

### BorrowingIteratorProtocol Implementations

- [skip(by:)](skip%28by_%29-2c2z4.md): Advances the position of this iterator by the specified offset, or until the end of the underlying type’s elements.
