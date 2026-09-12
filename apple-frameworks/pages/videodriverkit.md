> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit](https://developer.apple.com/documentation/videodriverkit)

# VideoDriverKit

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Framework  
**Availability:** DriverKit 27.0+

Develop drivers for video capture and playback devices.

<a id="Overview"></a>

## Overview

The VideoDriverKit framework supports the development of DriverKit-based video extensions that communicate with [Core Media](coremedia.md). VideoDriverKit handles all of the necessary user client communication between CoreMedia and the driver extension, which eliminates the need to use `IOVideoFamily` kexts and [Device Abstraction Layer (DAL) Plug-Ins](https://developer.apple.com/documentation/coremediaio/device-abstraction-layer-dal-plug-ins).

Develop your driver by subclassing [IOUserVideoDriver](videodriverkit/iouservideodriver.md). Then use the [System Extensions](https://developer.apple.com/documentation/systemextensions) framework to install and upgrade your driver.

> **Note**

> VideoDriverKit is available on macOS.

## Topics

### Essentials

- [IOUserVideoObject](videodriverkit/iouservideoobject.md): The base class for all video objects.
- [IOUserVideoDriver](videodriverkit/iouservideodriver.md): A video driver.

### Video devices

- [IOUserVideoClockDevice](videodriverkit/iouservideoclockdevice.md): A clock device.
- [IOUserVideoDevice](videodriverkit/iouservideodevice.md): A video device.

### Video objects

- [IOUserVideoBox](videodriverkit/iouservideobox.md): A container for other objects.

### Video streams

- [IOUserVideoStream](videodriverkit/iouservideostream.md): A video stream.

### Video controls

- [IOUserVideoControl](videodriverkit/iouservideocontrol.md): A base class for control objects.
- [IOUserVideoBooleanControl](videodriverkit/iouservideobooleancontrol.md): A control object that supports Boolean values.
- [IOUserVideoStereoPanControl](videodriverkit/iouservideostereopancontrol.md): A control object that supports panning between stereo channels.
- [IOUserVideoSliderControl](videodriverkit/iouservideoslidercontrol.md): A control object that supports a 32-bit unsigned integer value slider.
- [IOUserVideoDirectionControl](videodriverkit/iouservideodirectioncontrol.md): A control object that supports Boolean values.
- [IOUserVideoSelectorControl](videodriverkit/iouservideoselectorcontrol.md): A control object that supports a 32-bit unsigned integer selector value.
- [IOUserVideoLevelControl](videodriverkit/iouservideolevelcontrol.md): A control object that supports a float value level.

### Namespaces

- [VideoDriverKit](videodriverkit/videodriverkit.md): A namespace that holds supporting types used by VideoDriverKit functions.

### Macros

- [DebugMsg](videodriverkit/debugmsg.md)
- [FailIf](videodriverkit/failif.md)
- [FailIfError](videodriverkit/failiferror.md)
- [FailIfNULL](videodriverkit/failifnull.md)
- [kIOStreamBufferIDInvalid](videodriverkit/kiostreambufferidinvalid.md)
- [kIOUserVideoDriverUserClientType](videodriverkit/kiouservideodriveruserclienttype.md): User client type required for connection to the Host.
