> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit

# VideoDriverKit

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Framework  
**Availability:** DriverKit 27.0+ beta

Develop drivers for video capture and playback devices.

<a id="Overview"></a>

## Overview

The VideoDriverKit framework supports the development of DriverKit-based video extensions that communicate with [Core Media](coremedia.md). VideoDriverKit handles all of the necessary user client communication between CoreMedia and the driver extension, which eliminates the need to use `IOVideoFamily` kexts and [Device Abstraction Layer (DAL) Plug-Ins](https://developer.apple.com/documentation/coremediaio/device-abstraction-layer-dal-plug-ins).

Develop your driver by subclassing [IOUserVideoDriver](videodriverkit/iouservideodriver.md). Then use the [System Extensions](https://developer.apple.com/documentation/systemextensions) framework to install and upgrade your driver.

> **Note**

> VideoDriverKit is available on macOS.

## Topics

### Essentials

- [IOUserVideoObject](videodriverkit/iouservideoobject.md): Beta. The base class for all video objects.
- [IOUserVideoDriver](videodriverkit/iouservideodriver.md): Beta. A video driver.

### Video devices

- [IOUserVideoClockDevice](videodriverkit/iouservideoclockdevice.md): Beta. A clock device.
- [IOUserVideoDevice](videodriverkit/iouservideodevice.md): Beta. A video device.

### Video objects

- [IOUserVideoBox](videodriverkit/iouservideobox.md): Beta. A container for other objects.

### Video streams

- [IOUserVideoStream](videodriverkit/iouservideostream.md): Beta. A video stream.

### Video controls

- [IOUserVideoControl](videodriverkit/iouservideocontrol.md): Beta. A base class for control objects.
- [IOUserVideoBooleanControl](videodriverkit/iouservideobooleancontrol.md): Beta. A control object that supports Boolean values.
- [IOUserVideoStereoPanControl](videodriverkit/iouservideostereopancontrol.md): Beta. A control object that supports panning between stereo channels.
- [IOUserVideoSliderControl](videodriverkit/iouservideoslidercontrol.md): Beta. A control object that supports a 32-bit unsigned integer value slider.
- [IOUserVideoDirectionControl](videodriverkit/iouservideodirectioncontrol.md): Beta. A control object that supports Boolean values.
- [IOUserVideoSelectorControl](videodriverkit/iouservideoselectorcontrol.md): Beta. A control object that supports a 32-bit unsigned integer selector value.
- [IOUserVideoLevelControl](videodriverkit/iouservideolevelcontrol.md): Beta. A control object that supports a float value level.

### Namespaces

- [VideoDriverKit](videodriverkit/videodriverkit.md): Beta. A namespace that holds supporting types used by VideoDriverKit functions.

### Macros

- [DebugMsg](videodriverkit/debugmsg.md): Beta.
- [FailIf](videodriverkit/failif.md): Beta.
- [FailIfError](videodriverkit/failiferror.md): Beta.
- [FailIfNULL](videodriverkit/failifnull.md): Beta.
- [kIOStreamBufferIDInvalid](videodriverkit/kiostreambufferidinvalid.md): Beta.
- [kIOUserVideoDriverUserClientType](videodriverkit/kiouservideodriveruserclienttype.md): Beta. User client type required for connection to the Host.
