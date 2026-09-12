> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherservice/weather(for:including:_:)](https://developer.apple.com/documentation/weatherkit/weatherservice/weather(for:including:_:))

# weather(for:including:\_:)

**Framework:** WeatherKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the weather forecast for the requested location.

## Declaration

```swift
@preconcurrency final func weather<T1, T2>(for location: CLLocation, including dataSet1: WeatherQuery<T1>, _ dataSet2: WeatherQuery<T2>) async throws -> (T1, T2) where T1 : Sendable, T2 : Sendable
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
let (current, minute) = try await service.weather(for: newYork, including: .current, .minute)
```

## See Also

### Obtaining forecasts

- [weather(for:)](weather%28for_%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:)](weather%28for_including_____%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:)](weather%28for_including_______%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:\_:)](weather%28for_including_________%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:\_:\_:)](weather%28for_including___________%29.md): Returns the weather forecast for the requested location.
- [shared](shared.md): A single, shared weather service object.
