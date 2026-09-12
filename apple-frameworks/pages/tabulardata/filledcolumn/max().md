> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/filledcolumn/max()](https://developer.apple.com/documentation/tabulardata/filledcolumn/max())

# max()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the element with the highest value.

## Declaration

```swift
func max() -> FilledColumn<Base>.Element?
```

## See Also

### Getting Statistical Values

- [sum()](sum%28%29-5836l.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `BinaryInteger`. Returns the sum of the integer column’s elements.
- [sum()](sum%28%29-2805h.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `FloatingPoint`. Returns the sum of the floating-point column’s elements.
- [min()](min%28%29.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `Comparable`. Returns the element with the lowest value.
- [mean()](mean%28%29-8xs60.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `BinaryInteger`. Returns the mean average of the integer column’s elements.
- [mean()](mean%28%29-jd3v.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `FloatingPoint`. Returns the mean average of the floating-point column’s elements.
- [standardDeviation(deltaDegreesOfFreedom:)](standarddeviation%28deltadegreesoffreedom_%29-4cofd.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `BinaryInteger`. Returns the standard deviation of the integer column’s elements.
- [standardDeviation(deltaDegreesOfFreedom:)](standarddeviation%28deltadegreesoffreedom_%29-27xnl.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `FloatingPoint`. Returns the standard deviation of the floating-point column’s elements.
