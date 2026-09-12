> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawspan/load(frombyteoffset:as:)](https://developer.apple.com/documentation/swift/rawspan/load(frombyteoffset:as:))

# load(fromByteOffset:as:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Returns a value constructed from the raw memory at the specified offset.

## Declaration

```swift
func load<T>(fromByteOffset offset: Int, as type: T.Type) -> T where T : ConvertibleFromBytes
```

## Parameters

- `offset`: The offset from the beginning of this span, in bytes. `offset` must be nonnegative.
- `type`: The type of the instance to create.

<a id="return-value"></a>

## Return Value

A new value of type `T`, read from `offset`.

<a id="discussion"></a>

## Discussion

The range of bytes required to construct a value of type `T` starting at `offset` must be completely within the span. `offset` is not required to be aligned for `T`.
