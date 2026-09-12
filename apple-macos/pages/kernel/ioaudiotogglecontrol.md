> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiotogglecontrol](https://developer.apple.com/documentation/kernel/ioaudiotogglecontrol)

# IOAudioToggleControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.1+

## Declaration

```objectivec
class IOAudioToggleControl : IOAudioControl
```

## Topics

### Miscellaneous

- [create](ioaudiotogglecontrol/1811569-create.md): Allocates a new mute control with the given attributes
- [createPassThruMuteControl](ioaudiotogglecontrol/1811586-createpassthrumutecontrol.md): Allocates a new pass through mute control with the given attributes
- [init](ioaudiotogglecontrol/1811599-init.md): Initializes a newly allocated IOAudioToggleControl with the given attributes

### Instance Methods

- [getMetaClass](ioaudiotogglecontrol/1416489-getmetaclass.md)
- [init](ioaudiotogglecontrol/1416491-init.md): Deprecated.

### Type Methods

- [create](ioaudiotogglecontrol/1416495-create.md): Deprecated.
- [createMuteControl](ioaudiotogglecontrol/1416498-createmutecontrol.md): Deprecated.
- [createPassThruMuteControl](ioaudiotogglecontrol/1416493-createpassthrumutecontrol.md): Deprecated.

## Relationships

### Inherits From

- [IOAudioControl](ioaudiocontrol.md)

## See Also

### Interfaces

- [IOAudioLevelControl](ioaudiolevelcontrol.md)
- [IOAudioSelectorControl](ioaudioselectorcontrol.md)
- [IOAudioControl](ioaudiocontrol.md): Represents any controllable attribute of an IOAudioDevice.
- [IOAudioEngine](ioaudioengine.md): Abstract base class for a single audio audio / I/O engine.
- [IOAudioStream](ioaudiostream.md): This class wraps a single sample buffer in an audio driver.
- [IOAudioPort](ioaudioport.md): Represents a logical or physical port or functional unit in an audio device.
