> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/explicitdatecomponents](https://developer.apple.com/documentation/sirikitcloudmedia/explicitdatecomponents)

# ExplicitDateComponents

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A date or time in specified of units (such as year, month, day, hour, and minute) for evaluation in a calendar system and time zone.

## Declaration

```
object ExplicitDateComponents
```

## Properties

- `calendarIdentifier` — `string`: The calendar for interpreting the other values in this structure.
- `timeZone` — `string`: A time zone.
- `era` — `int32`: An era.
- `year` — `int32`: A year.
- `month` — `int32`: A month.
- `day` — `int32`: A day.
- `hour` — `int32`: An hour.
- `minute` — `int32`: A minute.
- `second` — `int32`: A second.
- `nanosecond` — `int32`: A nanosecond.

## See Also

### Filtering by Release Date

- [DateComponentsRange](datecomponentsrange.md): A period of time from a specified start date to a specified end date.
- [DateComponents](datecomponents.md): A full or partial date and time.
