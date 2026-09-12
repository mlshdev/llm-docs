> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/update(fromcontentsof:)](https://developer.apple.com/documentation/swift/slice/update(fromcontentsof:))

# update(fromContentsOf:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates the buffer slice’s initialized memory with every element of the source.

## Declaration

```swift
func update<Element>(fromContentsOf source: some Collection) -> Slice<Base>.Index where Base == UnsafeMutableBufferPointer<Element>
```

## Parameters

- `source`: A collection of elements to be used to update the buffer’s contents.

<a id="return-value"></a>

## Return Value

An index one past the index of the last element updated.

<a id="discussion"></a>

## Discussion

Prior to calling the `update(fromContentsOf:)` method on a buffer slice, the first `source.count` elements of the referenced memory must be initialized, or the `Element` type must be a trivial type. The buffer slice must reference enough initialized memory to accommodate `source.count` elements.

The returned index is one past the index of the last element updated. If `source` contains no elements, the returned index is the buffer slice’s `startIndex`. If `source` contains as many elements as the buffer slice can hold, the returned index is the buffer slice’s `endIndex`.

> **Note**

> The memory regions referenced by `source` and this buffer slice may overlap.

> **Precondition**

> `self.count` \>= `source.count`
