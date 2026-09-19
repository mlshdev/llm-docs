> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/dataframe/row/subscript(_:)-9bmjj

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses a slice from a range of indices.

## Declaration

```swift
subscript(bounds: Range<Int>) -> Slice<DataFrame.Row> { get set }
```

## Parameters

- `bounds`: A valid column index range.
