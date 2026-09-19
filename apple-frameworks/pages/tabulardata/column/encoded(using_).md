> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/column/encoded(using:)

# encoded(using:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a column by encoding each element’s value.

## Declaration

```swift
func encoded<Encoder>(using encoder: Encoder) throws -> Column<Encoder.Output> where Encoder : TopLevelEncoder
```

## Parameters

- `encoder`: An encoder.

<a id="return-value"></a>

## Return Value

A new column of encoded values.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ColumnEncodingError` when the encoder fails to encode an element.
