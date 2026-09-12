> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablepointer/moveupdate(from:count:)](https://developer.apple.com/documentation/swift/unsafemutablepointer/moveupdate(from:count:))

# moveUpdate(from:count:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Update this pointer’s initialized memory by moving the specified number of instances the source pointer’s memory, leaving the source memory uninitialized.

## Declaration

```swift
func moveUpdate(from source: UnsafeMutablePointer<Pointee>, count: Int)
```

## Parameters

- `source`: A pointer to the values to be moved. The memory region `source..<(source + count)` must be initialized. The memory regions referenced by `source` and this pointer must not overlap.
- `count`: The number of instances to move from `source` to this pointer’s memory. `count` must not be negative.

<a id="discussion"></a>

## Discussion

The region of memory starting at this pointer and covering `count` instances of the pointer’s `Pointee` type must be initialized or `Pointee` must be a trivial type. After calling `moveUpdate(from:count:)`, the region is initialized and the memory region `source..<(source + count)` is uninitialized.

> **Note**

> The source and destination memory regions must not overlap.
