> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/exchange(_:with:)](https://developer.apple.com/documentation/swift/exchange(_:with:))

# exchange(\_:with:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the value of a mutable value with the supplied new value, returning the original.

## Declaration

```swift
func exchange<T>(_ item: inout T, with newValue: consuming T) -> T where T : ~Copyable
```

## Parameters

- `item`: A mutable binding.
- `newValue`: The new value of `item`.

<a id="return-value"></a>

## Return Value

The original value of `item`.

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
- [withUnsafeTemporaryAllocation(byteCount:alignment:\_:)](withunsafetemporaryallocation%28bytecount_alignment___%29.md): Provides scoped access to a raw buffer pointer with the specified byte count and alignment.
- [swap(\_:\_:)](swap%28____%29.md): Exchanges the values of the two arguments.
