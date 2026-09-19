> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/anycolumn/encoded(_:using:)

# encoded(\_:using:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a column by encoding each element’s value.

## Declaration

```swift
func encoded<T, Encoder>(_ type: T.Type, using encoder: Encoder) throws -> AnyColumn where T : Encodable, Encoder : TopLevelEncoder
```

## Parameters

- `type`: The column underlying type.
- `encoder`: An encoder.

<a id="return-value"></a>

## Return Value

A new column of encoded values.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ColumnEncodingError` when the encoder fails to encode an element.

## See Also

### Encoding a Column

- [encode(\_:using:)](encode%28__using_%29.md): Encodes each element of the column.
