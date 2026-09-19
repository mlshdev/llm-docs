> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/weatherkit/weatherservice/init()

# init()

**Framework:** WeatherKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a weather service object.

## Declaration

```swift
convenience init()
```

<a id="discussion"></a>

## Discussion

Use this method to create different `WeatherService` instances, for example, to separate out high-priority and low-priority requests for performance. If you only need one instance of `WeatherService`, use `shared`.
