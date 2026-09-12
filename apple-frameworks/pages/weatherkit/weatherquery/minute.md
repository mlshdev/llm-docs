> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherquery/minute](https://developer.apple.com/documentation/weatherkit/weatherquery/minute)

# minute

**Framework:** WeatherKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The minute forecast query.

## Declaration

```swift
static var minute: WeatherQuery<Forecast<MinuteWeather>?> { get }
```

## See Also

### Creating queries

- [alerts](alerts.md): The weather alerts query.
- [availability](availability.md): The availability query.
- [current](current.md): The current weather query.
- [daily](daily.md): The daily forecast query. This returns 10 contiguous days, beginning with the current day.
- [hourly](hourly.md): The hourly forecast query. This returns 25 contiguous hours, beginning with the current hour.
- [daily(startDate:endDate:)](daily%28startdate_enddate_%29.md): Conforms when `T` is `Forecast<DayWeather>`. Returns weather for an arbitrary range of days, with the following caveats:
- [hourly(startDate:endDate:)](hourly%28startdate_enddate_%29.md): Conforms when `T` is `Forecast<HourWeather>`. The hourly forecast query that takes a start date and end date for the request, with the following caveats:
