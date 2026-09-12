> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails/measurement/measurement(in:)](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/measurement/measurement(in:))

# measurement(in:)

**Framework:** DataDetection  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A function that returns a measurement object initialized with the specified dimensions.

## Declaration

```swift
func measurement<D>(in dimension: D) -> Measurement<D> where D : Dimension
```

## See Also

### Values that describe the characteristics of the measurement

- [possibleDimensions](possibledimensions.md): An array of dimensions someone can consider for use in a measurement.
- [value](value.md): The value the framework returns for a measurement.
