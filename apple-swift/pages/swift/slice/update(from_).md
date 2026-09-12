> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/update(from:)](https://developer.apple.com/documentation/swift/slice/update(from:))

# update(from:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates the buffer slice’s initialized memory with the given elements.

## Declaration

```swift
func update<S>(from source: S) -> (unwritten: S.Iterator, index: Slice<Base>.Index) where Base == UnsafeMutableBufferPointer<S.Element>, S : Sequence
```

## Parameters

- `source`: A sequence of elements to be used to update the contents of the buffer slice.

<a id="return-value"></a>

## Return Value

An iterator to any elements of `source` that didn’t fit in the buffer slice, and the index one past the last updated element.

<a id="discussion"></a>

## Discussion

The buffer slice’s memory must be initialized or its `Element` type must be a trivial type.
