> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/dataframeprotocol/subscript(_:)-8hly3

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses rows of a data frame type with an index range expression.

## Declaration

```swift
subscript<R>(r: R) -> DataFrame.Slice where R : RangeExpression, R.Bound == Int { get set }
```

## Parameters

- `r`: An integer range expression.

## See Also

### Accessing Rows

- [subscript(\_:)](subscript%28__%29.md): Accesses a slice of the data frame type with an index range.
