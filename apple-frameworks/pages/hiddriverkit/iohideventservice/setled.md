> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohideventservice/setled](https://developer.apple.com/documentation/hiddriverkit/iohideventservice/setled)

# SetLED

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Configures the on/off state for an LED on the device.

## Declaration

```objectivec
virtual void SetLED(uint32_t usage, bool on);
```

## Parameters

- `usage`: The usage value that matches the LED you want to set. For a list of possible values, see [LEDs](../leds-enum.md).
- `on`: A Boolean value that indicates whether to turn the light on or off. Specify `true` to turn the light on or `false` to turn it off.
