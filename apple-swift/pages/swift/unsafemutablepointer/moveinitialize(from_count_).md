> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablepointer/moveinitialize(from:count:)](https://developer.apple.com/documentation/swift/unsafemutablepointer/moveinitialize(from:count:))

# moveInitialize(from:count:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Moves instances from initialized source memory into the uninitialized memory referenced by this pointer, leaving the source memory uninitialized and the memory referenced by this pointer initialized.

## Declaration

```swift
func moveInitialize(from source: UnsafeMutablePointer<Pointee>, count: Int)
```

## Parameters

- `source`: A pointer to the values to copy. The memory region `source..<(source + count)` must be initialized. The memory regions referenced by `source` and this pointer may overlap.
- `count`: The number of instances to move from `source` to this pointer’s memory. `count` must not be negative.

<a id="discussion"></a>

## Discussion

The region of memory starting at this pointer and covering `count` instances of the pointer’s `Pointee` type must be uninitialized or `Pointee` must be a trivial type. After calling `moveInitialize(from:count:)`, the region is initialized and the memory region `source..<(source + count)` is uninitialized.

> **Note**

> Returns without performing work if `self` and `source` are equal.
