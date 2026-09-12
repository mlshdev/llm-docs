> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiolevelcontrol](https://developer.apple.com/documentation/kernel/ioaudiolevelcontrol)

# IOAudioLevelControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.1+

## Declaration

```objectivec
class IOAudioLevelControl : IOAudioControl
```

## Topics

### Miscellaneous

- [create](ioaudiolevelcontrol/1811861-create.md): Allocates a new level control with the given attributes
- [init](ioaudiolevelcontrol/1811868-init.md): Initializes a newly allocated IOAudioLevelControl with the given attributes
- [setLinearScale](ioaudiolevelcontrol/1811880-setlinearscale.md): This function tells CoreAudio if it should apply a curve to the scaler representation of the volume.
- [setMaxDB](ioaudiolevelcontrol/1811889-setmaxdb.md): Sets the maximum value in db that the control may have
- [setMaxValue](ioaudiolevelcontrol/1811896-setmaxvalue.md): Sets the maximum value the control may have
- [setMinDB](ioaudiolevelcontrol/1811907-setmindb.md): Sets the minimum value in db that the control may have
- [setMinValue](ioaudiolevelcontrol/1811910-setminvalue.md): Sets the minimum value the control may have

### Instance Methods

- [addNegativeInfinity](ioaudiolevelcontrol/1493460-addnegativeinfinity.md): Deprecated.
- [addRange](ioaudiolevelcontrol/1493455-addrange.md): Deprecated.
- [free](ioaudiolevelcontrol/1493472-free.md): Deprecated.
- [getMaxDB](ioaudiolevelcontrol/1493469-getmaxdb.md): Deprecated.
- [getMaxValue](ioaudiolevelcontrol/1493448-getmaxvalue.md): Deprecated.
- [getMetaClass](ioaudiolevelcontrol/1493452-getmetaclass.md)
- [getMinDB](ioaudiolevelcontrol/1493462-getmindb.md): Deprecated.
- [getMinValue](ioaudiolevelcontrol/1493454-getminvalue.md): Deprecated.
- [init](ioaudiolevelcontrol/1493466-init.md): Deprecated.
- [setLinearScale](ioaudiolevelcontrol/1493478-setlinearscale.md): Deprecated.
- [setMaxDB](ioaudiolevelcontrol/1493467-setmaxdb.md): Deprecated.
- [setMaxValue](ioaudiolevelcontrol/1493457-setmaxvalue.md): Deprecated.
- [setMinDB](ioaudiolevelcontrol/1493464-setmindb.md): Deprecated.
- [setMinValue](ioaudiolevelcontrol/1493474-setminvalue.md): Deprecated.
- [validateValue](ioaudiolevelcontrol/1493446-validatevalue.md): Deprecated.

### Type Methods

- [create](ioaudiolevelcontrol/1493476-create.md): Deprecated.
- [createPassThruVolumeControl](ioaudiolevelcontrol/1493450-createpassthruvolumecontrol.md): Deprecated.
- [createVolumeControl](ioaudiolevelcontrol/1493470-createvolumecontrol.md): Deprecated.

## Relationships

### Inherits From

- [IOAudioControl](ioaudiocontrol.md)

## See Also

### Interfaces

- [IOAudioSelectorControl](ioaudioselectorcontrol.md)
- [IOAudioToggleControl](ioaudiotogglecontrol.md)
- [IOAudioControl](ioaudiocontrol.md): Represents any controllable attribute of an IOAudioDevice.
- [IOAudioEngine](ioaudioengine.md): Abstract base class for a single audio audio / I/O engine.
- [IOAudioStream](ioaudiostream.md): This class wraps a single sample buffer in an audio driver.
- [IOAudioPort](ioaudioport.md): Represents a logical or physical port or functional unit in an audio device.
