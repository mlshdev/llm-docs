> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsaferawpointer/load(frombyteoffset:as:)](https://developer.apple.com/documentation/swift/unsaferawpointer/load(frombyteoffset:as:))

# load(fromByteOffset:as:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new instance of the given type, constructed from the raw memory at the specified offset.

## Declaration

```swift
func load<T>(fromByteOffset offset: Int = 0, as type: T.Type) -> T where T : ~Escapable
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
