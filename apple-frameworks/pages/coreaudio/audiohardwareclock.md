> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareclock](https://developer.apple.com/documentation/coreaudio/audiohardwareclock)

# AudioHardwareClock

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 15.0+

Instances of the AudioHardwareClock class encapsulate individual audio clocks. All audio devices inherit from the audio clock class, which provides several base properties and contains a list of control objects. Clock objects can be used as a time source when run in an aggregate device, but contain no IO streams.

## Declaration

```swift
class AudioHardwareClock
```

## Topics

### Initializers

- [init(id:)](audiohardwareclock/init%28id_%29.md)

### Instance Properties

- [availableNominalSampleRates](audiohardwareclock/availablenominalsamplerates.md): An array of AudioValueRange structs that indicates the valid ranges for the nominal sample rate of the device.
- [clockDomain](audiohardwareclock/clockdomain.md): A UInt32 whose value indicates the clock domain to which this object belongs. Clocks and devices that have the same value for this property are able to be synchronized in hardware.
- [controls](audiohardwareclock/controls.md): An array of AudioHardwareControls that represent the controls of the device.
- [inputLatency](audiohardwareclock/inputlatency.md): An Int containing the number of frames of input latency in the clock.
- [isAlive](audiohardwareclock/isalive.md): A Bool where a value of true indicates the device is ready and available and false indicates the device is unusable and will most likely go away shortly.
- [isRunning](audiohardwareclock/isrunning.md): A Bool where a value of false indicates the device is not providing timestamps and a value of true means that it is.
- [nominalSampleRate](audiohardwareclock/nominalsamplerate.md): A Double that indicates the current nominal sample rate of the device.
- [outputLatency](audiohardwareclock/outputlatency.md): An Int containing the number of frames of output latency in the clock.
- [transportType](audiohardwareclock/transporttype.md): A UInt32 whose value indicates how the object is connected to the CPU. Constants for some of the values for this property can be found in the enum in the AudioDevice Constants section of AudioHardwareBase.h.
- [uid](audiohardwareclock/uid.md): A String that contains a persistent identifier for the clock device. A clock’s UID is persistent across boots. The content of the UID string is a black box and may contain information that is unique to a particular instance of an clock’s hardware or unique to the CPU. Therefore they are not suitable for passing between CPUs or for identifying similar models of hardware.

### Instance Methods

- [setNominalSampleRate(\_:)](audiohardwareclock/setnominalsamplerate%28__%29.md): Set the nominalSampleRate property.

## Relationships

### Inherits From

- [AudioHardwareObject](audiohardwareobject.md)

### Inherited By

- [AudioHardwareDevice](audiohardwaredevice.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
