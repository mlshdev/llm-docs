> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablerawpointer/initializememory(as:from:count:)](https://developer.apple.com/documentation/swift/unsafemutablerawpointer/initializememory(as:from:count:))

# initializeMemory(as:from:count:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the memory referenced by this pointer with the values starting at the given pointer, binds the memory to the values’ type, and returns a typed pointer to the initialized memory.

## Declaration

```swift
@discardableResult func initializeMemory<T>(as type: T.Type, from source: UnsafePointer<T>, count: Int) -> UnsafeMutablePointer<T>
```

## Parameters

- `type`: The type to bind this memory to.
- `source`: A pointer to the values to copy. The memory in the region `source..<(source + count)` must be initialized to type `T` and must not overlap the destination region.
- `count`: The number of copies of `value` to copy into memory. `count` must not be negative.

<a id="return-value"></a>

## Return Value

A typed pointer to the memory referenced by this raw pointer.

<a id="discussion"></a>

## Discussion

The memory referenced by this pointer must be uninitialized or initialized to a trivial type, and must be properly aligned for accessing `T`.

The following example allocates enough raw memory to hold four instances of `Int8`, and then uses the `initializeMemory(as:from:count:)` method to initialize the allocated memory.

```swift
let count = 4
let bytesPointer = UnsafeMutableRawPointer.allocate(
        byteCount: count * MemoryLayout<Int8>.stride,
        alignment: MemoryLayout<Int8>.alignment)
let values: [Int8] = [1, 2, 3, 4]
let int8Pointer = values.withUnsafeBufferPointer { buffer in
    return bytesPointer.initializeMemory(as: Int8.self,
              from: buffer.baseAddress!,
              count: buffer.count)
}
// int8Pointer.pointee == 1
// (int8Pointer + 3).pointee == 4

// After using 'int8Pointer':
int8Pointer.deallocate()
```

After calling this method on a raw pointer `p`, the region starting at `p` and continuing up to `p + count * MemoryLayout<T>.stride` is bound to type `T` and initialized. If `T` is a nontrivial type, you must eventually deinitialize or move from the values in this region to avoid leaks. The instances in the region `source..<(source + count)` are unaffected.
