> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/moveinitialize(fromcontentsof:)-82ebd](https://developer.apple.com/documentation/swift/slice/moveinitialize(fromcontentsof:)-82ebd)

# moveInitialize(fromContentsOf:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Moves every element of an initialized source buffer into the uninitialized memory referenced by this buffer slice, leaving the source memory uninitialized and this buffer slice’s memory initialized.

## Declaration

```swift
func moveInitialize<Element>(fromContentsOf source: UnsafeMutableBufferPointer<Element>) -> Slice<Base>.Index where Base == UnsafeMutableBufferPointer<Element>
```

## Parameters

- `source`: A buffer containing the values to copy. The memory region underlying `source` must be initialized.

<a id="return-value"></a>

## Return Value

The index one past the last element of the buffer slice initialized by this function.

<a id="discussion"></a>

## Discussion

Prior to calling the `moveInitialize(fromContentsOf:)` method on a buffer slice, the memory it references must be uninitialized, or its `Element` type must be a trivial type. After the call, the memory referenced by the buffer slice up to, but not including, the returned index is initialized. The memory referenced by `source` is uninitialized after the function returns. The buffer slice must reference enough memory to accommodate `source.count` elements.

The returned index is the position of the next uninitialized element in the buffer slice, one past the index of the last element written. If `source` contains no elements, the returned index is equal to the slice’s `startIndex`. If `source` contains as many elements as the slice can hold, the returned index is equal to the slice’s `endIndex`.

> **Note**

> The memory regions referenced by `source` and this buffer slice may overlap.

> **Precondition**

> `self.count` \>= `source.count`
