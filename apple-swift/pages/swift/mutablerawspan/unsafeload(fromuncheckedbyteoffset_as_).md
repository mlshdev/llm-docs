> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablerawspan/unsafeload(fromuncheckedbyteoffset:as:)](https://developer.apple.com/documentation/swift/mutablerawspan/unsafeload(fromuncheckedbyteoffset:as:))

# unsafeLoad(fromUncheckedByteOffset:as:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Returns a new instance of the given type, constructed from the raw memory at the specified offset.

## Declaration

```swift
func unsafeLoad<T>(fromUncheckedByteOffset offset: Int, as type: T.Type) -> T
```

## Parameters

- `offset`: The offset from this pointer, in bytes. `offset` must be nonnegative. The default is zero.
- `type`: The type of the instance to create.

<a id="return-value"></a>

## Return Value

A new instance of type `T`, read from the raw bytes at `offset`. The returned instance is memory-managed and unassociated with the value in the memory referenced by this pointer.

<a id="discussion"></a>

## Discussion

The memory at this pointer plus `offset` must be properly aligned for accessing `T` and initialized to `T` or another type that is layout compatible with `T`.

This is an unsafe operation. This function does not validate the bounds of the memory access, and failure to meet the preconditions above may produce an invalid value of `T`.
