> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withtemporaryallocation(bytecount:alignment:_:)](https://developer.apple.com/documentation/swift/withtemporaryallocation(bytecount:alignment:_:))

# withTemporaryAllocation(byteCount:alignment:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Provides scoped access to an output raw span with the specified byte count and alignment.

## Declaration

```swift
func withTemporaryAllocation<R, E>(byteCount: Int, alignment: Int, _ body: @_lifetime(0: copy 0) (inout OutputRawSpan) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

## Parameters

- `byteCount`: The number of bytes to temporarily allocate. `byteCount` must not be negative.
- `alignment`: The alignment of the new, temporary region of allocated memory, in bytes. `alignment` must be a whole power of 2.
- `body`: A closure to invoke and to which the allocated output raw span should be passed.

<a id="return-value"></a>

## Return Value

Whatever is returned by `body`.

<a id="discussion"></a>

## Discussion

This function is useful for cheaply allocating raw storage for a brief duration. Storage may be allocated on the heap or on the stack, depending on the required size and alignment.

When `body` is called, it is passed an empty `OutputRawSpan`. `body` may append bytes to the output raw span. After `body` returns, deallocation is automatic.

> **Throws**

> Whatever is thrown by `body`.

## See Also

### Memory Access

- [withUnsafePointer(to:\_:)](withunsafepointer%28to___%29-9fjn6.md): Invokes the given closure with a pointer to the given argument.
- [withUnsafePointer(to:\_:)](withunsafepointer%28to___%29-35wrn.md): Invokes the given closure with a pointer to the given argument.
- [withUnsafeMutablePointer(to:\_:)](withunsafemutablepointer%28to___%29.md): Calls the given closure with a mutable pointer to the given argument.
- [withUnsafeBytes(of:\_:)](withunsafebytes%28of___%29-3ywhh.md): Invokes the given closure with a buffer pointer covering the raw bytes of the given argument.
- [withUnsafeMutableBytes(of:\_:)](withunsafemutablebytes%28of___%29.md): Invokes the given closure with a mutable buffer pointer covering the raw bytes of the given argument.
- [withTemporaryAllocation(of:capacity:\_:)](withtemporaryallocation%28of_capacity___%29.md): Provides scoped access to an output span of the specified type and capacity.
- [withUnsafeTemporaryAllocation(of:capacity:\_:)](withunsafetemporaryallocation%28of_capacity___%29.md): Provides scoped access to a buffer pointer to memory of the specified type and with the specified capacity.
- [withUnsafeTemporaryAllocation(byteCount:alignment:\_:)](withunsafetemporaryallocation%28bytecount_alignment___%29.md): Provides scoped access to a raw buffer pointer with the specified byte count and alignment.
- [swap(\_:\_:)](swap%28____%29.md): Exchanges the values of the two arguments.
- [exchange(\_:with:)](exchange%28__with_%29.md): Replaces the value of a mutable value with the supplied new value, returning the original.
