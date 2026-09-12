> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaretap](https://developer.apple.com/documentation/coreaudio/audiohardwaretap)

# AudioHardwareTap

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** macOS 15.0+

Instances of the AudioHardwareTap class encapsulate a single audio tap, which can capture outgoing audio from a process or group of processes, and be used as an input stream source in an aggregate device.

## Declaration

```swift
class AudioHardwareTap
```

## Topics

### Initializers

- [init(id:)](audiohardwaretap/init%28id_%29.md)

### Instance Properties

- [description](audiohardwaretap/description.md): The CATapDescription that describes the configuration of this tap.
- [format](audiohardwaretap/format.md): An AudioStreamBasicDescription that describes the current data format for the tap. This is the format of the data that will be accessible in any aggregate device that contains the tap.
- [uid](audiohardwaretap/uid.md): A String that contains a persistent identifier for the tap. A tap’s UID persists until the tap is destroyed.

### Instance Methods

- [setDescription(\_:)](audiohardwaretap/setdescription%28__%29.md): Set the description property.

## Relationships

### Inherits From

- [AudioHardwareObject](audiohardwareobject.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
