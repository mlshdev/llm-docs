> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/historicalcomparisons](https://developer.apple.com/documentation/weatherkit/historicalcomparisons)

# HistoricalComparisons

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that represents the weather condition comparisons for a specific location. It’s a list of comparisons between current readings and historical averages. The list is ordered by significance of deviation.

## Declaration

```swift
struct HistoricalComparisons
```

## Topics

### Instance Properties

- [comparisons](historicalcomparisons/comparisons.md): A list of comparisons between current readings and historical averages, ordered by significance of deviation.
- [endIndex](historicalcomparisons/endindex.md): The end index for the historical comparisons.
- [metadata](historicalcomparisons/metadata.md): Descriptive information about the weather comparisons data.
- [startIndex](historicalcomparisons/startindex.md): The start index for the historical comparisons.

### Subscripts

- [subscript(\_:)](historicalcomparisons/subscript%28__%29.md): The historical comparison at the provided index.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
