> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherservice/weather(for:including:)-5jqwy](https://developer.apple.com/documentation/weatherkit/weatherservice/weather(for:including:)-5jqwy)

# weather(for:including:)

**Framework:** WeatherKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the weather forecast for the requested location.

## Declaration

```swift
@preconcurrency final func weather<each T>(for location: CLLocation, including dataSet: repeat WeatherQuery<each T>) async throws -> (repeat each T) where repeat each T : Sendable
```

## Parameters

- `location`: The requested location.

<a id="return-value"></a>

## Return Value

The requested weather data set.

<a id="discussion"></a>

## Discussion

> **Throws**

> Weather data error `WeatherError`

This is a variadic API in which any combination of data sets can be requested and returned as a tuple. Here’s an example:

```
`let (current, minute, hourly, daily, alerts) = try await service.weather(for: newYork, including: .current, .minute, .hourly, .daily, .alerts)`
```
