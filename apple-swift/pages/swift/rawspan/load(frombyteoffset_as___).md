> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawspan/load(frombyteoffset:as:_:)](https://developer.apple.com/documentation/swift/rawspan/load(frombyteoffset:as:_:))

# load(fromByteOffset:as:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a value constructed from the raw memory at the specified offset.

## Declaration

```swift
func load<T>(fromByteOffset offset: Int, as type: T.Type, _ byteOrder: ByteOrder) -> T where T : ConvertibleFromBytes, T : FixedWidthInteger
```

## Parameters

- `offset`: The offset from the beginning of this span, in bytes. `offset` must be nonnegative.
- `type`: The type of the instance to create.
- `byteOrder`: The order in which the bytes will be decoded.

<a id="return-value"></a>

## Return Value

A new value of type `T`, read from `offset`.

<a id="discussion"></a>

## Discussion

The range of bytes required to construct a value of type `T` starting at `offset` must be completely within the span. `offset` is not required to be aligned for `T`.
