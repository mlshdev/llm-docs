> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherquery/daily(startdate:enddate:)](https://developer.apple.com/documentation/weatherkit/weatherquery/daily(startdate:enddate:))

# daily(startDate:endDate:)

**Framework:** WeatherKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns weather for an arbitrary range of days, with the following caveats:

## Declaration

```swift
static func daily(startDate: Date, endDate: Date) -> WeatherQuery<T>
```

## Parameters

- `startDate`: The lower boundary of the time range for the forecast (inclusive)
- `endDate`: The upper boundary of the time range for the forecast (exclusive)

<a id="return-value"></a>

## Return Value

A daily forecast query for the specified time range

<a id="discussion"></a>

## Discussion

- Historical data is available from Aug 1, 2021.
- Forecasts are available up to 10 days in the future.
- Each request will return a maximum of 10 days.
- A day is included in the forecast if midnight in local time is included in the range of `startDate` (inclusive) to `endDate` (exclusive).

## See Also

### Creating queries

- [alerts](alerts.md): The weather alerts query.
- [availability](availability.md): The availability query.
- [current](current.md): The current weather query.
- [daily](daily.md): The daily forecast query. This returns 10 contiguous days, beginning with the current day.
- [hourly](hourly.md): The hourly forecast query. This returns 25 contiguous hours, beginning with the current hour.
- [minute](minute.md): The minute forecast query.
- [hourly(startDate:endDate:)](hourly%28startdate_enddate_%29.md): Conforms when `T` is `Forecast<HourWeather>`. The hourly forecast query that takes a start date and end date for the request, with the following caveats:
