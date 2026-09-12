> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/numericsummary()-2m0sr](https://developer.apple.com/documentation/tabulardata/column/numericsummary()-2m0sr)

# numericSummary()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a numeric summary of the integer column’s elements.

## Declaration

```swift
func numericSummary() -> NumericSummary<Double>
```

## See Also

### Summarizing a Column

- [summary()](summary%28%29.md): Conforms when `WrappedElement` conforms to `Hashable`. Generates a categorical summary of the column’s elements.
- [numericSummary()](numericsummary%28%29-8laeo.md): Conforms when `WrappedElement` conforms to `BinaryFloatingPoint`. Generates a numeric summary of the floating-point column’s elements.
