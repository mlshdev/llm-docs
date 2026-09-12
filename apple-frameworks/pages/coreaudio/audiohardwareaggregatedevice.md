> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareaggregatedevice](https://developer.apple.com/documentation/coreaudio/audiohardwareaggregatedevice)

# AudioHardwareAggregateDevice

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 15.0+

Instances of the AudioHardwareAggregateDevice class encapsulate a single audio aggregate device, which is a virtual device that combines the input and output streams of multiple real devices or taps. It also synchonizes the clocks of its subdevices and subtaps when running IO to ensure streams are aligned.

## Declaration

```swift
class AudioHardwareAggregateDevice
```

## Topics

### Initializers

- [init(id:)](audiohardwareaggregatedevice/init%28id_%29.md)

### Instance Properties

- [activeSubdevices](audiohardwareaggregatedevice/activesubdevices.md): An array of AudioHardwareClocks for all the active subdevices in the aggregate device.
- [activeSubtaps](audiohardwareaggregatedevice/activesubtaps.md): An array of AudioHardwareTaps for all the active subtaps in the aggregate device.
- [clockSource](audiohardwareaggregatedevice/clocksource.md): The device, clock, or tap that is currently serving as the time base of the aggregate device.
- [composition](audiohardwareaggregatedevice/composition.md): A Dictionary that describes the composition of the aggregate device. The keys for this CFDicitionary are defined in the AudioAggregateDevice Constants section of AudioHardware.h
- [subdevices](audiohardwareaggregatedevice/subdevices.md): An array of AudioHardwareClocks representing all the devices and clocks, active or inactive, contained in the aggregate device. The order of the items in the array is significant and is used to determine the order of the streams of the aggregate device.
- [subtaps](audiohardwareaggregatedevice/subtaps.md): An array of AudioHardwareTaps for all the subtaps contained in the aggregate device.

### Instance Methods

- [setClockSource(\_:)](audiohardwareaggregatedevice/setclocksource%28__%29.md): Set the clockSource property.
- [setComposition(\_:)](audiohardwareaggregatedevice/setcomposition%28__%29.md): Set the composition property.
- [setSubdevices(\_:)](audiohardwareaggregatedevice/setsubdevices%28__%29.md): Set the subdevices property.
- [setSubtaps(\_:)](audiohardwareaggregatedevice/setsubtaps%28__%29.md): Set the subtaps property.

## Relationships

### Inherits From

- [AudioHardwareDevice](audiohardwaredevice.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
