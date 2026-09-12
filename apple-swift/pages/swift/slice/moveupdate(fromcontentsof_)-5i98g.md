> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/moveupdate(fromcontentsof:)-5i98g](https://developer.apple.com/documentation/swift/slice/moveupdate(fromcontentsof:)-5i98g)

# moveUpdate(fromContentsOf:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates this buffer slice’s initialized memory by moving every element from the source buffer, leaving the source memory uninitialized.

## Declaration

```swift
func moveUpdate<Element>(fromContentsOf source: UnsafeMutableBufferPointer<Element>) -> Slice<Base>.Index where Base == UnsafeMutableBufferPointer<Element>
```

## Parameters

- `source`: A buffer containing the values to move. The memory region underlying `source` must be initialized.

<a id="return-value"></a>

## Return Value

An index one past the index of the last element updated.

<a id="discussion"></a>

## Discussion

The region of memory starting at the beginning of this buffer slice and covering `source.count` instances of its `Element` type  must be initialized, or its `Element` type must be a trivial type. After calling `moveUpdate(fromContentsOf:)`, the region of memory underlying `source` is uninitialized. The buffer slice must reference enough initialized memory to accommodate `source.count` elements.

The returned index is one past the index of the last element updated. If `source` contains no elements, the returned index is equal to the buffer’s `startIndex`. If `source` contains as many elements as the buffer slice can hold, the returned index is equal to the slice’s `endIndex`.

> **Note**

> The memory regions referenced by `source` and this buffer slice must not overlap.

> **Precondition**

> `self.count` \>= `source.count`
