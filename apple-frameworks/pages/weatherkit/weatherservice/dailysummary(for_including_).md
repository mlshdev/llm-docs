> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherservice/dailysummary(for:including:)](https://developer.apple.com/documentation/weatherkit/weatherservice/dailysummary(for:including:))

# dailySummary(for:including:)

**Framework:** WeatherKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns day weather summaries for the requested location, for the past 30 days, including the present day.

## Declaration

```swift
final func dailySummary<each T>(for location: CLLocation, including dataSets: repeat DailyWeatherSummaryQuery<each T>) async throws -> (repeat DailyWeatherSummary<each T>) where repeat each T : Decodable, repeat each T : Encodable, repeat each T : Equatable, repeat each T : Sendable
```

## Parameters

- `location`: The requested location.

<a id="return-value"></a>

## Return Value

The requested day weather summaries.

<a id="discussion"></a>

## Discussion

> **Throws**

> Weather data error `WeatherError`

This is a variadic API in which any combination of data sets can be requested and returned as a tuple. The following example will get a daily weather summary for New York City.

```swift
let (dailyPrecipitationSummary, dailyTemperatureSummary) = try await service.dailySummary(for: newYork, including: .precipitation, .temperature)
```
