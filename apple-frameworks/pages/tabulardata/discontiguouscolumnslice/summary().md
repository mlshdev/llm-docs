> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/discontiguouscolumnslice/summary()](https://developer.apple.com/documentation/tabulardata/discontiguouscolumnslice/summary())

# summary()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a categorical summary of the column slice’s elements.

## Declaration

```swift
func summary() -> CategoricalSummary<WrappedElement>
```

## See Also

### Summarizing a Column Slice

- [numericSummary()](numericsummary%28%29-3r7pn.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Generates a numeric summary of the integer column slice’s elements.
- [numericSummary()](numericsummary%28%29-4b7m0.md): Conforms when `WrappedElement` conforms to `BinaryFloatingPoint`. Generates a numeric summary of the floating-point column slice’s elements.
