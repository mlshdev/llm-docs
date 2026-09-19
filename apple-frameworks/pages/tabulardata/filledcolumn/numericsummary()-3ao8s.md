> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/filledcolumn/numericsummary()-3ao8s

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

- [summary()](summary%28%29.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `Hashable`. Generates a categorical summary of the filled column’s elements, including default values.
- [numericSummary()](numericsummary%28%29-86mgh.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `BinaryFloatingPoint`. Generates a numeric summary of the floating-point column’s elements.
