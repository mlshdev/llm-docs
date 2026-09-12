> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/energysaver/com.apple.energysaver.desktop.schedule-data.dictionary/repeatingpoweron-data.dictionary](https://developer.apple.com/documentation/devicemanagement/energysaver/com.apple.energysaver.desktop.schedule-data.dictionary/repeatingpoweron-data.dictionary)

# EnergySaver.Com.apple.EnergySaver.desktop.Schedule.RepeatingPowerOn

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The triggers for turning the device on.

## Declaration

```
object EnergySaver.Com.apple.EnergySaver.desktop.Schedule.RepeatingPowerOn
```

## Properties

- `eventtype` — `string` (required): The type of action defined by this schedule.
  **Allowed values:** `wake`, `poweron`, `wakepoweron`, `sleep`, `shutdown`, `restart`
- `time` — `integer`: The time, in minutes, since midnight.
- `weekdays` — `integer`: One or more days of the week in an unsigned integer bitmap:

  - `1` = Mon
  - `2` = Tue
  - `4` = Wed
  - `8` = Thu
  - `16` = Fri
  - `32` = Sat
  - `64` = Sun

## See Also

### Objects

- [EnergySaver.Com.apple.EnergySaver.desktop.Schedule.RepeatingPowerOff](repeatingpoweroff-data.dictionary.md): The triggers for turning the device off.
