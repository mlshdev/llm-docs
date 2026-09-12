> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/precipitationtype](https://developer.apple.com/documentation/weatherkitrestapi/precipitationtype)

# PrecipitationType

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Type  
**Availability:** Weather API 1.0.0+

The type of precipitation forecasted to occur during the day.

## Declaration

```
string PrecipitationType
```

## Possible Values

- `clear`:
- `precipitation`:
- `rain`:
- `snow`:
- `sleet`:
- `hail`:
- `mixed`:

<a id="Possible-Values"></a>

## Possible Values

- **clear**: No precipitation is occurring.
- **precipitation**: An unknown type of precipitation is occuring.
- **rain**: Rain or freezing rain is falling. snow Snow is falling.
- **sleet**: Sleet or ice pellets are falling. hail Hail is falling.
- **mixed**: Winter weather (wintery mix or wintery showers) is falling.

## See Also

### Identifying weather events

- [UnitsSystem](unitssystem.md): The system of units that the weather data is reported in.
- [MoonPhase](moonphase.md): The shape of the moon as seen by an observer on the ground at a given time.
- [PressureTrend](pressuretrend.md): The direction of change of the sea level air pressure.
