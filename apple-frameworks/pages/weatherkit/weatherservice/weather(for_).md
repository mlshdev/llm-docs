> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherservice/weather(for:)](https://developer.apple.com/documentation/weatherkit/weatherservice/weather(for:))

# weather(for:)

**Framework:** WeatherKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the weather forecast for the requested location.

## Declaration

```swift
final func weather(for location: CLLocation) async throws -> Weather
```

## Parameters

- `location`: The requested location.

<a id="return-value"></a>

## Return Value

The aggregate weather.

<a id="discussion"></a>

## Discussion

> **Throws**

> Weather data error `WeatherError`

## See Also

### Obtaining forecasts

- [weather(for:including:\_:)](weather%28for_including___%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:)](weather%28for_including_____%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:)](weather%28for_including_______%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:\_:)](weather%28for_including_________%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:\_:\_:)](weather%28for_including___________%29.md): Returns the weather forecast for the requested location.
- [shared](shared.md): A single, shared weather service object.
