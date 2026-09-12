> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withunsafetemporaryallocation(bytecount:alignment:_:)](https://developer.apple.com/documentation/swift/withunsafetemporaryallocation(bytecount:alignment:_:))

# withUnsafeTemporaryAllocation(byteCount:alignment:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Provides scoped access to a raw buffer pointer with the specified byte count and alignment.

## Declaration

```swift
func withUnsafeTemporaryAllocation<R, E>(byteCount: Int, alignment: Int, _ body: (UnsafeMutableRawBufferPointer) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

## Parameters

- `byteCount`: The number of bytes to temporarily allocate. `byteCount` must not be negative.
- `alignment`: The alignment of the new, temporary region of allocated memory, in bytes. `alignment` must be a whole power of 2.
- `body`: A closure to invoke and to which the allocated buffer pointer should be passed.

<a id="return-value"></a>

## Return Value

Whatever is returned by `body`.

<a id="discussion"></a>

## Discussion

> **Throws**

> Whatever is thrown by `body`.

This function is useful for cheaply allocating raw storage for a brief duration. Storage may be allocated on the heap or on the stack, depending on the required size and alignment.

When `body` is called, the contents of the buffer pointer passed to it are in an unspecified, uninitialized state. `body` is responsible for initializing the buffer pointer before it is used *and* for deinitializing it before returning, but deallocation is automatic.

The buffer pointer passed to `body` (as well as any pointers to elements in the buffer) must not escape. It will be deallocated when `body` returns and cannot be used afterward.

## See Also

### Memory Access

- [withUnsafePointer(to:\_:)](withunsafepointer%28to___%29-9fjn6.md): Invokes the given closure with a pointer to the given argument.
- [withUnsafePointer(to:\_:)](withunsafepointer%28to___%29-35wrn.md): Invokes the given closure with a pointer to the given argument.
- [withUnsafeMutablePointer(to:\_:)](withunsafemutablepointer%28to___%29.md): Calls the given closure with a mutable pointer to the given argument.
- [withUnsafeBytes(of:\_:)](withunsafebytes%28of___%29-3ywhh.md): Invokes the given closure with a buffer pointer covering the raw bytes of the given argument.
- [withUnsafeMutableBytes(of:\_:)](withunsafemutablebytes%28of___%29.md): Invokes the given closure with a mutable buffer pointer covering the raw bytes of the given argument.
- [withTemporaryAllocation(byteCount:alignment:\_:)](withtemporaryallocation%28bytecount_alignment___%29.md): Provides scoped access to an output raw span with the specified byte count and alignment.
- [withTemporaryAllocation(of:capacity:\_:)](withtemporaryallocation%28of_capacity___%29.md): Provides scoped access to an output span of the specified type and capacity.
- [withUnsafeTemporaryAllocation(of:capacity:\_:)](withunsafetemporaryallocation%28of_capacity___%29.md): Provides scoped access to a buffer pointer to memory of the specified type and with the specified capacity.
- [swap(\_:\_:)](swap%28____%29.md): Exchanges the values of the two arguments.
- [exchange(\_:with:)](exchange%28__with_%29.md): Replaces the value of a mutable value with the supplied new value, returning the original.
