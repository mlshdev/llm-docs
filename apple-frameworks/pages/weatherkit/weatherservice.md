> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherservice](https://developer.apple.com/documentation/weatherkit/weatherservice)

# WeatherService

**Framework:** WeatherKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Provides an interface for obtaining weather data.

## Declaration

```swift
final class WeatherService
```

## Topics

### Creating the object

- [init()](weatherservice/init%28%29.md): Creates a weather service object.

### Obtaining forecasts

- [weather(for:)](weatherservice/weather%28for_%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:)](weatherservice/weather%28for_including___%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:)](weatherservice/weather%28for_including_____%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:)](weatherservice/weather%28for_including_______%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:\_:)](weatherservice/weather%28for_including_________%29.md): Returns the weather forecast for the requested location.
- [weather(for:including:\_:\_:\_:\_:\_:)](weatherservice/weather%28for_including___________%29.md): Returns the weather forecast for the requested location.
- [shared](weatherservice/shared.md): A single, shared weather service object.

### Providing attribution

- [attribution](weatherservice/attribution.md): The required attribution which includes a legal attribution page and Apple Weather mark.

### Instance Methods

- [dailyStatistics(for:forDaysIn:including:)](weatherservice/dailystatistics%28for_fordaysin_including_%29.md): Returns daily weather statistics for the requested location, for each day within the specified date interval.
- [dailyStatistics(for:including:)](weatherservice/dailystatistics%28for_including_%29.md): Returns daily weather statistics for the requested location, for each day between 30 days ago and 10 days from now.
- [dailyStatistics(for:startDay:endDay:including:)](weatherservice/dailystatistics%28for_startday_endday_including_%29.md): Returns daily weather statistics for the requested location, for each day from the start day to the end day, inclusively.
- [dailySummary(for:forDaysIn:including:)](weatherservice/dailysummary%28for_fordaysin_including_%29.md): Returns day weather summaries for the requested location, for each day within the provided date interval.
- [dailySummary(for:including:)](weatherservice/dailysummary%28for_including_%29.md): Returns day weather summaries for the requested location, for the past 30 days, including the present day.
- [hourlyStatistics(for:forHoursIn:including:)](weatherservice/hourlystatistics%28for_forhoursin_including_%29.md): Returns hourly weather statistics for the requested location, for each hour within the specified date interval.
- [hourlyStatistics(for:including:)](weatherservice/hourlystatistics%28for_including_%29.md): Returns hourly weather statistics for the requested location, for the 24 hours of the current day.
- [hourlyStatistics(for:startHour:endHour:including:)](weatherservice/hourlystatistics%28for_starthour_endhour_including_%29.md): Returns hourly weather statistics for the requested location, for each hour from the start hour to the end hour, inclusively.
- [monthlyStatistics(for:forMonthsIn:including:)](weatherservice/monthlystatistics%28for_formonthsin_including_%29.md): Returns monthly weather statistics for the requested location, for each month within the specified date interval.
- [monthlyStatistics(for:including:)](weatherservice/monthlystatistics%28for_including_%29.md): Returns monthly weather statistics for the requested location, for all 12 months of the Gregorian calendar year.
- [monthlyStatistics(for:startMonth:endMonth:including:)](weatherservice/monthlystatistics%28for_startmonth_endmonth_including_%29.md): Returns monthly weather statistics for the requested location, for each month from the start month to the end month, inclusively.
- [weather(for:including:)](weatherservice/weather%28for_including_%29-3cg1d.md): Returns the weather forecast for the requested location.
- [weather(for:including:)](weatherservice/weather%28for_including_%29-5jqwy.md): Returns the weather forecast for the requested location.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fundamentals

- [Weather](weather.md): A model representing the aggregate weather data the caller requests.
