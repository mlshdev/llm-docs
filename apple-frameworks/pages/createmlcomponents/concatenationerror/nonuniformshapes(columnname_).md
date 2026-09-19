> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/concatenationerror/nonuniformshapes(columnname:)

# ConcatenationError.nonUniformShapes(columnName:)

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A column contains arrays or shaped arrays with non-uniform shapes.

## Declaration

```swift
case nonUniformShapes(columnName: String)
```

## See Also

### Analyzing the error

- [ConcatenationError.mismatchedShapes](mismatchedshapes.md): Shaped arrays across columns have mismatched shapes and can’t be concatenated.
