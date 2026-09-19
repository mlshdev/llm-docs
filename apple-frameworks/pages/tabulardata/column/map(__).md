> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/column/map(_:)

# map(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new column by applying a transformation to every element.

## Declaration

```swift
func map<T>(_ transform: (Column<WrappedElement>.Element) throws -> T?) rethrows -> Column<T>
```

## Parameters

- `transform`: A transformation closure.

## See Also

### Creating Transformed Columns

- [mapNonNil(\_:)](mapnonnil%28__%29.md): Creates a new column by applying the transformation to every element that isn’t missing.
