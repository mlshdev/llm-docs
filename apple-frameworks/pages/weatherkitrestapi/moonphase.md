> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/moonphase](https://developer.apple.com/documentation/weatherkitrestapi/moonphase)

# MoonPhase

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Type  
**Availability:** Weather API 1.0.0+

The shape of the moon as seen by an observer on the ground at a given time.

## Declaration

```
string MoonPhase
```

## Possible Values

- `new`:
- `waxingCrescent`:
- `firstQuarter`:
- `waxingGibbous`:
- `full`:
- `waningGibbous`:
- `thirdQuarter`:
- `waningCrescent`:

<a id="Possible-Values"></a>

## Possible Values

- **new**: The moon isn’t visible.
- **waxingCrescent**: A crescent-shaped sliver of the moon is visible, and increasing in size.
- **firstQuarter**: Approximately half of the moon is visible, and increasing in size.
- **full**: The entire disc of the moon is visible.
- **waxingGibbous**: More than half of the moon is visible, and increasing in size.
- **waningGibbous**: More than half of the moon is visible, and decreasing in size.
- **thirdQuarter**: Approximately half of the moon is visible, and decreasing in size.
- **waningCrescent**: A crescent-shaped sliver of the moon is visible, and decreasing in size.

## See Also

### Identifying weather events

- [UnitsSystem](unitssystem.md): The system of units that the weather data is reported in.
- [PrecipitationType](precipitationtype.md): The type of precipitation forecasted to occur during the day.
- [PressureTrend](pressuretrend.md): The direction of change of the sea level air pressure.
