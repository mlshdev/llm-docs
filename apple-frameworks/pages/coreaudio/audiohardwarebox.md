> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarebox](https://developer.apple.com/documentation/coreaudio/audiohardwarebox)

# AudioHardwareBox

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 15.0+

Instances of the AudioHardwareBox class encapsulate a single audio box, which is a container for other objects (typically device objects). A box publishes identifying information about itself and can be enabled or disabled. A box’s contents are only available to the system when the box is enabled.

## Declaration

```swift
class AudioHardwareBox
```

## Topics

### Initializers

- [init(id:)](audiohardwarebox/init%28id_%29.md)

### Instance Properties

- [clocks](audiohardwarebox/clocks.md): An array of AudioHardwareClocks that represent all the clock objects that came out of the given box. Note that until a box is enabled, this list will be empty.
- [devices](audiohardwarebox/devices.md): An array of AudioHardwareDevices that represent all the device objects that came out of the given box. Note that until a box is enabled, this list will be empty.
- [enabled](audiohardwarebox/enabled.md): A Bool where a value of true indicates that the box’s contents are available to the system.
- [hasAudio](audiohardwarebox/hasaudio.md): A Bool where a value of true indicates that the box supports audio.
- [hasMIDI](audiohardwarebox/hasmidi.md): A Bool where a value of true indicates that the box supports MIDI.
- [hasVideo](audiohardwarebox/hasvideo.md): A Bool where a value of true indicates that the box supports video.
- [isProtected](audiohardwarebox/isprotected.md): A Bool where a value of true indicates that the box requires authentication to use.
- [transportType](audiohardwarebox/transporttype.md): A UInt32 whose value indicates how the box is connected to the system. Constants for some of the values for this property can be found in the enum in the AudioDevice Constants section of AudioHardwareBase.h
- [uid](audiohardwarebox/uid.md): A String that contains a persistent identifier for the box object. A box’s UID is persistent across boots. The content of the UID string is a black box and may contain information that is unique to a particular instance of an box’s hardware or unique to the CPU. Therefore they are not suitable for passing between CPUs or for identifying similar models of hardware.

### Instance Methods

- [disable()](audiohardwarebox/disable%28%29.md): Make the box’s contents unavailable to the system.
- [enable()](audiohardwarebox/enable%28%29.md): Make the box’s contents available to the system.

## Relationships

### Inherits From

- [AudioHardwareObject](audiohardwareobject.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
