> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/anycolumn/encode(_:using:)

# encode(\_:using:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Encodes each element of the column.

## Declaration

```swift
mutating func encode<T, Encoder>(_ type: T.Type, using encoder: Encoder) throws where T : Encodable, Encoder : TopLevelEncoder
```

## Parameters

- `type`: The type of elements in the column.
- `encoder`: An encoder.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ColumnEncodingError` if an element fails to encode.

## See Also

### Encoding a Column

- [encoded(\_:using:)](encoded%28__using_%29.md): Generates a column by encoding each element’s value.
