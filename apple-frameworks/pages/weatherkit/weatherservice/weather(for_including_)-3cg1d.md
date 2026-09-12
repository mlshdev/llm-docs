> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherservice/weather(for:including:)-3cg1d](https://developer.apple.com/documentation/weatherkit/weatherservice/weather(for:including:)-3cg1d)

# weather(for:including:)

**Framework:** WeatherKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the weather forecast for the requested location.

## Declaration

```swift
@preconcurrency final func weather<T>(for location: CLLocation, including dataSet: WeatherQuery<T>) async throws -> T where T : Sendable
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
let current = try await service.weather(for: newYork, including: .current)
```
