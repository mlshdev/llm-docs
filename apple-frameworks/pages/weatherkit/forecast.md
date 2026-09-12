> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/forecast](https://developer.apple.com/documentation/weatherkit/forecast)

# Forecast

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A forecast collection for minute, hourly, and daily forecasts.

## Declaration

```swift
struct Forecast<Element> where Element : Decodable, Element : Encodable, Element : Equatable, Element : Sendable
```

<a id="overview"></a>

## Overview

[Forecast](forecast.md) conforms to the `RandomAccessCollection` protocol to support efficient random-access index traversal through forecast types. The protocol involves forwarding the required properties and methods to the underlying forecast collection. The implementation of `subscript` returns an instance of the `Element` type.

## Topics

### Creating the forecast

- [init(from:)](forecast/init%28from_%29-390k1.md): Conforms when `Element` is `HourWeather`.
- [init(from:)](forecast/init%28from_%29-4wobg.md): Conforms when `Element` is `DayWeather`.

### Serializing objects

- [encode(to:)](forecast/encode%28to_%29-5zuqd.md): Conforms when `Element` is `DayWeather`.
- [encode(to:)](forecast/encode%28to_%29-fbco.md): Conforms when `Element` is `HourWeather`.

### Getting the properties

- [endIndex](forecast/endindex.md): The forecast end index.
- [forecast](forecast/forecast.md): The forecast collection.
- [metadata](forecast/metadata.md): Descriptive information about the forecast data.
- [startIndex](forecast/startindex.md): The forecast start index.
- [summary](forecast/summary.md): Conforms when `Element` is `MinuteWeather`. A convenient localized description of the minute forecast.

### Accessing elements

- [subscript(\_:)](forecast/subscript%28__%29.md): The forecast element at the provided index.
- [Forecast.Index](forecast/index.md): The forecast index.

### Comparing forecasts

- [==(\_:\_:)](forecast/==%28____%29.md): Conforms when `Element` conforms to `Decodable`, `Encodable`, `Equatable`, and `Sendable`.

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

## See Also

### Alerts and forecasts

- [WeatherAlert](weatheralert.md): A weather alert issued for the requested location by a governmental authority.
- [WeatherAvailability](weatheravailability.md): A structure that indicates the availability of data at the requested location.
- [MinuteWeather](minuteweather.md): A structure that represents the next hour minute forecasts.
- [HourWeather](hourweather.md): A structure that represents the weather conditions for the hour.
- [DayWeather](dayweather.md): A structure that represents the weather conditions for the day.
