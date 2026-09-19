> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldatacolumn/materialize()

# materialize()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new column by immediately evaluating any lazily applied data processing operations stored in the column.

## Declaration

```swift
func materialize() throws -> MLDataColumn<Element>
```

<a id="return-value"></a>

## Return Value

A new column.
