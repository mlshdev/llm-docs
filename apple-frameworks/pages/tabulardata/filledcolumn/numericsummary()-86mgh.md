> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/filledcolumn/numericsummary()-86mgh](https://developer.apple.com/documentation/tabulardata/filledcolumn/numericsummary()-86mgh)

# numericSummary()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a numeric summary of the floating-point column’s elements.

## Declaration

```swift
func numericSummary() -> NumericSummary<Base.WrappedElement>
```

## See Also

### Summarizing a Column

- [summary()](summary%28%29.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `Hashable`. Generates a categorical summary of the filled column’s elements, including default values.
- [numericSummary()](numericsummary%28%29-3ao8s.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `BinaryInteger`. Generates a numeric summary of the integer column’s elements.
