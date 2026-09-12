> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/energysaver/com.apple.energysaver.desktop.acpower-data.dictionary](https://developer.apple.com/documentation/devicemanagement/energysaver/com.apple.energysaver.desktop.acpower-data.dictionary)

# EnergySaver.Com.apple.EnergySaver.desktop.ACPower

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The desktop AC power Energy Saver settings.

## Declaration

```
object EnergySaver.Com.apple.EnergySaver.desktop.ACPower
```

## Properties

- `Automatic Restart On Power Loss` — `integer`: If `true`, enables “Start up automatically after a power failure.”
  **Allowed values:** `0`, `1`
- `Disk Sleep Timer` — `integer`: The disk sleep time, in minutes. A value of 0 means never.
  **Minimum:** `0`  
  **Maximum:** `180`
- `Display Sleep Timer` — `integer`: The display sleep time, in minutes. A value of 0 means never.
  **Minimum:** `0`  
  **Maximum:** `180`
- `Dynamic Power Step` — `integer`: May not be available on all systems.
  **Allowed values:** `0`, `1`
- `Reduce Processor Speed` — `integer`: May not be available on all systems.
  **Allowed values:** `0`, `1`
- `System Sleep Timer` — `integer`: System sleep time, in minutes. A value of 0 means never.
  **Minimum:** `0`  
  **Maximum:** `180`
- `Wake on LAN` — `integer`: If `true`, enables “Wake for network access.”
  **Allowed values:** `0`, `1`
- `Wake On Modem Ring` — `integer`: If `true`, enables “Wake for modem ring.”
  **Allowed values:** `0`, `1`

## See Also

### Objects

- [EnergySaver.Com.apple.EnergySaver.desktop.Schedule](com.apple.energysaver.desktop.schedule-data.dictionary.md): The schedule for turning the device on or off.
- [EnergySaver.Com.apple.EnergySaver.portable.ACPower](com.apple.energysaver.portable.acpower-data.dictionary.md): The laptop AC power Energy Saver settings.
- [EnergySaver.Com.apple.EnergySaver.portable.BatteryPower](com.apple.energysaver.portable.batterypower-data.dictionary.md): The laptop battery power Energy Saver settings.
