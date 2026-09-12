> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/discontiguouscolumnslice/mean()-49u93](https://developer.apple.com/documentation/tabulardata/discontiguouscolumnslice/mean()-49u93)

# mean()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the mean average of the integer slice’s elements, ignoring missing elements.

## Declaration

```swift
func mean() -> Double?
```

## See Also

### Getting Statistical Values

- [sum()](sum%28%29.md): Conforms when `WrappedElement` conforms to `AdditiveArithmetic`. Returns the sum of the column slice’s elements, ignoring missing elements.
- [min()](min%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the element with the lowest value, ignoring missing elements.
- [max()](max%28%29.md): Conforms when `WrappedElement` conforms to `Comparable`. Returns the element with the highest value, ignoring missing elements.
- [mean()](mean%28%29-3y11c.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Returns the mean average of the floating-point slice’s elements, ignoring missing elements.
- [standardDeviation(deltaDegreesOfFreedom:)](standarddeviation%28deltadegreesoffreedom_%29-36nx2.md): Conforms when `WrappedElement` conforms to `BinaryInteger`. Returns the standard deviation of the integer column slice’s elements, ignoring missing elements.
- [standardDeviation(deltaDegreesOfFreedom:)](standarddeviation%28deltadegreesoffreedom_%29-5vd4r.md): Conforms when `WrappedElement` conforms to `FloatingPoint`. Returns the standard deviation of the floating-point column slice’s elements, ignoring missing elements.
