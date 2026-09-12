> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bitcast(_:to:)](https://developer.apple.com/documentation/swift/bitcast(_:to:))

# bitCast(\_:to:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the bits of the given instance, interpreted as having the specified type.

## Declaration

```swift
func bitCast<T, U>(_ original: T, to type: U.Type) -> U where T : ConvertibleToBytes, U : ConvertibleFromBytes
```

## Parameters

- `original`: The instance to cast to `type`.
- `type`: The type to cast `original` to.

<a id="return-value"></a>

## Return Value

A new instance of type `U`, cast from `original`.

<a id="discussion"></a>

## Discussion

`T` and `U` must have the same-sized memory representation. If they don’t, this function will trap.

## See Also

### Safe Access to Raw Bytes

- [FullyInhabited](fullyinhabited.md): A protocol for types whose memory can safely be written as or read from raw bytes.
- [ConvertibleFromBytes](convertiblefrombytes.md): A protocol for types whose memory can safely be populated from raw bytes, resulting in a valid instance.
- [ConvertibleToBytes](convertibletobytes.md): A protocol for types whose memory can safely be read as individual raw bytes.
- [ByteOrder](byteorder.md): A byte ordering in memory.
