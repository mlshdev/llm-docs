> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/sum()](https://developer.apple.com/documentation/tabulardata/column/sum())

# sum()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the sum of the column’s elements, ignoring missing elements.

## Declaration

```swift
func sum() -> WrappedElement
```

## See Also

### Getting Statistical Values

- [min()](min%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the element with the lowest value, ignoring missing elements.
- [max()](max%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the element with the highest value, ignoring missing elements.
- [mean()](mean%28%29-2si7j.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Returns the mean average of the integer column’s elements, ignoring missing elements.
- [mean()](mean%28%29-ic5z.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Returns the mean average of the floating-point column’s elements, ignoring missing elements.
- [standardDeviation(deltaDegreesOfFreedom:)](standarddeviation%28deltadegreesoffreedom_%29-9ffqu.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Returns the standard deviation of the integer column’s elements, ignoring missing elements.
- [standardDeviation(deltaDegreesOfFreedom:)](standarddeviation%28deltadegreesoffreedom_%29-4kc16.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Returns the standard deviation of the floating-point column’s elements, ignoring missing elements.
