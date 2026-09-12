> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/parentalcontrolstimelimits/time-limits-data.dictionary/weekday-curfew-data.dictionary](https://developer.apple.com/documentation/devicemanagement/parentalcontrolstimelimits/time-limits-data.dictionary/weekday-curfew-data.dictionary)

# ParentalControlsTimeLimits.Time-limits.Weekday-curfew

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The weekday curfew dictionary.

## Declaration

```
object ParentalControlsTimeLimits.Time-limits.Weekday-curfew
```

## Properties

- `enabled` — `boolean` (required): If `true`, enable these settings.
- `end` — `string`: The curfew end time, in the format `%d:%d:%d`.
- `rangeType` — `integer` (required): The type of day range, which has the following possible values:

  - `0`: Weekday
  - `1`: Weekend  
  **Allowed values:** `0`, `1`
- `secondsPerDay` — `integer`: The allowance for that day, in seconds.
- `start` — `string`: The curfew start time, in the format ‘%d:%d:%d’.

## See Also

### Objects

- [ParentalControlsTimeLimits.Time-limits.Weekday-allowance](weekday-allowance-data.dictionary.md): The weekday allowance dictionary.
- [ParentalControlsTimeLimits.Time-limits.Weekend-allowance](weekend-allowance-data.dictionary.md): The weekend allowance dictionary.
- [ParentalControlsTimeLimits.Time-limits.Weekend-curfew](weekend-curfew-data.dictionary.md): The weekend curfew dictionary.
