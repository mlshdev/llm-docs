> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/summary()](https://developer.apple.com/documentation/tabulardata/column/summary())

# summary()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a categorical summary of the column’s elements.

## Declaration

```swift
func summary() -> CategoricalSummary<WrappedElement>
```

## See Also

### Summarizing a Column

- [numericSummary()](numericsummary%28%29-2m0sr.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Generates a numeric summary of the integer column’s elements.
- [numericSummary()](numericsummary%28%29-8laeo.md): Conforms when `WrappedElement` conforms to `BinaryFloatingPoint`. Generates a numeric summary of the floating-point column’s elements.
