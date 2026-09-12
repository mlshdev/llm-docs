> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/monthlyweatherstatistics](https://developer.apple.com/documentation/weatherkit/monthlyweatherstatistics)

# MonthlyWeatherStatistics

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that holds a collection of month weather statistics data.

## Declaration

```swift
struct MonthlyWeatherStatistics<T> where T : Decodable, T : Encodable, T : Equatable, T : Sendable
```

<a id="overview"></a>

## Overview

Weather statistics for each month are derived from data for that month, collected over all years since the baseline start date.

## Topics

### Instance Properties

- [baselineStartDate](monthlyweatherstatistics/baselinestartdate.md): The year the statistics collection began.
- [endIndex](monthlyweatherstatistics/endindex.md): The end index for the monthly weather statistics.
- [metadata](monthlyweatherstatistics/metadata.md): Descriptive information about the weather statistics data.
- [months](monthlyweatherstatistics/months.md): An ordered collection of month weather statistics data of type `T`, for each requested month.
- [startIndex](monthlyweatherstatistics/startindex.md): The start index for the monthly weather statistics.

### Subscripts

- [subscript(\_:)](monthlyweatherstatistics/subscript%28__%29.md): The month weather statistics at the provided index.

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
