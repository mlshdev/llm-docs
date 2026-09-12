> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/initializememory(as:repeating:)](https://developer.apple.com/documentation/swift/slice/initializememory(as:repeating:))

# initializeMemory(as:repeating:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the memory referenced by this buffer slice with the given value, binds the memory to the value’s type, and returns a typed buffer of the initialized memory.

## Declaration

```swift
@discardableResult func initializeMemory<T>(as type: T.Type, repeating repeatedValue: T) -> UnsafeMutableBufferPointer<T>
```

## Parameters

- `type`: The type to bind this buffer’s memory to.
- `repeatedValue`: The instance to copy into memory.

<a id="return-value"></a>

## Return Value

A typed buffer of the memory referenced by this raw buffer. The typed buffer contains `self.count / MemoryLayout<T>.stride` instances of `T`.

<a id="discussion"></a>

## Discussion

The memory referenced by this buffer slice must be uninitialized or initialized to a trivial type, and must be properly aligned for accessing `T`.

After calling this method on a raw buffer slice referencing memory starting at `b = base.baseAddress + startIndex`, the region starting at `b` and continuing up to `b + self.count - self.count % MemoryLayout<T>.stride` is bound to type `T` and is initialized. If `T` is a nontrivial type, you must eventually deinitialize or move the values in this region to avoid leaks. If `base.baseAddress` is `nil`, this function does nothing and returns an empty buffer pointer.
