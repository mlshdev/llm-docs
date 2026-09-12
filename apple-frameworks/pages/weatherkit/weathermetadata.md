> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weathermetadata](https://developer.apple.com/documentation/weatherkit/weathermetadata)

# WeatherMetadata

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that provides additional weather information.

## Declaration

```swift
struct WeatherMetadata
```

<a id="overview"></a>

## Overview

Metadata information includes the location, date of the request, the date the data will expire, and required provider attribution.

## Topics

### Getting the properties

- [date](weathermetadata/date.md): The time of the weather data request.
- [expirationDate](weathermetadata/expirationdate.md): The time the weather data expires.
- [location](weathermetadata/location.md): The location of the request.

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
- [WeatherAttribution](weatherattribution.md): A structure that defines the necessary information for attributing a weather data provider.
- [WeatherSeverity](weatherseverity.md): A description of the severity of the severe weather event.
