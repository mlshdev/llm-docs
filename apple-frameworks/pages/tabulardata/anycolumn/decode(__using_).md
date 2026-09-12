> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/anycolumn/decode(_:using:)](https://developer.apple.com/documentation/tabulardata/anycolumn/decode(_:using:))

# decode(\_:using:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Decodes the data in each element of the column.

## Declaration

```swift
mutating func decode<T, Decoder>(_ type: T.Type, using decoder: Decoder) throws where T : Decodable, Decoder : TopLevelDecoder
```

## Parameters

- `type`: The type of the value to decode.
- `decoder`: A decoder that accepts the column elements’ type.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ColumnDecodingError` if an element fails to decode.

## See Also

### Decoding a Column

- [decoded(\_:using:)](decoded%28__using_%29.md): Decodes data for each element of the column.
