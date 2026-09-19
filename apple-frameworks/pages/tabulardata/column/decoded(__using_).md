> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/column/decoded(_:using:)

# decoded(\_:using:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a column by decoding each element’s data.

## Declaration

```swift
func decoded<T, Decoder>(_ type: T.Type, using decoder: Decoder) throws -> Column<T> where WrappedElement == Decoder.Input, T : Decodable, Decoder : TopLevelDecoder
```

## Parameters

- `type`: The decodable value’s type.
- `decoder`: A decoder.

<a id="return-value"></a>

## Return Value

A new column of decoded values.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ColumnDecodingError` when the decoder fails to decode an element.
