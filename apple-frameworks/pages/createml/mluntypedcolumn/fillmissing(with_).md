> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mluntypedcolumn/fillmissing(with:)

# fillMissing(with:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a modified copy of the column such that every missing element is replaced with the given value.

## Declaration

```swift
func fillMissing(with value: MLDataValue) -> MLUntypedColumn
```

## Parameters

- `value`: A value to replace every undefined element.

<a id="return-value"></a>

## Return Value

A new `MLDataColumn` column.
