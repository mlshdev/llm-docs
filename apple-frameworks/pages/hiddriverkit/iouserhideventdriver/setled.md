> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventdriver/setled](https://developer.apple.com/documentation/hiddriverkit/iouserhideventdriver/setled)

# SetLED

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Sets the state of an LED on the device.

## Declaration

```objectivec
virtual void SetLED(uint32_t usage, bool on);
```

## Parameters

- `usage`: The LED to set. Specify a value from the LED usage tables in [LEDs](../leds-enum.md).
- `on`: A Boolean value that indicates whether to turn the LED on or off. Specify `true` to turn the LED on.
