> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherservice/shared](https://developer.apple.com/documentation/weatherkit/weatherservice/shared)

# shared

**Framework:** WeatherKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A single, shared weather service object.

## Declaration

```swift
static let shared: WeatherService
```

<a id="discussion"></a>

## Discussion

Use this object to interface to weather services in your application. If you need to prioritize weather information, create separate instances with `init`.

## See Also

### Obtaining forecasts

- [weather(for:)](weather%28for_%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:)](weather%28for_including___%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:)](weather%28for_including_____%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:)](weather%28for_including_______%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:\_:)](weather%28for_including_________%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:\_:\_:)](weather%28for_including___________%29.md): Returns the weather forecast for the requested location.
