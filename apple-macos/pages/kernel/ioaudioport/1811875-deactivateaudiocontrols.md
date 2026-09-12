> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioport/1811875-deactivateaudiocontrols](https://developer.apple.com/documentation/kernel/ioaudioport/1811875-deactivateaudiocontrols)

# deactivateAudioControls

**Interface language:** Objective-C

**Framework:** Kernel

Called to shut down all of the audio controls for this port.

## Declaration

```objectivec
virtual void deactivateAudioControls(); 
```

<a id="overview"></a>

## Overview

This will stop all of the audio controls and release them so that the instances may be freed. This is called from the free() method.

## See Also

### Miscellaneous

- [addAudioControl](1811855-addaudiocontrol.md): Adds a newly created IOAudioControl instance to the port.
- [free](1811888-free.md): Frees all of the resources allocated by the IOAudioPort.
- [initWithAttributes](1811904-initwithattributes.md): Initializes a newly allocated IOAudioPort instance with the given attributes
- [start](1811924-start.md): Called to start a newly created IOAudioPort.
- [stop](1811938-stop.md): Called when the IOAudioDevice is stopping when it is no longer available.
- [withAttributes](1811950-withattributes.md): Allocates a new IOAudioPort instance with the given attributes
