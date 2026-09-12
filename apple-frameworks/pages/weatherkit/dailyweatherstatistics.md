> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/dailyweatherstatistics](https://developer.apple.com/documentation/weatherkit/dailyweatherstatistics)

# DailyWeatherStatistics

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that holds a collection of day weather statistics data.

## Declaration

```swift
struct DailyWeatherStatistics<T> where T : Decodable, T : Encodable, T : Equatable, T : Sendable
```

<a id="overview"></a>

## Overview

Weather statistics for each day are derived from data for that day, collected over all years since the baseline start date.

## Topics

### Instance Properties

- [baselineStartDate](dailyweatherstatistics/baselinestartdate.md): The year the statistics collection began.
- [days](dailyweatherstatistics/days.md): An ordered collection of day weather statistics data of type `T`, for each requested day.
- [endIndex](dailyweatherstatistics/endindex.md): The end index for the daily weather statistics.
- [metadata](dailyweatherstatistics/metadata.md): Descriptive information about the weather statistics data.
- [startIndex](dailyweatherstatistics/startindex.md): The start index for the daily weather statistics.

### Subscripts

- [subscript(\_:)](dailyweatherstatistics/subscript%28__%29.md): The day weather statistics at the provided index.

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
