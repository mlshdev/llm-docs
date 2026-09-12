> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioport](https://developer.apple.com/documentation/kernel/ioaudioport)

# IOAudioPort

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.1+

Represents a logical or physical port or functional unit in an audio device.

## Declaration

```objectivec
class IOAudioPort : IOService
```

<a id="overview"></a>

## Overview

An IOAudioPort represents an element in the signal chain in the audio device. It may contain one or more controls (represented by IOAudioControl) by which different attributes of the port may be represented and adjusted.

IOAudioPort objects are connected up in the IORegistry in the IOAudioPlane to represent the signal chain of the device. They may be connected to other IOAudioPorts as well as IOAudioEngines to indicate they either feed into or are fed by one of the audio engines (i.e. they provide input to or take output from the computer).

## Topics

### Miscellaneous

- [addAudioControl](ioaudioport/1811855-addaudiocontrol.md): Adds a newly created IOAudioControl instance to the port.
- [deactivateAudioControls](ioaudioport/1811875-deactivateaudiocontrols.md): Called to shut down all of the audio controls for this port.
- [free](ioaudioport/1811888-free.md): Frees all of the resources allocated by the IOAudioPort.
- [initWithAttributes](ioaudioport/1811904-initwithattributes.md): Initializes a newly allocated IOAudioPort instance with the given attributes
- [start](ioaudioport/1811924-start.md): Called to start a newly created IOAudioPort.
- [stop](ioaudioport/1811938-stop.md): Called when the IOAudioDevice is stopping when it is no longer available.
- [withAttributes](ioaudioport/1811950-withattributes.md): Allocates a new IOAudioPort instance with the given attributes

### Instance Methods

- [addAudioControl](ioaudioport/1543207-addaudiocontrol.md): Deprecated.
- [deactivateAudioControls](ioaudioport/1543202-deactivateaudiocontrols.md): Deprecated.
- [free](ioaudioport/1543206-free.md): Deprecated.
- [getAudioDevice](ioaudioport/1543209-getaudiodevice.md): Deprecated.
- [getMetaClass](ioaudioport/1543204-getmetaclass.md)
- [initWithAttributes](ioaudioport/1543213-initwithattributes.md): Deprecated.
- [registerService](ioaudioport/1543216-registerservice.md): Deprecated.
- [setName](ioaudioport/1543221-setname.md): Deprecated.
- [setSubType](ioaudioport/1543200-setsubtype.md): Deprecated.
- [setType](ioaudioport/1543220-settype.md): Deprecated.
- [start](ioaudioport/1543218-start.md): Deprecated.
- [stop](ioaudioport/1543214-stop.md): Deprecated.

### Type Methods

- [withAttributes](ioaudioport/1543211-withattributes.md): Deprecated.

## Relationships

### Inherits From

- [IOService](ioservice.md)

## See Also

### Interfaces

- [IOAudioLevelControl](ioaudiolevelcontrol.md)
- [IOAudioSelectorControl](ioaudioselectorcontrol.md)
- [IOAudioToggleControl](ioaudiotogglecontrol.md)
- [IOAudioControl](ioaudiocontrol.md): Represents any controllable attribute of an IOAudioDevice.
- [IOAudioEngine](ioaudioengine.md): Abstract base class for a single audio audio / I/O engine.
- [IOAudioStream](ioaudiostream.md): This class wraps a single sample buffer in an audio driver.
