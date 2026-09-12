> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/decode(_:incolumn:using:)-443a9](https://developer.apple.com/documentation/tabulardata/dataframe/decode(_:incolumn:using:)-443a9)

# decode(\_:inColumn:using:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Decodes the elements of a column you select by name.

## Declaration

```swift
mutating func decode<T, Decoder>(_ type: T.Type, inColumn columnName: String, using decoder: Decoder) throws where T : Decodable, Decoder : TopLevelDecoder
```

## Parameters

- `type`: The type of the decodable value.
- `columnName`: The name of a column.
- `decoder`: A decoder that accepts the column’s type.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ColumnDecodingError` when the decoder fails to decode a column element.

## See Also

### Decoding a Column

- [decode(\_:inColumn:using:)](decode%28__incolumn_using_%29-2brfw.md): Decodes the elements of a column you select by column identifier.
