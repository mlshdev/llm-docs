> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/dailyweathersummary](https://developer.apple.com/documentation/weatherkit/dailyweathersummary)

# DailyWeatherSummary

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that holds a collection of day weather summaries.

## Declaration

```swift
struct DailyWeatherSummary<T> where T : Decodable, T : Encodable, T : Equatable, T : Sendable
```

## Topics

### Instance Properties

- [days](dailyweathersummary/days.md): An ordered collection of day weather summaries of type `T`, for each requested day.
- [endIndex](dailyweathersummary/endindex.md): The end index for the daily weather summaries.
- [metadata](dailyweathersummary/metadata.md): Descriptive information about the weather statistics data.
- [startIndex](dailyweathersummary/startindex.md): The start index for the daily weather summaries.

### Subscripts

- [subscript(\_:)](dailyweathersummary/subscript%28__%29.md): The day weather summary at the provided index.

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
