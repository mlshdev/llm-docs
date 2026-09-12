> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareaggregatedevice/setsubdevices(_:)](https://developer.apple.com/documentation/coreaudio/audiohardwareaggregatedevice/setsubdevices(_:))

# setSubdevices(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the subdevices property.

## Declaration

```swift
func setSubdevices(_ devices: [AudioHardwareClock]) throws
```

## Parameters

- `devices`: An array of AudioHardwareClocks representing all the devices and clocks to include in the aggregate device.
