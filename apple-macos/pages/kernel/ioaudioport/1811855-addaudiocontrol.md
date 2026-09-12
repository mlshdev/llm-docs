> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioport/1811855-addaudiocontrol](https://developer.apple.com/documentation/kernel/ioaudioport/1811855-addaudiocontrol)

# addAudioControl

**Interface language:** Objective-C

**Framework:** Kernel

Adds a newly created IOAudioControl instance to the port.

## Declaration

```objectivec
virtual IOReturn addAudioControl(
 IOAudioControl *control); 
```

## Parameters

- `control`: A newly created IOAudioControl instance that should belong to this port.

<a id="return_value"></a>

## Return Value

Returns true on successfully staring the IOAudioControl.

<a id="overview"></a>

## Overview

This method is responsible for starting the new IOAudioControl and adding it to the internal audioControls array.

## See Also

### Miscellaneous

- [deactivateAudioControls](1811875-deactivateaudiocontrols.md): Called to shut down all of the audio controls for this port.
- [free](1811888-free.md): Frees all of the resources allocated by the IOAudioPort.
- [initWithAttributes](1811904-initwithattributes.md): Initializes a newly allocated IOAudioPort instance with the given attributes
- [start](1811924-start.md): Called to start a newly created IOAudioPort.
- [stop](1811938-stop.md): Called when the IOAudioDevice is stopping when it is no longer available.
- [withAttributes](1811950-withattributes.md): Allocates a new IOAudioPort instance with the given attributes
