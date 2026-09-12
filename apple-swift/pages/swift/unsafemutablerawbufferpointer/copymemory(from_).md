> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablerawbufferpointer/copymemory(from:)](https://developer.apple.com/documentation/swift/unsafemutablerawbufferpointer/copymemory(from:))

# copyMemory(from:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the bytes from the given buffer to this buffer’s memory.

## Declaration

```swift
func copyMemory(from source: UnsafeRawBufferPointer)
```

## Parameters

- `source`: A buffer of raw bytes. `source.count` must be less than or equal to this buffer’s `count`.

<a id="discussion"></a>

## Discussion

If the `source.count` bytes of memory referenced by this buffer are bound to a type `T`, then `T` must be a trivial type, the underlying pointer must be properly aligned for accessing `T`, and `source.count` must be a multiple of `MemoryLayout<T>.stride`.

The memory referenced by `source` may overlap with the memory referenced by this buffer.

After calling `copyMemory(from:)`, the first `source.count` bytes of memory referenced by this buffer are initialized to raw bytes. If the memory is bound to type `T`, then it contains values of type `T`.
