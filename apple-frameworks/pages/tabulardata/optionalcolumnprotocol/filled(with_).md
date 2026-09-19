> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/optionalcolumnprotocol/filled(with:)

# filled(with:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a filled column by replacing missing elements with a value.

## Declaration

```swift
func filled(with value: Self.WrappedElement) -> FilledColumn<Self>
```

## Parameters

- `value`: A value the method uses to replace the column’s missing elements.

<a id="return-value"></a>

## Return Value

A filled column.
