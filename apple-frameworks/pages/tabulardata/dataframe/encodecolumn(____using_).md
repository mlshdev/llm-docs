> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/encodecolumn(_:_:using:)](https://developer.apple.com/documentation/tabulardata/dataframe/encodecolumn(_:_:using:))

# encodeColumn(\_:\_:using:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Encodes the elements of a column you select by name.

## Declaration

```swift
mutating func encodeColumn<T, Encoder>(_ columnName: String, _ type: T.Type, using encoder: Encoder) throws where T : Encodable, Encoder : TopLevelEncoder
```

## Parameters

- `columnName`: The name of a column.
- `type`: The type of the column.
- `encoder`: A encoder that accepts the column’s type.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ColumnEncodingError` when the encoder fails to encode a column element.

## See Also

### Encoding a Column

- [encodeColumn(\_:using:)](encodecolumn%28__using_%29.md): Encodes the elements of a column you select by column identifier.
