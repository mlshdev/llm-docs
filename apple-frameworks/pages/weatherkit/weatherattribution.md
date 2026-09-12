> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherattribution](https://developer.apple.com/documentation/weatherkit/weatherattribution)

# WeatherAttribution

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that  defines the necessary information for attributing a weather data provider.

## Declaration

```swift
struct WeatherAttribution
```

<a id="overview"></a>

## Overview

Attribution is required for publishing software using WeatherKit.

## Topics

### Getting the properties

- [combinedMarkDarkURL](weatherattribution/combinedmarkdarkurl.md): A URL for the combined “ Apple Weather” mark, in dark variant.
- [combinedMarkLightURL](weatherattribution/combinedmarklighturl.md): A URL for the combined “ Apple Weather” mark, in light variant.
- [legalPageURL](weatherattribution/legalpageurl.md): A link to the legal attribution page that contains copyright information about the weather data sources.
- [serviceName](weatherattribution/servicename.md): The weather data provider name.
- [squareMarkURL](weatherattribution/squaremarkurl.md): A URL for the square Apple Weather mark.

### Instance Properties

- [legalAttributionText](weatherattribution/legalattributiontext.md): This property returns text that should be made available to users for apps that cannot display the attributionURL contents in a Safari view. It contains language that outlines the weather data sources attribution and is a legal requirement of using WeatherKit.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requests

- [WeatherQuery](weatherquery.md): A structure that encapsulates a generic weather dataset request.
- [CurrentWeather](currentweather.md): A structure that describes the current conditions observed at a location.
- [WeatherMetadata](weathermetadata.md): A structure that provides additional weather information.
- [WeatherSeverity](weatherseverity.md): A description of the severity of the severe weather event.
