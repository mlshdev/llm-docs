> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/update(from:)](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/update(from:))

# update(from:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates the buffer’s initialized memory with the given elements.

## Declaration

```swift
func update<S>(from source: S) -> (unwritten: S.Iterator, index: UnsafeMutableBufferPointer<Element>.Index) where Element == S.Element, S : Sequence
```

## Parameters

- `source`: A sequence of elements to be used to update the buffer’s contents.

<a id="return-value"></a>

## Return Value

An iterator to any elements of `source` that didn’t fit in the buffer, and the index one past the last updated element in the buffer.

<a id="discussion"></a>

## Discussion

The buffer’s memory must be initialized or its `Element` type must be a trivial type.
