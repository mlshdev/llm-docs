> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails/measurement/possibledimensions](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/measurement/possibledimensions)

# possibleDimensions

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An array of dimensions someone can consider for use in a measurement.

## Declaration

```swift
let possibleDimensions: [Dimension]
```

<a id="Discussion"></a>

## Discussion

There’s typically only one measurement, unless the original string is ambiguous and open to interpretation in more than one way. For example, a measurement of “10 degrees” is ambiguous without additional context.

## See Also

### Values that describe the characteristics of the measurement

- [measurement(in:)](measurement%28in_%29.md): A function that returns a measurement object initialized with the specified dimensions.
- [value](value.md): The value the framework returns for a measurement.
