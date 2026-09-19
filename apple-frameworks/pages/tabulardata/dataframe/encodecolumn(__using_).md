> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/dataframe/encodecolumn(_:using:)

# encodeColumn(\_:using:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Encodes the elements of a column you select by column identifier.

## Declaration

```swift
mutating func encodeColumn<T, Encoder>(_ id: ColumnID<T>, using encoder: Encoder) throws where T : Encodable, Encoder : TopLevelEncoder
```

## Parameters

- `id`: The name of a column.
- `encoder`: A encoder that accepts the column’s type.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ColumnEncodingError` when the encoder fails to encode a column element.

## See Also

### Encoding a Column

- [encodeColumn(\_:\_:using:)](encodecolumn%28____using_%29.md): Encodes the elements of a column you select by name.
