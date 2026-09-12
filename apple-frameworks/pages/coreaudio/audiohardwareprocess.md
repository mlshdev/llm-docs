> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareprocess](https://developer.apple.com/documentation/coreaudio/audiohardwareprocess)

# AudioHardwareProcess

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 15.0+

Instances of the AudioHardwareProcess class encapsulate a single audio process, which contains information about a client process connected to the HAL.

## Declaration

```swift
class AudioHardwareProcess
```

## Topics

### Initializers

- [init(id:)](audiohardwareprocess/init%28id_%29.md)

### Instance Properties

- [bundleID](audiohardwareprocess/bundleid.md): A String that contains the bundle ID of the process.
- [devices](audiohardwareprocess/devices.md): An array of AudioHardwareDevices that represent the devices currently used by the process for output.
- [isRunning](audiohardwareprocess/isrunning.md): A Bool where a value of true indicates that there is audio IO in progress in the process.
- [isRunningInput](audiohardwareprocess/isrunninginput.md): A Bool where a value of true indicates that the process is running IO and there is at least one active input stream.
- [isRunningOutput](audiohardwareprocess/isrunningoutput.md): A Bool where a value of true indicates that the process is running IO and there is at least one active output stream.
- [pid](audiohardwareprocess/pid.md): A pid_t indicating the process ID associated with the process.

## Relationships

### Inherits From

- [AudioHardwareObject](audiohardwareobject.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
