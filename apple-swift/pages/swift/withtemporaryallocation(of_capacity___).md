> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withtemporaryallocation(of:capacity:_:)](https://developer.apple.com/documentation/swift/withtemporaryallocation(of:capacity:_:))

# withTemporaryAllocation(of:capacity:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Provides scoped access to an output span of the specified type and capacity.

## Declaration

```swift
func withTemporaryAllocation<T, R, E>(of type: T.Type, capacity: Int, _ body: @_lifetime(0: copy 0) (inout OutputSpan<T>) throws(E) -> R) throws(E) -> R where E : Error, T : ~Copyable, R : ~Copyable
```

## Parameters

- `type`: The type of the elements in the buffer being temporarily allocated.
- `capacity`: The capacity of the output span being temporarily allocated.
- `body`: A closure to invoke and to which the allocated output span should be passed.

<a id="return-value"></a>

## Return Value

Whatever is returned by `body`.

<a id="discussion"></a>

## Discussion

This function is useful for cheaply allocating storage for a sequence of values for a brief duration. Storage may be allocated on the heap or on the stack, depending on the required size and alignment.

When `body` is called, it is passed an empty `OutputSpan`. `body` may append or initialize elements in the output span. Any elements that have been initialized when `body` returns are deinitialized automatically, and deallocation is also automatic.

> **Throws**

> Whatever is thrown by `body`.

## See Also

### Memory Access

- [withUnsafePointer(to:\_:)](withunsafepointer%28to___%29-9fjn6.md): Invokes the given closure with a pointer to the given argument.
- [withUnsafePointer(to:\_:)](withunsafepointer%28to___%29-35wrn.md): Invokes the given closure with a pointer to the given argument.
- [withUnsafeMutablePointer(to:\_:)](withunsafemutablepointer%28to___%29.md): Calls the given closure with a mutable pointer to the given argument.
- [withUnsafeBytes(of:\_:)](withunsafebytes%28of___%29-3ywhh.md): Invokes the given closure with a buffer pointer covering the raw bytes of the given argument.
- [withUnsafeMutableBytes(of:\_:)](withunsafemutablebytes%28of___%29.md): Invokes the given closure with a mutable buffer pointer covering the raw bytes of the given argument.
- [withTemporaryAllocation(byteCount:alignment:\_:)](withtemporaryallocation%28bytecount_alignment___%29.md): Provides scoped access to an output raw span with the specified byte count and alignment.
- [withUnsafeTemporaryAllocation(of:capacity:\_:)](withunsafetemporaryallocation%28of_capacity___%29.md): Provides scoped access to a buffer pointer to memory of the specified type and with the specified capacity.
- [withUnsafeTemporaryAllocation(byteCount:alignment:\_:)](withunsafetemporaryallocation%28bytecount_alignment___%29.md): Provides scoped access to a raw buffer pointer with the specified byte count and alignment.
- [swap(\_:\_:)](swap%28____%29.md): Exchanges the values of the two arguments.
- [exchange(\_:with:)](exchange%28__with_%29.md): Replaces the value of a mutable value with the supplied new value, returning the original.
