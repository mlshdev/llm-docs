> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/anycolumn/prototype

# prototype

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A prototype that creates type-erased columns with the same underlying type as the column slice.

## Declaration

```swift
var prototype: any AnyColumnPrototype { get }
```

<a id="discussion"></a>

## Discussion

Use a type-erased column prototype to create new columns of the same type as the slice’s parent column without explicitly knowing what type it is, by calling the `prototype` property’s [makeColumn(capacity:)](../anycolumnprototype/makecolumn%28capacity_%29.md) method.

```swift
// Get a type-erased column.
let someColumn: AnyColumn = dataFrame["someFeature"]

// Create a new column with the same type.
let newColumn = someColumn.prototype.makeColumn(capacity: 10)
```
